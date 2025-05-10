import { Button } from "@/components/ui/button";
import Navbar from "./navbar";
import Footer from "./footer";
import Counter from "./counter-animation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
      title: "Web Design & Development",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
      icon: <i className="fas fa-laptop-code text-4xl mb-4 text-blue-500"></i>,
      gradient: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      hoverColor: "hover:border-blue-300",
      iconBg: "bg-blue-100"
    },
    {
      title: "Chat IA",
      description:
        "Implementamos assistentes virtuais inteligentes que oferecem suporte 24/7, melhoram o engajamento do cliente e automatizam respostas para perguntas frequentes.",
      icon: <i className="fas fa-robot text-4xl mb-4 text-purple-500"></i>,
      gradient: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200",
      hoverColor: "hover:border-purple-300",
      iconBg: "bg-purple-100"
    },
    {
      title: "Sistema de Reservas",
      description:
        "Desenvolvemos sistemas completos de reservas online que simplificam o agendamento, gerenciam disponibilidade e processam pagamentos de forma segura.",
      icon: <i className="fas fa-calendar-check text-4xl mb-4 text-green-500"></i>,
      gradient: "from-green-50 to-green-100",
      borderColor: "border-green-200",
      hoverColor: "hover:border-green-300",
      iconBg: "bg-green-100"
    },
    {
      title: "Marketing Digital",
      description:
        "Criamos estratégias personalizadas de marketing digital que aumentam sua visibilidade online, geram leads qualificados e impulsionam o crescimento do seu negócio.",
      icon: <i className="fas fa-bullhorn text-4xl mb-4 text-orange-500"></i>,
      gradient: "from-orange-50 to-orange-100",
      borderColor: "border-orange-200",
      hoverColor: "hover:border-orange-300",
      iconBg: "bg-orange-100"
    },
    {
      title: "E-commerce",
      description:
        "Desenvolvemos lojas online completas, seguras e otimizadas para aumentar as suas vendas e expandir o seu negócio digital.",
      icon: <i className="fas fa-shopping-cart text-4xl mb-4 text-red-500"></i>,
      gradient: "from-red-50 to-red-100",
      borderColor: "border-red-200",
      hoverColor: "hover:border-red-300",
      iconBg: "bg-red-100"
    },
  ]);

  const renderNavigationDots = () => {
    return (
      <div className="flex justify-center mt-6 gap-2">
        {services.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentServiceIndex ? "bg-black" : "bg-gray-300"
            } hover:bg-gray-400 transition-colors focus:outline-none`}
            onClick={() => goToServiceSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    );
  };

  // Animated typing effect for the main title
  const phrases = [
    {
      text: "Revolucione o seu\nNegócio connosco",
      highlight: "Revolucione"
    },
    {
      text: "Transforme ideias em experiências digitais",
      highlight: "ideias"
    },
    {
      text: "O futuro do seu negócio começa aqui",
      highlight: "futuro"
    },
    {
      text: "Transformamos cliques em clientes",
      highlight: "clientes"
    },
    {
      text: "Da ideia ao pixel perfeito",
      highlight: "pixel"
    },
    {
      text: "Seu sucesso, nosso compromisso",
      highlight: "sucesso"
    },
    {
      text: "Transforme ideias em pixels com a Pixel Web",
      highlight: "pixels"
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

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 w-full overflow-hidden">
        {/* Hero Section */}
        <div className="w-full px-4 md:px-8 py-4 md:py-8 relative overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1 }}
          />
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-center max-w-7xl mx-auto relative">
            <motion.div 
              className="space-y-2 md:space-y-4 relative z-10"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Animated Title */}
              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-tight min-h-[3.5em] cursor-default">
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
                          className={`transition-colors duration-150 cursor-default ${
                            shouldHighlight ? "text-gray-400" : ""
                          }`}
                          whileHover={{ scale: 1.05 }}
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
              </h1>
              <motion.p 
                className="text-gray-600 text-base md:text-base max-w-lg cursor-default"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Desenvolvemos websites inovadores e personalizados que
                potencializam o crescimento do seu negócio online. Transforme
                sua presença digital com soluções à medida.
              </motion.p>
              <motion.a
                href="/contact"
                className="mt-4 md:mt-8 hidden md:inline-block cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="rounded-full text-base md:text-lg px-6 md:px-8 py-4 md:py-6 bg-black text-white hover:bg-gray-800 transition-all duration-300">
                  Contacte-nos
                </Button>
              </motion.a>
            </motion.div>
            <motion.div 
              className="relative h-[350px] sm:h-[400px] md:h-[700px] lg:h-[800px] w-full"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.img
                src="/src/assets/AI_MODEL.svg"
                alt="AI Head"
                className="absolute right-0 top-0 w-full h-full object-contain md:object-cover scale-95 transform translate-x-[2%] md:translate-x-[15%] lg:translate-x-[20%] z-0"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="w-12 h-1 mx-auto bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        />

        {/* Reasons Section */}
        <div className="w-full px-4 md:px-8 py-8 md:py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-30"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.3 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          />
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
                className="text-3xl md:text-4xl font-bold mb-4 cursor-default"
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
                className="text-gray-600 max-w-2xl mx-auto cursor-default"
              >
                Descubra por que somos a escolha certa para transformar sua presença digital
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Entrega Rápida",
                  description: "Priorizamos processos ágeis e eficientes, garantindo que seu site esteja pronto para uso no menor tempo possível.",
                  icon: <i className="fas fa-rocket text-4xl mb-4 text-orange-500"></i>,
                  stat: "48h",
                  statLabel: "Tempo médio de entrega",
                  bgColor: "bg-orange-100",
                  hoverEffect: "hover:scale-105 hover:shadow-lg",
                  animation: "animate-bounce"
                },
                {
                  title: "Acrescentamos Valor",
                  description: "Nosso trabalho vai além do desenvolvimento; buscamos agregar valor ao seu negócio através de estratégias que aumentam a visibilidade.",
                  icon: <i className="fas fa-chart-line text-4xl mb-4 text-blue-500"></i>,
                  stat: "150%",
                  statLabel: "Aumento médio em conversões",
                  bgColor: "bg-blue-100",
                  hoverEffect: "hover:scale-105 hover:shadow-lg",
                  animation: "animate-pulse"
                },
                {
                  title: "Soluções Escaláveis",
                  description: "Desenvolvemos projetos que acompanham o crescimento da sua empresa, permitindo expansões e atualizações conforme as demandas do mercado evoluem.",
                  icon: <i className="fas fa-expand-arrows-alt text-4xl mb-4 text-purple-500"></i>,
                  stat: "100%",
                  statLabel: "Projetos escaláveis",
                  bgColor: "bg-purple-100",
                  hoverEffect: "hover:scale-105 hover:shadow-lg",
                  animation: "animate-spin-slow"
                },
                {
                  title: "Suporte Contínuo",
                  description: "Oferecemos suporte pós-lançamento e manutenção contínua, assegurando que o site se mantenha seguro e atualizado.",
                  icon: <i className="fas fa-headset text-4xl mb-4 text-green-500"></i>,
                  stat: "24/7",
                  statLabel: "Suporte disponível",
                  bgColor: "bg-green-100",
                  hoverEffect: "hover:scale-105 hover:shadow-lg",
                  animation: "animate-ping"
                }
              ].map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: 1 }}
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
                        className={reason.animation}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                      >
                        {reason.icon}
                      </motion.div>
                      <motion.div 
                        className="text-right"
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="text-2xl font-bold">{reason.stat}</div>
                        <div className="text-sm text-gray-600">{reason.statLabel}</div>
                      </motion.div>
                    </motion.div>
                    <motion.h3 
                      className="text-xl font-semibold mb-3 cursor-default"
                      whileHover={{ scale: 1.05 }}
                    >
                      {reason.title}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-600 text-sm cursor-default"
                      whileHover={{ scale: 1.02 }}
                    >
                      {reason.description}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Interactive Stats Counter */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {[
                { number: 500, label: "Projetos Concluídos", suffix: "+", color: "text-orange-500", icon: "fa-project-diagram" },
                { number: 300, label: "Clientes Satisfeitos", suffix: "+", color: "text-blue-500", icon: "fa-smile" },
                { number: 5, label: "Anos de Experiência", suffix: "+", color: "text-purple-500", icon: "fa-calendar-check" },
                { number: 100, label: "Taxa de Satisfação", suffix: "%", color: "text-green-500", icon: "fa-star" }
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-default"
                >
                  <motion.div 
                    className={`text-4xl font-bold mb-2 ${stat.color} flex items-center justify-center gap-2`}
                    whileHover={{ scale: 1.2 }}
                  >
                    <motion.i 
                      className={`fas ${stat.icon} text-2xl`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    ></motion.i>
                    <Counter end={stat.number} suffix={stat.suffix} />
                  </motion.div>
                  <motion.div 
                    className="text-gray-600 cursor-default"
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.label}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="w-12 h-1 mx-auto bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        />

        {/* Services Section */}
        <div
          id="services-section"
          className="w-full px-4 md:px-8 py-8 md:py-16 bg-gradient-to-b from-white to-gray-50"
        >
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
                className="text-3xl md:text-4xl font-bold mb-4 cursor-default"
              >
                Os nossos serviços
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-600 max-w-2xl mx-auto cursor-default"
              >
                Soluções digitais completas para impulsionar seu negócio
              </motion.p>
            </motion.div>

            <div 
              className="relative w-full flex justify-center items-center transition-transform duration-500 ease-in-out overflow-visible" 
              style={{ minHeight: 450 }}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
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
                      opacity: isCenter ? 1 : isPrev || isNext ? 0.5 : 0,
                      scale: isCenter ? 1.1 : 0.9,
                      x: isCenter ? "-50%" : isPrev ? "-160%" : "60%",
                      zIndex: isCenter ? 2 : 1,
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    whileHover={isCenter ? { scale: 1.15 } : {}}
                    onClick={() => goToServiceSlide(index)}
                  >
                    <motion.div 
                      className={`bg-gradient-to-br ${service.gradient} p-4 sm:p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 max-w-xl mx-auto text-center cursor-default border-2 ${service.borderColor} ${service.hoverColor} my-4`}
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      <motion.div 
                        className={`w-16 h-16 sm:w-20 sm:h-20 ${service.iconBg} rounded-2xl mx-auto mb-4 sm:mb-6 flex items-center justify-center transform rotate-3`}
                        whileHover={{ scale: 1.1, rotate: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {service.icon}
                      </motion.div>
                      <motion.h3 
                        className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 cursor-default"
                        whileHover={{ scale: 1.05 }}
                      >
                        {service.title}
                      </motion.h3>
                      <motion.p 
                        className="text-base sm:text-lg text-gray-700 cursor-default"
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
              className="flex justify-center mt-6 gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {services.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                    index === currentServiceIndex ? "bg-black" : "bg-gray-300"
                  } hover:bg-gray-400 transition-colors focus:outline-none`}
                  onClick={() => goToServiceSlide(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </motion.div>
          </div>
        </div>
        <div className="w-12 h-1 mx-auto bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300"></div>
        {/* Partners Section */}
        <div className="w-full px-4 md:px-8 py-8 md:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold cursor-default">Parceiros</h2>
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
                className="text-2xl md:text-3xl font-bold cursor-default"
              >
                O que dizem sobre nós
              </motion.h2>
            </motion.div>

            <div className="max-w-4xl mx-auto relative">
              <div className="text-center mb-8 md:mb-12 px-4 md:px-16">
                <motion.div
                  id="testimonial-content"
                  className="relative min-h-[200px] flex items-center justify-center mb-20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.img
                    src="/src/assets/quote_left.svg"
                    alt="Quote"
                    className="absolute -top-4 -left-4 w-8 h-8 opacity-85"
                    initial={{ rotate: -10, opacity: 0 }}
                    whileInView={{ rotate: 0, opacity: 0.85 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />
                  <div className="max-w-2xl mx-auto">
                    <motion.p 
                      className="text-base md:text-lg cursor-default" 
                      id="testimonial-text"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      Without any doubt I recommend Alcaline Solutions as one of
                      the best web design and digital marketing agencies. One of
                      the best agencies I've come across so far. Wouldn't be
                      hesitated to introduce their work to someone else.
                    </motion.p>
                  </div>
                  <motion.img
                    src="/src/assets/quote_right.svg"
                    alt="Quote"
                    className="absolute -bottom-4 -right-4 w-8 h-8 opacity-85"
                    initial={{ rotate: 10, opacity: 0 }}
                    whileInView={{ rotate: 0, opacity: 0.85 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />
                </motion.div>

                <div className="flex justify-center items-center space-x-4 md:space-x-12">
                  <motion.button
                    id="prev-testimonial"
                    className="w-10 h-10 rounded-full bg-black text-white shadow-md flex items-center justify-center hover:bg-gray-800 transition-colors z-20"
                    onClick={() => (window as any).changeTestimonial?.("prev")}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className="fas fa-arrow-left"></i>
                  </motion.button>

                  <div
                    id="testimonial-clients"
                    className="flex justify-center gap-4 md:gap-8 min-h-[160px] items-center overflow-hidden py-4"
                  >
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
                      <motion.div
                        key={index}
                        id={`client-${index}`}
                        className={`text-center transition-all duration-300 mx-2 w-24 
                          ${person.active ? "scale-125 z-10" : "opacity-50 scale-90"}
                          sm:block ${!person.active ? "hidden sm:block" : ""}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: person.active ? 1 : 0.5, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: person.active ? 1.3 : 1 }}
                      >
                        <motion.div 
                          className="mb-2"
                          whileHover={{ rotate: 5 }}
                        >
                          <motion.img
                            src={person.image}
                            alt={person.name}
                            className="w-16 h-16 rounded-full mx-auto"
                            whileHover={{ scale: 1.1 }}
                          />
                        </motion.div>
                        <motion.div 
                          className="flex justify-center mb-1"
                          whileHover={{ scale: 1.1 }}
                        >
                          {[1, 2, 3, 4, 5].map((star) => (
                            <motion.i
                              key={star}
                              className="fas fa-star text-black text-xs"
                              whileHover={{ scale: 1.2, rotate: 10 }}
                            ></motion.i>
                          ))}
                        </motion.div>
                        <motion.p 
                          className="text-sm font-medium truncate cursor-default"
                          whileHover={{ scale: 1.05 }}
                        >
                          {person.name}
                        </motion.p>
                        <motion.p 
                          className="text-xs text-gray-500 truncate cursor-default"
                          whileHover={{ scale: 1.05 }}
                        >
                          {person.role}
                        </motion.p>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    id="next-testimonial"
                    className="w-10 h-10 rounded-full bg-black text-white shadow-md flex items-center justify-center hover:bg-gray-800 transition-colors z-20"
                    onClick={() => (window as any).changeTestimonial?.("next")}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className="fas fa-arrow-right"></i>
                  </motion.button>
                </div>
              </div>
            </div>

            <div className="mt-12 md:mt-16 py-12 md:py-16">
              <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24">
                <h3 className="text-xl md:text-2xl font-bold text-center md:text-right cursor-default">
                  Receba Todas As <br />
                  Novidades
                </h3>
                <div className="relative w-full max-w-xl md:w-1/2 lg:w-2/3">
                  <div className="border-b-2 border-gray-400 pb-4 relative">
                    <input
                      type="email"
                      placeholder="Escreva O Seu Endereço De Email"
                      className="w-full bg-transparent focus:outline-none pr-24 text-sm md:text-base cursor-text"
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
