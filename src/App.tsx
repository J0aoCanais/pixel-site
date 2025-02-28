import { Suspense } from "react";
import { useRoutes, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./components/home";
import Services from "./components/services";
import Portfolio from "./components/portfolio";
import routes from "tempo-routes";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ContactForm from "./components/contact-form";
import Layout from "./components/layout";

function App() {
  const location = useLocation();

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />
            <Route
              path="/services"
              element={
                <Layout>
                  <Services />
                </Layout>
              }
            />

            <Route
              path="/portfolio"
              element={
                <Layout>
                  <Portfolio />
                </Layout>
              }
            />
            <Route
              path="/contact"
              element={
                <Layout>
                  <div className="min-h-screen flex flex-col bg-white">
                    <Navbar />
                    <main className="flex-1 container mx-auto py-8 md:py-12">
                      <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-4xl font-bold mb-2 px-4 md:px-0">
                          Contacte-nos
                        </h1>
                        <div className="w-12 h-1 mx-auto bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300"></div>
                      </div>
                      <ContactForm />
                    </main>
                    <Footer />
                  </div>
                </Layout>
              }
            />
          </Routes>
        </AnimatePresence>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
