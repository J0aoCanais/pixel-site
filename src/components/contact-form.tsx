import Navbar from "./navbar";
import Footer from "./footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    const formData = new FormData(form);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    await fetch("https://n8n.automacoes.fun/webhook/formularionext", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    form.reset();
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-black to-black">
      <Navbar />
      <main className="flex-1 w-full py-8 md:py-20 relative overflow-hidden">
        {/* Neon SVG lines - topo (z-0, behind everything) */}
        <motion.svg className="absolute left-0 top-0 w-full h-full z-0 pointer-events-none" width="100%" height="100%" viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 0.18, scale: 1 }} transition={{ duration: 1.2 }}>
          <motion.line x1="100" y1="50" x2="1100" y2="50" stroke="#fff" strokeWidth="2" strokeDasharray="20 10" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.2 }} style={{ filter: 'drop-shadow(0 0 12px #fff)' }} />
          <motion.circle cx="900" cy="300" r="80" stroke="#fff" strokeWidth="1.5" strokeDasharray="12 8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.4 }} style={{ filter: 'drop-shadow(0 0 8px #fff)' }} />
          <motion.line x1="200" y1="350" x2="1000" y2="350" stroke="#fff" strokeWidth="2" strokeDasharray="16 8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.5 }} style={{ filter: 'drop-shadow(0 0 6px #fff)' }} />
        </motion.svg>
        {/* Card Unificado Glassmorphism */}
        <div className="container mx-auto max-w-3xl px-2 sm:px-4 md:px-0 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="backdrop-blur-xl bg-white/10 border border-white/30 rounded-3xl shadow-[0_0_32px_#fff8] flex flex-col md:flex-row overflow-hidden p-0"
          >
            <div className="flex flex-col md:flex-row w-full">
              {/* Contact Info + Form */}
              <div className="flex-1 p-8 flex flex-col gap-8 justify-between">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white drop-shadow-[0_0_12px_#fff] text-center md:text-left">
                    Informações de Contacto
                  </h2>
                  <p className="text-gray-300 mb-8 text-center md:text-left">
                    Diga algo para iniciar uma conversa!
                  </p>
                  <div className="flex flex-col sm:flex-row sm:justify-center md:justify-start gap-8 mb-8">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl text-white drop-shadow-[0_0_12px_#fff] animate-pulse"><i className="fas fa-phone"></i></span>
                      <span className="text-white font-medium">+102 3456 789</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl text-white drop-shadow-[0_0_12px_#fff] animate-pulse"><i className="fas fa-envelope"></i></span>
                      <span className="text-white font-medium">demo@gmail.com</span>
                    </div>
                  </div>
                  <div className="flex gap-4 justify-center md:justify-start mb-8">
                    <a href="https://www.instagram.com/nextjai.automation?igsh=a2xubnIyYXBuOHZt&utm_source=qr" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/30 transition-all duration-300 shadow-[0_0_12px_#fff] hover:shadow-[0_0_24px_#fff]">
                      <i className="fab fa-instagram text-white"></i>
                    </a>
                    <a href="https://wa.me/message/TLSX455SIT2KD1" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/30 transition-all duration-300 shadow-[0_0_12px_#fff] hover:shadow-[0_0_24px_#fff]">
                      <i className="fab fa-whatsapp text-white"></i>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/30 transition-all duration-300 shadow-[0_0_12px_#fff] hover:shadow-[0_0_24px_#fff]">
                      <i className="fab fa-facebook text-white"></i>
                    </a>
                  </div>
                </div>
                {/* Divider sutil */}
                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent my-4 rounded-full" />
                {/* Formulário */}
                <form className="space-y-5" ref={formRef} onSubmit={handleSubmit}>
                  <div className="flex gap-4 flex-col md:flex-row">
                    <input name="empresa" type="text" placeholder="Empresa" className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 shadow-[0_0_8px_#fff8] backdrop-blur-md" />
                    <input name="nome" type="text" placeholder="Nome" className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 shadow-[0_0_8px_#fff8] backdrop-blur-md" />
                  </div>
                  <div className="flex gap-4 flex-col md:flex-row">
                    <input name="email" type="email" placeholder="Email" className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 shadow-[0_0_8px_#fff8] backdrop-blur-md" />
                    <input name="telemovel" type="text" placeholder="Telemóvel" className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 shadow-[0_0_8px_#fff8] backdrop-blur-md" />
                  </div>
                  <textarea name="mensagem" placeholder="A sua mensagem..." rows={4} className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 shadow-[0_0_8px_#fff8] backdrop-blur-md"></textarea>
                  <Button className="w-full bg-white text-black hover:bg-gray-100 hover:text-black rounded-lg py-3 font-bold shadow-lg hover:shadow-[0_0_32px_#fff] transition-all duration-300 border-2 border-white text-lg tracking-wide">
                    Enviar Mensagem
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
