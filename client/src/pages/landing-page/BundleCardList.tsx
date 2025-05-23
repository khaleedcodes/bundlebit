import { motion } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";
import BundleCard from "./BundleCard";
// import TrustedBySection from "./TrustedBySection";
import GetStartedSvg from "./GetStartedSvg";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import FaqSection from "./FaqSection";

const bundleCardsData = [
  {
    bundleLink: "https://bundlebit.me/bundlebit",
    bundleName: "/bundlebit",
    name: "Bundlebit",
    tags: ["Link-In-Bio", "Every Bit"],
  },
  {
    bundleLink: "https://bundlebit.me/nimorcreative",
    bundleName: "/nimorcreative",
    name: "Nimor",
    tags: ["Web Agency", "Creative"],
  },
  {
    bundleLink: "https://bundlebit.me/khaleed",
    bundleName: "/khaleed",
    name: "Khaleed Opeloyeru",
    tags: ["Full-Stack Developer", "Creative"],
  },
];

function BundleCardList() {
  const [username, setUsername] = useState("");

  return (
    <>
      <section
        id="bundles"
        className="py-20 md:py-32 relative px-6 container mx-auto"
      >
        {/* <div className="absolute top-0 left-0 right-0 h-px bg-first-section-divider"></div> */}
        <div className="bg-gradient-to-r from-first-accent/20 to-third-blue/20 rounded-3xl p-8 md:p-12 relative overflow-hidden w-full">
          <div className="container mx-auto">
            <RevealOnScroll>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-first-accent/20 text-first-accent mb-6">
                  <span className="w-2 h-2 bg-third-blue rounded-full mr-2"></span>
                  Featured Bundles
                </span>
                <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
                  Featured Bundles
                </h2>
                <p className="text-grey text-lg">
                  Explore these Bundles to get inspired and see what's possible
                  with Bundlebit.
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bundleCardsData.map((bundle, index) => (
                <RevealOnScroll key={index} delay={index * 0.1}>
                  <BundleCard
                    bundleLink={bundle.bundleLink}
                    bundleName={bundle.bundleName}
                    name={bundle.name}
                    tags={bundle.tags}
                  />
                </RevealOnScroll>
              ))}
            </div>

            {/* <RevealOnScroll delay={0.4}>
            <div className="text-center mt-12">
              <motion.a
                href="#"
                className="inline-flex items-center text-first-text-color border border-first-section-divider hover:border-grey px-6 py-3 rounded-lg"
                whileHover={{
                  y: -2,
                  boxShadow:
                    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                }}
                transition={{ duration: 0.2 }}
              >
                <span>View more examples</span>
                <FaArrowRight className="ml-2" />
              </motion.a>
            </div>
          </RevealOnScroll> */}
          </div>
          {/* <TrustedBySection /> */}
        </div>
      </section>
      <FaqSection />

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-first-section-divider"></div>
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-first-accent/20 to-third-blue/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <RevealOnScroll>
                <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
                  Ready to create your own Bundle?
                </h2>
                <p className="text-grey text-lg mb-8">
                  Join hundreds of creators and businesses who have simplified
                  their online presence with Bundlebit.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex bg-white rounded-lg pl-2 items-center group focus-within:ring-2 focus-within:ring-third-blue">
                    <span className="text-grey text-sm font-medium">
                      bundlebit.me/
                    </span>
                    <motion.input
                      placeholder="yourusername"
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                      className="font-medium rounded-lg relative overflow-hidden py-2 bg-white border-none outline-none text-grey text-sm"
                    />
                  </div>
                  {/* <Bounce delay={0.3}> */}
                  {/* </Bounce> */}

                  {/* <Bounce delay={0.5}> */}
                  <motion.a
                    href={`/b/signup?username=${username}`}
                    className="flex items-center gap-2 bg-first-accent hover:bg-first-accent/90 text-first-text-color font-medium rounded-lg px-8 py-3.5 text-center"
                    whileHover={{
                      boxShadow:
                        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="font-medium">Create your Bundle</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    >
                      <FaArrowRight className="text-xs" />
                    </motion.div>
                  </motion.a>
                  {/* </Bounce> */}
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={0.2}>
                <GetStartedSvg />
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BundleCardList;
