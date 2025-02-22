import { useState, useEffect } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import React from "react";
import { Button } from "@/components/ui/button";

function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentService, setCurrentService] = useState(0);

  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev < testimonials.length - 1 ? prev + 1 : 0,
      );
    }, 5000); // Change testimonial every 5 seconds

    const serviceTimer = setInterval(() => {
      setCurrentService((prev) => (prev < 2 ? prev + 1 : 0));
    }, 3000); // Change service every 3 seconds

    return () => {
      clearInterval(testimonialTimer);
      clearInterval(serviceTimer);
    };
  }, []);

  const testimonials = [
    {
      name: "João Silva",
      company: "Restaurante Sabores",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
      rating: 5,
      text: "A Pixel Web transformou completamente a presença online do meu restaurante. O sistema de reservas que implementaram aumentou nossa eficiência em 40%.",
    },
    {
      name: "Maria Santos",
      company: "Clínica Bem-Estar",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=2",
      rating: 5,
      text: "Excelente trabalho! O novo website atraiu mais pacientes e o sistema de agendamento online facilitou muito nossa gestão diária.",
    },
    {
      name: "Pedro Costa",
      company: "Academia Fitness Plus",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=3",
      rating: 5,
      text: "O chatbot IA que implementaram reduziu nossa carga de trabalho em 60%. A equipe é super profissional e entregou além das expectativas.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="container mx-auto py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-12 px-4 md:px-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Revolucione o seu <span className="text-gray-500">Negócio</span>{" "}
                conosco
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                Desenvolvemos websites inovadores e personalizados que
                potencializam o crescimento do seu negócio online. Transforme
                sua presença digital com soluções à medida.
              </p>
              <a href="/contact">
                <Button className="rounded-full text-lg px-8 py-6 bg-black text-white hover:bg-gray-800">
                  Contacte-nos
                </Button>
              </a>
            </div>
            <div className="relative h-[500px] md:h-[600px]">
              <img
                src="/src/fotos/ai-head-Photoroom.png"
                alt="AI Head"
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-0">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">Os nossos serviços</h2>
              <div className="w-12 h-1 bg-black mx-auto"></div>
            </div>

            <div className="relative max-w-4xl mx-auto px-12">
              <div className="flex items-center justify-center gap-8">
                {[
                  {
                    title: "Web Design & Development",
                    description:
                      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
                  },
                  {
                    title: "Sistema de Reservas",
                    description:
                      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
                  },
                  {
                    title: "Chat IA",
                    description:
                      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
                  },
                ].map((service, index) => (
                  <div
                    key={index}
                    className={`absolute w-full max-w-md transition-all duration-500 ${
                      index === currentService
                        ? "opacity-100 scale-100 z-20"
                        : index === (currentService + 1) % 3
                          ? "opacity-40 scale-90 translate-x-[60%] z-10"
                          : index === (currentService + 2) % 3
                            ? "opacity-40 scale-90 -translate-x-[60%] z-10"
                            : ""
                    }`}
                  >
                    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full mb-4">
                        <span className="text-xl">&lt;/&gt;</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() =>
                  setCurrentService((prev) => (prev > 0 ? prev - 1 : 2))
                }
                className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors z-30"
              >
                ←
              </button>
              <button
                onClick={() =>
                  setCurrentService((prev) => (prev < 2 ? prev + 1 : 0))
                }
                className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors z-30"
              >
                →
              </button>
            </div>

            <div className="text-center mt-12">
              <Button
                variant="outline"
                className="rounded-full border-2 border-black"
              >
                Ver mais
              </Button>
            </div>
          </div>
        </div>

        {/* Reasons Section */}
        <div className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold">
                As razões pelo qual nos deve escolher
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b"
                  alt="Product 1"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8c"
                  alt="Product 2"
                  className="w-full h-48 object-cover rounded-lg mt-8"
                />
                <img
                  src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8d"
                  alt="Product 3"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8e"
                  alt="Product 4"
                  className="w-full h-48 object-cover rounded-lg mt-8"
                />
              </div>

              <div className="space-y-8">
                {[
                  {
                    title: "Experiência Comprovada",
                    description:
                      "Com mais de 5 anos no mercado, já ajudamos mais de 100 empresas a transformar sua presença digital e aumentar seus resultados.",
                  },
                  {
                    title: "Tecnologia de Ponta",
                    description:
                      "Utilizamos as mais recentes tecnologias e práticas de desenvolvimento para garantir websites rápidos, seguros e escaláveis.",
                  },
                  {
                    title: "Suporte Dedicado",
                    description:
                      "Nossa equipe está sempre disponível para ajudar, oferecendo suporte técnico e atualizações contínuas para seu projeto.",
                  },
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Section */}
        <div className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                Websites personalizados para todo o tipo de empresas
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
                  alt="Personal Trainer Website"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Personal Trainer</h3>
                  <p className="text-gray-600 mb-6">
                    A Website is an extension of yourself and we can help you to
                    express it properly. In a digital age, your website is your
                    number one marketing asset.
                  </p>
                  <Button
                    variant="link"
                    className="text-black hover:text-gray-600"
                  >
                    Explore website →
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
                  alt="Restaurant Website"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Restaurant</h3>
                  <p className="text-gray-600 mb-6">
                    A Website is an extension of yourself and we can help you to
                    express it properly. In a digital age, your website is your
                    number one marketing asset.
                  </p>
                  <Button
                    variant="link"
                    className="text-black hover:text-gray-600"
                  >
                    Explore website →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">O que dizem sobre nós</h2>
            </div>

            <div className="relative overflow-hidden max-w-2xl mx-auto">
              <div className="relative w-full mx-auto">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="text-center w-full absolute transition-all duration-500 opacity-0"
                    style={{
                      transform: `translateX(${(index - currentTestimonial) * 100}%)`,
                      opacity: index === currentTestimonial ? 1 : 0,
                    }}
                  >
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 mx-auto mb-4 rounded-full"
                    />
                    <div className="flex justify-center mb-2 text-yellow-400">
                      {"★".repeat(testimonial.rating)}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      {testimonial.text}
                    </p>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">
                      {testimonial.company}
                    </p>
                  </div>
                ))}
              </div>
              <button
                onClick={() =>
                  setCurrentTestimonial((prev) =>
                    prev > 0 ? prev - 1 : testimonials.length - 1,
                  )
                }
                className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                ←
              </button>
              <button
                onClick={() =>
                  setCurrentTestimonial((prev) =>
                    prev < testimonials.length - 1 ? prev + 1 : 0,
                  )
                }
                className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">FAQ's</h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "What is UX design?",
                  answer:
                    "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
                },
                {
                  question: "What are the key principles of UX design?",
                  answer:
                    "The key principles include usability, accessibility, hierarchy, consistency, and feedback.",
                },
                {
                  question: "What is the difference between UX and UI design?",
                  answer:
                    "While UX focuses on the overall experience and functionality, UI (User Interface) design focuses on the visual elements and layout.",
                },
                {
                  question: "What is a wireframe?",
                  answer:
                    "A wireframe is a basic visual guide that represents the skeletal framework of a website or app.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow group"
                  onClick={(e) => {
                    const answer = e.currentTarget.querySelector(".answer");
                    const icon = e.currentTarget.querySelector(".icon");
                    if (answer.classList.contains("max-h-0")) {
                      answer.classList.remove("max-h-0", "opacity-0");
                      answer.classList.add("max-h-[200px]", "opacity-100");
                      icon.classList.add("rotate-45");
                    } else {
                      answer.classList.remove("max-h-[200px]", "opacity-100");
                      answer.classList.add("max-h-0", "opacity-0");
                      icon.classList.remove("rotate-45");
                    }
                  }}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    <span className="text-2xl transition-transform duration-300 icon">
                      +
                    </span>
                  </div>
                  <div className="answer overflow-hidden transition-all duration-300 max-h-0 opacity-0">
                    <div className="mt-4 text-gray-600">{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
