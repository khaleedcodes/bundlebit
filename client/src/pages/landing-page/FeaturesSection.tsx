import { motion } from "framer-motion";
import {
  FaArrowRight,
  // FaCheck,
  FaLink,
  FaMagic,
  FaLayerGroup,
} from "react-icons/fa";
import RevealOnScroll from "./RevealOnScroll";
// import TrustedBySection from "./TrustedBySection";

const featuresData = [
  {
    featureIcon: FaMagic,
    featureHeader: "Create your Bundle in seconds",
    featureDescription:
      "Instantly build a clean, personalized page to showcase all your important links in one place.",
    accentColor: "first-accent",
  },
  {
    featureIcon: FaLink,
    featureHeader: "Share one link to rule them all",
    featureDescription:
      "Simplify your online presence. Share a single link that gives your audience access to everything you want them to see.",
    accentColor: "third-blue",
  },
  {
    featureIcon: FaLayerGroup,
    featureHeader: "Organize and update your links with ease",
    featureDescription:
      "Add, remove, and reorder links effortlessly. Keep your Bundle up to date without any hassle.",
    accentColor: "first-blue",
  },
];

function FeaturesSection() {
  return (
    <>
      {" "}
      {/* Features Section with Cartoony Animations */}
      <section
        id="features"
        className="py-20 md:py-32  relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

        {/* Animated blob 1 */}
        <div className="absolute -top-20 -left-20 opacity-20 pointer-events-none">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-96 h-96"
          >
            <motion.path
              fill="#646cff"
              d="M45.9,-77.2C59.6,-71.2,71.3,-60.3,79.5,-47C87.7,-33.7,92.5,-17.9,92.3,-2.2C92.1,13.5,87,26.9,79.5,38.8C72,50.8,62.1,61.2,49.6,69.9C37,78.5,21.8,85.4,5.2,86.3C-11.4,87.2,-23,82.1,-34.4,75.6C-45.8,69.1,-57,61.3,-65.5,50.7C-74,40.1,-80,26.8,-82.1,12.7C-84.2,-1.4,-82.5,-16.2,-77.5,-30.1C-72.5,-44,-64.4,-56.9,-52.7,-64.3C-41,-71.6,-25.8,-73.3,-10.5,-74.2C4.8,-75,19.6,-75,31.7,-76.1C43.9,-77.3,53.5,-81.7,45.9,-77.2Z"
              transform="translate(100 100)"
              animate={{
                d: [
                  "M45.9,-77.2C59.6,-71.2,71.3,-60.3,79.5,-47C87.7,-33.7,92.5,-17.9,92.3,-2.2C92.1,13.5,87,26.9,79.5,38.8C72,50.8,62.1,61.2,49.6,69.9C37,78.5,21.8,85.4,5.2,86.3C-11.4,87.2,-23,82.1,-34.4,75.6C-45.8,69.1,-57,61.3,-65.5,50.7C-74,40.1,-80,26.8,-82.1,12.7C-84.2,-1.4,-82.5,-16.2,-77.5,-30.1C-72.5,-44,-64.4,-56.9,-52.7,-64.3C-41,-71.6,-25.8,-73.3,-10.5,-74.2C4.8,-75,19.6,-75,31.7,-76.1C43.9,-77.3,53.5,-81.7,45.9,-77.2Z",
                  "M37.3,-63.1C48.9,-59.4,59.3,-50.4,66.7,-38.5C74.1,-26.7,78.4,-12.2,76.3,0.8C74.1,13.9,65.5,25.4,56.5,36.1C47.6,46.9,38.4,56.8,27.1,61.7C15.9,66.6,2.5,66.5,-10.9,65.2C-24.2,63.8,-37.4,61.2,-47.8,53.7C-58.2,46.2,-65.7,33.8,-70.6,19.9C-75.5,6,-77.8,-9.4,-73.3,-23C-68.8,-36.7,-57.5,-48.6,-44.4,-51.7C-31.4,-54.8,-16.6,-49.1,-2.1,-45.7C12.5,-42.3,25.6,-66.8,37.3,-63.1Z",
                  "M39.1,-66.7C51.8,-62.2,64.3,-54.1,71.8,-42C79.3,-29.9,81.6,-14.9,79.4,-1.3C77.2,12.4,70.3,24.8,62.2,35.8C54.2,46.8,44.9,56.4,33.5,62.2C22.1,67.9,8.6,69.7,-5.1,69.7C-18.8,69.6,-32.6,67.6,-44.9,61.1C-57.3,54.6,-68.1,43.6,-73.4,30.3C-78.6,17.1,-78.4,1.7,-75.3,-12.9C-72.2,-27.5,-66.2,-41.3,-56.1,-46.9C-46,-52.4,-31.9,-49.8,-20,-52.7C-8.1,-55.6,1.6,-64.1,13.6,-68.1C25.5,-72.1,39.8,-71.6,39.1,-66.7Z",
                  "M45.9,-77.2C59.6,-71.2,71.3,-60.3,79.5,-47C87.7,-33.7,92.5,-17.9,92.3,-2.2C92.1,13.5,87,26.9,79.5,38.8C72,50.8,62.1,61.2,49.6,69.9C37,78.5,21.8,85.4,5.2,86.3C-11.4,87.2,-23,82.1,-34.4,75.6C-45.8,69.1,-57,61.3,-65.5,50.7C-74,40.1,-80,26.8,-82.1,12.7C-84.2,-1.4,-82.5,-16.2,-77.5,-30.1C-72.5,-44,-64.4,-56.9,-52.7,-64.3C-41,-71.6,-25.8,-73.3,-10.5,-74.2C4.8,-75,19.6,-75,31.7,-76.1C43.9,-77.3,53.5,-81.7,45.9,-77.2Z",
                ],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            />
          </svg>
        </div>

        {/* Animated blob 2 */}
        <div className="absolute -bottom-40 -right-20 opacity-20 pointer-events-none">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-96 h-96"
          >
            <motion.path
              fill="#1E93FF"
              d="M46.7,-78C57.5,-69.6,61.3,-51.5,65.6,-36C70,-20.4,74.9,-7.5,71.3,3.6C67.7,14.7,55.4,23.9,45.3,33C35.3,42.1,27.4,51,17.2,57.8C7,64.6,-5.6,69.3,-19.3,69.9C-33,70.5,-47.9,67,-57.6,57.2C-67.3,47.3,-71.8,31.1,-73.1,15.2C-74.3,-0.6,-72.2,-16.1,-66.1,-29.7C-60,-43.3,-49.9,-55,-37.6,-62.5C-25.3,-69.9,-10.6,-73.2,4.7,-75.4C20,-77.5,35.9,-86.4,46.7,-78Z"
              transform="translate(100 100)"
              animate={{
                d: [
                  "M46.7,-78C57.5,-69.6,61.3,-51.5,65.6,-36C70,-20.4,74.9,-7.5,71.3,3.6C67.7,14.7,55.4,23.9,45.3,33C35.3,42.1,27.4,51,17.2,57.8C7,64.6,-5.6,69.3,-19.3,69.9C-33,70.5,-47.9,67,-57.6,57.2C-67.3,47.3,-71.8,31.1,-73.1,15.2C-74.3,-0.6,-72.2,-16.1,-66.1,-29.7C-60,-43.3,-49.9,-55,-37.6,-62.5C-25.3,-69.9,-10.6,-73.2,4.7,-75.4C20,-77.5,35.9,-86.4,46.7,-78Z",
                  "M41.2,-69.1C53.3,-62.9,63.2,-51.9,70.5,-38.5C77.7,-25.2,82.4,-9.5,80.3,5.1C78.3,19.8,69.6,33.2,59.1,44.1C48.6,55,36.3,63.3,22.2,69.5C8.2,75.7,-7.6,79.7,-20.8,75.4C-34,71.1,-44.6,58.5,-56.4,45.7C-68.1,32.9,-81,19.9,-83.6,4.8C-86.2,-10.3,-78.6,-27.8,-67.2,-39.9C-55.9,-52,-41,-58.7,-26.9,-62.8C-12.8,-66.9,0.5,-68.5,14.2,-69.2C28,-69.9,42.2,-69.8,41.2,-69.1Z",
                  "M38.7,-64.8C49.6,-59.1,57.3,-47.1,65.3,-34.3C73.3,-21.5,81.7,-7.9,80.2,4.3C78.7,16.6,67.4,27.5,57.3,38.6C47.2,49.7,38.3,61,26.5,66.1C14.7,71.2,-0.1,70.1,-12.9,65.6C-25.7,61,-36.7,53,-47.2,43.1C-57.7,33.3,-67.7,21.6,-70.8,8C-73.8,-5.6,-70,-20.9,-62.1,-32.9C-54.2,-44.9,-42.1,-53.5,-29.8,-58.3C-17.5,-63.1,-4.9,-64.2,7.1,-65.4C19,-66.7,37.9,-68.3,38.7,-64.8Z",
                  "M46.7,-78C57.5,-69.6,61.3,-51.5,65.6,-36C70,-20.4,74.9,-7.5,71.3,3.6C67.7,14.7,55.4,23.9,45.3,33C35.3,42.1,27.4,51,17.2,57.8C7,64.6,-5.6,69.3,-19.3,69.9C-33,70.5,-47.9,67,-57.6,57.2C-67.3,47.3,-71.8,31.1,-73.1,15.2C-74.3,-0.6,-72.2,-16.1,-66.1,-29.7C-60,-43.3,-49.9,-55,-37.6,-62.5C-25.3,-69.9,-10.6,-73.2,4.7,-75.4C20,-77.5,35.9,-86.4,46.7,-78Z",
                ],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <RevealOnScroll>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.span
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-first-accent/20 text-first-accent mb-6"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(100, 108, 255, 0.3)",
                }}
              >
                <motion.span
                  className="w-2 h-2 bg-third-blue rounded-full mr-2"
                  animate={{
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                ></motion.span>
                Smart Features
              </motion.span>

              <motion.h2
                className="font-poppins font-bold text-3xl md:text-4xl mb-6 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Everything you need to{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">organize</span>
                  <motion.span
                    className="absolute bottom-2 left-0 right-0 h-3 bg-first-accent/20 -z-10"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 1 }}
                  ></motion.span>
                </span>{" "}
                and
                <span className="relative inline-block ml-2">
                  <span className="relative z-10">share</span>
                  <motion.span
                    className="absolute bottom-2 left-0 right-0 h-3 bg-third-blue/20 -z-10"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 1.3 }}
                  ></motion.span>
                </span>{" "}
                your online presence
              </motion.h2>

              {/* <motion.p
                className="text-grey text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                A smart, clean alternative to complicated bio link tools. Simple
                yet powerful.
              </motion.p> */}
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {featuresData.map((feature, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <motion.div
                  className={`bg-gradient-to-b from-first-card to-first-card/60 p-8 rounded-xl border border-first-section-divider/30 relative overflow-hidden group`}
                  whileHover={{
                    y: -8,
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Accent corner */}
                  <motion.div
                    className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-${feature.accentColor}/40 to-transparent -mr-8 -mt-8 rounded-full blur-lg group-hover:from-${feature.accentColor}/60`}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Icon container with bounce animation */}
                  <motion.div
                    className={`relative mb-6 inline-flex items-center justify-center h-14 w-14 rounded-lg bg-gradient-to-br from-${feature.accentColor}/20 to-${feature.accentColor}/5 text-${feature.accentColor} text-2xl`}
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      animate={{
                        y: [0, -3, 0],
                      }}
                      transition={{
                        duration: 2 + index,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut",
                      }}
                    >
                      <feature.featureIcon />
                    </motion.div>
                  </motion.div>

                  <h3
                    className={`font-poppins font-semibold text-xl mb-3 group-hover:text-${feature.accentColor} transition-colors`}
                  >
                    {feature.featureHeader}
                  </h3>

                  <p className="text-grey group-hover:text-grey/90 transition-colors">
                    {feature.featureDescription}
                  </p>

                  {/* Animated arrow on hover */}
                  <motion.div
                    className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div
                      className={`flex items-center justify-center h-8 w-8 rounded-full bg-${feature.accentColor}/10`}
                    >
                      <FaArrowRight
                        className={`text-${feature.accentColor} text-xs`}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>

          {/* <RevealOnScroll delay={0.3}>
            <div className="mt-20 md:mt-32">
              <div className="bg-first-card rounded-2xl border border-first-section-divider overflow-hidden">
                <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-first-accent/20 text-first-accent mb-6">
                      <span className="w-2 h-2 bg-third-blue rounded-full mr-2"></span>
                      Analytics Dashboard
                    </span>
                    <h3 className="font-poppins font-semibold text-2xl mb-4">
                      Track your performance and understand your audience
                    </h3>
                    <p className="text-grey mb-6">
                      Get detailed insights on how visitors interact with your
                      Bundle. See which links perform best and optimize your
                      content.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <FaCheck className="text-expand-button mt-1 mr-3" />
                        <span className="text-grey">
                          Real-time click tracking
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-expand-button mt-1 mr-3" />
                        <span className="text-grey">Visitor demographics</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-expand-button mt-1 mr-3" />
                        <span className="text-grey">
                          Performance trends over time
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
                      alt="Analytics dashboard visualization"
                      className="w-full h-auto rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll> */}
        </div>
      </section>
    </>
  );
}

export default FeaturesSection;
