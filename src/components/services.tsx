import Navbar from "./navbar";
import Footer from "./footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const timelineItems = [
  {
    number: "#1",
    title: "Análise e Planejamento",
    description: "Entendemos suas necessidades e desenvolvemos um plano estratégico personalizado para seu projeto.",
  },
  {
    number: "#2",
    title: "Design e Prototipagem",
    description: "Criamos designs modernos e intuitivos, com foco na experiência do usuário e sua identidade visual.",
  },
  {
    number: "#3",
    title: "Desenvolvimento",
    description: "Implementamos seu projeto usando as tecnologias mais modernas e práticas de desenvolvimento ágil.",
  },
  {
    number: "#4",
    title: "Testes e Otimização",
    description: "Realizamos testes rigorosos e otimizamos o desempenho para garantir a melhor experiência.",
  },
  {
    number: "#5",
    title: "Lançamento",
    description: "Preparamos tudo para o lançamento, garantindo uma transição suave e sem problemas.",
  },
  {
    number: "#6",
    title: "Suporte Contínuo",
    description: "Oferecemos suporte contínuo e atualizações para manter seu projeto sempre atualizado e funcionando perfeitamente.",
  },
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        {/* Roadmap Section */}
        <div className="container mx-auto py-16 md:py-20 px-4 md:px-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-3">
              O Caminho para o seu sucesso
            </h2>
            <div className="w-16 h-1 bg-black mx-auto"></div>
          </motion.div>

          <div className="relative mt-16 mb-20" ref={ref}>
            {/* Main horizontal timeline line with animation */}
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-0 right-0 h-1 bg-gradient-to-r from-black via-black to-black top-[250px] md:top-[250px]"
            />

            {/* Timeline items - Top Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mb-32">
              {timelineItems.slice(0, 3).map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 h-full transform transition-transform hover:scale-105 hover:shadow-xl mb-8">
                    <div className="text-black font-bold text-sm mb-2 bg-gray-100 w-fit px-3 py-1 rounded-full">
                      {item.number}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                    className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-4 h-4 bg-black rounded-full z-10 border-2 border-white shadow-lg"
                  />
                  <motion.div
                    initial={{ height: 0 }}
                    animate={inView ? { height: "40px" } : { height: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                    className="absolute left-1/2 transform -translate-x-1/2 bottom-4 w-0.5 bg-black"
                  />
                </motion.div>
              ))}
            </div>

            {/* Timeline items - Bottom Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mt-8">
              {timelineItems.slice(3).map((item, index) => (
                <motion.div
                  key={index + 3}
                  initial={{ opacity: 0, y: -50 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
                  transition={{ duration: 0.6, delay: (index + 3) * 0.2 }}
                  className="relative"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.4, delay: (index + 3) * 0.2 + 0.3 }}
                    className="absolute left-1/2 transform -translate-x-1/2 top-0 w-4 h-4 bg-black rounded-full z-10 border-2 border-white shadow-lg"
                  />
                  <motion.div
                    initial={{ height: 0 }}
                    animate={inView ? { height: "40px" } : { height: 0 }}
                    transition={{ duration: 0.4, delay: (index + 3) * 0.2 + 0.3 }}
                    className="absolute left-1/2 transform -translate-x-1/2 top-4 w-0.5 bg-black"
                  />
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 h-full transform transition-transform hover:scale-105 hover:shadow-xl mt-8">
                    <div className="text-black font-bold text-sm mb-2 bg-gray-100 w-fit px-3 py-1 rounded-full">
                      {item.number}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trophy at the end with animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="absolute right-[-30px] top-[250px] transform -translate-y-1/2 z-10"
            >
              <div className="w-16 h-16 text-yellow-400 flex items-center justify-center bg-white rounded-full shadow-lg border-2 border-yellow-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.343v.256zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 01-2.863 3.207 6.72 6.72 0 00.857-3.294z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="container mx-auto py-16 md:py-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Os Nossos Serviços
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferecemos soluções digitais completas para impulsionar o seu
              negócio online. Desde websites personalizados até sistemas
              complexos de gestão.
            </p>
          </div>
        </div>

        {/* Main Services */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-0">
            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  title: "Web Design & Development",
                  description:
                    "Websites modernos e responsivos que convertem visitantes em clientes.",
                  features: [
                    "Design personalizado",
                    "Otimização para dispositivos móveis",
                    "Integração com redes sociais",
                    "SEO otimizado",
                  ],
                  image:
                    "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
                },
                {
                  title: "Sistema de Reservas",
                  description:
                    "Sistemas completos de reservas online para seu negócio.",
                  features: [
                    "Gestão de disponibilidade",
                    "Pagamentos online",
                    "Notificações automáticas",
                    "Painel administrativo",
                  ],
                  image:
                    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
                },
                {
                  title: "Chat IA",
                  description:
                    "Assistentes virtuais inteligentes para atendimento 24/7.",
                  features: [
                    "Respostas automáticas",
                    "Aprendizagem contínua",
                    "Integração com WhatsApp",
                    "Análise de sentimentos",
                  ],
                  image:
                    "https://images.unsplash.com/photo-1531746790731-6bf607ccff6f",
                },
                {
                  title: "Marketing Digital",
                  description:
                    "Estratégias completas para aumentar sua presença online.",
                  features: [
                    "SEO avançado",
                    "Gestão de redes sociais",
                    "Email marketing",
                    "Análise de dados",
                  ],
                  image:
                    "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="text-black">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-black text-white hover:bg-gray-800">
                      Saber mais
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Como Trabalhamos</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Nosso processo é estruturado para garantir resultados
                excepcionais em cada projeto
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Descoberta",
                  description: "Entendemos suas necessidades e objetivos",
                },
                {
                  step: "02",
                  title: "Planejamento",
                  description: "Desenvolvemos a estratégia e cronograma",
                },
                {
                  step: "03",
                  title: "Execução",
                  description: "Implementamos as soluções definidas",
                },
                {
                  step: "04",
                  title: "Entrega",
                  description: "Realizamos testes e ajustes finais",
                },
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
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
