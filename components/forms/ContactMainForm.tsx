"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const ContactMainForm = () => {
const [agreed, setAgreed] = useState(false)
  return (
    <form className="w-full max-w-md space-y-6">
          <div className="space-y-2">
            <Input
              className="bg-transparent border-2 border-white/30 text-white placeholder:text-white/50 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
              placeholder="IME PRIIMEK"
              required
            />
          </div>
          <div className="space-y-2">
            <Input
              className="bg-transparent border-2 border-white/30 text-white placeholder:text-white/50 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
              type="email"
              placeholder="E-POSTA"
              required
            />
          </div>
          <div className="space-y-2">
            <Textarea
              className="min-h-[150px] bg-transparent border-2 border-white/30 text-white placeholder:text-white/50 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 resize-none"
              placeholder="SPOROCILO"
              required
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="privacy"
              checked={agreed}
              onCheckedChange={(checked:boolean) => setAgreed(checked as boolean)}
              className="border border-white/30 data-[state=checked]:bg-white data-[state=checked]:text-black rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Label htmlFor="privacy" className="text-sm text-white/70">
              Prebral/-a sem in se strinjam s politiko zasebnosti
            </Label>
          </div>
          <Button
            className="w-full bg-white text-black hover:bg-white/90 rounded-none border-2 border-white"
            disabled={!agreed}
          >
            Pošlji
          </Button>
        </form>
  )
}

export default ContactMainForm