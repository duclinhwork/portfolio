import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Linkedin } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden
                 bg-gradient-to-br from-navy to-teal"
    >
      {/* Particle effect placeholder - can be replaced with actual particle animation library */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-teal rounded-full animate-pulse delay-200" />
        <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-white rounded-full animate-pulse delay-400" />
        <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-teal rounded-full animate-pulse delay-600" />
      </div>

      <div className="relative z-10 p-4 max-w-3xl mx-auto">
        <div className="mb-6">
          <Image
            src="/avatar.jpg"
            alt="Nguyễn Đức Linh's Headshot"
            width={150}
            height={150}
            className="rounded-full border-4 border-teal shadow-lg mx-auto object-cover"
          />
        </div>
        <h1 className="text-6xl font-montserrat font-bold mb-4 leading-tight">
          Nguyễn Đức Linh
          <span className="block h-1 w-24 bg-teal mx-auto mt-2" />
        </h1>
        <p className="text-2xl font-inter mb-8">Data Analyst & Engineer</p>

        <div className="flex justify-center space-x-4 mb-8">
          <Button
            asChild
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-navy bg-transparent"
          >
            <a href="mailto:duclinh.work@gmail.com" className="flex items-center">
              <Mail className="mr-2 h-5 w-5" />
              Email
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-navy bg-transparent"
          >
            <a href="tel:+84965002228" className="flex items-center">
              <Phone className="mr-2 h-5 w-5" />
              Phone
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-navy bg-transparent"
          >
            <a
              href="https://linkedin.com/in/duclinhwork"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </Button>
        </div>

        <Button
          asChild
          className="bg-teal text-white hover:bg-teal/90 px-8 py-6 text-lg font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105"
        >
          <Link href="#experience">Explore My Work</Link>
        </Button>
      </div>
    </section>
  )
}
