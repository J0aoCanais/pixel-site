import { motion, AnimatePresence } from "framer-motion";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -30, scale: 1.01, filter: "blur(8px)" }}
        transition={{ duration: 0.5, ease: [0.4, 0.01, 0.2, 1] }}
        className="relative"
      >
        {/* Neon overlay during transition */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0.7 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 pointer-events-none z-40 bg-white/30 backdrop-blur-md drop-shadow-[0_0_32px_#fff]"
        />
        {/* Neon line animation */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="fixed top-1/2 left-0 w-full h-1 bg-white/80 z-50 pointer-events-none origin-left shadow-[0_0_24px_#fff]"
        />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
