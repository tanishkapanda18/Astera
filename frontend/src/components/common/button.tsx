import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "px-6 py-3 rounded-lg font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-[var(--amber)] text-black hover:bg-[#FFC861] hover:shadow-[0_12px_40px_rgba(246,178,74,0.30)] hover:-translate-y-0.5 shadow-[0_10px_35px_rgba(246,178,74,0.22)]",
    secondary:
      "border border-[var(--text-secondary)] text-[var(--text-primary)] hover:bg-white/5",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;