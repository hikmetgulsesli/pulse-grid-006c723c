// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Main Menu (menu)
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Play, Plus, Settings } from "lucide-react";


export type MainMenuMenuActionId = "resume-session-level-14-1" | "start-new-game-2" | "game-options-3" | "controls-4";

export interface MainMenuMenuProps {
  actions?: Partial<Record<MainMenuMenuActionId, () => void>>;
}

export function MainMenuMenu({ actions }: MainMenuMenuProps) {
  return (
    <>
      {/* Background Glow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
      <div className="w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full bg-primary/5 blur-[100px]"></div>
      </div>
      {/* Main Content */}
      <main className="z-10 flex flex-col items-center justify-center w-full px-margin-mobile md:px-margin-desktop max-w-2xl mx-auto">
      {/* Header */}
      <header className="text-center mb-xl">
      <h1 className="font-headline-xl text-headline-xl text-primary tracking-tighter mb-sm drop-shadow-[0_0_12px_rgba(142,213,255,0.2)]">PULSE GRID</h1>
      <p className="font-label-mono text-label-mono text-secondary tracking-widest uppercase">SYSTEM INITIALIZED</p>
      <div className="h-px w-32 bg-primary/30 mx-auto mt-lg shadow-[0_0_8px_rgba(142,213,255,0.5)]"></div>
      </header>
      {/* Menu Options */}
      <nav className="flex flex-col gap-md w-full md:w-3/4">
      <button className="group relative w-full bg-primary text-surface-container-lowest font-data-display text-data-display py-sm px-lg rounded flex items-center justify-between overflow-hidden transition-colors duration-300 hover:shadow-[0_0_16px_rgba(142,213,255,0.4)]" type="button" data-action-id="resume-session-level-14-1" onClick={actions?.["resume-session-level-14-1"]}>
      <span className="z-10">RESUME SESSION <span className="font-label-mono text-label-mono opacity-80 ml-xs">(LEVEL 14)</span></span>
      <Play className="z-10 group-hover:translate-x-1 transition-transform" aria-hidden={true} focusable="false" />
      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
      </button>
      <button className="group w-full border border-primary/40 bg-surface/50 backdrop-blur-sm text-primary font-data-display text-data-display py-sm px-lg rounded flex items-center justify-between hover:bg-primary/10 hover:border-primary transition-colors duration-300" type="button" data-action-id="start-new-game-2" onClick={actions?.["start-new-game-2"]}>
      <span>START NEW GAME</span>
      <Plus className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-colors" aria-hidden={true} focusable="false" />
      </button>
      <button className="group w-full border border-outline-variant bg-surface/30 backdrop-blur-sm text-on-surface-variant font-label-mono text-label-mono py-sm px-lg rounded flex items-center justify-between hover:border-primary/50 hover:text-primary transition-colors duration-300" type="button" data-action-id="game-options-3" onClick={actions?.["game-options-3"]}>
      <span>GAME OPTIONS</span>
      <Settings className="text-[16px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="group w-full border border-outline-variant bg-surface/30 backdrop-blur-sm text-on-surface-variant font-label-mono text-label-mono py-sm px-lg rounded flex items-center justify-between hover:border-primary/50 hover:text-primary transition-colors duration-300" type="button" data-action-id="controls-4" onClick={actions?.["controls-4"]}>
      <span>CONTROLS</span>
      <Circle className="text-[16px]" aria-hidden={true} focusable="false" />
      </button>
      </nav>
      {/* Footer */}
      <footer className="mt-xl text-center border-t border-outline-variant/30 pt-lg w-full md:w-3/4">
      <p className="font-label-mono text-label-mono text-outline uppercase tracking-wider flex items-center justify-center gap-sm">
      <Circle className="text-[14px] text-secondary" aria-hidden={true} focusable="false" />
                      GLOBAL HIGH SCORE: <span className="text-secondary font-bold">942,081</span>
      </p>
      </footer>
      </main>
    </>
  );
}
