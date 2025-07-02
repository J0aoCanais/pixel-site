import { Button } from "@/components/ui/button";
import Navbar from "./navbar";
import Footer from "./footer";
import Counter from "./counter-animation";
import { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; 

export default function Home() {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      changeServiceSlide("next");
    }
    if (isRightSwipe) {
      changeServiceSlide("prev");
    }
  };

  // Function to go to a specific service slide
  const goToServiceSlide = (index: number) => {
    setCurrentServiceIndex(index);
  };

  // Function to change service slide
  const changeServiceSlide = (direction: string) => {
    const totalSlides = services.length; // Total number of services
    let newIndex;

    if (direction === "next") {
      newIndex = (currentServiceIndex + 1) % totalSlides;
    } else {
      newIndex = (currentServiceIndex - 1 + totalSlides) % totalSlides;
    }

    goToServiceSlide(newIndex);
  };

  const [services] = useState([
    {
      title: "Prospeção feita por si, todos os dias",
      description:
        "A nossa IA procura novos clientes, envia mensagens e marca reuniões automaticamente. Você só precisa aparecer.",
      icon: <i className="fas fa-laptop-code text-4xl mb-4 text-blue-500"></i>,
      gradient: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      hoverColor: "hover:border-blue-300",
      iconBg: "bg-blue-100"
    },
    {
      title: "Marketing automático que funciona",
      description:
        "Enviamos campanhas por email, SMS ou WhatsApp para os contactos certos, na hora certa. Sem ter de mexer um dedo.",
      icon: <i className="fas fa-robot text-4xl mb-4 text-purple-500"></i>,
      gradient: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200",
      hoverColor: "hover:border-purple-300",
      iconBg: "bg-purple-100"
    },
    {
      title: "CRM atualizado sem esforço",
      description:
        "Nunca mais perca contactos ou siga-ups. Tudo entra direto no CRM — leads, conversas e tarefas — sem precisar preencher à mão.",
      icon: <i className="fas fa-calendar-check text-4xl mb-4 text-green-500"></i>,
      gradient: "from-green-50 to-green-100",
      borderColor: "border-green-200",
      hoverColor: "hover:border-green-300",
      iconBg: "bg-green-100"
    },
    {
      title: "Ganhe tempo em tarefas repetitivas",
      description:
        "Automatizamos o que toma tempo todos os dias. Você foca no que importa, o resto a IA resolve.",
      icon: <i className="fas fa-bullhorn text-4xl mb-4 text-orange-500"></i>,
      gradient: "from-orange-50 to-orange-100",
      borderColor: "border-orange-200",
      hoverColor: "hover:border-orange-300",
      iconBg: "bg-orange-100"
    },
    {
      title: "Agente 24h por dia",
      description:
        "Seus clientes recebem respostas mesmo fora do horário. Suporte rápido e educado — sem precisar de ninguém online.",
      icon: <i className="fas fa-shopping-cart text-4xl mb-4 text-red-500"></i>,
      gradient: "from-red-50 to-red-100",
      borderColor: "border-red-200",
      hoverColor: "hover:border-red-300",
      iconBg: "bg-red-100"
    },
  ]);

  const renderNavigationDots = () => {
    return (
      <div className="flex justify-center mt-8 gap-3">
        {services.map((_, index) => (
          <motion.button
            key={index}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${
              index === currentServiceIndex ? "bg-white shadow-[0_0_8px_#fff]" : "bg-gray-500"
            } hover:bg-white hover:shadow-[0_0_8px_#fff] transition-all duration-300 focus:outline-none`}
            onClick={() => goToServiceSlide(index)}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    );
  };

  // Animated typing effect for the main title
  const phrases = [
    {
      text: "O seu negócio a crescer\nenquanto trata das tarefas importantes",
      highlight: "crescer"
    },
    {
      text: "Automatize tarefas,\nfoco total nas vendas",
      highlight: "Automatize"
    },
    {
      text: "IA que trabalha por si\n24 horas por dia",
      highlight: "IA"
    },
    {
      text: "Menos tarefas,\nmais resultados",
      highlight: "resultados"
    },
    {
      text: "Entre em contacto com os clientes\nmesmo quando está offline",
      highlight: "offline"
    },
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const [isCorrecting, setIsCorrecting] = useState(false);
  const [highlightStart, setHighlightStart] = useState(0);
  const [correctionComplete, setCorrectionComplete] = useState(false);

  useEffect(() => {
    const fullText = phrases[currentPhraseIndex].text;
    const highlightWord = phrases[currentPhraseIndex].highlight;
    let typingSpeed = 70; // Velocidade de digitação mais lenta
    let waitingTime = 2500; // Tempo de espera mais longo
    let deletingSpeed = 40; // Velocidade de deleção mais lenta
    let correctionSpeed = 35; // Velocidade de correção mais lenta

    if (isWaiting) {
      const timeout = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, waitingTime);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < fullText.length) {
          const highlightIndex = fullText.indexOf(highlightWord);
          
          if (highlightIndex !== -1 && !isCorrecting && !correctionComplete && 
              displayedText.length >= highlightIndex + highlightWord.length) {
            setIsCorrecting(true);
            setHighlightStart(highlightIndex);
          }

          if (isCorrecting) {
            if (displayedText.length > highlightStart) {
              setDisplayedText(fullText.slice(0, displayedText.length - 1));
            } else {
              setIsCorrecting(false);
              setCorrectionComplete(true);
            }
          } else {
            setDisplayedText(fullText.slice(0, displayedText.length + 1));
          }
        } else {
          setIsWaiting(true);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(fullText.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setIsCorrecting(false);
          setCorrectionComplete(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isCorrecting ? correctionSpeed : (isDeleting ? deletingSpeed : typingSpeed));

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentPhraseIndex, phrases, isWaiting, isCorrecting, highlightStart, correctionComplete]);

  // Função auxiliar para verificar se uma palavra está sendo digitada
  const isWordBeingTyped = (word: string, currentText: string) => {
    const words = currentText.split(" ");
    const currentWord = words[words.length - 1];
    return word.startsWith(currentWord) && currentWord.length > 0;
  };

  useEffect(() => {
    // Load testimonials script
    const script = document.createElement("script");
    script.src = "/src/components/testimonials.js";
    script.async = true;
    document.body.appendChild(script);

    // Auto-rotate services
    const serviceInterval = setInterval(() => {
      changeServiceSlide("next");
    }, 6000); //  6000 (6 seconds)

    // Set initial active indicator
    setTimeout(() => {
      document.querySelectorAll(".indicator-dot").forEach((dot, i) => {
        if (i === currentServiceIndex) {
          dot.classList.add("bg-black");
          dot.classList.remove("bg-gray-300");
        } else {
          dot.classList.remove("bg-black");
          dot.classList.add("bg-gray-300");
        }
      });
    }, 100);

    return () => {
      document.body.removeChild(script);
      clearInterval(serviceInterval);
    };
  }, [currentServiceIndex]);

  // Parallax mouse effect for cards
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const handleParallax = (e: React.MouseEvent) => {
    if (!parallaxRef.current) return;
    const rect = parallaxRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setParallax({ x, y });
  };
  const resetParallax = () => setParallax({ x: 0, y: 0 });

  // Testimonial state for mobile
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const testimonials = [
    {
      name: "Carla Nunes, InoveTech Consultores",
      role: "Diretora Comercial",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=3",
      text: "Antes perdia horas com emails e lembretes. Agora é tudo automático e posso focar-me em fechar negócios. Libertou-me completamente o dia."
    },
    {
      name: "João Pires, Nexa Solutions ",
      role: "CEO",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
      text: "A prospeção corre sozinha, todos os dias. Eu só entro quando o cliente já está interessado. Poupo tempo e consigo falar com mais pessoas."
    },
    {
      name: "Ana Silva, Vértice Solutions",
      role: "Diretora Financeira",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=2",
      text: "Investi menos recursos e já estou a ver a faturação a crescer. O sistema automatizou processos que antes consumiam muito tempo, permitindo-me focar no que realmente importa: aumentar as vendas."
    },
    {
      name: "Ricardo Moreira, Omega Instalações",
      role: "Sócio-Gerente",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=4",
      text: "Antes andava a saltar entre ficheiros e notas. Agora está tudo num só sítio, organizado e automático. Investi menos e já vejo a faturação a subir, porque a equipa está mais focada nas tarefas operacionais que realmente trazem resultados. Ganho tempo e eficiência, o que faz toda a diferença."
    },
  ];
  const testimonialVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0
    })
  };

  const handlePrevTestimonial = () => {
    setDirection(-1);
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  const handleNextTestimonial = () => {
    setDirection(1);
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-gray-900 to-gray-800">
      <main className="flex-1 w-full overflow-hidden">
        {/* Hero Section */}
        <div className="w-full px-4 md:px-8 py-2 md:py-4 relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-gray-800">
          {/* Linhas Futuristas Animadas atrás da AI + mais linhas neon */}
          <motion.svg className="absolute left-0 top-0 w-full h-full z-0 pointer-events-none" width="100%" height="100%" viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 0.2, scale: 1 }} transition={{ duration: 1.2 }}>
            <motion.line x1="100" y1="50" x2="1100" y2="50" stroke="#fff" strokeWidth="2" strokeDasharray="20 10" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.2 }} style={{ filter: 'drop-shadow(0 0 8px #fff)' }} />
            <motion.circle cx="900" cy="300" r="80" stroke="#fff" strokeWidth="1.5" strokeDasharray="12 8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.4 }} style={{ filter: 'drop-shadow(0 0 8px #fff)' }} />
            <motion.line x1="200" y1="350" x2="1000" y2="350" stroke="#fff" strokeWidth="2" strokeDasharray="16 8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.5 }} style={{ filter: 'drop-shadow(0 0 6px #fff)' }} />
          </motion.svg>
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-center max-w-7xl mx-auto relative py-8 md:py-10 pt-16 md:pt-20">
            <motion.div 
              className="space-y-2 md:space-y-4 relative z-10"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Animated Title with stagger */}
              <motion.h1
                className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-tight min-h-[2.5em] cursor-default text-white pb-2"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.08 } },
                }}
              >
                {displayedText.split("\n").map((line, idx) => (
                  <span key={idx}>
                    {line.split(" ").map((word, wordIdx) => {
                      const isHighlightedWord = word.toLowerCase() === phrases[currentPhraseIndex].highlight.toLowerCase();
                      const wordStart = line.split(" ").slice(0, wordIdx).join(" ").length + (wordIdx > 0 ? 1 : 0);
                      const wordEnd = wordStart + word.length;
                      const isWordVisible = displayedText.length >= wordStart;
                      const isWordComplete = displayedText.length >= wordEnd;
                      const isWordBeingTyped = displayedText.length > wordStart && displayedText.length < wordEnd;
                      const shouldHighlight = isHighlightedWord && (isWordBeingTyped || isWordComplete) && correctionComplete;
                      return (
                        <motion.span
                          key={wordIdx}
                          className={`transition-colors duration-150 cursor-default ${shouldHighlight ? "text-white drop-shadow-[0_0_8px_#fff]" : ""}`}
                          whileHover={{ scale: 1.05 }}
                          variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
                          }}
                        >
                          {isWordVisible ? (
                            <span className="inline-block">
                              {isWordComplete ? word : word.slice(0, displayedText.length - wordStart)}
                            </span>
                          ) : ""}
                          {wordIdx < line.split(" ").length - 1 ? " " : ""}
                        </motion.span>
                      );
                    })}
                    {idx !== displayedText.split("\n").length - 1 && <br />}
                  </span>
                ))}
                <motion.span 
                  className="animate-pulse text-gray-400"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >|</motion.span>
              </motion.h1>
              <motion.p 
                className="text-gray-600 text-base md:text-base max-w-lg cursor-default mt-0 pb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                NEXTJAI, The next generation of AI.
              </motion.p>
              <motion.p 
                className="text-gray-600 text-base md:text-base max-w-lg cursor-default mt-0 pb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                A nossa IA trata de encontrar contactos, enviar mensagens, marcar reuniões e manter tudo organizado. Automatizamos o marketing, o atendimento e as tarefas chatas. <br />Foca-se em vender, nós tratamos do resto.
              </motion.p>
              <motion.a
                href="/contact"
                className="hidden md:inline-block cursor-pointer"
                whileHover={{ scale: 1.08, filter: "drop-shadow(0 0 16px #fff)" }}
                whileTap={{ scale: 0.95 }}
                animate={{ filter: [
                  "drop-shadow(0 0 0px #fff)",
                  "drop-shadow(0 0 12px #fff)",
                  "drop-shadow(0 0 0px #fff)"
                ] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Button className="rounded-full text-base md:text-lg px-6 md:px-8 py-4 md:py-6 bg-white text-black font-bold shadow-lg hover:shadow-[0_0_16px_#fff] hover:bg-gray-100 transition-all duration-300">
                  Contacte-nos
                </Button>
              </motion.a>
            </motion.div>
            <motion.div 
              className="relative flex justify-end items-center h-[300px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[650px] w-full"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.img
                src={"/assets/AI_MODEL.svg"}
                alt="AI Head"
                className="relative z-10 w-full max-w-[350px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1000px] h-auto object-contain"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>

        {/* Reasons Section - agora logo após o hero */}
        <div className="w-full px-4 md:px-8 py-8 md:py-16 bg-gradient-to-b from-gray-800 to-black relative overflow-hidden">
          {/* Linhas neon adicionais */}
          <motion.svg className="absolute right-0 bottom-0 w-1/2 h-1/2 z-0 pointer-events-none" width="100%" height="100%" viewBox="0 0 600 300" fill="none" xmlns="http://www.w3.org/2000/svg" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 0.15, scale: 1 }} transition={{ duration: 1.2 }}>
            <motion.circle cx="500" cy="200" r="100" stroke="#fff" strokeWidth="1.5" strokeDasharray="10 8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.3 }} style={{ filter: 'drop-shadow(0 0 8px #fff)' }} />
            <motion.line x1="100" y1="250" x2="500" y2="50" stroke="#fff" strokeWidth="1.2" strokeDasharray="8 8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.6 }} style={{ filter: 'drop-shadow(0 0 6px #fff)' }} />
          </motion.svg>
          <div className="max-w-7xl mx-auto relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12 md:mb-16"
            >
              <motion.h2 
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold mb-4 cursor-default text-white"
              >
                As razões pelo qual nos
                <br />
                deve escolher
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-300 max-w-2xl mx-auto cursor-default"
              >
                Descubra por que somos a escolha certa para transformar sua presença digital
              </motion.p>
            </motion.div>

            <div ref={parallaxRef} onMouseMove={handleParallax} onMouseLeave={resetParallax} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Aumente sua Receita em até 30%",
                  description: "Impulsione vendas e produtividade com automações inteligentes. Nossa IA identifica oportunidades de lucro ocultas e executa ações em tempo real para acelerar seus resultados financeiros.",
                  icon: <i className="fas fa-rocket text-4xl mb-4 text-white"></i>,
                  stat: "30",
                  statLabel: "Crescimento médio na faturação em 30 dias",
                  bgColor: "bg-gradient-to-b from-gray-900 to-gray-800",
                  hoverEffect: "hover:scale-105 hover:shadow-[0_0_16px_#fff]",
                  animation: "transition-all duration-300 hover:scale-110",
                  suffix: "%"
                },
                {
                  title: "Reduza Custos Operacionais em até 48h",
                  description: "Elimine desperdícios e otimize recursos em dois dias. Nossa solução substitui processos manuais por rotinas automatizadas que economizam tempo e dinheiro — sem complicações.",
                  icon: <i className="fas fa-chart-line text-4xl mb-4 text-white"></i>,
                  stat: "48",
                  statLabel: "Tempo médio para redução de custos com automação",
                  bgColor: "bg-gradient-to-b from-gray-900 to-gray-800",
                  hoverEffect: "hover:scale-105 hover:shadow-[0_0_16px_#fff]",
                  animation: "transition-all duration-300 hover:scale-110",
                  suffix: "h"
                },
                {
                  title: "Escale com Segurança: 100% dos Projetos São Expansíveis",
                  description: "Conforme seu negócio evolui, nossos sistemas acompanham. A infraestrutura é flexível, modular e preparada para múltiplos níveis de operação — sem necessidade de reconstruções.",
                  icon: <i className="fas fa-expand-arrows-alt text-4xl mb-4 text-white"></i>,
                  stat: "100",
                  statLabel: "Soluções preparadas para crescer com sua empresa",
                  bgColor: "bg-gradient-to-b from-gray-900 to-gray-800",
                  hoverEffect: "hover:scale-105 hover:shadow-[0_0_16px_#fff]",
                  animation: "transition-all duration-300 hover:scale-110",
                  suffix: "%"
                },
                {
                  title: "Converta Melhor com IA: +150% em Taxa de Conversão",
                  description: "Use inteligência artificial para criar jornadas de compra inteligentes, personalizadas e automáticas. Vendas mais eficazes, atendimento proativo e dados que realmente trabalham por você.",
                  icon: <i className="fas fa-headset text-4xl mb-4 text-white"></i>,
                  stat: "150",
                  statLabel: "Média de aumento na conversão após automação com IA",
                  bgColor: "bg-gradient-to-b from-gray-900 to-gray-800",
                  hoverEffect: "hover:scale-105 hover:shadow-[0_0_16px_#fff]",
                  animation: "transition-all duration-300 hover:scale-110",
                  suffix: "%"
                }
              ].map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.07, rotate: 1 }}
                  animate={{ x: parallax.x, y: parallax.y }}
                  className={`${reason.bgColor} ${reason.hoverEffect} rounded-xl p-6 transition-all duration-300 relative overflow-hidden group cursor-default`}
                >
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="relative z-10">
                    <motion.div 
                      className="flex items-center justify-between mb-4"
                      whileHover={{ scale: 1.1 }}
                    >
                      <motion.div
                        className={`${reason.animation} transition-all duration-300`}
                      >
                        {reason.icon}
                      </motion.div>
                      <motion.div 
                        className="text-right"
                        whileHover={{ scale: 1.1 }}
                      >
                        <motion.div 
                          className="text-2xl font-bold text-white drop-shadow-[0_0_8px_#fff]"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: false }}
                          transition={{ duration: 0.5 }}
                        >
                          <Counter
                            from={0}
                            to={parseInt(reason.stat)}
                            duration={2}
                            suffix={reason.suffix}
                          />
                        </motion.div>
                        <div className="text-sm text-gray-300">{reason.statLabel}</div>
                      </motion.div>
                    </motion.div>
                    <motion.h3 
                      className="text-xl font-semibold mb-3 cursor-default text-white"
                      whileHover={{ scale: 1.05 }}
                    >
                      {reason.title}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-300 text-sm cursor-default"
                      whileHover={{ scale: 1.02 }}
                    >
                      {reason.description}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative  flex flex-col items-center p-0">
            <div className=" md:w-4/5 h-0.5 bg-gradient-to-r from-white/30 via-white/60 to-white/30 " style={{ filter: 'drop-shadow(0 0 8px #fff)' }} />
        </div>

        {/* Services Section - agora depois das razões */}
        <div id="services-section" className="w-full px-4 md:px-8 py-8 md:py-16 bg-gradient-to-b from-black via-gray-900 to-gray-800 relative overflow-hidden">
          {/* Linhas neon adicionais */}
          <motion.svg className="absolute left-0 top-0 w-1/3 h-1/3 z-0 pointer-events-none" width="100%" height="100%" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 0.12, scale: 1 }} transition={{ duration: 1.2 }}>
            <motion.line x1="50" y1="20" x2="350" y2="180" stroke="#fff" strokeWidth="1.2" strokeDasharray="8 8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.4 }} style={{ filter: 'drop-shadow(0 0 6px #fff)' }} />
            <motion.circle cx="100" cy="100" r="60" stroke="#fff" strokeWidth="1.5" strokeDasharray="10 8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.6 }} style={{ filter: 'drop-shadow(0 0 8px #fff)' }} />
          </motion.svg>
          <div className="max-w-7xl mx-auto relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12 md:mb-16"
            >
              <motion.h2 
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold mb-4 cursor-default text-white"
              >
                O que podemos oferecer
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-300 max-w-2xl mx-auto cursor-default"
              >
                Soluções digitais completas para impulsionar seu negócio
              </motion.p>
            </motion.div>

            <div 
              className="relative w-full flex justify-center items-center transition-transform duration-700 ease-in-out overflow-visible" 
              style={{ minHeight: 480 }}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              ref={parallaxRef}
              onMouseMove={handleParallax}
              onMouseLeave={resetParallax}
            >
              {services.map((service, index) => {
                const isCenter = index === currentServiceIndex;
                const isPrev = index === (currentServiceIndex - 1 + services.length) % services.length;
                const isNext = index === (currentServiceIndex + 1) % services.length;

                return (
                  <motion.div
                    key={index}
                    className={`service-card absolute left-1/2 top-0 w-[90%] sm:w-[80%] md:w-2/5`}
                    initial={{ opacity: 0, scale: 0.8, x: "-50%" }}
                    animate={{
                      opacity: isCenter ? 1 : isPrev || isNext ? 0.6 : 0,
                      scale: isCenter ? 1.1 : 0.85,
                      x: isCenter ? "-50%" : isPrev ? "-170%" : "70%",
                      zIndex: isCenter ? 2 : 1,
                    }}
                    transition={{ duration: 0.65, ease: "easeInOut" }}
                    whileHover={isCenter ? { scale: 1.15 } : {}}
                    onClick={() => goToServiceSlide(index)}
                  >
                    <motion.div 
                      className={`bg-gradient-to-b from-gray-900 to-gray-800 p-4 sm:p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 max-w-xl mx-auto text-center cursor-default border-2 border-gray-700 hover:border-gray-500 my-4`}
                      whileHover={{ y: -5, scale: 1.02 }}
                      animate={{ x: parallax.x, y: parallax.y }}
                    >
                      <div 
                        className={`w-16 h-16 sm:w-20 sm:h-20 ${service.iconBg} rounded-xl mx-auto mb-4 sm:mb-6 flex items-center justify-center transition-all duration-300 hover:scale-105`}
                      >
                        {service.icon}
                      </div>
                      <motion.h3 
                        className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 cursor-default text-white"
                        whileHover={{ scale: 1.05 }}
                      >
                        {service.title}
                      </motion.h3>
                      <motion.p 
                        className="text-base sm:text-lg text-gray-300 cursor-default"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {service.description}
                      </motion.p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div 
              className="flex justify-center mt-8 gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {services.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${
                    index === currentServiceIndex ? "bg-white shadow-[0_0_8px_#fff]" : "bg-gray-500"
                  } hover:bg-white hover:shadow-[0_0_8px_#fff] transition-all duration-300 focus:outline-none`}
                  onClick={() => goToServiceSlide(index)}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </motion.div>
          </div>
        </div>
        {/* Testimonials Section - gradiente alternado */}
        <div className="w-full px-4 md:px-8 py-8 md:py-16 bg-gradient-to-b from-gray-800 to-black relative overflow-hidden">
          {/* Linhas neon brancas animadas para destaque + mais linhas */}
          <div className="relative w-full flex flex-col items-center mb-8">
            <div className="w-11/12 md:w-4/5 h-0.5 bg-gradient-to-r from-white/30 via-white/60 to-white/30 mb-8" style={{ filter: 'drop-shadow(0 0 8px #fff)' }} />
          </div>
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8 md:mb-12"
            >
              <motion.h2 
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-bold cursor-default text-white drop-shadow-[0_0_8px_#fff]"
              >
                Testemunhos Valiosos
              </motion.h2>
            </motion.div>
            {/* MOBILE: apenas 1 pessoa ativa, setas, sem quote.svg */}
            <div className="block md:hidden max-w-sm mx-auto">
              <motion.div
                key={testimonialIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl p-6 shadow-xl relative border border-white/10"
              >
                <img 
                  src={testimonials[testimonialIndex].image} 
                  alt={testimonials[testimonialIndex].name} 
                  className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-white/30 shadow-lg" 
                />
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star text-white text-sm mr-1"></i>
                  ))}
                </div>
                <p className="text-white text-center mb-4 text-sm">{testimonials[testimonialIndex].text}</p>
                <p className="text-white font-medium text-center">{testimonials[testimonialIndex].name}</p>
                <p className="text-gray-400 text-sm text-center mb-4">{testimonials[testimonialIndex].role}</p>
                <div className="flex justify-between w-full mt-2">
                  <button onClick={handlePrevTestimonial} className="p-2 rounded-full bg-white/10 hover:bg-white/30 transition-all duration-200 hover:scale-110">
                    <FaChevronLeft className="text-white text-lg" />
                  </button>
                  <div className="flex space-x-2 items-center">
                    {testimonials.map((_, idx) => (
                      <div 
                        key={idx} 
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === testimonialIndex ? "bg-white" : "bg-white/30"}`}
                        onClick={() => {
                          setDirection(idx > testimonialIndex ? 1 : -1);
                          setTestimonialIndex(idx);
                        }}
                      ></div>
                    ))}
                  </div>
                  <button onClick={handleNextTestimonial} className="p-2 rounded-full bg-white/10 hover:bg-white/30 transition-all duration-200 hover:scale-110">
                    <FaChevronRight className="text-white text-lg" />
                  </button>
                </div>
              </motion.div>
            </div>
            {/* DESKTOP: layout antigo */}
            <div className="hidden md:block max-w-5xl mx-auto relative">
              <div className="text-center mb-10 md:mb-16 px-4 md:px-16">
                <motion.div
                  id="testimonial-content"
                  className="relative min-h-[220px] flex items-center justify-center mb-24 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.button 
                    onClick={handlePrevTestimonial} 
                    className="absolute left-[-60px] top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/30 transition-all duration-200 border border-white/20"
                    whileHover={{ scale: 1.15, x: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaChevronLeft className="text-white text-xl" />
                  </motion.button>
                  <motion.button 
                    onClick={handleNextTestimonial} 
                    className="absolute right-[-60px] top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/30 transition-all duration-200 border border-white/20"
                    whileHover={{ scale: 1.15, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaChevronRight className="text-white text-xl" />
                  </motion.button>
                  <div className="max-w-2xl mx-auto">
                    <AnimatePresence mode="wait" custom={direction}>
                      <motion.div
                        key={testimonialIndex}
                        custom={direction}
                        variants={testimonialVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.4 }}
                        className="flex flex-col items-center"
                      >
                        <motion.div className="relative">
                          <img 
                            src="/assets/quote_left.svg" 
                            alt="Quote mark" 
                            className="absolute left-[-30px] top-[-20px] w-6 h-6 opacity-50"
                          />
                          <motion.p 
                            className="text-base md:text-lg cursor-default text-white mb-6 leading-relaxed" 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            {testimonials[testimonialIndex].text}
                          </motion.p>
                          <img 
                            src="/assets/quote_right.svg" 
                            alt="Quote mark" 
                            className="absolute right-[-30px] bottom-[-10px] w-6 h-6 opacity-50"
                          />
                        </motion.div>
                        <motion.div
                          className="flex flex-col items-center"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          
                          <p className="text-white font-medium">{testimonials[testimonialIndex].name}</p>
                          <p className="text-gray-400 text-sm">{testimonials[testimonialIndex].role}</p>
                        </motion.div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </motion.div>
                <div
                  id="testimonial-clients"
                  className="flex justify-center gap-4 md:gap-8 min-h-[100px] items-center overflow-hidden py-4"
                >
                  {testimonials.map((client, index) => (
                    <motion.div
                      key={index}
                      className={`text-center transition-all duration-300 mx-2 cursor-pointer ${
                        index === testimonialIndex ? 'scale-110 z-10' : 'scale-90 opacity-60'
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: index === testimonialIndex ? 1 : 0.6,
                        scale: index === testimonialIndex ? 1.1 : 0.9,
                        y: 0 
                      }}
                      transition={{ duration: 0.3 }}
                      onClick={() => {
                        setDirection(index > testimonialIndex ? 1 : -1);
                        setTestimonialIndex(index);
                      }}
                    >
                      <motion.div 
                        className="mb-3"
                        whileHover={{ scale: 1.1, rotate: index === testimonialIndex ? 5 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img 
                          src={client.image} 
                          alt={client.name} 
                          className={`w-16 h-16 rounded-full mx-auto transition-all duration-300 border-2 ${
                            index === testimonialIndex ? 'border-white shadow-[0_0_15px_rgba(255,255,255,0.5)]' : 'border-white/30'
                          }`}
                        />
                      </motion.div>
                      <div className="flex justify-center mb-1">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="fas fa-star text-white text-xs"></i>
                        ))}
                      </div>
                      <p className="text-sm font-medium text-white">{client.name}</p>
                      <p className="text-xs text-gray-500">{client.role}</p>
                    </motion.div>
                  ))}
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
