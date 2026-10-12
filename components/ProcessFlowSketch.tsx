import { Users, DraftingCompass, Cog, Box, Puzzle, Sparkles } from 'lucide-react'

const ICONS = [Users, DraftingCompass, Cog, Box, Puzzle]

// Hand-drawn "blob" radii — irregular corner rounding so every node feels sketched, not stamped.
const BLOBS = [
  '46% 54% 53% 47% / 53% 46% 54% 47%',
  '58% 42% 47% 53% / 44% 56% 44% 56%',
  '42% 58% 56% 44% / 56% 44% 58% 42%',
  '54% 46% 44% 56% / 47% 53% 46% 54%',
  '47% 53% 58% 42% / 53% 47% 42% 58%',
]

// Gentle zigzag offsets (desktop only) so the row reads like a sketched path, not a rigid grid.
const LIFT = [0, -28, 12, -28, 0]
const TILT = [-2, 1.5, -1.5, 2, -2]

export default function ProcessFlowSketch({ steps }: { steps: string[] }) {
  return (
    <div className="relative">
      {/* faint blueprint dot-grid backdrop */}
      <div
        className="absolute -inset-x-4 -inset-y-6 -z-10 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
          backgroundSize: '22px 22px',
          color: 'var(--primary)',
        }}
      />

      {/* ---------- Desktop / tablet: sketched zigzag flow ---------- */}
      <div className="hidden sm:block relative pb-10">
        {/* hand-drawn connecting ribbon */}
        <svg
          className="absolute left-0 right-0 top-[34px] w-full h-[120px] text-accent-themed/55"
          viewBox="0 0 1000 160"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M20,80 C140,8 200,160 320,90 C400,40 460,150 540,82 C620,18 680,150 760,86 C830,32 890,140 980,78"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="9 7"
            strokeLinecap="round"
          />
          <path
            d="M20,84 C140,12 200,164 320,94"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="3 6"
            strokeLinecap="round"
            opacity="0.5"
          />
          <path
            d="M955,66 L982,78 L958,92"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="relative flex items-start justify-between gap-2">
          {steps.map((step, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <div
                key={i}
                className="flex flex-col items-center flex-1 max-w-[180px]"
                style={{ transform: `translateY(${LIFT[i % LIFT.length]}px)` }}
              >
                <div
                  className="relative flex flex-col items-center"
                  style={{ transform: `rotate(${TILT[i % TILT.length]}deg)` }}
                >
                  {/* washi-tape doodle */}
                  <span
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 h-4 w-10 rounded-sm opacity-70 ${
                      i % 2 === 0 ? 'bg-accent-themed' : 'bg-primary-themed'
                    }`}
                    style={{ transform: `rotate(${i % 2 === 0 ? -6 : 5}deg)` }}
                  />
                  {/* figure number, blueprint-annotation style */}
                  <span
                    className="absolute -top-2 -right-3 z-10 rounded-full border border-dashed border-accent-themed bg-card-themed px-1.5 py-0.5 text-[10px] font-bold text-accent-themed"
                    style={{ transform: 'rotate(8deg)' }}
                  >
                    0{i + 1}
                  </span>

                  {/* sparkle doodle on the Design step — the "creative spark" of the journey */}
                  {i === 1 && (
                    <Sparkles
                      size={16}
                      className="absolute -top-5 -left-4 text-accent-themed rotate-[-12deg]"
                      aria-hidden="true"
                    />
                  )}

                  <div
                    className="flex h-20 w-20 items-center justify-center border-[2.5px] border-dashed border-primary-themed/45 bg-primary-soft text-primary-themed shadow-sm"
                    style={{ borderRadius: BLOBS[i % BLOBS.length] }}
                  >
                    <Icon size={28} strokeWidth={2} />
                  </div>
                </div>

                <div className="mt-5 text-center">
                  <span className="text-sm font-bold text-themed">{step}</span>
                  <svg
                    className="mx-auto mt-1 text-accent-themed/70"
                    width="64"
                    height="8"
                    viewBox="0 0 64 8"
                    aria-hidden="true"
                  >
                    <path
                      d="M2,5 C14,1 22,7 32,4 C42,1 50,7 62,4"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            )
          })}
        </div>

        {/* dimension-line caption, like a blueprint measurement */}
        <div className="relative mt-8 flex items-center justify-center gap-3 px-6">
          <span className="h-3 w-px bg-muted-themed/40" />
          <span className="h-px flex-1 border-t border-dashed border-muted-themed/40" />
          <span className="whitespace-nowrap text-xs font-medium uppercase tracking-wider text-muted-themed">
            Concept &rarr; Finished, Inspected Part
          </span>
          <span className="h-px flex-1 border-t border-dashed border-muted-themed/40" />
          <span className="h-3 w-px bg-muted-themed/40" />
        </div>
      </div>

      {/* ---------- Mobile: sketched vertical flow ---------- */}
      <div className="sm:hidden relative">
        <svg
          className="absolute left-[27px] top-2 bottom-2 w-2 text-accent-themed/50"
          width="8"
          height="100%"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <line x1="4" y1="0" x2="4" y2="100%" stroke="currentColor" strokeWidth="2" strokeDasharray="8 6" />
        </svg>
        <div className="space-y-7">
          {steps.map((step, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <div key={i} className="relative flex items-center gap-4">
                <div className="relative shrink-0" style={{ transform: `rotate(${TILT[i % TILT.length]}deg)` }}>
                  <span
                    className="absolute -top-2 -right-2 z-10 rounded-full border border-dashed border-accent-themed bg-card-themed px-1.5 py-0.5 text-[9px] font-bold text-accent-themed"
                    style={{ transform: 'rotate(8deg)' }}
                  >
                    0{i + 1}
                  </span>
                  {i === 1 && (
                    <Sparkles
                      size={14}
                      className="absolute -top-3 -left-3 text-accent-themed rotate-[-12deg]"
                      aria-hidden="true"
                    />
                  )}
                  <div
                    className="flex h-14 w-14 items-center justify-center border-2 border-dashed border-primary-themed/45 bg-primary-soft text-primary-themed"
                    style={{ borderRadius: BLOBS[i % BLOBS.length] }}
                  >
                    <Icon size={22} strokeWidth={2} />
                  </div>
                </div>
                <span className="text-sm font-bold text-themed">{step}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
