import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import * as React from "react";

export interface SelectPropsNative extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
}

const SelectNative = React.forwardRef<HTMLSelectElement, SelectPropsNative>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="relative">
        <style jsx global>{`
          select option {
            background-color: black !important;
            color: white !important;
          }
          select option:hover {
            background-color: rgb(23, 23, 23) !important;
          }
          select option:checked {
            background-color: rgb(38, 38, 38) !important;
          }
        `}</style>
        <select
          className={cn(
            "peer inline-flex w-full cursor-pointer appearance-none items-center border border-neutral-200 bg-black text-sm text-white shadow-sm shadow-yellow-200/5 transition-shadow focus-visible:border-neutral-950 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-neutral-950/20 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 has-[option[disabled]:checked]:text-neutral-500 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50 dark:focus-visible:border-neutral-300 dark:focus-visible:ring-neutral-300/20 dark:has-[option[disabled]:checked]:text-neutral-400",
            props.multiple
              ? "py-1 [&>*]:px-3 [&>*]:py-1"
              : "h-9 pe-8 ps-3",
            className,
          )}
          ref={ref}
          {...props}
        >
          {children}
        </select>
        {!props.multiple && (
          <span className="pointer-events-none absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center text-white/80 peer-disabled:opacity-50">
            <ChevronDown size={16} strokeWidth={2} aria-hidden="true" />
          </span>
        )}
      </div>
    );
  },
);
SelectNative.displayName = "SelectNative";

export { SelectNative };