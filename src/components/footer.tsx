import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-8 mt-auto px-4 md:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-16">
            <a href="/" className="cursor-pointer">
              <img
                src="/src/assets/PIXEL WEB.svg"
                alt="PIXEL WEB"
                className="h-6 invert font-bold"
              />
            </a>
            <a href="/contact">
              <Button
                variant="outline"
                className="rounded-full border-2 border-white text-white bg-black hover:bg-gray-800"
              >
                Contacte-nos
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-2 md:flex gap-8">
            <a href="/" className="text-white hover:text-gray-300">
              Home
            </a>
            <a href="/services" className="text-white hover:text-gray-300">
              Services
            </a>
            <a href="/prices" className="text-white hover:text-gray-300">
              Preços
            </a>
            <a href="/portfolio" className="text-white hover:text-gray-300">
              Portefólio
            </a>
          </div>

          <div className="flex gap-4">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-black"
            >
              𝕏
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-black"
            >
              in
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-black"
            >
              fb
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400 order-1 md:order-none">
            Designed and developed by PIXEL WEB
          </p>
          <p className="text-sm text-gray-400 order-2 md:order-none">
            © 2024. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-sm text-gray-400 text-center md:text-left order-3 md:order-none">
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
