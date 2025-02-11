import Navbar from "./navbar";
import Footer from "./footer";
import { Button } from "@/components/ui/button";

export default function Prices() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="container mx-auto py-16 md:py-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Planos e Preços
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Escolha o plano ideal para o seu negócio. Todos os planos incluem
              suporte técnico e atualizações gratuitas.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4 md:px-0">
            {[
              {
                name: "Básico",
                price: "499",
                description: "Perfeito para pequenos negócios",
                features: [
                  "Website de 5 páginas",
                  "Design responsivo",
                  "Formulário de contato",
                  "Otimização SEO básica",
                  "1 mês de suporte",
                ],
              },
              {
                name: "Profissional",
                price: "999",
                description: "Ideal para empresas em crescimento",
                features: [
                  "Website até 10 páginas",
                  "Design personalizado",
                  "Sistema de blog",
                  "Otimização SEO avançada",
                  "3 meses de suporte",
                  "Integração com redes sociais",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "1999",
                description: "Para grandes empresas",
                features: [
                  "Website ilimitado",
                  "Design premium",
                  "Sistema de reservas",
                  "Chat IA integrado",
                  "6 meses de suporte",
                  "Painel administrativo",
                  "Análise de dados",
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg p-8 ${plan.popular ? "ring-2 ring-black" : "border border-gray-200"}`}
              >
                {plan.popular && (
                  <span className="bg-black text-white px-3 py-1 text-sm rounded-full">
                    Mais popular
                  </span>
                )}
                <h3 className="text-2xl font-bold mt-4">{plan.name}</h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold">{plan.price}€</span>
                  <span className="text-gray-600">/projeto</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-black">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${plan.popular ? "bg-black text-white hover:bg-gray-800" : "bg-white text-black border-2 border-black hover:bg-gray-50"}`}
                >
                  Começar agora
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "Quanto tempo demora para desenvolver um website?",
                  answer:
                    "O tempo de desenvolvimento varia conforme a complexidade do projeto, mas geralmente leva entre 2 a 8 semanas.",
                },
                {
                  question: "Os preços incluem hospedagem?",
                  answer:
                    "Não, os preços não incluem hospedagem. Podemos recomendar e ajudar na configuração de um serviço de hospedagem adequado.",
                },
                {
                  question: "Posso personalizar os planos?",
                  answer:
                    "Sim, todos os planos podem ser personalizados de acordo com suas necessidades específicas.",
                },
                {
                  question: "Como funciona o suporte técnico?",
                  answer:
                    "Oferecemos suporte por email e telefone durante horário comercial, com tempo de resposta máximo de 24 horas.",
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
