import { Button } from "@/components/ui/button";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="container mx-auto py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 px-4 md:px-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Revolucione o seu
                <br />
                <span className="text-gray-400">Negócio</span> connosco
              </h1>
              <p className="text-gray-600 max-w-lg">
                Desenvolvemos websites inovadores e personalizados que
                potencializam o crescimento do seu negócio online. Transforme
                sua presença digital com soluções à medida.
              </p>
              <a href="/contact" className="mt-8 inline-block cursor-pointer">
                <Button className="rounded-full text-lg px-8 py-6 bg-black text-white">
                  Contacte-nos
                </Button>
              </a>
            </div>
            <div className="relative h-[600px] md:h-[700px] ml-auto">
              <img
                src="https://images.unsplash.com/photo-1531746790731-6bf607ccff6f"
                alt="AI Head"
                className="absolute right-0 top-0 w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Websites Section */}
        <div className="py-16 bg-black text-white">
          <div className="container mx-auto px-4 md:px-0">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Websites personalizados para
                <br />
                todo o tipo de empresas
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 p-6 rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
                  alt="Personal Trainer"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-3">Personal Trainer</h3>
                <p className="text-gray-400">
                  A Website is an extension of yourself and we can help you to
                  express it properly. Your website is your number one marketing
                  asset because we live in a digital age.
                </p>
                <button className="mt-4 text-white hover:text-gray-300 transition-colors">
                  Explore o website →
                </button>
              </div>

              <div className="bg-white/5 p-6 rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1"
                  alt="Barbeiro"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-3">Barbeiro</h3>
                <p className="text-gray-400">
                  A Website is an extension of yourself and we can help you to
                  express it properly. Your website is your number one marketing
                  asset because we live in a digital age.
                </p>
                <button className="mt-4 text-white hover:text-gray-300 transition-colors">
                  Explore o website →
                </button>
              </div>

              <div className="bg-white/5 p-6 rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
                  alt="Arquitetura"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-3">Arquitetura</h3>
                <p className="text-gray-400">
                  A Website is an extension of yourself and we can help you to
                  express it properly. Your website is your number one marketing
                  asset because we live in a digital age.
                </p>
                <button className="mt-4 text-white hover:text-gray-300 transition-colors">
                  Explore o website →
                </button>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button
                variant="outline"
                className="rounded-full border-2 border-white text-white hover:bg-white hover:text-black px-8"
              >
                Ver mais
              </Button>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-16">
          <div className="container mx-auto px-4 md:px-0">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Os nossos serviços</h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  title: "Web Design & Development",
                  description:
                    "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
                },
                {
                  title: "Chat IA",
                  description:
                    "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
                },
                {
                  title: "Sistema de Reservas",
                  description:
                    "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
                },
                {
                  title: "Web Design & Development",
                  description:
                    "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
                },
              ].map((service, index) => (
                <div key={index} className="bg-white p-6">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                variant="outline"
                className="rounded-full border-2 border-black text-black hover:bg-black hover:text-white px-8"
              >
                Ver mais
              </Button>
            </div>
          </div>
        </div>

        {/* Reasons Section */}
        <div className="py-16">
          <div className="container mx-auto px-4 md:px-0">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">
                As razões pelo qual nos deve escolher
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  title: "BIG Data",
                  description:
                    "Say something about this service that helps people understand what you do.",
                  bgColor: "bg-orange-100",
                },
                {
                  title: "Cyber Security",
                  description:
                    "Say something about this service that helps people understand what you do.",
                  bgColor: "bg-blue-100",
                },
                {
                  title: "Mobile Applications",
                  description:
                    "Say something about this service that helps people understand what you do.",
                  bgColor: "bg-purple-100",
                },
                {
                  title: "Digital Marketing",
                  description:
                    "Say something about this service that helps people understand what you do.",
                  bgColor: "bg-green-100",
                },
              ].map((reason, index) => (
                <div key={index} className="text-center">
                  <div
                    className={`w-16 h-16 ${reason.bgColor} rounded-lg mx-auto mb-4 flex items-center justify-center`}
                  >
                    {/* Icon would go here */}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                  <p className="text-gray-600 text-sm">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 md:py-24 bg-black text-white">
          <div className="container mx-auto px-4 md:px-0">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: 50, label: "Projetos Concluídos", suffix: "+" },
                { number: 30, label: "Clientes Satisfeitos", suffix: "+" },
                { number: 5, label: "Anos de Experiência", suffix: "+" },
                { number: 100, label: "Taxa de Satisfação", suffix: "%" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold mb-2">
                    {stat.number}
                    {stat.suffix}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="py-16">
          <div className="container mx-auto px-4 md:px-0">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Parceiros</h2>
            </div>

            <div className="flex justify-center gap-8">
              <img
                src="https://api.dicebear.com/7.x/initials/svg?seed=PW"
                alt="Partner 1"
                className="w-32 h-32 object-contain"
              />
              <img
                src="https://api.dicebear.com/7.x/initials/svg?seed=P2"
                alt="Partner 2"
                className="w-32 h-32 object-contain"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
