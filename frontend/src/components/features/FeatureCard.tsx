import type { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  accent: "purple" | "green" | "gold";
}

const accentStyles = {
  purple: {
    icon: "text-violet-400",
    glow: "bg-violet-500/10",
    border: "group-hover:border-violet-400/25",
    shadow: "group-hover:shadow-[0_25px_60px_rgba(139,92,246,0.18)]",
  },
  green: {
    icon: "text-emerald-400",
    glow: "bg-emerald-500/10",
    border: "group-hover:border-emerald-400/25",
    shadow: "group-hover:shadow-[0_25px_60px_rgba(16,185,129,0.18)]",
  },
  gold: {
    icon: "text-amber-400",
    glow: "bg-amber-500/10",
    border: "group-hover:border-amber-400/25",
    shadow: "group-hover:shadow-[0_25px_60px_rgba(245,158,11,0.18)]",
  },
};

function FeatureCard({
  icon,
  title,
  description,
  accent,
}: FeatureCardProps) {
  const theme = accentStyles[accent];

  return (
    <div
      className={`
      group
      relative
      min-h-[240px]
      overflow-hidden
      rounded-[30px]
      border
      border-white/[0.05]
      bg-[rgba(18,22,36,0.62)]
      px-8 pt-7 pb-6
      backdrop-blur-3xl
      transition-all
      duration-500
      hover:-translate-y-2
      ${theme.border}
      ${theme.shadow}
      `}
    >
      {/* Ambient Glow */}
      <div
        className={`
        absolute
        -right-16
        -top-16
        h-44
        w-44
        rounded-full
        blur-3xl
        opacity-0
        transition-all
        duration-500
        group-hover:opacity-100
        ${theme.glow}
        `}
      />
      <div
  className="
  absolute
  left-8
  right-8
  top-0
  h-px
  bg-gradient-to-r
  from-transparent
  via-white/15
  to-transparent
  "
/>

      {/* Icon */}
      <div
        className={`
        relative
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-2xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        transition-all
        duration-500
        group-hover:scale-110
        group-hover:rotate-3
        ${theme.icon}
        `}
      >
        {icon}
      </div>
      <div
  className="
absolute
inset-0
rounded-2xl
opacity-0
transition-all
duration-500
group-hover:opacity-100
bg-gradient-to-br
from-white/10
to-transparent
"
/>

      {/* Content */}
      <div className="relative mt-10">
        <h3 className="text-[24px] font-semibold leading-tight text-white">
          {title}
        </h3>

        <p className="mt-6 max-w-[280px] text-[15px] leading-7 text-[var(--text-secondary)]">
          {description}
        </p>
      </div>

      {/* Bottom Gradient */}
      <div
        className="
        absolute
        bottom-0
        left-0
        h-20
        w-full
        bg-gradient-to-t
        from-white/[0.02]
        to-transparent
        pointer-events-none
        "
      />
    </div>
  );
}

export default FeatureCard;