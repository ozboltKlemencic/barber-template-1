import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useId } from "react"
import Image from "next/image"

export default function Component() {
  const id = useId()
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button  className="rounded-none active:scale-95 transition-all duration-75 hover:bg-neutral-900 border-yellow-300 border bg-black  px-4 py-2">
          Pošlji sporočilo
        </button>
      </DialogTrigger>
      <DialogContent className="rounded-none">
        <div className="flex items-center gap-2">
          <div className="flex size-11 shrink-0 items-start justify-start " aria-hidden="true">
            <Image src="/img/favicon.svg" alt="logo" width={40} height={40}/>
          </div>
          <DialogHeader>
            <DialogTitle className="text-neutral-50  text-left ">Pošlji sporočilo</DialogTitle>
            <DialogDescription className="text-left text-xs sm:text-sm">Izpolnite spodnja polja za pošiljanje sporočila.</DialogDescription>
          </DialogHeader>
        </div>

        <form className="space-y-5">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor={`${id}-name`}  className="text-neutral-50">Ime in priimek</Label>
              <Input id={`${id}-name`} placeholder="Janez Novak" type="text" required className="rounded-none text-neutral-200" />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`${id}-email`}  className="text-neutral-100">Email</Label>
              <Input
                id={`${id}-email`}
                placeholder="janez.novak@example.com"
                type="email"
                required
                className="rounded-none text-neutral-200"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`${id}-message`} className="text-neutral-50">Sporočilo</Label>
              <Textarea
                id={`${id}-message`}
                placeholder="Vnesite vaše sporočilo"
                required
                className="min-h-[100px] max-h-[200px] rounded-none text-neutral-200"
              />
            </div>
          </div>
          <Button
            type="button"
            className="w-full rounded-none bg-black  text-white hover:from-yellow-500 hover:to-gray-900 transition-all duration-300"
          >
            Pošlji
          </Button>
        </form>

        <p className="text-left md:text-center text-xs text-neutral-500 dark:text-neutral-400">
          S pošiljanjem sporočila se strinjate z našimi{" "}
          <a className="underline hover:no-underline" href="#">
            Pogoji uporabe
          </a>
          .
        </p>
      </DialogContent>
    </Dialog>
  )
}

