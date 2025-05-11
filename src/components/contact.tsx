import Navbar from "./navbar";
import Footer from "./footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-gray-900 to-black">
      <Navbar />
      <main className="flex-1 w-full overflow-hidden flex flex-col items-center justify-center">
        {/* Hero Section */}
        <div className="w-full px-4 md:px-8 pt-12 md:pt-20 pb-8 md:pb-16 relative overflow-hidden">
          {/* Neon SVG lines - topo */}
          <motion.svg className="absolute left-0 top-0 w-full h-full z-0 pointer-events-none" width="100%" height="100%" viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 0.18, scale: 1 }} transition={{ duration: 1.2 }}>
            <motion.line x1="100" y1="50" x2="1100" y2="50" stroke="#00eaff" strokeWidth="2" strokeDasharray="20 10" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.2 }} style={{ filter: 'drop-shadow(0 0 12px #00eaff)' }} />
            <motion.circle cx="900" cy="300" r="80" stroke="#fff" strokeWidth="1.5" strokeDasharray="12 8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.4 }} style={{ filter: 'drop-shadow(0 0 8px #fff)' }} />
            <motion.line x1="200" y1="350" x2="1000" y2="350" stroke="#fff" strokeWidth="2" strokeDasharray="16 8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.5 }} style={{ filter: 'drop-shadow(0 0 6px #fff)' }} />
          </motion.svg>
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white drop-shadow-[0_0_16px_#00eaff] text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Fale Connosco e <br />
              surpreenda-se com o <span className="text-[#00eaff] drop-shadow-[0_0_24px_#00eaff] animate-pulse">resultado</span>
            </motion.h2>
            <p className="text-gray-300 mb-8 text-center max-w-2xl">
              Transforme a sua presença digital com um contacto rápido e personalizado. Resposta em menos de 24h!
            </p>
          </div>
        </div>
        {/* Glassmorphism Card Unificado */}
        <motion.div
          className="relative w-full max-w-5xl mx-auto px-2 md:px-0 z-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="backdrop-blur-xl bg-white/10 border border-[#00eaff]/30 rounded-3xl shadow-[0_0_32px_#00eaff33] flex flex-col md:flex-row overflow-hidden">
            {/* Contact Info */}
            <div className="md:w-1/2 w-full p-8 flex flex-col justify-between gap-8 bg-gradient-to-br from-black/60 via-gray-900/60 to-black/60">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white drop-shadow-[0_0_12px_#00eaff]">Informações de Contacto</h3>
                <ul className="space-y-6">
                  <li className="flex items-center gap-4">
                    <span className="text-2xl text-[#00eaff] drop-shadow-[0_0_12px_#00eaff] animate-pulse"><i className="fas fa-phone"></i></span>
                    <span className="text-white font-medium">+351 123 456 789</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="text-2xl text-[#00eaff] drop-shadow-[0_0_12px_#00eaff] animate-pulse"><i className="fas fa-envelope"></i></span>
                    <span className="text-white font-medium">info@pixelweb.com</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="text-2xl text-[#00eaff] drop-shadow-[0_0_12px_#00eaff] animate-pulse"><i className="fas fa-map-marker-alt"></i></span>
                    <span className="text-white font-medium">Lisboa, Portugal</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-[#00eaff]">Redes Sociais</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-[#00eaff]/10 flex items-center justify-center hover:bg-[#00eaff]/30 transition-all duration-300 shadow-[0_0_12px_#00eaff] hover:shadow-[0_0_24px_#00eaff]">
                    <i className="fab fa-facebook-f text-white"></i>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-[#00eaff]/10 flex items-center justify-center hover:bg-[#00eaff]/30 transition-all duration-300 shadow-[0_0_12px_#00eaff] hover:shadow-[0_0_24px_#00eaff]">
                    <i className="fab fa-instagram text-white"></i>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-[#00eaff]/10 flex items-center justify-center hover:bg-[#00eaff]/30 transition-all duration-300 shadow-[0_0_12px_#00eaff] hover:shadow-[0_0_24px_#00eaff]">
                    <i className="fab fa-whatsapp text-white"></i>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-[#00eaff]/10 flex items-center justify-center hover:bg-[#00eaff]/30 transition-all duration-300 shadow-[0_0_12px_#00eaff] hover:shadow-[0_0_24px_#00eaff]">
                    <i className="fab fa-linkedin-in text-white"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* Divider */}
            <div className="hidden md:block w-0.5 bg-gradient-to-b from-[#00eaff]/10 via-[#00eaff]/40 to-[#00eaff]/10 my-8"></div>
            {/* Contact Form */}
            <div className="md:w-1/2 w-full p-8 flex flex-col justify-center bg-gradient-to-br from-black/60 via-gray-900/60 to-black/60">
              <h3 className="text-2xl font-bold mb-6 text-white drop-shadow-[0_0_12px_#00eaff]">Envie-nos uma mensagem</h3>
              <form className="space-y-5">
                <div className="flex gap-4 flex-col md:flex-row">
                  <input type="text" placeholder="Nome" className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-[#00eaff]/30 text-white placeholder:text-[#00eaff]/60 focus:outline-none focus:ring-2 focus:ring-[#00eaff] focus:border-transparent transition-all duration-300 shadow-[0_0_8px_#00eaff33] backdrop-blur-md" />
                  <input type="text" placeholder="Apelido" className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-[#00eaff]/30 text-white placeholder:text-[#00eaff]/60 focus:outline-none focus:ring-2 focus:ring-[#00eaff] focus:border-transparent transition-all duration-300 shadow-[0_0_8px_#00eaff33] backdrop-blur-md" />
                </div>
                <div className="flex gap-4 flex-col md:flex-row">
                  <input type="email" placeholder="Email" className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-[#00eaff]/30 text-white placeholder:text-[#00eaff]/60 focus:outline-none focus:ring-2 focus:ring-[#00eaff] focus:border-transparent transition-all duration-300 shadow-[0_0_8px_#00eaff33] backdrop-blur-md" />
                  <input type="text" placeholder="Telemóvel" className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-[#00eaff]/30 text-white placeholder:text-[#00eaff]/60 focus:outline-none focus:ring-2 focus:ring-[#00eaff] focus:border-transparent transition-all duration-300 shadow-[0_0_8px_#00eaff33] backdrop-blur-md" />
                </div>
                <textarea placeholder="A sua mensagem..." rows={4} className="w-full px-4 py-3 rounded-lg bg-white/10 border border-[#00eaff]/30 text-white placeholder:text-[#00eaff]/60 focus:outline-none focus:ring-2 focus:ring-[#00eaff] focus:border-transparent transition-all duration-300 shadow-[0_0_8px_#00eaff33] backdrop-blur-md"></textarea>
                <Button className="w-full bg-[#00eaff] text-black hover:bg-white hover:text-black rounded-lg py-3 font-bold shadow-lg hover:shadow-[0_0_32px_#00eaff] transition-all duration-300 border-2 border-[#00eaff] text-lg tracking-wide">
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
        {/* Map Section */}
        <div className="h-80 w-full relative overflow-hidden mt-16 rounded-3xl max-w-5xl mx-auto shadow-[0_0_32px_#00eaff33] border border-[#00eaff]/20">
          <motion.svg className="absolute left-0 top-0 w-full h-full z-0 pointer-events-none" width="100%" height="100%" viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 0.10, scale: 1 }} transition={{ duration: 1.2 }}>
            <motion.line x1="100" y1="50" x2="1100" y2="50" stroke="#00eaff" strokeWidth="2" strokeDasharray="20 10" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.2 }} style={{ filter: 'drop-shadow(0 0 12px #00eaff)' }} />
            <motion.circle cx="900" cy="300" r="80" stroke="#fff" strokeWidth="1.5" strokeDasharray="12 8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.4 }} style={{ filter: 'drop-shadow(0 0 8px #fff)' }} />
            <motion.line x1="200" y1="350" x2="1000" y2="350" stroke="#fff" strokeWidth="2" strokeDasharray="16 8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.5 }} style={{ filter: 'drop-shadow(0 0 6px #fff)' }} />
          </motion.svg>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99578.76235181522!2d-9.230243771594918!3d38.736946895165396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331a61e4f33b%3A0x400ebbde49036d0!2sLisbon%2C%20Portugal!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="relative z-10 rounded-3xl"
          ></iframe>
        </div>
      </main>
      <Footer />
    </div>
  );
}
