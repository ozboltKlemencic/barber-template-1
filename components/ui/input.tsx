import { cn } from "@/lib/utils";
import * as React from "react";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-950 shadow-sm shadow-black/5 transition-shadow placeholder:text-neutral-500/70 focus-visible:border-yellow-200/[0.8]  focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-yellow-200/20 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50 dark:placeholder:text-neutral-400/70 dark:focus-visible:border-yellow-200/[0.8] dark:focus-visible:ring-yellow-300/20",
          type === "search" &&
            "[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none",
          type === "file" &&
            "p-0 pr-3 italic text-neutral-500/70 file:me-3 file:h-full file:border-0 file:border-r file:border-solid file:border-neutral-200 file:bg-transparent file:px-3 file:text-sm file:font-medium file:not-italic file:text-neutral-950 dark:text-neutral-400/70 dark:file:border-neutral-800 dark:file:text-neutral-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
