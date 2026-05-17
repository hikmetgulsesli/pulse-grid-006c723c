import { act, render, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import App from '../App';

afterEach(() => {
  delete globalThis.app;
});

describe('window app bridge', () => {
  it('exposes screen, status, storage, error, progress, and gameplay entities', async () => {
    render(<App />);

    await waitFor(() => expect(globalThis.app).toBeDefined());

    expect(globalThis.app?.state).toEqual(
      expect.objectContaining({
        view: 'play',
        screen: 'play',
        status: 'playing',
        paused: false,
        gameOver: false,
        progress: expect.any(Number),
        storage: expect.objectContaining({
          key: 'pulse-grid-high-score',
          available: true,
          status: 'available',
        }),
        lastError: null,
        grid: expect.any(Array),
        entities: expect.objectContaining({
          boardSize: 5,
          targetPath: expect.arrayContaining(['0-2', '4-2']),
          connectedIds: expect.any(Array),
          tiles: expect.any(Array),
        }),
      }),
    );
    expect(globalThis.app?.state.entities.tiles).toBe(globalThis.app?.state.grid);
  });

  it('advances gameplay time through an explicit tick action only while playing', async () => {
    render(<App />);

    await waitFor(() => expect(globalThis.app).toBeDefined());

    act(() => {
      globalThis.app?.actions.startNewGame();
    });
    await waitFor(() => expect(globalThis.app?.state.status).toBe('playing'));

    act(() => {
      globalThis.app?.actions.tick(3);
    });
    await waitFor(() => expect(globalThis.app?.state.timer).toBe(3));

    act(() => {
      globalThis.app?.actions.pauseGame();
    });
    await waitFor(() => expect(globalThis.app?.state.paused).toBe(true));

    act(() => {
      globalThis.app?.actions.tick(5);
    });
    expect(globalThis.app?.state.timer).toBe(3);
  });

  it('ignores locked and missing tile rotations without counting moves', async () => {
    render(<App />);

    await waitFor(() => expect(globalThis.app).toBeDefined());

    act(() => {
      globalThis.app?.actions.startNewGame();
    });
    await waitFor(() => expect(globalThis.app?.state.status).toBe('playing'));
    expect(globalThis.app?.state.selectedTile).toBe('0-2');

    act(() => {
      globalThis.app?.actions.rotateTile('0-2');
      globalThis.app?.actions.rotateTile('missing-tile');
    });
    expect(globalThis.app?.state.moves).toBe(0);

    act(() => {
      globalThis.app?.actions.rotateTile('1-2');
    });
    await waitFor(() => expect(globalThis.app?.state.moves).toBe(1));
    expect(globalThis.app?.state.selectedTile).toBe('1-2');
  });
});
