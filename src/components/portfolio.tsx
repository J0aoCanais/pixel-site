import Navbar from "./navbar";
import Footer from "./footer";
import { Button } from "@/components/ui/button";
import Counter from "./counter-animation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Tipos de projeto disponíveis
const projectTypes = ["Todos", "E-commerce", "Corporativo", "Landing Pages", "Sistemas"] as const;
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
    description: "Plataforma completa de e-commerce para uma marca de moda, com sistema de gestão de estoque, pagamentos integrados e área do cliente personalizada.",
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
    description: "Website institucional moderno com integração de blog, área de carreiras e sistema de agendamento de reuniões.",
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
    description: "Página de conversão otimizada para lançamento de produto digital, com integração de análise e CRM.",
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
    description: "Sistema completo de reservas para hotel, com dashboard administrativo e app mobile para clientes.",
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
    description: "Loja virtual especializada em eletrônicos, com comparador de produtos e sistema de avaliações.",
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
    description: "Website responsivo para empresa de tecnologia, com área de cases e integração com CRM.",
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
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filtrar projetos baseado na seleção
  const filteredProjects = projects.filter(
    (project) => selectedFilter === "Todos" || project.category === selectedFilter
  );

  // Função para abrir o modal com detalhes do projeto
  const openProjectDetails = (project: ProjectDetails) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="container mx-auto py-16 md:py-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nosso Portfólio
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conheça alguns dos projetos incríveis que desenvolvemos para
              nossos clientes
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {projectTypes.map((filter, index) => (
              <Button
                key={filter}
                variant="outline"
                onClick={() => setSelectedFilter(filter)}
                className={`rounded-full transition-all duration-300 ${
                  selectedFilter === filter
                    ? "bg-black text-white scale-110"
                    : "hover:scale-105"
                }`}
              >
                {filter}
              </Button>
            ))}
          </motion.div>

          {/* Portfolio Grid */}
          <motion.div 
            layout
            className="grid md:grid-cols-3 gap-8 px-4 md:px-0"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="group relative overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => openProjectDetails(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center text-white p-6">
                    <h3 className="text-2xl font-bold mb-2 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {project.category}
                    </p>
                    <Button
                      variant="outline"
                      className="mt-4 rounded-full border-2 border-white text-black bg-white hover:bg-white hover:text-black transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      Ver detalhes
                    </Button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
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
                    ×
                  </button>
                </div>

                <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
                <p className="text-gray-600 mb-6">{selectedProject.description}</p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Tempo de Conclusão</p>
                    <p className="font-bold">{selectedProject.stats.completion}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Satisfação</p>
                    <p className="font-bold">{selectedProject.stats.satisfaction}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Manutenção</p>
                    <p className="font-bold">{selectedProject.stats.maintenance}</p>
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
