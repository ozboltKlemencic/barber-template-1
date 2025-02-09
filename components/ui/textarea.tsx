import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex h-9 w-full rounded-lg border p-[1px] font-montserrat  px-3 py-2 text-sm  shadow-sm shadow-black/5 transition-shadow    focus-visible:outline-none focus-visible:ring-[3px]  disabled:cursor-not-allowed disabled:opacity-50 border-neutral-500 bg-neutral-950 text-neutral-50 placeholder:text-neutral-400/70 focus-visible:border-yellow-200/[0.8] focus-visible:ring-yellow-300/20",
        
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
