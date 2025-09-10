import * as React from "react";

export function Accordion({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`space-y-3 ${className}`} {...props} />;
}

export function AccordionItem({ className = "", children, ...props }: React.HTMLAttributes<HTMLDetailsElement>) {
  return (
    <details className={`overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 ${className}`} {...props}>
      {children}
    </details>
  );
}

export function AccordionTrigger({ className = "", children, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <summary
      className={`cursor-pointer select-none px-4 py-3 text-sm font-semibold text-neutral-100 hover:bg-neutral-800 ${className}`}
      {...props}
    >
      {children}
    </summary>
  );
}

export function AccordionContent({ className = "", children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`px-4 pb-4 text-neutral-300 ${className}`} {...props}>
      {children}
    </div>
  );
}
