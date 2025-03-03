import { Button } from "@/components/ui/button";
import Navbar from "./navbar";
import Footer from "./footer";
import Counter from "./counter-animation";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Load testimonials script
    const script = document.createElement("script");
    script.src = "/src/components/testimonials.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="container mx-auto py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 px-4 md:px-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Revolucione o seu
                <br />
                <span className="text-gray-400">Negócio</span> connosco
              </h1>
              <p className="text-gray-600 max-w-lg">
                Desenvolvemos websites inovadores e personalizados que
                potencializam o crescimento do seu negócio online. Transforme
                sua presença digital com soluções à medida.
              </p>
              <a href="/contact" className="mt-8 inline-block cursor-pointer">
                <Button className="rounded-full text-lg px-8 py-6 bg-black text-white">
                  Contacte-nos
                </Button>
              </a>
            </div>
            <div className="relative h-[800px] md:h-[900px] ml-auto transform translate-x-4">
              <img
                src="/src/assets/AI_MODEL.svg"
                alt="AI Head"
                className="right-0 top-0 w-full h-full object-contain scale-110"
              />
            </div>
          </div>
        </div>
        <div className="w-12 h-1 mx-auto bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300"></div>
        {/* Services Section */}
        <div className="py-16">
          <div className="container mx-auto px-4 md:px-0">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Os nossos serviços</h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  title: "Web Design & Development",
                  description:
                    "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
                },
                {
                  title: "Chat IA",
                  description:
                    "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
                },
                {
                  title: "Sistema de Reservas",
                  description:
                    "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
                },
                {
                  title: "Web Design & Development",
                  description:
                    "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
                },
              ].map((service, index) => (
                <div key={index} className="bg-white p-6">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                variant="outline"
                className="rounded-full border-2 border-black text-black hover:bg-black hover:text-white px-8"
              >
                Ver mais
              </Button>
            </div>
          </div>
        </div>
        <div className="w-12 h-1 mx-auto bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300"></div>
        {/* Reasons Section */}
        <div className="py-16">
          <div className="container mx-auto px-4 md:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold">
                As razões pelo qual nos
                <br />
                deve escolher
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
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
        <div className="py-16 md:py-24 bg-black text-white">
          <div className="container mx-auto px-4 md:px-0">
            <div className="grid md:grid-cols-4 gap-8 text-center">
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
        <div className="py-16">
          <div className="container mx-auto px-4 md:px-0">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Parceiros</h2>
            </div>

            <div className="flex justify-center gap-16">
              <img
                src="/src/assets/parceiros.svg"
                alt="Partner 2"
                className="w-50 h-50 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="w-12 h-1 mx-auto bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300"></div>
        {/* Testimonials Section */}
        <div className="py-16">
          <div className="container mx-auto px-4 md:px-0">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">O que dizem sobre nós</h2>
            </div>

            <div className="max-w-4xl mx-auto relative">
              <div className="text-center mb-12 px-4 md:px-16">
                <div id="testimonial-content" className="relative mb-8">
                  <img
                    src="/src/assets/quote_left.svg"
                    alt="Quote"
                    className="absolute -top-6 -left-6 w-4 h-10 opacity-85"
                  />
                  <p className="text-lg mb-8" id="testimonial-text">
                    Without any doubt I recommend Alcaline Solutions as one of
                    the best web design and digital marketing agencies. One of
                    the best agencies I've come across so far. Wouldn't be
                    hesitated to introduce their work to someone else.
                  </p>
                  <img
                    src="/src/assets/quote_right.svg"
                    alt="Quote"
                    className="absolute -bottom-6 -right-6 w-4 h-10 opacity-85"
                  />
                </div>

                <div className="flex justify-center items-center space-x-4 md:space-x-12">
                  <button
                    id="prev-testimonial"
                    className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
                    onClick={() => window.changeTestimonial?.("prev")}
                  >
                    <i className="fas fa-arrow-left"></i>
                  </button>

                  <div
                    id="testimonial-clients"
                    className="flex justify-center gap-4 md:gap-8"
                  >
                    {/* Initial testimonial clients - will be replaced by JS */}
                    {[
                      {
                        name: "Imran Khan",
                        role: "Software Engineer",
                        image:
                          "https://api.dicebear.com/7.x/avataaars/svg?seed=3",
                        active: true,
                      },
                      {
                        name: "Alexander M. Smith",
                        role: "CEO, TechCorp",
                        image:
                          "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
                        active: false,
                      },
                      {
                        name: "Patricia R. Miller",
                        role: "Marketing Director",
                        image:
                          "https://api.dicebear.com/7.x/avataaars/svg?seed=2",
                        active: false,
                      },
                      {
                        name: "Michael J. Brown",
                        role: "Entrepreneur",
                        image:
                          "https://api.dicebear.com/7.x/avataaars/svg?seed=4",
                        active: false,
                      },
                    ].map((person, index) => (
                      <div
                        key={index}
                        id={`client-${index}`}
                        className={`text-center transition-all duration-300 mx-2 ${person.active ? "scale-125 z-10" : "opacity-50 scale-90"}`}
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
                        <p className="text-sm font-medium">{person.name}</p>
                        <p className="text-xs text-gray-500">{person.role}</p>
                      </div>
                    ))}
                  </div>

                  <button
                    id="next-testimonial"
                    className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
                    onClick={() => window.changeTestimonial?.("next")}
                  >
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-16 py-8">
              <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                <h3 className="text-2xl font-bold text-center md:text-right">
                  Receba Todas As <br />
                  Novidades
                </h3>
                <div className="relative w-full md:w-1/3">
                  <div className="border-b border-gray-300 pb-2 relative">
                    <input
                      type="email"
                      placeholder="Escreva O Seu Endereço De Email"
                      className="w-full bg-transparent focus:outline-none pr-24"
                    />
                    <button className="absolute right-0 bottom-2 text-black font-medium flex items-center">
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
