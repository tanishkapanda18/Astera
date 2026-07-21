import LineChart from "../common/linechart";
function Herocard() {
  return (
    <div className="h-[500px]
  w-[370px]
  rounded-[40px]
  border border-white/[0.08]
  bg-[rgba(12,16,28,0.82)]
  backdrop-blur-2xl
  shadow-[0_35px_120px_rgba(32,48,96,0.40)]
  ring-1 ring-white/[0.03]
  overflow-hidden
  p-7">
    <div
  className="
absolute
inset-0
pointer-events-none
opacity-[0.05]
bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_55%)]
"
/>
      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-[var(--text-secondary)]">
          Portfolio Value
        </p>

        <button className="text-[var(--text-secondary)]">
          ⋯
        </button>
      </div>

      {/* Portfolio Value */}
      <div className="-mt-3">
       <h2 className="mt-1 text-[42px] font-semibold tracking-tight text-[var(--text-primary)]">
          ₹5,42,000
        </h2>

        <p className="mt-2 text-sm font-medium text-[var(--emerald)]">
          +2.48% (₹13,064) today
        </p>
      </div>

      {/* Time Selector */}
      <div className="mt-7 flex items-center gap-4 text-[11px]">
  <button className="text-[var(--text-secondary)] hover:text-white">
    1D
  </button>

  <button className="text-[var(--text-secondary)] hover:text-white">
    1W
  </button>

  <button className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-white backdrop-blur-sm">
    1M
  </button>

  <button className="text-[var(--text-secondary)] hover:text-white">
    3M
  </button>

  <button className="text-[var(--text-secondary)] hover:text-white">
    1Y
  </button>

  <button className="text-[var(--text-secondary)] hover:text-white">
    ALL
  </button>
</div>
<LineChart />
    </div>   
  );
}

export default Herocard;