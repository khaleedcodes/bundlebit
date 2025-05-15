import bundlebitLogo from "../../assets/images/bundlebit-logo/bundlebit-transparent (6).png";
import WordMark from "../../assets/icons/WordMark";

function Footer() {
  return (
    <>
      <footer className="py-12 md:py-16 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-first-section-divider"></div>

        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-first-accent/20 to-third-blue/20 rounded-3xl p-8 md:p-12 relative overflow-hidden w-full">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
              <div>
                <div className="flex items-center mb-6 gap-1">
                  <img src={bundlebitLogo} className="h-8 w-8" />
                  <WordMark />
                </div>
                <p className="text-grey mb-6">One Bundle. Every bit of you.</p>
                {/* <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-grey hover:text-first-text-color transition-colors"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="text-grey hover:text-first-text-color transition-colors"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="text-grey hover:text-first-text-color transition-colors"
                >
                  <FaYoutube />
                </a>
                <a
                  href="#"
                  className="text-grey hover:text-first-text-color transition-colors"
                >
                  <FaGithub />
                </a>
              </div> */}
              </div>

              <div>
                <h4 className="font-semibold text-first-text-color mb-4">
                  Product
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-grey hover:text-first-text-color transition-colors"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-grey hover:text-first-text-color transition-colors"
                    >
                      Templates
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-grey hover:text-first-text-color transition-colors"
                    >
                      Examples
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-first-text-color mb-4">
                  Resources
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-grey hover:text-first-text-color transition-colors"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-grey hover:text-first-text-color transition-colors"
                    >
                      Support
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-first-text-color mb-4">
                  Company
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-grey hover:text-first-text-color transition-colors"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-grey hover:text-first-text-color transition-colors"
                    >
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-grey hover:text-first-text-color transition-colors"
                    >
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-first-section-divider pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-grey text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Bundlebit. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-grey hover:text-first-text-color text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-grey hover:text-first-text-color text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-grey hover:text-first-text-color text-sm transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
