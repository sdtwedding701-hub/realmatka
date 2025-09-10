import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary";
  size?: "sm" | "md" | "lg";
};

export function Button({
  className = "",
  variant = "default",
  size = "md",
  ...props
}: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-2xl font-medium focus:outline-none";
  const sizes =
    size === "lg" ? "h-11 px-5 text-base" : size === "sm" ? "h-8 px-3 text-sm" : "h-10 px-4 text-sm";
  const styles =
    variant === "secondary"
      ? "bg-neutral-800 text-neutral-100 hover:bg-neutral-700"
      : "bg-indigo-600 text-white hover:bg-indigo-500";
  return <button className={`${base} ${sizes} ${styles} ${className}`} {...props} />;
}
