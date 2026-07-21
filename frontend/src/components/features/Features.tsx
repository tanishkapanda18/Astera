import {
  BrainCircuit,
  Newspaper,
  Sparkles,
} from "lucide-react";

import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <section className="relative mt-42 px-8 lg:px-12 xl:px-16">
      {/* Section Container */}
      <div className="mx-auto max-w-[1500px]">

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">

          <FeatureCard
            accent="purple"
            icon={<BrainCircuit size={28} strokeWidth={2} />}
            title="Portfolio Intelligence"
            description="AI-powered insights that help you understand your investments beyond just numbers."
          />

          <FeatureCard
            accent="green"
            icon={<Newspaper size={28} strokeWidth={2} />}
            title="Personalized Insights"
            description="Curated news, earnings, market events and updates that actually impact your portfolio."
          />

          <FeatureCard
            accent="gold"
            icon={<Sparkles size={28} strokeWidth={2} />}
            title="Explainable Analytics"
            description="Complex financial data translated into plain English, so every investment decision feels intuitive."
          />

        </div>
      </div>
    </section>
  );
}

export default Features;