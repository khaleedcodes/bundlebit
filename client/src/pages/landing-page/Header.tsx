import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars } from "react-icons/fa";
import Bounce from "./Bounce";
import WordMark from "../../assets/icons/WordMark";
import bundlebitLogo from "../../assets/images/bundlebit-logo/bundlebit-transparent (6).png";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Header Component */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md ">
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
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/b/login"
              className="text-first-text-color/80 hover:text-first-text-color transition-colors hover:border-b-third-blue border-transparent border-b-2 pb-1"
            >
              Log in
            </a>
            <motion.a
              href="/b/signup"
              className=" bg-new-main-2 hover:bg-new-main-3 text-first-text-color font-medium rounded-lg px-5 py-2.5"
              whileHover={{
                y: -2,
                boxShadow:
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              }}
              transition={{ duration: 0.2 }}
            >
              Get started for free
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
              className="mobile-menu md:hidden border-t border-first-section-divider absolute w-full bg-black"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col py-4 px-6 space-y-4">
                <a
                  href="/b/login"
                  className=" flex justify-center text-first-text-color/80 hover:text-first-text-color transition-colors hover:border-third-blue border-transparent border-2 px-5 py-2.5 rounded-lg "
                >
                  <p>Log in</p>
                </a>
                <a
                  href="/b/signup"
                  className="bg-new-main-2 text-first-text-color font-medium rounded-lg px-5 py-2.5 text-center"
                >
                  Get started for free
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
