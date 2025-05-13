import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars } from "react-icons/fa";
import Bounce from "./Bounce";
import WordMark from "../../assets/icons/WordMark";
import bundlebitLogo from "../../assets/images/logo.png";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Header Component */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-first-section-divider">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-1">
            <Bounce>
              <img src={bundlebitLogo} className="h-8 w-8" />
            </Bounce>
            <motion.span
              className="font-poppins font-bold text-xl"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                ease: "backOut",
              }}
            >
              <WordMark />
            </motion.span>
          </div>

          {/* <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-first-text-color/80 hover:text-first-text-color transition-colors"
            >
              Features
            </a>
            <a
              href="#bundles"
              className="text-first-text-color/80 hover:text-first-text-color transition-colors"
            >
              Examples
            </a>
            <a
              href="#pricing"
              className="text-first-text-color/80 hover:text-first-text-color transition-colors"
            >
              Pricing
            </a>
          </nav> */}

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/b/login"
              className="text-first-text-color/80 hover:text-first-text-color transition-colors hover:border-b-third-blue border-transparent border-b-2 pb-1"
            >
              Log in
            </a>
            <motion.a
              href="/b/signup"
              className=" bg-third-blue hover:bg-second-blue text-first-text-color font-medium rounded-lg px-5 py-2.5"
              whileHover={{
                y: -2,
                boxShadow:
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              }}
              transition={{ duration: 0.2 }}
            >
              Get Started
            </motion.a>
          </div>

          <button
            className="menu-button block md:hidden text-first-text-color"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <FaBars className="text-xl" />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="mobile-menu md:hidden  border-t border-first-section-divider absolute w-full"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col py-4 px-6 space-y-4">
                {/* <a
                  href="#features"
                  className="text-first-text-color hover:text-first-accent py-2 transition-colors"
                >
                  Features
                </a>
                <a
                  href="#bundles"
                  className="text-first-text-color hover:text-first-accent py-2 transition-colors"
                >
                  Examples
                </a>
                <a
                  href="#pricing"
                  className="text-first-text-color hover:text-first-accent py-2 transition-colors"
                >
                  Pricing
                </a> */}
                <a
                  href="/b/login"
                  className="text-first-text-color hover:text-first-accent py-2 transition-colors"
                >
                  Log in
                </a>
                <a
                  href="/b/signup"
                  className="bg-first-accent text-first-text-color font-medium rounded-lg px-5 py-2.5 text-center"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

export default Header;
