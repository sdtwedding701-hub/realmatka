import * as React from "react";

type SpanProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "secondary";
};

export function Badge({ className = "", variant = "default", ...props }: SpanProps) {
  const base = "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium";
  const styles =
    variant === "secondary"
      ? "bg-neutral-800 text-neutral-300"
      : "bg-neutral-700 text-white";
  return <span className={`${base} ${styles} ${className}`} {...props} />;
}
