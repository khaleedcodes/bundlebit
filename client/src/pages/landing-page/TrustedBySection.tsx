import { motion } from "framer-motion";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import RevealOnScroll from "./RevealOnScroll";

function TrustedBySection() {
  return (
    <>
      {" "}
      {/* Trusted By Section with Animations */}
      <section className="py-12 md:py-16 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

        {/* Animated floating shape */}
        <div className="absolute top-0 right-10 opacity-20 pointer-events-none">
          <motion.div
            className="w-60 h-60 rounded-full bg-gradient-to-tl from-first-accent/20 to-third-blue/20 blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 15, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-10">
              <p className="text-grey text-sm md:text-base font-medium uppercase tracking-wider relative inline-block">
                <motion.span
                  className="absolute -left-8 w-6 h-px"
                  initial={{ width: 0 }}
                  animate={{ width: 24 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                ></motion.span>
                Trusted by content creators worldwide
                <motion.span
                  className="absolute -right-8 w-6 h-px"
                  initial={{ width: 0 }}
                  animate={{ width: 24 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                ></motion.span>
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {/* YouTubers */}
            <RevealOnScroll delay={0.1}>
              <motion.div
                className="flex items-center justify-center p-4 rounded-lg border border-first-section-divider/5 bg-first-card/50 backdrop-blur-sm group"
                whileHover={{
                  y: -5,
                  backgroundColor: "rgba(36, 37, 46, 0.8)",
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  className="h-10 w-10 rounded-full bg-gradient-to-tr from-first-card to-first-section-divider flex items-center justify-center mr-3 group-hover:scale-110"
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    animate={{
                      y: [0, -2, 0, 2, 0],
                      rotate: [0, -5, 0, 5, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <FaYoutube className="text-[#FF0000] text-lg" />
                  </motion.div>
                </motion.div>
                <span className="text-grey font-medium group-hover:text-first-text-color transition-colors">
                  YouTubers
                </span>
              </motion.div>
            </RevealOnScroll>

            {/* Influencers */}
            <RevealOnScroll delay={0.2}>
              <motion.div
                className="flex items-center justify-center p-4 rounded-lg border border-first-section-divider/5 bg-first-card/50 backdrop-blur-sm group"
                whileHover={{
                  y: -5,
                  backgroundColor: "rgba(36, 37, 46, 0.8)",
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  className="h-10 w-10 rounded-full bg-gradient-to-tr from-first-card to-first-section-divider flex items-center justify-center mr-3 group-hover:scale-110"
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    animate={{
                      y: [0, -2, 0, 2, 0],
                      rotate: [0, -5, 0, 5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <FaInstagram className="text-[#E1306C] text-lg" />
                  </motion.div>
                </motion.div>
                <span className="text-grey font-medium group-hover:text-first-text-color transition-colors">
                  Influencers
                </span>
              </motion.div>
            </RevealOnScroll>

            {/* Businesses */}
            <RevealOnScroll delay={0.3}>
              <motion.div
                className="flex items-center justify-center p-4 rounded-lg border border-first-section-divider/5 bg-first-card/50 backdrop-blur-sm group"
                whileHover={{
                  y: -5,
                  backgroundColor: "rgba(36, 37, 46, 0.8)",
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  className="h-10 w-10 rounded-full bg-gradient-to-tr from-first-card to-first-section-divider flex items-center justify-center mr-3 group-hover:scale-110"
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    animate={{
                      y: [0, -2, 0, 2, 0],
                      rotate: [0, -5, 0, 5, 0],
                    }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-first-blue"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                  </motion.div>
                </motion.div>
                <span className="text-grey font-medium group-hover:text-first-text-color transition-colors">
                  Businesses
                </span>
              </motion.div>
            </RevealOnScroll>

            {/* Developers */}
            <RevealOnScroll delay={0.4}>
              <motion.div
                className="flex items-center justify-center p-4 rounded-lg border border-first-section-divider/5 bg-first-card/50 backdrop-blur-sm group"
                whileHover={{
                  y: -5,
                  backgroundColor: "rgba(36, 37, 46, 0.8)",
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  className="h-10 w-10 rounded-full bg-gradient-to-tr from-first-card to-first-section-divider flex items-center justify-center mr-3 group-hover:scale-110"
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    animate={{
                      y: [0, -2, 0, 2, 0],
                      rotate: [0, -5, 0, 5, 0],
                    }}
                    transition={{
                      duration: 5.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-first-accent"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  </motion.div>
                </motion.div>
                <span className="text-grey font-medium group-hover:text-first-text-color transition-colors">
                  Developers
                </span>
              </motion.div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}

export default TrustedBySection;
