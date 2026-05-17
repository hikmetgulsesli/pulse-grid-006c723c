// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Pause Overlay (overlay)
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Play, RefreshCw } from "lucide-react";


export type PauseOverlayOverlayActionId = "resume-game-1" | "restart-level-2" | "main-menu-3";

export interface PauseOverlayOverlayProps {
  actions?: Partial<Record<PauseOverlayOverlayActionId, () => void>>;
}

export function PauseOverlayOverlay({ actions }: PauseOverlayOverlayProps) {
  return (
    <>
      <div className="fixed inset-0 z-0 bg-surface-dim bg-cover bg-center" data-alt="A highly detailed, immersive digital game environment shown from a top-down tactical perspective. The scene features a complex, futuristic city grid constructed from dark obsidian blocks illuminated by intense neon cyan and electric green laser pathways. The lighting is high-contrast and dramatic, emphasizing the cyber-minimalist aesthetic. The overall mood is tense and technologically advanced, with a heavy emphasis on geometric structures and glowing accents against a deep vacuum backdrop." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB_6I2Fcb7xbRAkxwNyz816O9JvYxlI45q-zI8hZOsZy_lVdkjV2bhb8r0HrRHw6oqPfWumyOiJ6EUX25HC6GOICpxZg-i51m_3C1xiUdvHKhGHyBSMzSLs_zFqPToid2l2TAJWztL7Nf1b350zEmsV0josuMhmr2Xv99emPenqhu8yd5KPXuZLkpmbkHREL70hb86Z99Fkb33LTGGkVf3q7yfx6D0NEIu8yyy1OwOcjs6HwSBeJRoUvTWj3ZRbMM-hdiu8qyw0LzGF')"}}>
      </div>
      <div className="fixed inset-0 z-10 bg-background/60 backdrop-blur-md"></div>
      <main className="fixed inset-0 z-50 flex items-center justify-center p-margin-mobile md:p-margin-desktop">
      <div className="relative w-full max-w-[480px] bg-surface-container/80 backdrop-blur-xl border border-primary/30 rounded-lg shadow-[0_0_24px_rgba(142,213,255,0.05)] overflow-hidden">
      <div className="absolute inset-0 z-0 cyber-grid opacity-50 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-[2px] bg-primary shadow-[0_0_12px_rgba(142,213,255,0.8)] z-10"></div>
      <div className="relative z-10 p-xl flex flex-col gap-lg">
      <div className="flex flex-col items-center justify-center text-center gap-xs">
      <Circle  style={{fontSize: "32px", fontVariationSettings: "'FILL' 1"}} className="text-primary mb-sm" aria-hidden={true} focusable="false" />
      <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight uppercase">Game Paused</h1>
      <div className="w-12 h-[1px] bg-outline-variant/50 mt-sm"></div>
      </div>
      <div className="grid grid-cols-2 gap-sm">
      <div className="relative group bg-surface-container-lowest border border-outline-variant/30 rounded-DEFAULT p-md flex flex-col items-center justify-center overflow-hidden transition-colors hover:border-primary/40 hover:bg-surface-container-low">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-primary/20 group-hover:bg-primary transition-colors"></div>
      <span className="font-label-mono text-label-mono text-outline uppercase tracking-widest mb-xs">Sector</span>
      <span className="font-data-display text-data-display text-on-surface">14</span>
      </div>
      <div className="relative group bg-surface-container-lowest border border-outline-variant/30 rounded-DEFAULT p-md flex flex-col items-center justify-center overflow-hidden transition-colors hover:border-primary/40 hover:bg-surface-container-low">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-primary/20 group-hover:bg-primary transition-colors"></div>
      <span className="font-label-mono text-label-mono text-outline uppercase tracking-widest mb-xs">Score</span>
      <span className="font-data-display text-data-display text-on-surface">84,200</span>
      </div>
      </div>
      <div className="flex flex-col gap-sm mt-sm">
      <button className="w-full relative group overflow-hidden rounded-lg bg-primary text-on-primary py-md px-lg flex items-center justify-center gap-sm transition-colors duration-300 hover:shadow-[0_0_16px_rgba(142,213,255,0.4)] active:scale-[0.98]" type="button" data-action-id="resume-game-1" onClick={actions?.["resume-game-1"]}>
      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
      <Play  style={{fontVariationSettings: "'FILL' 1"}} className="relative z-10" aria-hidden={true} focusable="false" />
      <span className="font-data-display text-data-display uppercase relative z-10">Resume Game</span>
      </button>
      <div className="grid grid-cols-2 gap-sm">
      <button className="w-full bg-transparent border border-primary/30 rounded-lg py-sm px-md flex items-center justify-center gap-xs transition-colors duration-300 hover:bg-primary/10 hover:border-primary/60 hover:text-primary-fixed active:scale-[0.98] group" type="button" data-action-id="restart-level-2" onClick={actions?.["restart-level-2"]}>
      <RefreshCw className="text-primary group-hover:text-primary-fixed text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-label-mono text-label-mono text-primary group-hover:text-primary-fixed uppercase tracking-wide">Restart Level</span>
      </button>
      <button className="w-full bg-transparent border border-primary/30 rounded-lg py-sm px-md flex items-center justify-center gap-xs transition-colors duration-300 hover:bg-primary/10 hover:border-primary/60 hover:text-primary-fixed active:scale-[0.98] group" type="button" data-action-id="main-menu-3" onClick={actions?.["main-menu-3"]}>
      <Circle className="text-primary group-hover:text-primary-fixed text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-label-mono text-label-mono text-primary group-hover:text-primary-fixed uppercase tracking-wide">Main Menu</span>
      </button>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
