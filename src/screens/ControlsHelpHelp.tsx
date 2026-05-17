// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Controls Help (help)
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowLeft, Circle, MousePointerClick, RotateCw, Settings } from "lucide-react";


export type ControlsHelpHelpActionId = "button-1-1" | "button-2-2";

export interface ControlsHelpHelpProps {
  actions?: Partial<Record<ControlsHelpHelpActionId, () => void>>;
}

export function ControlsHelpHelp({ actions }: ControlsHelpHelpProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop h-16 fixed top-0 z-50">
      <div className="flex items-center gap-sm cursor-pointer hover:text-secondary hover:bg-secondary/10 transition-colors duration-300 p-sm rounded active:scale-95 duration-100 text-primary border-b-2 border-primary pt-2">
      <ArrowLeft className="text-headline-lg-mobile" aria-hidden={true} focusable="false" />
      <span className="font-label-mono text-data-display font-bold tracking-tighter text-primary">PULSE_GRID</span>
      </div>
      <div className="flex gap-lg">
      <button className="text-on-surface-variant hover:text-secondary hover:bg-secondary/10 transition-colors duration-300 p-sm rounded active:scale-95 duration-100 flex items-center justify-center" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant hover:text-secondary hover:bg-secondary/10 transition-colors duration-300 p-sm rounded active:scale-95 duration-100 flex items-center justify-center" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Main Canvas */}
      <main className="flex-grow pt-24 pb-12 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto w-full">
      <header className="mb-lg border-b border-outline-variant/30 pb-md">
      <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase tracking-wider flex items-center gap-md">
      <Circle className="text-primary" aria-hidden={true} focusable="false" />
                      HOW TO PLAY
                  </h1>
      </header>
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-4 md:grid-cols-12 gap-gutter">
      {/* Section 1: Objective (Featured Card) */}
      <section className="col-span-4 md:col-span-12 bg-surface-container border border-outline-variant/50 rounded-DEFAULT glow-corners p-lg mb-sm glow-active transition-colors duration-300 flex flex-col justify-between">
      <div className="border-b border-primary-fixed-dim/30 pb-sm mb-md">
      <h2 className="font-label-mono text-label-mono text-primary flex items-center gap-xs uppercase">
      <Circle className="text-[16px]" aria-hidden={true} focusable="false" />
                              Objective
                          </h2>
      </div>
      <div className="flex flex-col md:flex-row gap-lg items-start md:items-center">
      <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl leading-relaxed">
                              Connect the <span className="text-secondary font-label-mono px-xs bg-secondary/15 rounded-[2px]">source</span> to the <span className="text-error font-label-mono px-xs bg-error/15 rounded-[2px]">terminal node</span>. Avoid signal loops to maintain grid stability.
                          </p>
      <div className="h-2 flex-grow bg-surface-container-high rounded-full overflow-hidden w-full md:w-auto relative border border-outline-variant/20 mt-4 md:mt-0">
      <div className="h-full bg-secondary w-2/3 relative rounded-full">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent w-full opacity-50 animate-[pulse_2s_ease-in-out_infinite]"></div>
      </div>
      </div>
      </div>
      </section>
      {/* Section 2: Mouse & Touch */}
      <section className="col-span-4 md:col-span-6 bg-surface-container border border-outline-variant/30 rounded-DEFAULT p-md glow-active transition-colors duration-300 flex flex-col">
      <div className="border-b border-primary-fixed-dim/20 pb-xs mb-md">
      <h2 className="font-label-mono text-label-mono text-primary flex items-center gap-xs uppercase">
      <MousePointerClick className="text-[16px]" aria-hidden={true} focusable="false" />
                              Mouse &amp; Touch
                          </h2>
      </div>
      <ul className="space-y-sm flex-grow">
      <li className="flex items-start gap-md bg-surface-container-high/50 p-sm rounded border border-outline-variant/10">
      <RotateCw className="text-secondary" aria-hidden={true} focusable="false" />
      <div>
      <span className="font-label-mono text-label-mono text-on-surface block mb-xs">Click/Tap</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Rotate nodes clockwise to align connections.</span>
      </div>
      </li>
      <li className="flex items-start gap-md bg-surface-container-high/50 p-sm rounded border border-outline-variant/10">
      <Circle className="text-secondary" aria-hidden={true} focusable="false" />
      <div>
      <span className="font-label-mono text-label-mono text-on-surface block mb-xs">Drag</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Pan across the expansive pulse grid canvas.</span>
      </div>
      </li>
      </ul>
      </section>
      {/* Section 3: Keyboard */}
      <section className="col-span-4 md:col-span-6 bg-surface-container border border-outline-variant/30 rounded-DEFAULT p-md glow-active transition-colors duration-300 flex flex-col">
      <div className="border-b border-primary-fixed-dim/20 pb-xs mb-md">
      <h2 className="font-label-mono text-label-mono text-primary flex items-center gap-xs uppercase">
      <Circle className="text-[16px]" aria-hidden={true} focusable="false" />
                              Keyboard
                          </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
      <div className="flex items-center gap-sm bg-surface-container-high/50 p-sm rounded border border-outline-variant/10">
      <div className="bg-surface border border-outline-variant rounded-[2px] px-sm py-xs font-label-mono text-label-mono text-on-surface shadow-sm">
      <Circle className="text-[14px] align-middle" aria-hidden={true} focusable="false" />
      </div>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Navigate</span>
      </div>
      <div className="flex items-center gap-sm bg-surface-container-high/50 p-sm rounded border border-outline-variant/10">
      <div className="bg-surface border border-outline-variant rounded-[2px] px-md py-xs font-label-mono text-label-mono text-on-surface shadow-sm text-center min-w-[60px]">
                                  SPACE
                              </div>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Pulse</span>
      </div>
      <div className="flex items-center gap-sm bg-surface-container-high/50 p-sm rounded border border-outline-variant/10">
      <div className="bg-surface border border-outline-variant rounded-[2px] w-8 h-8 flex items-center justify-center font-label-mono text-label-mono text-on-surface shadow-sm">
                                  R
                              </div>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Reset</span>
      </div>
      <div className="flex items-center gap-sm bg-surface-container-high/50 p-sm rounded border border-outline-variant/10">
      <div className="bg-surface border border-outline-variant rounded-[2px] w-8 h-8 flex items-center justify-center font-label-mono text-label-mono text-on-surface shadow-sm">
                                  P
                              </div>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Pause</span>
      </div>
      </div>
      </section>
      </div>
      </main>
    </>
  );
}
