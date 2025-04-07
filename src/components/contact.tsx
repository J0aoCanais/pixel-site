import Navbar from "./navbar";
import Footer from "./footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="container mx-auto py-16 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl"
            >
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Confie em nós e <br />
                veja os <span className="text-gray-400">negócios</span> <br />
                aparecerem
              </h2>

              <p className="text-gray-600 mb-8">
                Desenvolvemos websites inovadores e personalizados que
                potencializam o crescimento do seu negócio online. Transforme
                sua presença digital com soluções à medida. Desenvolvemos
                websites inovadores e personalizados que potencializam o
                crescimento do seu negócio online.
              </p>

              <div className="flex flex-col md:flex-row gap-4 mb-12">
                <div className="relative flex-grow">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full py-3 px-4 border-b-2 border-gray-300 focus:outline-none focus:border-black transition-colors"
                  />
                </div>
                <Button className="bg-black text-white hover:bg-gray-800 px-6 rounded-full">
                  Contacte-nos
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-lg overflow-hidden shadow-xl"
            >
              <div className="grid grid-cols-1 items-center">
                <div className="overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                    alt="Business Growth"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-black p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">
                    Informações de Contato
                  </h3>
                  <p className="mb-8 text-gray-300">
                    Estamos prontos para ajudar a transformar sua presença
                    digital. Entre em contato conosco hoje mesmo.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="text-xl mt-1">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold">Endereço</h4>
                        <p className="text-gray-300">
                          Rua Principal, 123, Lisboa, Portugal
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="text-xl mt-1">
                        <i className="fas fa-phone"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold">Telefone</h4>
                        <p className="text-gray-300">+351 123 456 789</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="text-xl mt-1">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold">Email</h4>
                        <p className="text-gray-300">info@pixelweb.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12">
                    <h4 className="font-semibold mb-4">Siga-nos</h4>
                    <div className="flex gap-4">
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <i className="fab fa-facebook-f text-white"></i>
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <i className="fab fa-twitter text-white"></i>
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <i className="fab fa-instagram text-white"></i>
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <i className="fab fa-linkedin-in text-white"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-6">
                    Envie-nos uma mensagem
                  </h3>

                  <form className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Nome
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="Seu nome completo"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="seu.email@exemplo.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Assunto
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="Assunto da mensagem"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Mensagem
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="Sua mensagem aqui..."
                      ></textarea>
                    </div>

                    <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-md py-3">
                      Enviar Mensagem
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="h-96 w-full bg-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99578.76235181522!2d-9.230243771594918!3d38.736946895165396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331a61e4f33b%3A0x400ebbde49036d0!2sLisbon%2C%20Portugal!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </main>
      <Footer />
    </div>
  );
}
