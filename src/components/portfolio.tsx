import Navbar from "./navbar";
import Footer from "./footer";
import { Button } from "@/components/ui/button";
import Counter from "./counter-animation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Tipos de projeto disponíveis
const projectTypes = [
  "Todos",
  "E-commerce",
  "Corporativo",
  "Landing Pages",
  "Sistemas",
] as const;
type ProjectType = (typeof projectTypes)[number];

// Interface para os detalhes do projeto
interface ProjectDetails {
  title: string;
  category: Exclude<ProjectType, "Todos">;
  image: string;
  description: string;
  technologies: string[];
  link: string;
  stats: {
    completion: string;
    satisfaction: string;
    maintenance: string;
  };
}

// Lista de projetos
const projects: ProjectDetails[] = [
  {
    title: "E-commerce de Moda",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
    description:
      "Plataforma completa de e-commerce para uma marca de moda, com sistema de gestão de estoque, pagamentos integrados e área do cliente personalizada.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#",
    stats: {
      completion: "2 meses",
      satisfaction: "98%",
      maintenance: "24/7",
    },
  },
  {
    title: "Site Corporativo",
    category: "Corporativo",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
    description:
      "Website institucional moderno com integração de blog, área de carreiras e sistema de agendamento de reuniões.",
    technologies: ["Next.js", "Tailwind CSS", "PostgreSQL"],
    link: "#",
    stats: {
      completion: "1.5 meses",
      satisfaction: "95%",
      maintenance: "Mensal",
    },
  },
  {
    title: "Landing Page Produto",
    category: "Landing Pages",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    description:
      "Página de conversão otimizada para lançamento de produto digital, com integração de análise e CRM.",
    technologies: ["Vue.js", "Firebase", "Analytics"],
    link: "#",
    stats: {
      completion: "3 semanas",
      satisfaction: "97%",
      maintenance: "Trimestral",
    },
  },
  {
    title: "Sistema de Reservas",
    category: "Sistemas",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    description:
      "Sistema completo de reservas para hotel, com dashboard administrativo e app mobile para clientes.",
    technologies: ["React Native", "Express", "MySQL"],
    link: "#",
    stats: {
      completion: "3 meses",
      satisfaction: "96%",
      maintenance: "24/7",
    },
  },
  {
    title: "E-commerce Eletrônicos",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661",
    description:
      "Loja virtual especializada em eletrônicos, com comparador de produtos e sistema de avaliações.",
    technologies: ["React", "Node.js", "Redis", "AWS"],
    link: "#",
    stats: {
      completion: "2.5 meses",
      satisfaction: "94%",
      maintenance: "24/7",
    },
  },
  {
    title: "Site Institucional",
    category: "Corporativo",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
    description:
      "Website responsivo para empresa de tecnologia, com área de cases e integração com CRM.",
    technologies: ["Next.js", "Strapi", "PostgreSQL"],
    link: "#",
    stats: {
      completion: "1 mês",
      satisfaction: "98%",
      maintenance: "Mensal",
    },
  },
];

export default function Portfolio() {
  const [selectedFilter, setSelectedFilter] = useState<ProjectType>("Todos");
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filtrar projetos baseado na seleção
  const filteredProjects = projects.filter(
    (project) =>
      selectedFilter === "Todos" || project.category === selectedFilter,
  );

  // Função para abrir o modal com detalhes do projeto
  const openProjectDetails = (project: ProjectDetails) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-800 via-gray-900 to-black">
      <Navbar />
      <main className="flex-1 relative overflow-x-hidden">
        <div className="container mx-auto py-16 px-4 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent"
          >
            Portefólio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-300 text-center max-w-2xl mx-auto mb-12"
          >
            Conheça alguns dos nossos projetos mais recentes e inspiradores.
          </motion.p>
          {/* Filtros de tipo de projeto */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {projectTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedFilter(type)}
                className={`px-5 py-2 rounded-full border-2 text-sm font-semibold transition-all duration-300 focus:outline-none ${selectedFilter === type ? "bg-white text-black border-white shadow-[0_0_16px_#fff]" : "bg-transparent text-white border-white hover:bg-white hover:text-black hover:shadow-[0_0_16px_#fff]"}`}
              >
                {type}
              </button>
            ))}
          </motion.div>
          {/* Grid de projetos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 40, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.04, boxShadow: "0 0 32px 8px #fff" }}
                  className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl border border-white/10 hover:border-white/30 transition-all duration-300 group cursor-pointer relative"
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-all duration-500"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="p-6 flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:drop-shadow-[0_0_12px_#fff] transition-all duration-300">
                      {project.title}
                    </h3>
                    <span className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <p className="text-gray-300 text-sm mb-4">
                      {project.description}
                    </p>
                    <Button className="rounded-full bg-white text-black font-bold px-5 py-2 mt-auto shadow hover:shadow-[0_0_16px_#fff] transition-all duration-300" onClick={() => openProjectDetails(project)}>
                      Ver Projeto
                    </Button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Modal de Detalhes do Projeto */}
        <AnimatePresence>
          {isModalOpen && selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 50 }}
                className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full border-2 border-white text-white hover:bg-white hover:text-black transition-colors"
                  >
                    <span className="flex items-center justify-center w-full h-full leading-none">
                      ×
                    </span>
                  </button>
                </div>

                <h2 className="text-3xl font-bold mb-4">
                  {selectedProject.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {selectedProject.description}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Tempo de Conclusão</p>
                    <p className="font-bold">
                      {selectedProject.stats.completion}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Satisfação</p>
                    <p className="font-bold">
                      {selectedProject.stats.satisfaction}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Manutenção</p>
                    <p className="font-bold">
                      {selectedProject.stats.maintenance}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-bold mb-2">Tecnologias Utilizadas</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button
                    onClick={() => window.open(selectedProject.link, "_blank")}
                    className="rounded-full bg-black text-white hover:bg-gray-800"
                  >
                    Visitar Projeto
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
