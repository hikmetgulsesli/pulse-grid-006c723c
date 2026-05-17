// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Options (settings)
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowLeft, Circle, Save } from "lucide-react";


export type GameOptionsSettingsActionId = "button-1-1" | "casual-2" | "normal-3" | "overclocked-4" | "reset-defaults-5" | "save-changes-6";

export interface GameOptionsSettingsProps {
  actions?: Partial<Record<GameOptionsSettingsActionId, () => void>>;
}

export function GameOptionsSettings({ actions }: GameOptionsSettingsProps) {
  return (
    <>
      {/* Top Navigation (Task-Focused Subpage) */}
      <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-xl flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop h-16 border-b border-outline-variant/30">
      <button className="text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center p-sm rounded-full hover:bg-primary/10" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <ArrowLeft className="text-[24px]" aria-hidden={true} focusable="false" />
      </button>
      <div className="font-data-display text-data-display font-bold tracking-tighter text-primary flex items-center gap-sm">
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} className="text-[20px] text-primary" aria-hidden={true} focusable="false" />
                  SYSTEM_SETTINGS
              </div>
      <div className="w-[40px]"></div> {/* Spacer for center alignment */}
      </header>
      {/* Main Content Canvas */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop py-lg flex flex-col gap-xl pb-[120px]">
      {/* AUDIO CATEGORY */}
      <section className="bg-surface-container border border-outline-variant/40 rounded-DEFAULT relative overflow-hidden group">
      {/* Glow Corner Accents */}
      <div className="absolute top-0 left-0 w-sm h-sm border-t border-l border-primary group-hover:border-secondary transition-colors"></div>
      <div className="absolute bottom-0 right-0 w-sm h-sm border-b border-r border-primary group-hover:border-secondary transition-colors"></div>
      <header className="border-b border-outline-variant/30 px-lg py-sm bg-surface-container-high/50 flex items-center gap-sm">
      <Circle className="text-outline text-[16px]" aria-hidden={true} focusable="false" />
      <h2 className="font-label-mono text-label-mono text-outline uppercase tracking-widest">Audio Output</h2>
      </header>
      <div className="p-lg flex flex-col gap-lg">
      {/* Master Volume Slider */}
      <div className="flex flex-col gap-sm">
      <div className="flex justify-between items-center font-label-mono text-label-mono">
      <span className="text-on-surface">Master Volume</span>
      <span className="text-primary font-bold">80%</span>
      </div>
      <div className="relative w-full h-md flex items-center">
      <div className="absolute w-full h-xs bg-surface-container-highest rounded-full overflow-hidden">
      <div className="h-full bg-secondary w-[80%] rounded-full shadow-[0_0_12px_rgba(74,225,118,0.4)]"></div>
      </div>
      <div className="absolute left-[80%] -ml-sm w-lg h-lg bg-background border-2 border-secondary rounded-full shadow-[0_0_8px_rgba(74,225,118,0.3)] cursor-pointer hover:scale-110 transition-transform flex items-center justify-center">
      <div className="w-xs h-xs bg-secondary rounded-full"></div>
      </div>
      </div>
      </div>
      {/* SFX Level Slider */}
      <div className="flex flex-col gap-sm">
      <div className="flex justify-between items-center font-label-mono text-label-mono">
      <span className="text-on-surface">SFX Level</span>
      <span className="text-primary font-bold">100%</span>
      </div>
      <div className="relative w-full h-md flex items-center">
      <div className="absolute w-full h-xs bg-surface-container-highest rounded-full overflow-hidden">
      <div className="h-full bg-primary w-[100%] rounded-full shadow-[0_0_12px_rgba(142,213,255,0.4)]"></div>
      </div>
      <div className="absolute left-[100%] -ml-lg w-lg h-lg bg-background border-2 border-primary rounded-full shadow-[0_0_8px_rgba(142,213,255,0.3)] cursor-pointer hover:scale-110 transition-transform flex items-center justify-center">
      <div className="w-xs h-xs bg-primary rounded-full"></div>
      </div>
      </div>
      </div>
      {/* Music Protocol Slider */}
      <div className="flex flex-col gap-sm">
      <div className="flex justify-between items-center font-label-mono text-label-mono">
      <span className="text-on-surface">Music Protocol</span>
      <span className="text-primary font-bold">45%</span>
      </div>
      <div className="relative w-full h-md flex items-center">
      <div className="absolute w-full h-xs bg-surface-container-highest rounded-full overflow-hidden">
      <div className="h-full bg-primary-fixed-dim w-[45%] rounded-full"></div>
      </div>
      <div className="absolute left-[45%] -ml-sm w-lg h-lg bg-background border-2 border-primary-fixed-dim rounded-full cursor-pointer hover:scale-110 transition-transform flex items-center justify-center">
      <div className="w-xs h-xs bg-primary-fixed-dim rounded-full"></div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* DIFFICULTY CATEGORY */}
      <section className="bg-surface-container border border-outline-variant/40 rounded-DEFAULT relative overflow-hidden group">
      <header className="border-b border-outline-variant/30 px-lg py-sm bg-surface-container-high/50 flex items-center gap-sm">
      <Circle className="text-outline text-[16px]" aria-hidden={true} focusable="false" />
      <h2 className="font-label-mono text-label-mono text-outline uppercase tracking-widest">Difficulty Matrix</h2>
      </header>
      <div className="p-lg">
      <div className="flex bg-surface-container-highest p-base rounded-DEFAULT gap-base border border-outline-variant/20">
      <button className="flex-1 py-sm text-center font-label-mono text-label-mono text-outline hover:text-on-surface hover:bg-surface-variant/50 transition-colors rounded-DEFAULT" type="button" data-action-id="casual-2" onClick={actions?.["casual-2"]}>
                              CASUAL
                          </button>
      <button className="flex-1 py-sm text-center font-label-mono text-label-mono text-outline hover:text-on-surface hover:bg-surface-variant/50 transition-colors rounded-DEFAULT" type="button" data-action-id="normal-3" onClick={actions?.["normal-3"]}>
                              NORMAL
                          </button>
      <button className="flex-1 py-sm text-center font-label-mono text-label-mono bg-error-container text-error border border-error/50 shadow-[0_0_12px_rgba(255,180,171,0.15)] rounded-DEFAULT relative overflow-hidden" type="button" data-action-id="overclocked-4" onClick={actions?.["overclocked-4"]}>
      <div className="absolute inset-0 bg-error opacity-10 animate-pulse pointer-events-none"></div>
                              OVERCLOCKED
                          </button>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-sm px-sm">
                          Warning: Overclocked mode removes pulse safety limits. Score multipliers active.
                      </p>
      </div>
      </section>
      {/* GAMEPLAY CATEGORY */}
      <section className="bg-surface-container border border-outline-variant/40 rounded-DEFAULT relative overflow-hidden group">
      <header className="border-b border-outline-variant/30 px-lg py-sm bg-surface-container-high/50 flex items-center gap-sm">
      <Circle className="text-outline text-[16px]" aria-hidden={true} focusable="false" />
      <h2 className="font-label-mono text-label-mono text-outline uppercase tracking-widest">Gameplay Engine</h2>
      </header>
      <div className="p-lg flex flex-col gap-lg">
      {/* Auto-Pulse Toggle */}
      <div className="flex justify-between items-center border-b border-outline-variant/20 pb-md">
      <div>
      <div className="font-label-mono text-label-mono text-on-surface">Auto-Pulse Routine</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant mt-base">Engages automatic grid alignment on proximity.</div>
      </div>
      {/* Toggle Switch Active */}
      <div className="w-xl h-lg bg-surface-container-lowest border border-outline-variant/50 rounded-full p-base relative cursor-pointer flex items-center transition-colors hover:border-secondary/50">
      <div className="absolute w-full h-full left-0 top-0 bg-secondary/10 rounded-full"></div>
      <div className="w-[18px] h-[18px] bg-secondary rounded-full shadow-[0_0_8px_rgba(74,225,118,0.6)] absolute right-[3px] transition-colors"></div>
      </div>
      </div>
      {/* Animation Speed Slider */}
      <div className="flex flex-col gap-sm pt-sm">
      <div className="flex justify-between items-center font-label-mono text-label-mono">
      <span className="text-on-surface">Animation Speed</span>
      <span className="text-primary font-bold">1.5x</span>
      </div>
      <div className="relative w-full h-md flex items-center">
      <div className="absolute w-full h-xs bg-surface-container-highest rounded-full overflow-hidden flex">
      {/* Segmented track look */}
      <div className="flex-1 border-r border-background h-full bg-primary/40"></div>
      <div className="flex-1 border-r border-background h-full bg-primary/40"></div>
      <div className="flex-1 border-r border-background h-full bg-primary"></div>
      <div className="flex-1 h-full bg-transparent"></div>
      </div>
      <div className="absolute left-[75%] -ml-sm w-lg h-lg bg-background border-2 border-primary rounded-full cursor-pointer hover:scale-110 transition-transform flex items-center justify-center">
      <div className="w-xs h-xs bg-primary rounded-full shadow-[0_0_6px_rgba(142,213,255,0.8)]"></div>
      </div>
      </div>
      </div>
      </div>
      </section>
      </main>
      {/* Bottom Action Bar (Fixed for easy access) */}
      <div className="fixed bottom-0 left-0 w-full bg-surface-container/90 backdrop-blur-md border-t border-primary/20 shadow-[0_-4px_12px_rgba(142,213,255,0.05)] z-40 pb-safe">
      <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop h-[80px] flex justify-between items-center gap-md">
      <button className="px-lg py-sm font-label-mono text-label-mono text-outline border border-outline-variant rounded-DEFAULT hover:bg-surface-variant hover:text-on-surface transition-colors flex items-center gap-sm" type="button" data-action-id="reset-defaults-5" onClick={actions?.["reset-defaults-5"]}>
      <Circle className="text-[18px]" aria-hidden={true} focusable="false" />
                      RESET DEFAULTS
                  </button>
      <button className="px-xl py-sm font-label-mono text-label-mono bg-primary text-on-primary rounded-DEFAULT hover:bg-primary-fixed shadow-[0_0_12px_rgba(142,213,255,0.2)] hover:shadow-[0_0_20px_rgba(142,213,255,0.5)] transition-colors flex items-center gap-sm font-bold tracking-wide" type="button" data-action-id="save-changes-6" onClick={actions?.["save-changes-6"]}>
                      SAVE CHANGES
                      <Save className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
    </>
  );
}
