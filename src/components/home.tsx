import { Button } from "@/components/ui/button";
import Navbar from "./navbar";
import Footer from "./footer";
import Counter from "./counter-animation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [currentService, setCurrentService] = useState(0);
  const services = [
    {
      title: "Web Design & Development",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
      icon: "🌐",
    },
    {
      title: "Chat IA",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
      icon: "🤖",
    },
    {
      title: "Sistema de Reservas",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
      icon: "📅",
    },
    {
      title: "Web Design & Development",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
      icon: "💻",
    },
  ];

  useEffect(() => {
    // Load testimonials script
    const script = document.createElement("script");
    script.src = "/src/components/testimonials.js";
    script.async = true;
    document.body.appendChild(script);

    const timer = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => {
      document.body.removeChild(script);
      clearInterval(timer);
    };
  }, []);

  const nextService = () => {
    setCurrentService((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setCurrentService((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 w-full overflow-hidden">
        {/* Hero Section */}
        <div className="w-full px-4 md:px-8 py-4 md:py-8">
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-center max-w-7xl mx-auto">
            <div className="space-y-4 md:space-y-6 relative z-10">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Revolucione o seu
                <br />
                <span className="text-gray-400">Negócio</span> connosco
              </h1>
              <p className="text-gray-600 text-sm md:text-base max-w-lg">
                Desenvolvemos websites inovadores e personalizados que
                potencializam o crescimento do seu negócio online. Transforme
                sua presença digital com soluções à medida.
              </p>
              <a href="/contact" className="mt-4 md:mt-8 inline-block cursor-pointer">
                <Button className="rounded-full text-base md:text-lg px-6 md:px-8 py-4 md:py-6 bg-black text-white">
                  Contacte-nos
                </Button>
              </a>
            </div>
            <div className="relative h-[400px] sm:h-[600px] md:h-[700px] lg:h-[800px] w-full">
              <img
                src="/src/assets/AI_MODEL.svg"
                alt="AI Head"
                className="absolute right-0 top-0 w-full h-full object-contain md:object-cover scale-110 transform md:translate-x-0 z-0"
              />
            </div>
          </div>
        </div>
        <div className="w-12 h-1 mx-auto bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300"></div>
        {/* Services Section */}
        <div className="w-full px-4 md:px-8 py-8 md:py-16 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold">Os nossos serviços</h2>
            </div>

            <div className="relative">
              {/* Navigation Arrows */}
              <button
                onClick={prevService}
                className="absolute left-[-60px] top-[150px] z-10 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 transition-colors"
                aria-label="Previous service"
              >
                <i className="fas fa-chevron-left text-lg"></i>
              </button>

              <button
                onClick={nextService}
                className="absolute right-[-60px] top-[150px] z-10 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 transition-colors"
                aria-label="Next service"
              >
                <i className="fas fa-chevron-right text-lg"></i>
              </button>

              {/* Services Carousel */}
              <div className="relative h-[300px] flex items-center justify-center px-16">
                <AnimatePresence mode="popLayout">
                  {services.map((service, index) => {
                    const position = (index - currentService + services.length) % services.length;
                    const isActive = position === 0;
                    const offset = position === 0 ? 0 : position <= services.length / 2 ? 300 : -300;

                    return (
                      <motion.div
                        key={index}
                        initial={{ scale: 0.8, opacity: 0, x: offset }}
                        animate={{
                          scale: isActive ? 1 : 0.7,
                          opacity: isActive ? 1 : 0.3,
                          x: offset,
                          zIndex: isActive ? 1 : 0,
                        }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className={`absolute top-[50px] w-full max-w-lg mx-auto ${
                          isActive ? "z-10" : "z-0"
                        }`}
                      >
                        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transform transition-all duration-300">
                          <div className="text-5xl mb-6">{service.icon}</div>
                          <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                          <p className="text-gray-600 text-base">{service.description}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>

              {/* Service Indicators */}
              <div className="flex justify-center gap-2">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentService(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentService ? "bg-black w-4" : "bg-gray-300"
                    }`}
                    aria-label={`Go to service ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="text-center mt-8 md:mt-12">
              <Button
                variant="outline"
                className="rounded-full border-2 border-black text-black hover:bg-black hover:text-white px-6 md:px-8 py-2 md:py-3"
              >
                Ver mais
              </Button>
            </div>
          </div>
        </div>
        <div className="w-12 h-1 mx-auto bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300"></div>
        {/* Reasons Section */}
        <div className="w-full px-4 md:px-8 py-8 md:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold">
                As razões pelo qual nos
                <br />
                deve escolher
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  title: "Entrega Rápida",
                  description:
                    "Priorizamos processos ágeis e eficientes, garantindo que seu site esteja pronto para uso no menor tempo possível sem comprometer a qualidade do projeto.",
                  bgColor: "bg-orange-100",
                  icon: (
                    <i className="fas fa-rocket text-orange-500 text-2xl"></i>
                  ),
                },
                {
                  title: "Acrescentamos Valor",
                  description:
                    "Nosso trabalho vai além do desenvolvimento; buscamos agregar valor ao seu negócio através de estratégias que aumentam a visibilidade, atraem mais clientes e fortalecem sua marca.",
                  bgColor: "bg-blue-100",
                  icon: (
                    <i className="fas fa-chart-line text-blue-500 text-2xl"></i>
                  ),
                },
                {
                  title: "Soluções Escaláveis",
                  description:
                    "Desenvolvemos projetos que acompanham o crescimento da sua empresa, permitindo expansões e atualizações conforme as demandas do mercado evoluem.",
                  bgColor: "bg-purple-100",
                  icon: (
                    <i className="fas fa-expand-arrows-alt text-purple-500 text-2xl"></i>
                  ),
                },
                {
                  title: "Suporte Contínuo",
                  description:
                    "Oferecemos suporte pós-lançamento e manutenção contínua, assegurando que o site se mantenha seguro, atualizado e com desempenho otimizado ao longo do tempo.",
                  bgColor: "bg-green-100",
                  icon: (
                    <i className="fas fa-headset text-green-500 text-2xl"></i>
                  ),
                },
              ].map((reason, index) => (
                <div
                  key={index}
                  className="text-center hover:transform hover:scale-105 transition-transform duration-300"
                >
                  <div
                    className={`w-16 h-16 ${reason.bgColor} rounded-lg mx-auto mb-4 flex items-center justify-center`}
                  >
                    {reason.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                  <p className="text-gray-600 text-sm">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Stats Section */}
        <div className="w-full py-12 md:py-24 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
              {[
                { number: 50, label: "Projetos Concluídos", suffix: "+" },
                { number: 30, label: "Clientes Satisfeitos", suffix: "+" },
                { number: 5, label: "Anos de Experiência", suffix: "+" },
                { number: 100, label: "Taxa de Satisfação", suffix: "%" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold mb-2">
                    <span className="counter-value">
                      <Counter end={stat.number} suffix={stat.suffix} />
                    </span>
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Partners Section */}
        <div className="w-full px-4 md:px-8 py-8 md:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold">Parceiros</h2>
            </div>

            <div className="flex justify-center items-center gap-8 md:gap-16">
              <img
                src="/src/assets/parceiros.svg"
                alt="Partner 2"
                className="w-full max-w-[300px] md:max-w-[500px] h-auto object-contain py-4"
              />
            </div>
          </div>
        </div>
        <div className="w-12 h-1 mx-auto bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300"></div>
        {/* Testimonials Section */}
        <div className="w-full px-4 md:px-8 py-8 md:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold">O que dizem sobre nós</h2>
            </div>

            <div className="max-w-4xl mx-auto relative">
              <div className="text-center mb-8 md:mb-12 px-4 md:px-16">
                <div id="testimonial-content" className="relative min-h-[200px] flex items-center justify-center mb-20">
                  <img
                    src="/src/assets/quote_left.svg"
                    alt="Quote"
                    className="absolute -top-4 -left-4 w-8 h-8 opacity-85"
                  />
                  <div className="max-w-2xl mx-auto">
                    <p className="text-base md:text-lg" id="testimonial-text">
                      Without any doubt I recommend Alcaline Solutions as one of
                      the best web design and digital marketing agencies. One of
                      the best agencies I've come across so far. Wouldn't be
                      hesitated to introduce their work to someone else.
                    </p>
                  </div>
                  <img
                    src="/src/assets/quote_right.svg"
                    alt="Quote"
                    className="absolute -bottom-4 -right-4 w-8 h-8 opacity-85"
                  />
                </div>

                <div className="flex justify-center items-center space-x-4 md:space-x-12">
                  <button
                    id="prev-testimonial"
                    className="w-10 h-10 rounded-full bg-black text-white shadow-md flex items-center justify-center hover:bg-gray-800 transition-colors z-20"
                    onClick={() => window.changeTestimonial?.("prev")}
                  >
                    <i className="fas fa-arrow-left"></i>
                  </button>

                  <div
                    id="testimonial-clients"
                    className="flex justify-center gap-4 md:gap-8 min-h-[160px] items-center overflow-hidden py-4"
                  >
                    {/* Initial testimonial clients - will be replaced by JS */}
                    {[
                      {
                        name: "Imran Khan",
                        role: "Software Engineer",
                        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=3",
                        active: true,
                      },
                      {
                        name: "Alexander M. Smith",
                        role: "CEO, TechCorp",
                        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
                        active: false,
                      },
                      {
                        name: "Patricia R. Miller",
                        role: "Marketing Director",
                        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=2",
                        active: false,
                      },
                      {
                        name: "Michael J. Brown",
                        role: "Entrepreneur",
                        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=4",
                        active: false,
                      },
                    ].map((person, index) => (
                      <div
                        key={index}
                        id={`client-${index}`}
                        className={`text-center transition-all duration-300 mx-2 w-24 
                          ${person.active ? "scale-125 z-10" : "opacity-50 scale-90"}
                          sm:block ${!person.active ? "hidden sm:block" : ""}`}
                      >
                        <div className="mb-2">
                          <img
                            src={person.image}
                            alt={person.name}
                            className="w-16 h-16 rounded-full mx-auto"
                          />
                        </div>
                        <div className="flex justify-center mb-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <i
                              key={star}
                              className="fas fa-star text-black text-xs"
                            ></i>
                          ))}
                        </div>
                        <p className="text-sm font-medium truncate">{person.name}</p>
                        <p className="text-xs text-gray-500 truncate">{person.role}</p>
                      </div>
                    ))}
                  </div>

                  <button
                    id="next-testimonial"
                    className="w-10 h-10 rounded-full bg-black text-white shadow-md flex items-center justify-center hover:bg-gray-800 transition-colors z-20"
                    onClick={() => window.changeTestimonial?.("next")}
                  >
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-12 md:mt-16 py-12 md:py-16">
              <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24">
                <h3 className="text-xl md:text-2xl font-bold text-center md:text-right">
                  Receba Todas As <br />
                  Novidades
                </h3>
                <div className="relative w-full max-w-xl md:w-1/2 lg:w-2/3">
                  <div className="border-b-2 border-gray-400 pb-4 relative">
                    <input
                      type="email"
                      placeholder="Escreva O Seu Endereço De Email"
                      className="w-full bg-transparent focus:outline-none pr-24 text-sm md:text-base"
                    />
                    <button className="absolute right-0 bottom-4 text-black font-medium flex items-center text-sm md:text-base">
                      Subscribe <i className="fas fa-arrow-right ml-2"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
