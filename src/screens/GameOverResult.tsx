// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Over (result)
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, TriangleAlert } from "lucide-react";


export type GameOverResultActionId = "reboot-sequence-1" | "disconnect-2";

export interface GameOverResultProps {
  actions?: Partial<Record<GameOverResultActionId, () => void>>;
}

export function GameOverResult({ actions }: GameOverResultProps) {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-error-container/20 via-surface-container-lowest to-surface-container-lowest pointer-events-none z-0"></div>
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#87929a_1px,transparent_1px),linear-gradient(to_bottom,#87929a_1px,transparent_1px)] bg-[size:16px_16px] z-0 pointer-events-none"></div>
      <main className="relative z-10 w-full max-w-[800px] px-margin-mobile md:px-margin-desktop py-xl flex flex-col items-center">
      <div className="w-full bg-surface-container/90 backdrop-blur-xl border border-error/30 p-lg md:p-xl flex flex-col items-center text-center pulse-border rounded-none relative">
      <div className="absolute top-0 left-0 w-2 h-2 bg-error"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 bg-error"></div>
      <div className="mb-lg animate-pulse">
      <TriangleAlert  style={{fontVariationSettings: "'FILL' 1"}} className="text-[64px] text-error" aria-hidden={true} focusable="false" />
      </div>
      <h1 className="font-headline-xl text-headline-xl text-error mb-sm uppercase tracking-widest drop-shadow-[0_0_8px_rgba(255,180,171,0.5)]">SIGNAL LOST</h1>
      <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface-variant mb-xl uppercase tracking-wider">GRID INTEGRITY COMPROMISED</h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-md mb-xl">
      <div className="bg-surface-container-highest/80 border border-outline-variant/50 p-md flex flex-col items-center justify-center relative overflow-hidden group">
      <div className="absolute inset-0 bg-error/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <span className="font-label-mono text-label-mono text-outline uppercase mb-sm z-10">FINAL SCORE</span>
      <span className="font-data-display text-data-display text-on-surface z-10">24,590</span>
      </div>
      <div className="bg-surface-container-highest/80 border border-outline-variant/50 p-md flex flex-col items-center justify-center relative overflow-hidden group">
      <div className="absolute inset-0 bg-error/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <span className="font-label-mono text-label-mono text-outline uppercase mb-sm z-10">LEVELS CLEARED</span>
      <span className="font-data-display text-data-display text-on-surface z-10">14</span>
      </div>
      <div className="bg-error-container/20 border border-error/40 p-md flex flex-col items-center justify-center relative overflow-hidden group">
      <div className="absolute inset-0 bg-error/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <span className="font-label-mono text-label-mono text-error uppercase mb-sm z-10">EFFICIENCY</span>
      <span className="font-data-display text-data-display text-error z-10">78%</span>
      </div>
      </div>
      <div className="flex flex-col w-full md:flex-row gap-md justify-center mt-sm">
      <button className="bg-error text-on-error font-label-mono text-label-mono px-xl py-lg uppercase hover:bg-error/90 hover:shadow-[0_0_16px_rgba(255,180,171,0.4)] transition-colors border border-error relative overflow-hidden scanline-effect flex items-center justify-center gap-sm" type="button" data-action-id="reboot-sequence-1" onClick={actions?.["reboot-sequence-1"]}>
      <Circle aria-hidden={true} focusable="false" />
                          REBOOT SEQUENCE
                      </button>
      <button className="bg-transparent text-error border border-error/50 font-label-mono text-label-mono px-xl py-lg uppercase hover:bg-error/10 transition-colors flex items-center justify-center gap-sm" type="button" data-action-id="disconnect-2" onClick={actions?.["disconnect-2"]}>
      <Circle aria-hidden={true} focusable="false" />
                          DISCONNECT
                      </button>
      </div>
      </div>
      </main>
    </>
  );
}
