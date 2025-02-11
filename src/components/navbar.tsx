import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <nav className="w-full py-4 px-4 md:px-0">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">PIXEL WEB</h1>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger className="md:hidden">
            <div className="w-8 h-8 flex flex-col justify-center gap-1.5 group">
              <div className="w-full h-0.5 bg-black transition-all duration-300 group-hover:w-1/2"></div>
              <div className="w-full h-0.5 bg-black transition-all duration-300"></div>
              <div className="w-full h-0.5 bg-black transition-all duration-300 group-hover:w-3/4"></div>
            </div>
          </SheetTrigger>
          <SheetContent side="right" className="w-full border-0 p-0">
            <div className="h-full w-full bg-white text-black px-4 py-8 flex flex-col">
              <div className="flex justify-between items-center mb-12">
                <h2 className="text-xl font-bold">PIXEL WEB</h2>
                <SheetTrigger>
                  <X className="h-6 w-6 transition-transform duration-300 hover:rotate-90 hover:scale-110" />
                </SheetTrigger>
              </div>

              <div className="flex-1 flex flex-col justify-center items-center gap-8 text-4xl font-light">
                <a href="/" className="relative group">
                  <span className="transition-colors duration-300 group-hover:text-gray-400">
                    Home
                  </span>
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="/services" className="relative group">
                  <span className="transition-colors duration-300 group-hover:text-gray-400">
                    Services
                  </span>
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="/prices" className="relative group">
                  <span className="transition-colors duration-300 group-hover:text-gray-400">
                    Preços
                  </span>
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="/portfolio" className="relative group">
                  <span className="transition-colors duration-300 group-hover:text-gray-400">
                    Portefólio
                  </span>
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>

              <div className="mt-auto w-full">
                <a href="/contact">
                  <Button
                    variant="outline"
                    className="w-full rounded-full border-2 border-black text-black transition-all duration-300 hover:bg-black hover:text-white hover:scale-[1.02] active:scale-100"
                  >
                    Contacte-nos
                  </Button>
                </a>

                <div className="flex justify-center gap-6 mt-8">
                  <a
                    href="#"
                    className="text-black hover:text-gray-600 transition-colors duration-300"
                  >
                    𝕏
                  </a>
                  <a
                    href="#"
                    className="text-black hover:text-gray-600 transition-colors duration-300"
                  >
                    in
                  </a>
                  <a
                    href="#"
                    className="text-black hover:text-gray-600 transition-colors duration-300"
                  >
                    fb
                  </a>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <a
            href="/"
            className="hover:text-gray-600 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="/services"
            className="hover:text-gray-600 transition-colors duration-300"
          >
            Services
          </a>
          <a
            href="/prices"
            className="hover:text-gray-600 transition-colors duration-300"
          >
            Preços
          </a>
          <a
            href="/portfolio"
            className="hover:text-gray-600 transition-colors duration-300"
          >
            Portefólio
          </a>
          <a href="/contact">
            <Button
              variant="outline"
              className="rounded-full border-2 transition-all duration-300 hover:scale-105"
            >
              Contacte-nos
            </Button>
          </a>
          <div className="flex gap-2">
            <span>PT</span>
            <span>EN</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
