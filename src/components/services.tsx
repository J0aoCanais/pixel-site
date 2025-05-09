import Navbar from "./navbar";
import Footer from "./footer";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect, useRef } from "react";

const timelineItems = [
  {
    number: "#1",
    title: "Assemble the right team",
    description:
      "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.",
  },
  {
    number: "#2",
    title: "Sprint planning",
    description:
      "Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.",
  },
  {
    number: "#3",
    title: "Tech architecture",
    description:
      "We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently.",
  },
  {
    number: "#4",
    title: "Standups & weekly demos",
    description:
      "Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.",
  },
  {
    number: "#5",
    title: "Code reviews",
    description:
      "Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells.",
  },
  {
    number: "#6",
    title: "Iterative delivery",
    description:
      "We divide the implementation process into several checkpoints rather than a single deadline.",
  },
];

// Dados para a seção de tabs
const serviceTabsData = [
  {
    id: "budget",
    title: "Budget Overview",
    icon: <i className="fas fa-chart-line text-teal-500"></i>,
    description:
      "Desenvolvemos websites inovadores e personalizados que potencializam o crescimento do seu negócio online. Transforme sua presença digital com soluções à medida que atendem às necessidades específicas do seu negócio.",
    image:
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80",
    secondaryImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    heading: "Desenvolvimento de Websites",
  },
  {
    id: "design",
    title: "Design & Sketch",
    icon: <i className="fas fa-pencil-ruler text-gray-500"></i>,
    description:
      "Criamos designs modernos e intuitivos, com foco na experiência do usuário e sua identidade visual para garantir uma presença online única e memorável que destaca sua marca no mercado digital.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    secondaryImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    heading: "Design & Sketch",
  },
  {
    id: "dev",
    title: "Web Development",
    icon: <i className="fas fa-code text-purple-500"></i>,
    description:
      "Implementamos seu projeto usando as tecnologias mais modernas e práticas de desenvolvimento ágil, garantindo alta performance, escalabilidade e segurança para sua aplicação web ou mobile.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    secondaryImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    heading: "Web Development",
  },
  {
    id: "website",
    title: "Optimize website",
    icon: <i className="fas fa-tachometer-alt text-blue-500"></i>,
    description:
      "Otimizamos seu site para melhor desempenho, velocidade e SEO, garantindo que seu negócio tenha visibilidade e alcance mais clientes online. Nossas estratégias de otimização são baseadas em dados e melhores práticas do mercado.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    secondaryImage:
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80",
    heading: "Optimize Website",
  },
  {
    id: "dashboard",
    title: "Custom Dashboard",
    icon: <i className="fas fa-chart-pie text-orange-500"></i>,
    description:
      "Desenvolvemos dashboards personalizados que oferecem insights valiosos sobre seu negócio, facilitando a tomada de decisões estratégicas e o monitoramento em tempo real do desempenho de suas operações digitais.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    secondaryImage:
      "https://images.unsplash.com/photo-1531746790731-6bf607ccff6f?w=800&q=80",
    heading: "Custom Dashboard",
  },
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Estado para controlar a tab ativa
  const [activeTab, setActiveTab] = useState("budget");

  // Estado para controlar a animação automática
  const [isAutoCycling, setIsAutoCycling] = useState(true);
  const autoChangeInterval = useRef<NodeJS.Timeout | null>(null);

  // Estado para controlar a largura da barra de progresso
  const [progressWidth, setProgressWidth] = useState(20); // Começa em 20% (primeiro item)

  // Encontrar o índice da tab ativa
  const activeTabIndex = serviceTabsData.findIndex(
    (tab) => tab.id === activeTab,
  );

  // Função para mudar para a próxima tab
  const goToNextTab = () => {
    const nextIndex = (activeTabIndex + 1) % serviceTabsData.length;
    setActiveTab(serviceTabsData[nextIndex].id);
  };

  // Efeito para animar a barra de progresso
  useEffect(() => {
    if (!isAutoCycling) return;

    let animationFrame: number;
    let startTime: number | null = null;
    const duration = 5000; // 5 segundos para completar a animação

    // Calcula a largura inicial e final para a animação
    const initialWidth = (activeTabIndex / serviceTabsData.length) * 100;
    const targetWidth = ((activeTabIndex + 1) / serviceTabsData.length) * 100;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Calcula a largura atual com base no progresso da animação
      const currentWidth =
        initialWidth + (targetWidth - initialWidth) * progress;
      setProgressWidth(currentWidth);

      // Se a animação não estiver completa, continua
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        // Quando a animação completa, muda para a próxima tab
        if (isAutoCycling) {
          goToNextTab();
        }
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [activeTabIndex, isAutoCycling]);

  // Pausa a animação automática quando o usuário interage
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);

    // Atualiza a largura da barra de progresso para a tab selecionada
    const newIndex = serviceTabsData.findIndex((tab) => tab.id === tabId);
    setProgressWidth(((newIndex + 1) / serviceTabsData.length) * 100);

    // Não desativa a animação automática, apenas reinicia a partir da nova posição
    // Removido: setIsAutoCycling(false);

    // Não é mais necessário reativar a animação após um tempo
    // Removido: setTimeout(() => { setIsAutoCycling(true); }, 15000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        {/* Seção Confie em nós - Atualizada conforme a imagem */}
        <div className="container mx-auto py-16 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl"
            >
              <h2 className="text-6xl font-bold mb-6 leading-tight">
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
                <Button className="bg-black text-white hover:bg-gray-800 px-6 rounded-full self-end">
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
              {/* Imagem estática à direita */}
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

        {/* Nova seção de tabs de serviços */}
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            {/* Tabs de serviços */}
            <div className="mb-12">
              <div className="flex justify-center space-x-6 md:space-x-12 mb-6">
                {serviceTabsData.map((tab, index) => (
                  <motion.div
                    key={tab.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`text-center cursor-pointer transition-all`}
                    onClick={() => handleTabClick(tab.id)}
                  >
                    <div
                      className={`w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-2 transition-colors ${activeTab === tab.id ? "bg-teal-50" : ""}`}
                    >
                      {tab.icon}
                    </div>
                    <p className="text-xs font-medium text-gray-600">
                      {tab.title}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Barra de progresso */}
              <div className="h-1 bg-gray-200 w-full mb-8 relative max-w-3xl mx-auto">
                <motion.div
                  className="absolute h-1 bg-teal-500"
                  style={{ width: `${progressWidth}%`, left: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Conteúdo dinâmico baseado na tab selecionada */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mt-16">
              {/* Imagens à esquerda */}
              <div className="order-1">
                {/* Imagens sobrepostas com posições invertidas */}
                <div className="relative ml-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`main-${activeTab}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="rounded-lg overflow-hidden shadow-lg z-0 relative"
                    >
                      <img
                        src={
                          serviceTabsData.find((tab) => tab.id === activeTab)
                            ?.image
                        }
                        alt="Service"
                        className="w-full h-80 object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`secondary-${activeTab}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 40 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="absolute -bottom-16 -right-12 w-2/3 rounded-lg overflow-hidden shadow-lg z-10"
                    >
                      <img
                        src={
                          serviceTabsData.find((tab) => tab.id === activeTab)
                            ?.secondaryImage
                        }
                        alt="Service Secondary"
                        className="w-full h-64 object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Texto à direita */}
              <div className="order-2 pr-8 lg:pl-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`content-${activeTab}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Typing effect for heading */}
                    <motion.h3
                      className="text-5xl font-bold mb-6 min-h-[4rem]"
                      initial={{ opacity: 1 }}
                      animate={{
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.05,
                        },
                      }}
                    >
                      {serviceTabsData
                        .find((tab) => tab.id === activeTab)
                        ?.heading.split("")
                        .map((char, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.1, delay: index * 0.05 }}
                          >
                            {char}
                          </motion.span>
                        ))}
                    </motion.h3>

                    <motion.p
                      className="text-gray-600 mb-8 text-lg"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      {
                        serviceTabsData.find((tab) => tab.id === activeTab)
                          ?.description
                      }
                    </motion.p>

                    <motion.p
                      className="text-gray-600 mb-8"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      Nossos especialistas trabalham com as mais recentes
                      tecnologias e metodologias para garantir resultados
                      excepcionais. Cada projeto é tratado com dedicação e
                      atenção aos detalhes, assegurando que sua visão seja
                      transformada em realidade digital de forma eficiente e
                      inovadora.
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <Button className="bg-black text-white hover:bg-gray-800 px-6 py-2 rounded-full">
                        Portfolio
                      </Button>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Roadmap Section */}
        <div className="container mx-auto py-8 px-4 mt-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">O Caminho para o seu sucesso</h2>
          </div>

          <div className="relative">
            {/* Linha horizontal principal */}
            <div
              className="absolute left-0 right-0 h-0.5 bg-gray-300 z-10"
              style={{ top: "50%" }}
            ></div>

            <div className="flex justify-between relative z-20">
              {/* COLUNA 1 */}
              <div className="w-1/3 flex flex-col items-center relative">
                {/* Linha superior */}
                <div className="absolute h-6 w-0.5 bg-gray-300 bottom-[50%] left-[27%]"></div>

                {/* Item #1 */}
                <div className="relative bg-white p-4 rounded shadow-md border border-gray-200 mb-6 w-7/12 min-h-[120px] right-[23%]">
                  <div className="flex items-baseline">
                    <p className="text-gray-500 text-sm font-bold mr-2">#1</p>
                    <h3 className="font-bold text-sm">
                      Assemble the right team
                    </h3>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">
                    We handle all aspects of vetting and choosing the right team
                    that you don't have the time, expertise, or desire to do.
                  </p>
                </div>

                {/* Linha inferior */}
                <div className="absolute h-6 w-0.5 bg-gray-300 top-[50%] left-[73%]"></div>

                {/* Item #2 */}
                <div className="relative bg-white p-4 rounded shadow-md border border-gray-200 mt-6 w-7/12 min-h-[120px] left-[23%]">
                  <div className="flex items-baseline">
                    <p className="text-gray-500 text-sm font-bold mr-2">#2</p>
                    <h3 className="font-bold text-sm">Spirit planning</h3>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">
                    Spirit roadmap is a collective planning effort. Team members
                    collaborate to clarify items and ensure shared
                    understanding.
                  </p>
                </div>
              </div>

              {/* COLUNA 2 */}
              <div className="w-1/3 flex flex-col items-center relative">
                <div className="absolute h-6 w-0.5 bg-gray-300 bottom-[50%] left-[27%]"></div>

                <div className="relative bg-white p-4 rounded shadow-md border border-gray-200 mb-6 w-7/12 min-h-[120px] right-[23%]">
                  <div className="flex items-baseline">
                    <p className="text-gray-500 text-sm font-bold mr-2">#3</p>
                    <h3 className="font-bold text-sm">Tech architecture</h3>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">
                    We break monolithic apps into microservices. Decoupling the
                    code allows teams to move faster and more independently.
                  </p>
                </div>

                <div className="absolute h-6 w-0.5 bg-gray-300 top-[50%] left-[73%]"></div>

                <div className="relative bg-white p-4 rounded shadow-md border border-gray-200 mt-6 w-7/12 min-h-[120px] left-[23%]">
                  <div className="flex items-baseline">
                    <p className="text-gray-500 text-sm font-bold mr-2">#4</p>
                    <h3 className="font-bold text-sm">
                      Standups & weekly demos
                    </h3>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">
                    Standups, weekly demos, and weekly reviews make sure
                    everyone can be on the same page and can raise their
                    concerns.
                  </p>
                </div>
              </div>

              {/* COLUNA 3 */}
              <div className="w-1/3 flex flex-col items-center relative">
                <div className="absolute h-6 w-0.5 bg-gray-300 bottom-[50%] left-[27%]"></div>

                <div className="relative bg-white p-4 rounded shadow-md border border-gray-200 mb-6 w-7/12 min-h-[120px] right-[23%]">
                  <div className="flex items-baseline">
                    <p className="text-gray-500 text-sm font-bold mr-2">#5</p>
                    <h3 className="font-bold text-sm">Code reviews</h3>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">
                    Code reviews before release help detect issues like memory
                    leaks, file leaks, performance signs, and general bad
                    smells.
                  </p>
                </div>

                <div className="absolute h-6 w-0.5 bg-gray-300 top-[50%] left-[73%]"></div>

                <div className="relative bg-white p-4 rounded shadow-md border border-gray-200 mt-6 w-7/12 min-h-[120px] left-[23%]">
                  <div className="flex items-baseline">
                    <p className="text-gray-500 text-sm font-bold mr-2">#6</p>
                    <h3 className="font-bold text-sm">Iterative delivery</h3>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">
                    We divide the implementation process into several
                    checkpoints rather than a simple deadline.
                  </p>
                </div>
              </div>
            </div>

            {/* Troféu no final */}
            <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 z-30">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
            </div>
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
