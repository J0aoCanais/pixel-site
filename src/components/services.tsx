import Navbar from "./navbar";
import Footer from "./footer";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect, useRef } from "react";
import graphics from "/assets/graphics.png";

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
    title: "Prospeção feita por si, todos os dias",
    icon: <i className="fas fa-chart-line text-white drop-shadow-[0_0_8px_#fff]"></i>,
    description:
      "Já imaginou acordar com reuniões marcadas sem ter mexido um dedo? A nossa IA trabalha por si todos os dias: encontra novos clientes, inicia conversas e agenda reuniões automaticamente.",
    paragraph2: 
      "Enquanto você foca em fechar negócios, a tecnologia faz o trabalho de base. Menos tempo em prospeção, mais tempo a faturar. Simples, eficaz e sem esforço.",
    image:
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80",
    secondaryImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    heading: "Prospeção feita por si, todos os dias",
  },
  {
    id: "design",
    title: "Marketing automático que funciona",
    icon: <i className="fas fa-pencil-ruler text-white drop-shadow-[0_0_8px_#fff]"></i>,
    description:
      "Campanhas de email, SMS ou WhatsApp que realmente trazem resultados — sem precisar escrever ou clicar em nada. A nossa IA envia mensagens personalizadas no momento certo para os contactos certos.",
    paragraph2:
      "Enquanto outros ainda estão a planear o que fazer, você já está a gerar vendas no piloto automático. Menos tempo a pensar em marketing, mais dinheiro a entrar.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    secondaryImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    heading: "Marketing automático que funciona",
  },
  {
    id: "dev",
    title: "CRM atualizado sem esforço",
    icon: <i className="fas fa-code text-white drop-shadow-[0_0_8px_#fff]"></i>,
    description:
      "Esqueça o trabalho chato de registar leads ou atualizar tarefas. O nosso sistema faz isso tudo por si automaticamente — cada conversa, cada contacto, tudo no lugar certo.",
    paragraph2:
      "Com o CRM sempre atualizado, tomar decisões e acompanhar oportunidades fica mais fácil e rápido. Menos cliques, mais negócio fechado.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    secondaryImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    heading: "CRM atualizado sem esforço",
  },
  {
    id: "website",
    title: "Ganhe tempo em tarefas repetitivas",
    icon: <i className="fas fa-tachometer-alt text-white drop-shadow-[0_0_8px_#fff]"></i>,
    description:
      "Responder a mensagens, organizar tarefas, enviar lembretes… tudo isso consome tempo e energia. A IA trata dessas rotinas por si, todos os dias.",
    paragraph2:
      "Assim, você pode focar no que realmente importa: crescer, vender, liderar. Com menos horas de trabalho, o resultado multiplica-se.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    secondaryImage:
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80",
    heading: "Ganhe tempo em tarefas repetitivas",
  },
  {
    id: "dashboard",
    title: "Agente 24h por dia",
    icon: <i className="fas fa-chart-pie text-white drop-shadow-[0_0_8px_#fff]"></i>,
    description:
      "Enquanto você descansa, a sua IA continua a responder aos clientes, esclarecer dúvidas e manter tudo a funcionar. É como ter um assistente que nunca dorme.",
    paragraph2:
      "Oferecer suporte rápido e educado 24h por dia sem precisar de equipa extra? Isso é poupar tempo, reduzir custos e ganhar mais — tudo de uma só vez.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    secondaryImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    heading: "Agente 24h por dia",
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
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-blue-950 to-black">
      <main className="flex-1 relative overflow-x-hidden mt-16">
        {/* SVG Neon Lines Top */}
        <motion.svg className="absolute left-0 top-0 w-full h-24 z-0 pointer-events-none" width="100%" height="96" viewBox="0 0 1200 96" fill="none" xmlns="http://www.w3.org/2000/svg" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 0.18, y: 0 }} transition={{ duration: 1.2 }}>
          <motion.line x1="100" y1="48" x2="1100" y2="48" stroke="#fff" strokeWidth="2" strokeDasharray="20 10" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.2 }} style={{ filter: 'drop-shadow(0 0 12px #fff)' }} />
          <motion.circle cx="900" cy="80" r="16" stroke="#fff" strokeWidth="1.5" strokeDasharray="12 8" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.4 }} style={{ filter: 'drop-shadow(0 0 8px #fff)' }} />
        </motion.svg>
        {/* Seção Confie em nós */}
        <div className="container mx-auto py-0 mt-20 mb-0 md:mt-[-6rem] md:mb-[-10rem]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-0 px-4 ">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mx-auto lg:mx-0 lg:text-left"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                Confie e
                veja o <span className="bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 bg-clip-text text-transparent">negócio </span>
                a mudar
              </h2>
              <p className="text-gray-300 mb-8 text-base md:text-lg">
                Ganhe tempo, reduza custos e faça o seu negócio crescer. Com as nossas soluções de automação e inteligência artificial, elimina tarefas manuais que consomem horas valiosas e diminui despesas operacionais. Aumente a produtividade da sua equipa e ofereça um atendimento rápido e eficaz que conquista clientes e impulsiona as vendas. Invista em tecnologia que traz resultados reais e mensuráveis, para que cada euro investido gere retorno concreto.
              </p>
              <div className="flex flex-col md:flex-row gap-4 mb-12 w-full max-w-lg mx-auto lg:mx-0">
                <div className="relative flex-grow">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full py-3 px-4 border-b-2 border-gray-600 focus:outline-none focus:border-white bg-transparent text-white placeholder-gray-400 transition-colors rounded-md"
                  />
                </div>
                <a href="/contact">
                  <Button className="bg-white text-black hover:bg-gray-100 hover:shadow-[0_0_16px_#fff] px-6 rounded-full self-end transition-all duration-300 w-full md:w-auto">
                    Contacte-nos
                  </Button>
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="hidden md:block"
            >
              <img
                src={graphics}
                alt="Business Growth"
                className="object-contain h-auto max-w-full"
                style={{ filter: 'drop-shadow(0 0 16px rgba(255,255,255,0.2))' }}
              />
            </motion.div>
          </div>
        </div>
        {/* Linha divisória animada */}
        <motion.div className="w-full flex justify-center my-4" initial={{ opacity: 0, scaleX: 0.8 }} whileInView={{ opacity: 1, scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="h-1 w-11/12 md:w-3/4 bg-gradient-to-r from-white/10 via-white/60 to-white/10 rounded-full" style={{ filter: 'drop-shadow(0 0 8px #fff)' }} />
        </motion.div>

        <motion.svg className="absolute left-0 top-0 w-1/3 h-1/3 z-0 pointer-events-none" width="100%" height="100%" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 0.12, scale: 1 }} transition={{ duration: 1.2 }}>
          <motion.line x1="50" y1="20" x2="350" y2="180" stroke="#fff" strokeWidth="1.2" strokeDasharray="8 8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.4 }} style={{ filter: 'drop-shadow(0 0 6px #fff)' }} />
          <motion.circle cx="100" cy="100" r="60" stroke="#fff" strokeWidth="1.5" strokeDasharray="10 8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.6 }} style={{ filter: 'drop-shadow(0 0 8px #fff)' }} />
        </motion.svg>

        {/* Nova seção de tabs de serviços */}
        <div className="py-12">
          <div className="container mx-auto px-2 sm:px-4">
            {/* Tabs de serviços */}
            <div className="mb-12">
              <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-6">
                {serviceTabsData.map((tab, index) => (
                  <motion.div
                    key={tab.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`text-center cursor-pointer transition-all w-20`}
                    onClick={() => handleTabClick(tab.id)}
                  >
                    <div
                      className={`w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-2 transition-colors hover:shadow-[0_0_16px_#fff] ${
                        activeTab === tab.id ? "bg-gray-700" : ""
                      }`}
                    >
                      {tab.icon}
                    </div>
                    <p className="text-xs font-medium text-gray-300">
                      {tab.title}
                    </p>
                  </motion.div>
                ))}
              </div>
              {/* Barra de progresso */}
              <div className="h-1 bg-gray-800 w-full mb-8 relative max-w-3xl mx-auto">
                <motion.div
                  className="absolute h-1 bg-white"
                  style={{ width: `${progressWidth}%`, left: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
            {/* Conteúdo dinâmico baseado na tab selecionada */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center mt-6 pl-4 pr-4 md:mt-8">
              {/* Imagens à esquerda */}
              <div className="order-1 w-full max-w-xl mx-auto">
                <div className="relative ml-0 md:ml-4 px-6 sm:px-8 md:px-0">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`main-${activeTab}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="rounded-lg overflow-hidden shadow-lg z-0 relative hover:shadow-[0_0_16px_#fff] transition-all duration-300"
                    >
                      <img
                        src={
                          serviceTabsData.find((tab) => tab.id === activeTab)
                            ?.image
                        }
                        alt="Service"
                        className="w-full h-52 sm:h-56 md:h-80 object-cover"
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
                      className="absolute -bottom-14 -right-2 sm:-bottom-10 sm:-right-4 md:-bottom-16 md:-right-12 w-[60%] sm:w-2/3 rounded-lg overflow-hidden shadow-lg z-10 hover:shadow-[0_0_16px_#fff] transition-all duration-300"
                    >
                      <img
                        src={
                          serviceTabsData.find((tab) => tab.id === activeTab)
                            ?.secondaryImage
                        }
                        alt="Service Secondary"
                        className="w-full h-36 sm:h-40 md:h-64 object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div className="mb-16 sm:mb-10 md:mb-0"></div>
              </div>
              {/* Texto à direita */}
              <div className="order-2 w-full max-w-xl mx-auto px-2 md:px-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`content-${activeTab}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.h3
                      className="text-2xl md:text-5xl font-bold mb-6 min-h-[3rem] md:min-h-[4rem] bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent text-center md:text-left"
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
                      className="text-gray-300 mb-6 md:mb-8 text-base md:text-lg text-center md:text-left"
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
                      className="text-gray-300 mb-6 md:mb-8 text-base md:text-lg text-center md:text-left"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      {
                        serviceTabsData.find((tab) => tab.id === activeTab)
                          ?.paragraph2
                      }
                    </motion.p>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <a href="/contact">
                        <Button className="bg-white text-black hover:bg-gray-100 hover:shadow-[0_0_16px_#fff] px-6 py-2 rounded-full transition-all duration-300 w-full md:w-auto">
                          Contacte-nos
                        </Button>
                      </a>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
        {/* Linha divisória animada antes do roadmap */}
        <motion.div className="w-full flex justify-center my-8" initial={{ opacity: 0, scaleX: 0.8 }} whileInView={{ opacity: 1, scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="h-1 w-11/12 md:w-3/4 bg-gradient-to-r from-white/10 via-white/60 to-white/10 rounded-full" style={{ filter: 'drop-shadow(0 0 8px #fff)' }} />
        </motion.div>
        {/* Roadmap Section */}
        <div className="container mx-auto py-8 pb-24 px-4 mt-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">O Caminho para o seu sucesso</h2>
          </div>
          <div className="relative">
            {/* Linha vertical para mobile */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-white/10 via-white/60 to-white/10 rounded-full z-0 block md:hidden" style={{ transform: 'translateX(-50%)', filter: 'drop-shadow(0 0 8px #fff)' }}></div>
            {/* Linha horizontal para desktop */}
            <motion.div
              className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-white/10 via-white/60 to-white/10 z-10 hidden md:block"
              style={{ top: "50%", filter: 'drop-shadow(0 0 8px #fff)' }}
              initial={{ opacity: 0, scaleX: 0.8 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            ></motion.div>
            <div className="flex flex-col md:flex-row justify-between relative z-20 gap-8 md:gap-0">
              {/* COLUNA 1 */}
              <div className="w-full md:w-1/3 flex flex-col items-center relative mb-8 md:mb-0">
                {/* Linha superior (desktop) */}
                <div className="absolute h-6 w-0.5 bg-gray-700 bottom-[50%] left-[27%] hidden md:block"></div>
                {/* Bolinha marcador (mobile) */}
                <div className="block md:hidden absolute left-1/2 top-0 w-4 h-4 bg-white rounded-full border-4 border-gray-900 z-10" style={{ transform: 'translate(-50%, -50%)', boxShadow: '0 0 8px #fff' }}></div>
                {/* Item #1 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative bg-gray-800 p-4 rounded shadow-md border border-gray-700 mb-6 w-11/12 md:w-7/12 min-h-[120px] right-0 md:right-[23%] hover:shadow-[0_0_16px_#fff] transition-all duration-300 z-20"
                >
                  <div className="flex items-baseline justify-center md:justify-start">
                    <p className="text-gray-400 text-sm font-bold mr-2">#1</p>
                    <h3 className="font-bold text-sm bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                      Consultoria gratuita
                    </h3>
                  </div>
                  <p className="text-xs text-gray-300 mt-1 text-center md:text-left">
                    Oferecemos consultoria gratuita para entender seu negócio, 
                    identificar necessidades e preparar a automação ideal.
                  </p>
                </motion.div>
                {/* Linha inferior (desktop) */}
                <div className="absolute h-6 w-0.5 bg-gray-700 top-[50%] left-[73%] hidden md:block"></div>
                {/* Bolinha marcador (mobile) */}
                <div className="block md:hidden absolute left-1/2 bottom-0 w-4 h-4 bg-white rounded-full border-4 border-gray-900 z-10" style={{ transform: 'translate(-50%, 50%)', boxShadow: '0 0 8px #fff' }}></div>
                {/* Item #2 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative bg-gray-800 p-4 rounded shadow-md border border-gray-700 mt-6 w-11/12 md:w-7/12 min-h-[120px] left-0 md:left-[23%] hover:shadow-[0_0_16px_#fff] transition-all duration-300 z-20"
                >
                  <div className="flex items-baseline justify-center md:justify-start">
                    <p className="text-gray-400 text-sm font-bold mr-2">#2</p>
                    <h3 className="font-bold text-sm bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">Preparação da Proposta</h3>
                  </div>
                  <p className="text-xs text-gray-300 mt-1 text-center md:text-left">
                    Detalhamos as soluções recomendadas, os benefícios que pode esperar, o cronograma previsto e o investimento necessário para implementar a automação
                  </p>
                </motion.div>
              </div>
              {/* COLUNA 2 */}
              <div className="w-full md:w-1/3 flex flex-col items-center relative mb-8 md:mb-0">
                <div className="absolute h-6 w-0.5 bg-gray-700 bottom-[50%] left-[27%] hidden md:block"></div>
                <div className="block md:hidden absolute left-1/2 top-0 w-4 h-4 bg-white rounded-full border-4 border-gray-900 z-10" style={{ transform: 'translate(-50%, -50%)', boxShadow: '0 0 8px #fff' }}></div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative bg-gray-800 p-4 rounded shadow-md border border-gray-700 mb-6 w-11/12 md:w-7/12 min-h-[120px] right-0 md:right-[23%] hover:shadow-[0_0_16px_#fff] transition-all duration-300 z-20"
                >
                  <div className="flex items-baseline justify-center md:justify-start">
                    <p className="text-gray-400 text-sm font-bold mr-2">#3</p>
                    <h3 className="font-bold text-sm bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">Início do Projeto</h3>
                  </div>
                  <p className="text-xs text-gray-300 mt-1 text-center md:text-left">Com a proposta aprovada, avançamos para o arranque do projeto. Nesta fase, começamos a implementar as soluções aos seus processos.
                  </p>
                </motion.div>
                <div className="absolute h-6 w-0.5 bg-gray-700 top-[50%] left-[73%] hidden md:block"></div>
                <div className="block md:hidden absolute left-1/2 bottom-0 w-4 h-4 bg-white rounded-full border-4 border-gray-900 z-10" style={{ transform: 'translate(-50%, 50%)', boxShadow: '0 0 8px #fff' }}></div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative bg-gray-800 p-4 rounded shadow-md border border-gray-700 mt-6 w-11/12 md:w-7/12 min-h-[120px] left-0 md:left-[23%] hover:shadow-[0_0_16px_#fff] transition-all duration-300 z-20"
                >
                  <div className="flex items-baseline justify-center md:justify-start">
                    <p className="text-gray-400 text-sm font-bold mr-2">#4</p>
                    <h3 className="font-bold text-sm bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                      Testes e Ajustes
                    </h3>
                  </div>
                  <p className="text-xs text-gray-300 mt-1 text-center md:text-left">
                    Nesta fase, o sistema já está implementado, mas é testado exaustivamente para garantir que tudo funciona corretamente no ambiente real
                  </p>
                </motion.div>
              </div>
              {/* COLUNA 3 */}
              <div className="w-full md:w-1/3 flex flex-col items-center relative">
                <div className="absolute h-6 w-0.5 bg-gray-700 bottom-[50%] left-[27%] hidden md:block"></div>
                <div className="block md:hidden absolute left-1/2 top-0 w-4 h-4 bg-white rounded-full border-4 border-gray-900 z-10" style={{ transform: 'translate(-50%, -50%)', boxShadow: '0 0 8px #fff' }}></div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative bg-gray-800 p-4 rounded shadow-md border border-gray-700 mb-6 w-11/12 md:w-7/12 min-h-[120px] right-0 md:right-[23%] hover:shadow-[0_0_16px_#fff] transition-all duration-300 z-20"
                >
                  <div className="flex items-baseline justify-center md:justify-start">
                    <p className="text-gray-400 text-sm font-bold mr-2">#5</p>
                    <h3 className="font-bold text-sm bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">Formação e Treino</h3>
                  </div>
                  <p className="text-xs text-gray-300 mt-1 text-center md:text-left">Esta etapa inclui sessões de formação, manuais e suporte inicial para assegurar que todos saibam tirar o máximo proveito da automação.
                  </p>
                </motion.div>
                <div className="absolute h-6 w-0.5 bg-gray-700 top-[50%] left-[73%] hidden md:block"></div>
                <div className="block md:hidden absolute left-1/2 bottom-0 w-4 h-4 bg-white rounded-full border-4 border-gray-900 z-10" style={{ transform: 'translate(-50%, 50%)', boxShadow: '0 0 8px #fff' }}></div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative bg-gray-800 p-4 rounded shadow-md border border-gray-700 mt-6 w-11/12 md:w-7/12 min-h-[120px] left-0 md:left-[23%] hover:shadow-[0_0_16px_#fff] transition-all duration-300 z-20"
                >
                  <div className="flex items-baseline justify-center md:justify-start">
                    <p className="text-gray-400 text-sm font-bold mr-2">#6</p>
                    <h3 className="font-bold text-sm bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">Lançamento Oficial </h3>
                  </div>
                  <p className="text-xs text-gray-300 mt-1 text-center md:text-left">Com tudo feito, o sistema entra em produção para uso diário. Nesta fase, monitorizamos o desempenho, recolhemos feedback e fazemos intervenções rápidas.
                  </p>
                </motion.div>
              </div>
            </div>
            {/* Troféu no final */}
            <div className="absolute md:right-[-650px] md:top-1/2 bottom-(-6) left-1/2 md:transform md:translate-x-1/2 md:-translate-y-1/2 transform -translate-x-1/2 translate-y-1/2 z-30">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center shadow-[0_0_16px_#fff]">
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
      </main>
      <div className="relative w-full">
        {/* Linha divisória animada antes do footer */}
        <motion.div 
          className="w-full flex justify-center mb-4" 
          initial={{ opacity: 0, scaleX: 0.8 }} 
          whileInView={{ opacity: 1, scaleX: 1 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.7 }}
        >
          <div className="h-1 w-11/12 md:w-3/4 bg-gradient-to-r from-white/10 via-white/60 to-white/10 rounded-full" style={{ filter: 'drop-shadow(0 0 8px #fff)' }} />
        </motion.div>
        {/* Neon glow effect behind the footer */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent" style={{ filter: 'blur(20px)' }} />
      </div>
      <Footer />
    </div>
  );
}
