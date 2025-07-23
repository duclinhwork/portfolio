"use client"

import { Mail, Phone, Linkedin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="relative py-16 bg-gradient-to-br from-navy to-teal text-white overflow-hidden">
      {/* Particle overlay placeholder */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-teal-200 rounded-full animate-pulse delay-200" />
        <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-white rounded-full animate-pulse delay-400" />
        <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-teal-200 rounded-full animate-pulse delay-600" />
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <h2 className="text-4xl font-montserrat font-bold mb-10 text-center flex items-center justify-center">
          Let&apos;s Connect
        </h2>
        <div className="flex flex-col items-center gap-6">
          <p className="text-lg mb-6 text-center font-inter">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your
            visions. Feel free to reach out!
          </p>
          <div className="space-y-4">
            <a
              href="mailto:duclinh.work@gmail.com"
              className="flex items-center text-white hover:text-softGray transition-colors font-inter"
            >
              <Mail className="mr-3 h-6 w-6" />
              <span>duclinh.work@gmail.com</span>
            </a>
            <a
              href="tel:+84965002228"
              className="flex items-center text-white hover:text-softGray transition-colors font-inter"
            >
              <Phone className="mr-3 h-6 w-6" />
              <span>+84-965-002-228</span>
            </a>
            <a
              href="https://linkedin.com/in/duclinhwork"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white hover:text-softGray transition-colors font-inter"
            >
              <Linkedin className="mr-3 h-6 w-6" />
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
