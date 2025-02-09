import React, { useEffect } from "react"
import { RiLoader4Line } from "react-icons/ri"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
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
import { toast } from "@/hooks/use-toast"
import { z } from "zod"
import Image from "next/image"
import { useNavStore } from '@/store/navStore'

const messageSchema = z.object({
  name: z.string()
    .min(2, { message: "Ime mora vsebovati vsaj 2 znaka" })
    .max(50, { message: "Ime ne sme presegati 50 znakov" }),
  email: z.string()
    .email({ message: "Vnesite veljaven elektronski naslov" }),
  message: z.string()
    .min(10, { message: "Sporočilo mora vsebovati vsaj 10 znakov" })
    .max(500, { message: "Sporočilo ne sme presegati 500 znakov" })
})

type FormData = z.infer<typeof messageSchema>

export default function ContactForm() {
  const [isOpen, setIsOpen] = React.useState(false)
  const { setNavbarVisibility } = useNavStore()
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormData>({
    resolver: zodResolver(messageSchema)
  })

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      const result = await response.json()

      if (response.ok) {
        toast({
          title: "Sporočilo je bilo uspešno poslano",
          className: "toaster"
        })
        
        reset()
        setNavbarVisibility(true)
        setIsOpen(false)
      } else {
        toast({
          title: "Napaka pri pošiljanju sporočila",
          description: result.message || "Prosimo, poskusite znova.",
          variant: "destructive"
        })
      }
    } catch (error) {
      console.log(error)
      toast({
        title: "Napaka pri pošiljanju sporočila",
        description: "Prišlo je do nepričakovane napake.",
        variant: "destructive"
      })
    }
  }

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
  }, [isOpen])

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      setIsOpen(open)
      setNavbarVisibility(!open)
    }}>
      <DialogTrigger asChild>
        <button className="rounded-none active:scale-95 transition-all duration-75 hover:bg-neutral-900 border-yellow-300 border bg-black px-4 py-2">
          Pošlji sporočilo
        </button>
      </DialogTrigger>
      <DialogContent 
        className="rounded-none" 
        onPointerDownOutside={(e) => isSubmitting && e.preventDefault()}
        onEscapeKeyDown={(e) => isSubmitting && e.preventDefault()}
      >
        <div className="flex items-center gap-2">
          <div className="flex size-11 shrink-0 items-start justify-start" aria-hidden="true">
            <Image src="/img/favicon.svg" alt="logo" width={40} height={40}/>
          </div>
          <DialogHeader>
            <DialogTitle className="text-neutral-50 text-left">Pošlji sporočilo</DialogTitle>
            <DialogDescription className="text-left text-xs sm:text-sm">
              Izpolnite spodnja polja za pošiljanje sporočila.
            </DialogDescription>
          </DialogHeader>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-neutral-50">
                Ime in priimek
              </Label>
              <Input
                id="name"
                disabled={isSubmitting}
                placeholder="Janez Novak"
                className={`rounded-none text-neutral-200 ${errors.name ? 'border-red-500' : ''}`}
                {...register('name')}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-neutral-100">
                Email
              </Label>
              <Input
                id="email"
                disabled={isSubmitting}
                placeholder="janez.novak@example.com"
                type="email"
                className={`rounded-none text-neutral-200 ${errors.email ? 'border-red-500' : ''}`}
                {...register('email')}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-neutral-50">
                Sporočilo
              </Label>
              <Textarea
                id="message"
                disabled={isSubmitting}
                placeholder="Vnesite vaše sporočilo"
                className={`min-h-[100px] max-h-[200px] rounded-none text-neutral-200 ${errors.message ? 'border-red-500' : ''}`}
                {...register('message')}
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
              )}
            </div>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-none !bg-gradient-to-br !from-yellow-200/[0.5] !to-yellow-400/[0.5] hover:!from-yellow-200/[0.3] hover:!to-yellow-400/[0.3] text-white transition-all duration-300"
          >
            {isSubmitting ? (
              <>
                <span>Pošiljanje</span>
                <RiLoader4Line className="mr-2 size-4 animate-spin" />
              </>
            ) : (
              <p>Pošlji</p>
            )}
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