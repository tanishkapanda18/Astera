import Button from "../common/button";
import Herocard from "./herocard";
import BackgroundGlow from "./backgroundglow";
import HeroNebula from "../../assets/illustrations/hero-nebula.png";
function Hero() {
  return (
    <section className="relative auto flex min-h-[85vh] max-w-7xl items-center justify-between px-8">
     {/* <BackgroundGlow /> */}
      {/* Left Side */}
      <div className="relative z-10 max-w-xl">
        <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-400">
          Intelligent Portfolio Platform
        </span>

        <h1 className="mt-8 text-6xl font-semibold leading-tight">
          Understand your
          <br />
          investments,
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
          <Button>
  Get Started for Free
</Button>
         <Button variant="secondary">
  Live Demo
</Button>
        </div>
      </div>
      {/* Right Side */}
      <div className="relative z-10 -translate-x-10">
          <img
    src={HeroNebula}
    alt=""
    aria-hidden="true"
    className="
     absolute
top-[-35px]
right-[-310px]
w-[1028px]
max-w-none
pointer-events-none
select-none
opacity-45
mix-blend-screen
-z-10 
    "
  />
  <Herocard />
</div>
    </section>
  );
}

export default Hero;