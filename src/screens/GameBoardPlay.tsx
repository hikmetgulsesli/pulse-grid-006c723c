// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Board (play)
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Pause, RefreshCw, Settings } from "lucide-react";


export type GameBoardPlayActionId = "button-1-1" | "button-2-2" | "pause-uplink-3" | "reset-grid-4" | "grid-1" | "stages-2" | "store-3" | "rank-4" | "grid-5" | "stages-6" | "store-7" | "rank-8";

export interface GameBoardPlayProps {
  actions?: Partial<Record<GameBoardPlayActionId, () => void>>;
}

export function GameBoardPlay({ actions }: GameBoardPlayProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 docked full-width top-0 z-40 fixed w-full">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop h-16">
      <div className="flex items-center gap-gutter">
      <span className="font-label-mono text-data-display font-bold tracking-tighter text-primary">PULSE_GRID</span>
      </div>
      {/* Desktop Nav (Hidden on Mobile) */}
      <nav className="hidden md:flex items-center gap-lg">
      <a className="text-primary border-b-2 border-primary font-label-mono text-label-mono pb-1 hover:text-secondary hover:bg-secondary/10 transition-colors duration-300" href="#" data-action-id="grid-1" onClick={actions?.["grid-1"]}>GRID</a>
      <a className="text-on-surface-variant font-label-mono text-label-mono hover:text-secondary hover:bg-secondary/10 transition-colors duration-300" href="#" data-action-id="stages-2" onClick={actions?.["stages-2"]}>STAGES</a>
      <a className="text-on-surface-variant font-label-mono text-label-mono hover:text-secondary hover:bg-secondary/10 transition-colors duration-300" href="#" data-action-id="store-3" onClick={actions?.["store-3"]}>STORE</a>
      <a className="text-on-surface-variant font-label-mono text-label-mono hover:text-secondary hover:bg-secondary/10 transition-colors duration-300" href="#" data-action-id="rank-4" onClick={actions?.["rank-4"]}>RANK</a>
      </nav>
      <div className="flex items-center gap-md">
      <button className="text-on-surface-variant hover:text-secondary hover:bg-secondary/10 transition-colors duration-300 p-2 rounded" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant hover:text-secondary hover:bg-secondary/10 transition-colors duration-300 p-2 rounded" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      </header>
      {/* Main Content Area */}
      <main className="flex-1 mt-16 pb-24 md:pb-8 pt-md px-margin-mobile md:px-margin-desktop grid grid-cols-4 md:grid-cols-12 gap-gutter max-w-[1600px] mx-auto w-full">
      {/* Left Panel: HUD */}
      <aside className="col-span-4 md:col-span-3 flex flex-col gap-gutter">
      <div className="bg-surface-container border border-primary/20 rounded glow-border p-md flex flex-col gap-sm">
      <div className="flex items-center justify-between border-b border-primary/20 pb-sm">
      <span className="font-label-mono text-label-mono text-primary">CORE SCORE</span>
      <Circle className="text-primary text-[16px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="font-data-display text-headline-xl text-on-surface pt-sm">
                          24,091
                      </div>
      </div>
      <div className="bg-surface-container border border-outline-variant/30 rounded p-md flex flex-col gap-sm">
      <div className="flex items-center justify-between border-b border-outline-variant/30 pb-sm">
      <span className="font-label-mono text-label-mono text-on-surface-variant">CURRENT NODE</span>
      <Circle className="text-on-surface-variant text-[16px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="font-data-display text-data-display text-on-surface pt-sm">
                          Sector 4 / 12
                      </div>
      </div>
      <div className="bg-surface-container border border-outline-variant/30 rounded p-md flex flex-col gap-sm">
      <div className="flex items-center justify-between border-b border-outline-variant/30 pb-sm">
      <span className="font-label-mono text-label-mono text-on-surface-variant">UPLINK TIME</span>
      <Circle className="text-on-surface-variant text-[16px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="font-data-display text-data-display text-secondary pt-sm">
                          03:45.8
                      </div>
      </div>
      </aside>
      {/* Central Panel: The Grid */}
      <section className="col-span-4 md:col-span-6 flex flex-col h-full min-h-[500px]">
      <div className="bg-surface-container-lowest border border-primary/30 rounded-lg p-md glow-border flex-1 flex items-center justify-center relative overflow-hidden">
      {/* Grid Container (8x8) */}
      <div className="grid grid-cols-8 grid-rows-8 gap-xs w-full aspect-square max-w-[600px] relative z-10">
      {/* Generating an 8x8 grid of nodes visually */}
      {/* Row 1 */}
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      <div className="bg-primary/20 border border-primary rounded-sm glow-border relative">
      <div className="absolute inset-2 bg-primary rounded-full blur-[2px]"></div>
      </div>
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      {/* Row 2 */}
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      <div className="bg-secondary/20 border border-secondary rounded-sm"></div>
      <div className="bg-secondary/20 border border-secondary rounded-sm"></div>
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      {/* Row 3 */}
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      <div className="bg-secondary/20 border border-secondary rounded-sm relative">
      <div className="absolute inset-[30%] bg-secondary rounded-full"></div>
      </div>
      <div className="bg-secondary/20 border border-secondary rounded-sm"></div>
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      {/* Row 4 */}
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      <div className="bg-primary/40 border border-primary rounded-sm glow-border relative">
      <div className="absolute inset-1 border border-primary rounded-sm"></div>
      </div>
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      {/* Row 5 */}
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      <div className="bg-primary/20 border border-primary rounded-sm"></div>
      <div className="bg-primary/20 border border-primary rounded-sm"></div>
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      {/* Row 6 */}
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      <div className="bg-primary/20 border border-primary rounded-sm relative">
      <div className="absolute inset-[40%] bg-primary rounded-full"></div>
      </div>
      <div className="bg-primary/20 border border-primary rounded-sm"></div>
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      {/* Row 7 */}
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      <div className="bg-primary/60 border border-primary rounded-sm glow-border relative">
      <div className="absolute inset-2 bg-white rounded-full blur-[2px]"></div>
      </div>
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      {/* Row 8 */}
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      <div className="bg-surface-container border border-outline-variant/50 rounded-sm"></div>
      </div>
      {/* Decorative background elements */}
      <div className="absolute inset-0 border-[1px] border-primary/10 m-lg rounded-lg pointer-events-none"></div>
      <div className="absolute top-md left-md w-xs h-xs bg-primary/50"></div>
      <div className="absolute top-md right-md w-xs h-xs bg-primary/50"></div>
      <div className="absolute bottom-md left-md w-xs h-xs bg-primary/50"></div>
      <div className="absolute bottom-md right-md w-xs h-xs bg-primary/50"></div>
      </div>
      </section>
      {/* Right Panel: Controls & Status */}
      <aside className="col-span-4 md:col-span-3 flex flex-col gap-gutter">
      {/* Signal Strength */}
      <div className="bg-surface-container border border-outline-variant/30 rounded p-md flex flex-col gap-sm">
      <div className="flex items-center justify-between border-b border-outline-variant/30 pb-sm">
      <span className="font-label-mono text-label-mono text-on-surface-variant">SIGNAL STRENGTH</span>
      <span className="font-label-mono text-label-mono text-secondary">82%</span>
      </div>
      <div className="h-2 bg-surface-dim rounded-full mt-sm overflow-hidden border border-outline-variant/20">
      <div className="h-full w-[82%] pulse-fill"></div>
      </div>
      </div>
      {/* Status Feed */}
      <div className="bg-surface-container border border-outline-variant/30 rounded p-md flex flex-col gap-sm flex-1 max-h-[200px]">
      <div className="flex items-center justify-between border-b border-outline-variant/30 pb-sm">
      <span className="font-label-mono text-label-mono text-on-surface-variant">STATUS FEED</span>
      <Circle className="text-on-surface-variant text-[16px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="font-label-mono text-label-mono text-primary pt-sm flex flex-col gap-xs overflow-y-auto">
      <div className="opacity-50">&gt; Initializing grid... OK</div>
      <div className="opacity-70">&gt; Establishing handshake... OK</div>
      <div className="opacity-90">&gt; Node mapping sequence initiated.</div>
      <div className="text-secondary">&gt; Signal active - routing in progress...</div>
      <div className="flex items-center gap-1 mt-1 text-on-surface">
      <span className="w-2 h-4 bg-primary inline-block"></span>
      </div>
      </div>
      </div>
      {/* Actions */}
      <div className="flex flex-col gap-sm mt-auto">
      <button className="w-full bg-surface-container border border-primary/50 text-primary font-label-mono text-label-mono py-md rounded hover:bg-primary/10 transition-colors flex items-center justify-center gap-sm" type="button" data-action-id="pause-uplink-3" onClick={actions?.["pause-uplink-3"]}>
      <Pause className="text-[18px]" aria-hidden={true} focusable="false" />
                          PAUSE UPLINK
                      </button>
      <button className="w-full bg-error-container/20 border border-error/50 text-error font-label-mono text-label-mono py-md rounded hover:bg-error-container/40 transition-colors flex items-center justify-center gap-sm" type="button" data-action-id="reset-grid-4" onClick={actions?.["reset-grid-4"]}>
      <RefreshCw className="text-[18px]" aria-hidden={true} focusable="false" />
                          RESET GRID
                      </button>
      </div>
      </aside>
      </main>
      {/* BottomNavBar (Mobile Only) */}
      <nav className="bg-surface-container/90 backdrop-blur-md text-primary font-label-mono text-label-mono docked full-width bottom-0 border-t border-primary/20 shadow-[0_-4px_12px_rgba(123,208,255,0.1)] fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 pb-safe md:hidden">
      <a className="flex flex-col items-center justify-center text-secondary border-t-2 border-secondary bg-secondary/5 pt-1 w-1/4 h-full" href="#" data-action-id="grid-5" onClick={actions?.["grid-5"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} className="mb-1" aria-hidden={true} focusable="false" />
      <span>GRID</span>
      </a>
      <a className="flex flex-col items-center justify-center text-outline p-2 hover:text-primary transition-colors w-1/4 h-full" href="#" data-action-id="stages-6" onClick={actions?.["stages-6"]}>
      <Circle className="mb-1" aria-hidden={true} focusable="false" />
      <span>STAGES</span>
      </a>
      <a className="flex flex-col items-center justify-center text-outline p-2 hover:text-primary transition-colors w-1/4 h-full" href="#" data-action-id="store-7" onClick={actions?.["store-7"]}>
      <Circle className="mb-1" aria-hidden={true} focusable="false" />
      <span>STORE</span>
      </a>
      <a className="flex flex-col items-center justify-center text-outline p-2 hover:text-primary transition-colors w-1/4 h-full" href="#" data-action-id="rank-8" onClick={actions?.["rank-8"]}>
      <Circle className="mb-1" aria-hidden={true} focusable="false" />
      <span>RANK</span>
      </a>
      </nav>
    </>
  );
}
