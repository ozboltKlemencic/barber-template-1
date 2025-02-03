import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex h-9 w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-950 shadow-sm shadow-black/5 transition-shadow placeholder:text-neutral-500/70 focus-visible:border-yellow-200/[0.8]  focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-yellow-200/20 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50 dark:placeholder:text-neutral-400/70 dark:focus-visible:border-yellow-200/[0.8] dark:focus-visible:ring-yellow-300/20",
        
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
