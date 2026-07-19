function Hero() {
  return (
    <section className="mx-auto flex min-h-[85vh] max-w-7xl items-center justify-between px-8">
      {/* Left Side */}
      <div className="max-w-xl">
        <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-400">
          Intelligent Portfolio Platform
        </span>

        <h1 className="mt-8 text-6xl font-semibold leading-tight">
          Understand your
          <br />
          investments.
          <br />
          <span className="text-amber-400">
            Don't just track them.
          </span>
        </h1>

        <p className="mt-8 text-lg leading-8 text-gray-400">
          Every metric.
          Every article.
          Every decision.
          <br />
          Explained in plain language.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-xl bg-amber-400 px-6 py-3 font-semibold text-black transition hover:bg-amber-300">
            Get Started for Free
          </button>

          <button className="rounded-xl border border-gray-700 px-6 py-3 font-semibold text-white hover:border-amber-400">
            Live Demo
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="hidden lg:flex h-[500px] w-[420px] items-center justify-center rounded-3xl border border-white/10 bg-[#141825]">
        <p className="text-gray-500">
          Portfolio Card (Coming Next)
        </p>
      </div>
    </section>
  );
}

export default Hero;