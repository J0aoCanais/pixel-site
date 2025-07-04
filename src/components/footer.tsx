import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Footer() {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-black text-white py-8 mt-auto px-4 md:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-8 w-full md:w-auto">
            <Link to="/" className="cursor-pointer pr-0 md:pr-[45px]" onClick={handleLinkClick}>
              <img
                src="/assets/logo-branco-extended.svg"
                alt="NEXTJAI"
                className="h-11"
              />
            </Link>
            <div className="flex flex-wrap justify-center w-full gap-6 md:hidden">
              <div className="flex justify-center w-full" >
                <Link to="/" className="text-white hover:text-gray-300 hover:drop-shadow-[0_0_12px_#fff] transition-all duration-300 mx-3" onClick={handleLinkClick}>
                  Home
                </Link>
                <Link to="/services" className="text-white hover:text-gray-300 hover:drop-shadow-[0_0_12px_#fff] transition-all duration-300 mx-3" onClick={handleLinkClick}>
                  Services
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden md:flex gap-8">
            <Link to="/" className="text-white hover:text-gray-300 hover:drop-shadow-[0_0_12px_#fff] transition-all duration-300" onClick={handleLinkClick}>
              Home
            </Link>
            <Link to="/services" className="text-white hover:text-gray-300 hover:drop-shadow-[0_0_12px_#fff] transition-all duration-300" onClick={handleLinkClick}>
              Services
            </Link>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <Link to="/contact" onClick={handleLinkClick}>
              <Button
                variant="outline"
                className="rounded-full border-2 border-white text-white bg-black hover:bg-white hover:text-black hover:drop-shadow-[0_0_12px_#fff] transition-all duration-300"
              >
                Contacte-nos
              </Button>
            </Link>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/nextjai.automation"
                className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-white text-white hover:bg-white hover:text-black text-xl hover:drop-shadow-[0_0_12px_#fff] transition-all duration-300"
              >
                <i className="fab fa-instagram flex items-center justify-center w-full h-full leading-none"></i>
              </a>
              <a
                href="https://wa.me/351915417824"
                className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-white text-white hover:bg-white hover:text-black text-xl hover:drop-shadow-[0_0_12px_#fff] transition-all duration-300"
              >
                <i className="fab fa-whatsapp flex items-center justify-center w-full h-full leading-none"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400 order-1 md:order-none hover:drop-shadow-[0_0_12px_#fff] transition-all duration-300">
            Designed and developed by NEXTJAI
          </p>
          <p className="text-sm text-gray-400 order-2 md:order-none hover:drop-shadow-[0_0_12px_#fff] transition-all duration-300">
            © 2025. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-sm text-gray-400 text-center md:text-left order-3 md:order-none">
            <Link to="/privacy" className="text-white text-sm hover:text-white/80 transition-colors duration-300 hover:drop-shadow-[0_0_12px_#fff] pl-0 md:pl-48" onClick={handleLinkClick}>
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
