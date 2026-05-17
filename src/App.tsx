import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  ControlsHelpHelp,
  GameBoardPlay,
  GameOptionsSettings,
  GameOverResult,
  MainMenuMenu,
  PauseOverlayOverlay,
  type ControlsHelpHelpActionId,
  type GameBoardPlayActionId,
  type GameOptionsSettingsActionId,
  type GameOverResultActionId,
  type MainMenuMenuActionId,
  type PauseOverlayOverlayActionId,
} from './screens';
import './App.css';

type View = 'menu' | 'play' | 'pause' | 'settings' | 'help' | 'gameOver';
type Difficulty = 'casual' | 'normal' | 'overclocked';
type Direction = 'north' | 'east' | 'south' | 'west';
type TileKind = 'line' | 'corner' | 'tee' | 'source' | 'target';

interface Tile {
  id: string;
  kind: TileKind;
  rotation: number;
  solution: number;
  locked?: boolean;
}

interface AppState {
  view: View;
  screen: View;
  status: 'menu' | 'playing' | 'paused' | 'settings' | 'help' | 'gameOver';
  progress: number;
  paused: boolean;
  gameOver: boolean;
  difficulty: Difficulty;
  level: number;
  score: number;
  timer: number;
  highScore: number;
  storage: {
    key: string;
    available: boolean;
    status: 'available' | 'unavailable' | 'error';
  };
  lastError: string | null;
  moves: number;
  solved: boolean;
  selectedTile: string;
  grid: Tile[];
  entities: {
    boardSize: number;
    targetPath: string[];
    connectedIds: string[];
    tiles: Tile[];
  };
}

interface AppActions {
  startNewGame: () => void;
  resumeGame: () => void;
  pauseGame: () => void;
  resetGrid: () => void;
  tick: (seconds?: number) => void;
  rotateTile: (id: string) => void;
  selectTile: (id: string) => void;
  openSettings: () => void;
  openHelp: () => void;
  openMenu: () => void;
  setDifficulty: (difficulty: Difficulty) => void;
}

declare global {
  var app:
    | {
        state: AppState;
        actions: AppActions;
      }
    | undefined;

  interface Window {
    app?: {
      state: AppState;
      actions: AppActions;
    };
  }
}

const STORAGE_KEY = 'pulse-grid-high-score';
const BOARD_SIZE = 5;
const TARGET_PATH = ['0-2', '1-2', '2-2', '2-1', '2-0', '3-0', '4-0', '4-1', '4-2'];

const baseTiles: Tile[] = [
  { id: '0-0', kind: 'corner', rotation: 1, solution: 1 },
  { id: '1-0', kind: 'tee', rotation: 2, solution: 2 },
  { id: '2-0', kind: 'corner', rotation: 1, solution: 1 },
  { id: '3-0', kind: 'line', rotation: 1, solution: 1 },
  { id: '4-0', kind: 'corner', rotation: 2, solution: 2 },
  { id: '0-1', kind: 'line', rotation: 0, solution: 0 },
  { id: '1-1', kind: 'corner', rotation: 3, solution: 3 },
  { id: '2-1', kind: 'line', rotation: 0, solution: 0 },
  { id: '3-1', kind: 'tee', rotation: 1, solution: 1 },
  { id: '4-1', kind: 'line', rotation: 0, solution: 0 },
  { id: '0-2', kind: 'source', rotation: 1, solution: 1, locked: true },
  { id: '1-2', kind: 'line', rotation: 1, solution: 1 },
  { id: '2-2', kind: 'corner', rotation: 3, solution: 3 },
  { id: '3-2', kind: 'corner', rotation: 0, solution: 0 },
  { id: '4-2', kind: 'target', rotation: 2, solution: 2, locked: true },
  { id: '0-3', kind: 'tee', rotation: 0, solution: 0 },
  { id: '1-3', kind: 'line', rotation: 0, solution: 0 },
  { id: '2-3', kind: 'corner', rotation: 2, solution: 2 },
  { id: '3-3', kind: 'line', rotation: 1, solution: 1 },
  { id: '4-3', kind: 'tee', rotation: 3, solution: 3 },
  { id: '0-4', kind: 'corner', rotation: 2, solution: 2 },
  { id: '1-4', kind: 'line', rotation: 1, solution: 1 },
  { id: '2-4', kind: 'tee', rotation: 1, solution: 1 },
  { id: '3-4', kind: 'corner', rotation: 0, solution: 0 },
  { id: '4-4', kind: 'line', rotation: 0, solution: 0 },
];

const difficultyScores: Record<Difficulty, number> = {
  casual: 800,
  normal: 1200,
  overclocked: 1800,
};

const directionDelta: Record<Direction, [number, number]> = {
  north: [0, -1],
  east: [1, 0],
  south: [0, 1],
  west: [-1, 0],
};

const oppositeDirection: Record<Direction, Direction> = {
  north: 'south',
  east: 'west',
  south: 'north',
  west: 'east',
};

const readHighScore = () => {
  try {
    const value = Number(window.localStorage.getItem(STORAGE_KEY) ?? 0);
    return Number.isFinite(value) ? value : 0;
  } catch {
    return 0;
  }
};

const getStorageStatus = (): AppState['storage'] => {
  try {
    const testKey = `${STORAGE_KEY}-probe`;
    window.localStorage.setItem(testKey, '1');
    window.localStorage.removeItem(testKey);
    return { key: STORAGE_KEY, available: true, status: 'available' };
  } catch {
    return { key: STORAGE_KEY, available: false, status: 'unavailable' };
  }
};

const createGrid = (difficulty: Difficulty) =>
  baseTiles.map((tile, index) => ({
    ...tile,
    rotation: tile.locked ? tile.solution : (tile.solution + index + difficulty.length) % 4,
  }));

const getOpenDirections = (tile: Tile): Direction[] => {
  const base: Record<TileKind, Direction[]> = {
    line: ['north', 'south'],
    corner: ['north', 'east'],
    tee: ['north', 'east', 'south'],
    source: ['east'],
    target: ['west'],
  };
  const directions: Direction[] = ['north', 'east', 'south', 'west'];
  return base[tile.kind].map((direction) => directions[(directions.indexOf(direction) + tile.rotation) % 4]);
};

const getConnectedIds = (grid: Tile[]) => {
  const tiles = new Map(grid.map((tile) => [tile.id, tile]));
  const visited = new Set<string>();
  const queue = ['0-2'];

  while (queue.length > 0) {
    const id = queue.shift();
    if (!id || visited.has(id)) {
      continue;
    }
    const tile = tiles.get(id);
    if (!tile) {
      continue;
    }
    visited.add(id);
    const [x, y] = id.split('-').map(Number);
    for (const direction of getOpenDirections(tile)) {
      const [dx, dy] = directionDelta[direction];
      const neighborId = `${x + dx}-${y + dy}`;
      const neighbor = tiles.get(neighborId);
      if (neighbor && getOpenDirections(neighbor).includes(oppositeDirection[direction])) {
        queue.push(neighborId);
      }
    }
  }

  return visited;
};

const getSolved = (grid: Tile[]) => TARGET_PATH.every((id) => getConnectedIds(grid).has(id));

export default function App() {
  const [view, setView] = useState<View>('play');
  const [difficulty, setDifficultyState] = useState<Difficulty>('normal');
  const [grid, setGrid] = useState(() => createGrid('normal'));
  const [timer, setTimer] = useState(0);
  const [moves, setMoves] = useState(0);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(readHighScore);
  const [selectedTile, setSelectedTile] = useState('0-2');
  const [lastError, setLastError] = useState<string | null>(null);

  const connectedIds = useMemo(() => getConnectedIds(grid), [grid]);
  const connectedIdList = useMemo(() => Array.from(connectedIds), [connectedIds]);
  const solved = connectedIds.has('4-2') && getSolved(grid);
  const paused = view === 'pause';
  const gameOver = view === 'gameOver';
  const progress = Math.round((TARGET_PATH.filter((id) => connectedIds.has(id)).length / TARGET_PATH.length) * 100);
  const storage = useMemo(() => getStorageStatus(), []);
  const status: AppState['status'] =
    view === 'play'
      ? 'playing'
      : view === 'pause'
        ? 'paused'
        : view === 'gameOver'
          ? 'gameOver'
          : view;

  const persistHighScore = useCallback((nextScore: number) => {
    setHighScore((current) => {
      const next = Math.max(current, nextScore);
      try {
        window.localStorage.setItem(STORAGE_KEY, String(next));
        setLastError(null);
      } catch (error) {
        setLastError(error instanceof Error ? error.message : 'Unable to save high score');
      }
      return next;
    });
  }, []);

  const resetGrid = useCallback(() => {
    setGrid(createGrid(difficulty));
    setMoves(0);
    setScore(0);
    setTimer(0);
    setSelectedTile('0-2');
    setView('play');
  }, [difficulty]);

  const startNewGame = useCallback(() => {
    setGrid(createGrid(difficulty));
    setMoves(0);
    setScore(0);
    setTimer(0);
    setSelectedTile('0-2');
    setView('play');
  }, [difficulty]);

  const rotateTile = useCallback(
    (id: string) => {
      const tile = grid.find((currentTile) => currentTile.id === id);
      if (view !== 'play' || solved || !tile || tile.locked) {
        return;
      }
      setGrid((current) =>
        current.map((tile) => (tile.id === id && !tile.locked ? { ...tile, rotation: (tile.rotation + 1) % 4 } : tile)),
      );
      setSelectedTile(id);
      setMoves((current) => current + 1);
    },
    [grid, solved, view],
  );

  const setDifficulty = useCallback((nextDifficulty: Difficulty) => {
    setDifficultyState(nextDifficulty);
    setGrid(createGrid(nextDifficulty));
    setMoves(0);
    setScore(0);
    setTimer(0);
  }, []);

  const tick = useCallback(
    (seconds = 1) => {
      if (view !== 'play' || solved) {
        return;
      }
      const normalizedSeconds = Number.isFinite(seconds) ? Math.max(0, Math.floor(seconds)) : 1;
      setTimer((current) => current + normalizedSeconds);
    },
    [solved, view],
  );

  const actions = useMemo<AppActions>(
    () => ({
      startNewGame,
      resumeGame: () => setView('play'),
      pauseGame: () => setView('pause'),
      resetGrid,
      tick,
      rotateTile,
      selectTile: setSelectedTile,
      openSettings: () => setView('settings'),
      openHelp: () => setView('help'),
      openMenu: () => setView('menu'),
      setDifficulty,
    }),
    [resetGrid, rotateTile, setDifficulty, startNewGame, tick],
  );

  const state = useMemo<AppState>(
    () => ({
      view,
      screen: view,
      status,
      progress,
      paused,
      gameOver,
      difficulty,
      level: 14,
      score,
      timer,
      highScore,
      storage,
      lastError,
      moves,
      solved,
      selectedTile,
      grid,
      entities: {
        boardSize: BOARD_SIZE,
        targetPath: [...TARGET_PATH],
        connectedIds: connectedIdList,
        tiles: grid,
      },
    }),
    [
      connectedIdList,
      difficulty,
      gameOver,
      grid,
      highScore,
      lastError,
      moves,
      paused,
      progress,
      score,
      selectedTile,
      solved,
      status,
      storage,
      timer,
      view,
    ],
  );

  useEffect(() => {
    globalThis.app = { state, actions };
    return () => {
      if (globalThis.app?.state === state) {
        delete globalThis.app;
      }
    };
  }, [actions, state]);

  useEffect(() => {
    if (view !== 'play' || solved) {
      return undefined;
    }
    const interval = window.setInterval(() => tick(), 1000);
    return () => window.clearInterval(interval);
  }, [solved, tick, view]);

  useEffect(() => {
    if (!solved) {
      return;
    }
    const nextScore = Math.max(100, difficultyScores[difficulty] - moves * 25 - timer * 4);
    setScore(nextScore);
    persistHighScore(nextScore);
    setView('gameOver');
  }, [difficulty, moves, persistHighScore, solved, timer]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (view !== 'play') {
        return;
      }
      const index = grid.findIndex((tile) => tile.id === selectedTile);
      const x = index % BOARD_SIZE;
      const y = Math.floor(index / BOARD_SIZE);
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        rotateTile(selectedTile);
        return;
      }
      const offsets: Partial<Record<string, [number, number]>> = {
        ArrowUp: [0, -1],
        ArrowRight: [1, 0],
        ArrowDown: [0, 1],
        ArrowLeft: [-1, 0],
      };
      const offset = offsets[event.key];
      if (offset) {
        event.preventDefault();
        const [dx, dy] = offset;
        const nextX = Math.min(BOARD_SIZE - 1, Math.max(0, x + dx));
        const nextY = Math.min(BOARD_SIZE - 1, Math.max(0, y + dy));
        setSelectedTile(`${nextX}-${nextY}`);
      }
      if (event.key.toLowerCase() === 'p') {
        setView('pause');
      }
      if (event.key.toLowerCase() === 'r') {
        resetGrid();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [grid, resetGrid, rotateTile, selectedTile, view]);

  const menuActions: Partial<Record<MainMenuMenuActionId, () => void>> = {
    'resume-session-level-14-1': () => setView('play'),
    'start-new-game-2': startNewGame,
    'game-options-3': () => setView('settings'),
    'controls-4': () => setView('help'),
  };

  const boardActions: Partial<Record<GameBoardPlayActionId, () => void>> = {
    'button-1-1': () => setView('help'),
    'button-2-2': () => setView('settings'),
    'pause-uplink-3': () => setView('pause'),
    'reset-grid-4': resetGrid,
    'grid-1': () => setView('play'),
    'stages-2': () => setView('menu'),
    'store-3': () => setView('settings'),
    'rank-4': () => setView('gameOver'),
    'grid-5': () => setView('play'),
    'stages-6': () => setView('menu'),
    'store-7': () => setView('settings'),
    'rank-8': () => setView('gameOver'),
  };

  const settingsActions: Partial<Record<GameOptionsSettingsActionId, () => void>> = {
    'button-1-1': () => setView('menu'),
    'casual-2': () => setDifficulty('casual'),
    'normal-3': () => setDifficulty('normal'),
    'overclocked-4': () => setDifficulty('overclocked'),
    'reset-defaults-5': () => setDifficulty('normal'),
    'save-changes-6': () => setView('menu'),
  };

  const helpActions: Partial<Record<ControlsHelpHelpActionId, () => void>> = {
    'button-1-1': () => setView('menu'),
    'button-2-2': () => setView('play'),
  };

  const overActions: Partial<Record<GameOverResultActionId, () => void>> = {
    'reboot-sequence-1': startNewGame,
    'disconnect-2': () => setView('menu'),
  };

  const pauseActions: Partial<Record<PauseOverlayOverlayActionId, () => void>> = {
    'resume-game-1': () => setView('play'),
    'restart-level-2': resetGrid,
    'main-menu-3': () => setView('menu'),
  };

  return (
    <div className="pulse-app" aria-label="Pulse Grid">
      <section className="generated-screen" aria-label="Generated Pulse Grid screen bridge">
        {view === 'menu' && <MainMenuMenu actions={menuActions} />}
        {view === 'play' && <GameBoardPlay actions={boardActions} />}
        {view === 'settings' && <GameOptionsSettings actions={settingsActions} />}
        {view === 'help' && <ControlsHelpHelp actions={helpActions} />}
        {view === 'gameOver' && <GameOverResult actions={overActions} />}
        {view === 'pause' && <PauseOverlayOverlay actions={pauseActions} />}
      </section>

      <section className="game-shell" aria-label="Pulse Grid live game">
        <header className="game-topbar">
          <div>
            <p className="eyebrow">Pulse Grid</p>
            <h1>Route the signal</h1>
          </div>
          <nav aria-label="Game views">
            <button type="button" onClick={() => setView('menu')}>Menu</button>
            <button type="button" onClick={() => setView('help')}>Controls</button>
            <button type="button" onClick={() => setView('settings')}>Options</button>
          </nav>
        </header>

        {view === 'menu' && (
          <section className="panel menu-panel" aria-label="Main menu">
            <div>
              <p className="eyebrow">Level 14</p>
              <h2>Reconnect the uplink before the pulse fades.</h2>
            </div>
            <div className="menu-actions">
              <button type="button" className="primary" onClick={startNewGame}>Start new game</button>
              <button type="button" onClick={() => setView('play')}>Resume session</button>
            </div>
          </section>
        )}

        {(view === 'play' || view === 'pause') && (
          <section className="play-layout">
            <div className="stats" aria-label="Session stats">
              <span>Score <strong>{score}</strong></span>
              <span>Timer <strong>{timer}s</strong></span>
              <span>Moves <strong>{moves}</strong></span>
              <span>Best <strong>{highScore}</strong></span>
            </div>

            <div className="board" role="grid" aria-label="Signal routing grid">
              {grid.map((tile) => {
                const isConnected = connectedIds.has(tile.id);
                const tileDisabled = view !== 'play' || tile.locked;
                return (
                  <button
                    key={tile.id}
                    type="button"
                    role="gridcell"
                    className={`tile tile-${tile.kind} ${isConnected ? 'connected' : ''} ${
                      selectedTile === tile.id ? 'selected' : ''
                    }`}
                    aria-label={`${tile.kind} tile ${tile.id}${isConnected ? ' connected' : ''}`}
                    aria-pressed={selectedTile === tile.id}
                    aria-disabled={tileDisabled}
                    disabled={tileDisabled}
                    onClick={() => rotateTile(tile.id)}
                  >
                    <span className="conduit" style={{ transform: `rotate(${tile.rotation * 90}deg)` }} />
                  </button>
                );
              })}
            </div>

            <div className="play-actions">
              <button type="button" onClick={() => setView('pause')}>Pause uplink</button>
              <button type="button" onClick={resetGrid}>Reset grid</button>
            </div>

            {view === 'pause' && (
              <div className="pause-card" role="dialog" aria-label="Paused game">
                <h2>Uplink paused</h2>
                <button type="button" className="primary" onClick={() => setView('play')}>Resume game</button>
                <button type="button" onClick={resetGrid}>Restart level</button>
                <button type="button" onClick={() => setView('menu')}>Main menu</button>
              </div>
            )}
          </section>
        )}

        {view === 'settings' && (
          <section className="panel" aria-label="Game options">
            <h2>Game options</h2>
            <div className="difficulty-controls">
              {(['casual', 'normal', 'overclocked'] as const).map((level) => (
                <button
                  key={level}
                  type="button"
                  className={difficulty === level ? 'primary' : ''}
                  onClick={() => setDifficulty(level)}
                >
                  {level}
                </button>
              ))}
            </div>
            <button type="button" onClick={() => setView('menu')}>Save changes</button>
          </section>
        )}

        {view === 'help' && (
          <section className="panel" aria-label="Controls help">
            <h2>Controls</h2>
            <p>Click or tap a tile to rotate it. Use arrow keys to move focus, Enter or Space to rotate, P to pause, and R to reset.</p>
            <button type="button" className="primary" onClick={() => setView('play')}>Back to grid</button>
          </section>
        )}

        {view === 'gameOver' && (
          <section className="panel result-panel" aria-label="Game result">
            <p className="eyebrow">Signal locked</p>
            <h2>Sequence complete</h2>
            <p>Score {score} · Best {highScore}</p>
            <button type="button" className="primary" onClick={startNewGame}>Reboot sequence</button>
            <button type="button" onClick={() => setView('menu')}>Disconnect</button>
          </section>
        )}
      </section>
    </div>
  );
}
