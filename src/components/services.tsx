import Navbar from "./navbar";
import Footer from "./footer";
import { Button } from "@/components/ui/button";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
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
