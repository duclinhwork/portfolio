import Link from "next/link"
import { Linkedin, Github, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-navy text-white py-8">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <Link
            href="https://linkedin.com/in/duclinhwork"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal transition-colors"
          >
            <Linkedin className="h-7 w-7" />
          </Link>
          <Link
            href="https://github.com/duclinhwork"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal transition-colors"
          >
            <Github className="h-7 w-7" />
          </Link>
          <Link href="mailto:duclinh.work@gmail.com" className="hover:text-teal transition-colors">
            <Mail className="h-7 w-7" />
          </Link>
        </div>
        <p className="text-sm font-inter mb-2">
          &copy; {new Date().getFullYear()} Nguyễn Đức Linh. All rights reserved.
        </p>
        <p className="text-sm font-inter">Built with passion in Ho Chi Minh City.</p>
      </div>
    </footer>
  )
}
