import Navbar from "./navbar";
import Footer from "./footer";
import { Button } from "@/components/ui/button";
import Counter from "./counter-animation";

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="container mx-auto py-16 md:py-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nosso Portfólio
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conheça alguns dos projetos incríveis que desenvolvemos para
              nossos clientes
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              "Todos",
              "E-commerce",
              "Corporativo",
              "Landing Pages",
              "Sistemas",
            ].map((filter, index) => (
              <Button
                key={index}
                variant="outline"
                className={`rounded-full ${index === 0 ? "bg-black text-white" : ""}`}
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-3 gap-8 px-4 md:px-0">
            {[
              {
                title: "E-commerce de Moda",
                category: "E-commerce",
                image:
                  "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
              },
              {
                title: "Site Corporativo",
                category: "Corporativo",
                image:
                  "https://images.unsplash.com/photo-1497366216548-37526070297c",
              },
              {
                title: "Landing Page Produto",
                category: "Landing Pages",
                image:
                  "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
              },
              {
                title: "Sistema de Reservas",
                category: "Sistemas",
                image:
                  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
              },
              {
                title: "E-commerce Eletrônicos",
                category: "E-commerce",
                image:
                  "https://images.unsplash.com/photo-1498049794561-7780e7231661",
              },
              {
                title: "Site Institucional",
                category: "Corporativo",
                image:
                  "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm">{project.category}</p>
                  <Button
                    variant="outline"
                    className="mt-4 rounded-full border-2 border-white text-white hover:bg-white hover:text-black"
                  >
                    Ver projeto
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
