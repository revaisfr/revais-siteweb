"use client"

import { Menu } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { usePathname } from "next/navigation"
import Image from "next/image"

export default function Navbar() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
    { href: "/realisations", label: "Réalisations" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-20 items-center px-4 md:px-6">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="REVAIS MONTAGE Logo"
              width={60}
              height={60}
              className="h-12 w-12 object-contain"
            />
            <span className="hidden font-bold text-primary-600 sm:inline-block text-lg">REVAIS MONTAGE</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors hover:text-primary-600 ${
                  pathname === item.href ? "text-primary-600" : "text-foreground/60"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="REVAIS MONTAGE Logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <span className="font-bold text-primary-600">REVAIS MONTAGE</span>
            </Link>
            <SheetTitle className="sr-only">Menu de navigation</SheetTitle>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`transition-colors hover:text-primary-600 ${
                      pathname === item.href ? "text-primary-600" : "text-foreground/60"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link href="/" className="flex items-center space-x-2 md:hidden">
              <Image
                src="/logo.png"
                alt="REVAIS MONTAGE Logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <span className="font-bold text-primary-600">REVAIS MONTAGE</span>
            </Link>
          </div>
          <nav className="flex items-center">
            <Button asChild className="bg-primary-600 hover:bg-primary-700 text-white">
              <Link href="/contact">Devis Gratuit</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
