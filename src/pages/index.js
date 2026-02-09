import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

// Soft, elegant animation variants matching Lilac template
const fadeUpSoft = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: {
      delay,
      duration: 1.4,
      ease: "easeOut",
    },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay,
      duration: 1.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const slideUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FEF8F2] overflow-hidden">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="px-[5%] mt-1 py-6 md:py-8 flex items-center justify-between relative"
      >
        {/* Logo */}
        <a href="#">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-[#4A7C7E]">
            Dr. Maya Reynolds
          </h1>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-[#2D3436] font-medium text-base lg:text-lg">
          <a href="#about" className="hover:text-[#4A7C7E] transition-colors">
            About
          </a>
          <a
            href="#services"
            className="hover:text-[#4A7C7E] transition-colors"
          >
            Services
          </a>
          <a href="#contact" className="hover:text-[#4A7C7E] transition-colors">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#2D3436] focus:outline-none"
        >
          <span className="text-2xl">{menuOpen ? "✕" : "☰"}</span>
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-md shadow-lg md:hidden z-50"
            >
              <div className="flex flex-col items-center gap-6 py-8 text-[#2D3436] font-medium text-lg">
                <a onClick={() => setMenuOpen(false)} href="#about">
                  About
                </a>
                <a onClick={() => setMenuOpen(false)} href="#services">
                  Services
                </a>
                <a onClick={() => setMenuOpen(false)} href="#contact">
                  Contact
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Section */}
      <main className="px-[5%] min-h-[600px] md:min-h-[500px] lg:min-h-[calc(100vh-80px)] flex items-end pb-12 md:pb-16 lg:pb-20">
        <div className="mx-auto max-w-[1500px] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full">
          {/* Image Side */}
          <motion.div
            variants={slideUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="relative mx-auto w-[70%] h-[400px] md:w-[75%] md:h-[460px] lg:w-[80%] lg:h-[800px]"
          >
            <div className="relative w-full h-full rounded-t-full overflow-hidden">
              <Image
                src="/hero.png"
                fill
                sizes="(max-width: 768px) 70vw, (max-width: 1024px) 75vw, 80vw"
                className="object-cover"
                alt="Mental Health Care - Dr. Shyamgouri Prusty"
                priority
              />
            </div>
          </motion.div>

          {/* Content Side */}
          <div className="order-1 md:order-2 flex items-center">
            <div className="w-full max-w-[560px] flex flex-col items-center text-center">
              <motion.h2
                variants={fadeUpSoft}
                initial="hidden"
                animate="visible"
                custom={0.3}
                className="text-[2.25rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem] leading-[1.1] font-bold text-[#2D3436] mb-6"
              >
                Therapy for{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#4A7C7E]">
                    Anxiety & Trauma
                  </span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                    className="absolute bottom-1 sm:bottom-2 left-0 w-full h-3 sm:h-4 bg-[#E8D5F2] opacity-50 -z-10"
                    style={{ transformOrigin: "left" }}
                  />
                </span>{" "}
                in Santa Monica
              </motion.h2>

              <motion.p
                variants={fadeUpSoft}
                initial="hidden"
                animate="visible"
                custom={0.5}
                className="text-base sm:text-lg md:text-xl leading-relaxed text-[#000000] mb-8 md:mb-10 max-w-xl"
              >
                A thoughtful, supportive approach for adults feeling overwhelmed
                by stress, past experiences, or high internal pressure.
              </motion.p>

              <motion.div
                variants={fadeUpSoft}
                initial="hidden"
                animate="visible"
                custom={0.4}
                className="flex justify-center w-full"
              >
                <motion.a
                  href="#contact"
                  initial="rest"
                  animate="rest"
                  whileHover="hover"
                  className="relative inline-flex items-center justify-center overflow-hidden rounded-md border-2 border-[#4A7C7E] px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 font-semibold text-sm sm:text-base tracking-wide text-[#4A7C7E]"
                >
                  <motion.span
                    variants={{
                      rest: { scaleX: 0, originX: 0 },
                      hover: { scaleX: 1, originX: 0 },
                    }}
                    transition={{
                      duration: 0.7,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="absolute inset-0 bg-[#4A7C7E]"
                  />
                  <motion.span
                    variants={{
                      rest: { color: "#4A7C7E" },
                      hover: { color: "#ffffff" },
                    }}
                    transition={{
                      duration: 0.35,
                      delay: 0.15,
                    }}
                    className="relative z-10"
                  >
                    SCHEDULE CONSULTATION →
                  </motion.span>
                  <motion.span
                    className="absolute inset-0"
                    whileTap={{ scale: 0.97 }}
                  />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      {/* Our Office Section */}
      <section className="relative px-[5%] py-16 md:py-20 bg-background overflow-hidden">
        {/* Top Dividing Line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent"></div>

        <div className="mx-auto max-w-[1500px]">
          {/* Heading */}
          <div className="text-center mb-10 md:mb-14">
            <h3 className="text-4xl sm:text-3xl md:text-4xl font-semibold text-primary mb-4">
              Our Office
            </h3>
            <p className="text-base sm:text-lg text-secondary max-w-xl mx-auto">
              A calm, private space designed to feel grounding, comfortable, and
              welcoming.
            </p>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {/* Image 1 - Placeholder until you add real images */}
            <div className="relative w-full h-[260px] sm:h-[300px] rounded-md overflow-hidden shadow-lg bg-gray-200">
              {/* Remove or add real image src later */}
              <img
                src="/office1.jpeg"
                alt="Therapy office interior in Santa Monica"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 2 */}
            <div className="relative w-full h-[260px] sm:h-[300px] rounded-md overflow-hidden shadow-lg bg-gray-200">
              {/* Remove or add real image src later */}
              <img
                src="/office2.jpeg"
                alt="Therapy office interior in Santa Monica"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 3 */}
            <div className="relative w-full h-[260px] sm:h-[300px] rounded-md overflow-hidden shadow-lg bg-gray-200">
              {/* Remove or add real image src later */}
              <img
                src="/office1.jpeg"
                alt="Therapy office interior in Santa Monica"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom Dividing Line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent"></div>
      </section>
    </div>
  );
}
