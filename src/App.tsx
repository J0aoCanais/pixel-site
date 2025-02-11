import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Services from "./components/services";
import Prices from "./components/prices";
import Portfolio from "./components/portfolio";
import routes from "tempo-routes";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ContactForm from "./components/contact-form";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route
            path="/contact"
            element={
              <div className="min-h-screen flex flex-col bg-white">
                <Navbar />
                <main className="flex-1 container mx-auto py-8 md:py-12">
                  <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2 px-4 md:px-0">
                      Contacte-nos
                    </h1>
                    <div className="w-12 h-1 bg-black mx-auto"></div>
                  </div>
                  <ContactForm />
                </main>
                <Footer />
              </div>
            }
          />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
