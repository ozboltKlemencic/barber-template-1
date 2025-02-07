import React, { useState } from "react"
import { ReloadIcon } from "@radix-ui/react-icons";
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
import { useEffect } from "react";

// Zod validation schema
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


// Type for form data based on Zod schema
type FormData = z.infer<typeof messageSchema>;

// Type for form errors
type FormErrors = Partial<Record<keyof FormData, string>>;



export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const { setNavbarVisibility } = useNavStore()
  const [isOpen, setIsOpen] = useState(false)
   const [isLoading, setIsLoading] = useState(false)

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    try {
      // Validate form data
      messageSchema.parse(formData)
      
      // Set loading state
      setIsLoading(true)
      
      // Prepare email data
      const emailData = {
        email: formData.email,
        name: formData.name,
        message: formData.message
      }
      
      console.log("prisli do klica api");
      // Send email
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emailData)
      })
      
      const result = await response.json()
      console.log("Dobili rezultat");
      
      // If email sent successfully
      if (response.ok) {
        // Show success toast
        toast({
          title: "Sporočilo je bilo uspešno poslano",
          className: "toaster"
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          message: ""
        })
        
        // Close dialog and show navbar
        setNavbarVisibility(true)
        setIsOpen(false)
      } else {
        // Handle server-side errors
        toast({
          title: "Napaka pri pošiljanju sporočila",
          description: result.message || "Prosimo, poskusite znova.",
          variant: "destructive"
        });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle validation errors
        const newErrors = error.errors.reduce<FormErrors>((acc, curr) => {
          const key = curr.path[0] as keyof FormData
          acc[key] = curr.message
          return acc
        }, {})

        console.log(error);
        
        setErrors(newErrors)

        // Show validation error toast
        toast({
          title: "Napaka pri pošiljanju sporočila",
          description: "Prosimo, popravite označena polja.",
          variant: "destructive"
        });
      } else {
        // Handle network or unexpected errors
        toast({
          title: "Napaka pri pošiljanju sporočila",
          description: "Prišlo je do nepričakovane napake.",
          variant: "destructive"
        });
      }
    } finally {
      // Always reset loading state
      setIsLoading(false)
    }
  }

  

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      console.log(document.body.style.overflow)
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen])

  return (
    <>
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
          onPointerDownOutside={(e) => isLoading && e.preventDefault()}
          onEscapeKeyDown={(e) => isLoading && e.preventDefault()}
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

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label 
                  htmlFor="name" 
                  className="text-neutral-50"
                >
                  Ime in priimek
                </Label>
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  placeholder="Janez Novak" 
                  type="text" 
                  required 
                  className={`rounded-none text-neutral-200 ${errors.name ? 'border-red-500' : ''}`} 
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label 
                  htmlFor="email" 
                  className="text-neutral-100"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  disabled={isLoading}
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="janez.novak@example.com"
                  type="email"
                  required
                  className={`rounded-none text-neutral-200 ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label 
                  htmlFor="message" 
                  className="text-neutral-50"
                >
                  Sporočilo
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  disabled={isLoading}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Vnesite vaše sporočilo"
                  required
                  className={`min-h-[100px] max-h-[200px] rounded-none text-neutral-200 ${errors.message ? 'border-red-500' : ''}`}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>
            </div>
            <Button
              type="submit"
              className="w-full rounded-none !bg-gradient-to-br !from-yellow-200/[0.5] !to-yellow-400/[0.5] hover:!from-yellow-200/[0.3] hover:!to-yellow-400/[0.3] text-white transition-all duration-300"
            >
               {isLoading ? (
                <>
                  <span>Pošiljanje</span>
                  <ReloadIcon className="mr-2 size-4 animate-spin" />
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

      
    </>
  )
}