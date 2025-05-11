import { Suspense } from "react";
import { useRoutes, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./components/home";
import Services from "./components/services";
import Portfolio from "./components/portfolio";
import routes from "tempo-routes";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ContactForm from "./components/contact-form";
import Layout from "./components/layout";

function NeonLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <motion.div
        className="w-16 h-16 rounded-full border-4 border-white border-t-transparent drop-shadow-[0_0_24px_#fff]"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        style={{ borderTopColor: "transparent" }}
      />
    </div>
  );
}

function App() {
  const location = useLocation();

  return (
    <Suspense fallback={<NeonLoader />}>
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
                  <ContactForm />
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
