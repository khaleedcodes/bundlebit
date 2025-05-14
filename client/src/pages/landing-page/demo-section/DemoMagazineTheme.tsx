import defaultAvatar from "../../../assets/images/default-avatar.jpeg";
import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const demoBundle = {
  displayName: "Lena Ray",
  bundleName: "lenaray",
  profilePicture: defaultAvatar,
  bio: "Designer. Dreamer. Building beautiful things for the web.",
  bits: [
    {
      title: "Portfolio Website",
      url: "https://lena.design",
      icon: "💼",
      order: 1,
      isPinned: true,
    },
    {
      title: "Dribbble Shots",
      url: "https://dribbble.com/lenaray",
      icon: "🎨",
      order: 2,
      isPinned: false,
    },
    {
      title: "LinkedIn Profile",
      url: "https://linkedin.com/in/lenaray",
      icon: "🔗",
      order: 3,
      isPinned: false,
    },
    {
      title: "Instagram",
      url: "https://instagram.com/lenaray",
      icon: "📸",
      order: 4,
      isPinned: false,
    },
  ],
};

function DemoMagazineTheme() {
  const sortedBits = [...demoBundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  // Get the current month and year
  const currentDate = new Date();
  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();

  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Motion values for x and y rotation
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  // Motion values for idle animation
  const idleY = useMotionValue(0);
  const idleRotate = useMotionValue(0);
  const idleScale = useMotionValue(1);

  // Apply spring physics for smooth animation
  const springConfig = { damping: 20, stiffness: 300 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);
  const springIdleY = useSpring(idleY, { damping: 15, stiffness: 100 });
  const springIdleRotate = useSpring(idleRotate, {
    damping: 15,
    stiffness: 100,
  });
  const springIdleScale = useSpring(idleScale, { damping: 15, stiffness: 100 });

  // Parameters for the 3D effect
  const perspective = 1000;
  const maxTilt = 6; // Less tilt for magazine style
  const scale = 1.02;

  // Transform values for the card when hovering
  const hoverTransform = useTransform(
    [springRotateX, springRotateY],
    ([latestRotateX, latestRotateY]) =>
      `perspective(${perspective}px) rotateX(${latestRotateX}deg) rotateY(${latestRotateY}deg) scale(${
        isHovering ? scale : 1
      })`
  );

  // Transform values for idle animation when not hovering
  const idleTransform = useTransform(
    [springIdleY, springIdleRotate, springIdleScale],
    ([y, rotate, scale]) =>
      `perspective(${perspective}px) translateY(${y}px) rotate(${rotate}deg) scale(${scale})`
  );

  // Combined transform - use hover transform when hovering, otherwise use idle animation
  const combinedTransform = useTransform(() =>
    isHovering ? hoverTransform.get() : idleTransform.get()
  );

  // Idle animation
  useEffect(() => {
    if (!isHovering) {
      // Start looping idle animations
      const idleAnimationInterval = setInterval(() => {
        // Subtle vertical bobbing
        idleY.set(Math.sin(Date.now() / 1000) * 2); // Less movement for magazine style

        // Very subtle rotation
        idleRotate.set(Math.sin(Date.now() / 1500) * 0.5); // Less rotation for magazine style

        // Subtle scale pulsing
        idleScale.set(1 + Math.sin(Date.now() / 2000) * 0.003); // Less scaling for magazine style
      }, 50);

      return () => clearInterval(idleAnimationInterval);
    }
  }, [isHovering]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !isHovering) return;

    const bounds = containerRef.current.getBoundingClientRect();

    // Calculate mouse position relative to card center
    const mouseX = e.clientX - bounds.left - bounds.width / 2;
    const mouseY = e.clientY - bounds.top - bounds.height / 2;

    // Calculate rotation values based on mouse position
    const rotateYValue = (mouseX / bounds.width) * maxTilt * 2;
    const rotateXValue = -((mouseY / bounds.height) * maxTilt * 2);

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-gray-100 text-gray-900 font-['Playfair_Display',serif] relative overflow-hidden">
      {/* Editorial magazine background */}
      <div className="absolute inset-0 z-0">
        {/* Paper texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDEgMCAwIDAgMCAxIDAgMCAwIDAgMSAwIDAgMCAwLjYgMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-5"></div>

        {/* Magazine grid lines */}
        <div className="absolute inset-0 border-b border-gray-200 top-1/3"></div>
        <div className="absolute inset-0 border-b border-gray-200 top-2/3"></div>
        <div className="absolute inset-y-0 border-l border-gray-200 left-1/3"></div>
        <div className="absolute inset-y-0 border-l border-gray-200 left-2/3"></div>
      </div>

      <div
        ref={containerRef}
        className="w-full max-w-lg mx-auto z-10"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          style={{ transform: combinedTransform }}
          className="will-change-transform"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="relative bg-white p-10 shadow-lg border border-gray-200">
            {/* Magazine title header */}
            <motion.div
              className="absolute top-4 right-4 text-right"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-xs text-gray-500 uppercase tracking-widest">
                {month} {year} • Issue 12
              </p>
            </motion.div>

            {/* Red accent bar */}
            <motion.div
              className="absolute left-0 top-10 bottom-10 w-1 bg-red-700"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            ></motion.div>

            <motion.header
              className="mb-10 border-b border-gray-200 pb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h1 className="text-6xl font-bold tracking-tight text-gray-900 mb-1 uppercase">
                PROFILE
              </h1>
              <p className="text-xl text-gray-500 font-light italic">
                The digital presence edition
              </p>
            </motion.header>

            <div className="flex flex-col md:flex-row gap-8">
              {/* Left column: Image and name */}
              <motion.div
                className="md:w-1/3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="mb-4 relative">
                  {/* Magazine-style cropped image */}
                  <motion.div
                    className="aspect-[3/4] overflow-hidden bg-gray-100"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <img
                      src={demoBundle.profilePicture || defaultAvatar}
                      alt={demoBundle.displayName}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Caption under image */}
                  <p className="mt-2 text-xs text-gray-500 italic">
                    {demoBundle.displayName}, digital creator
                  </p>
                </div>
              </motion.div>

              {/* Right column: Content */}
              <motion.div
                className="md:w-2/3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="mb-6">
                  <motion.h2
                    className="text-4xl font-bold mb-1"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    {demoBundle.displayName}
                  </motion.h2>
                  <motion.p
                    className="text-red-600 text-sm font-medium italic"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    @{demoBundle.bundleName}
                  </motion.p>

                  {demoBundle.bio && (
                    <motion.div
                      className="mt-4"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <p className="first-letter:text-4xl first-letter:font-bold first-letter:mr-1 first-letter:float-left text-gray-700 leading-relaxed">
                        {demoBundle.bio}
                      </p>
                    </motion.div>
                  )}
                </div>

                <motion.div
                  className="mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-4 border-b border-gray-200 pb-1">
                    Digital Footprint
                  </h3>

                  <div className="space-y-3">
                    {sortedBits.map((bit, index) => (
                      <motion.a
                        key={index}
                        href={bit.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 w-full py-2 text-gray-900 border-b border-gray-100 hover:border-gray-300 transition-colors"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index + 1 }}
                        whileHover={{ x: 5 }}
                      >
                        {bit.icon && (
                          <span className="text-lg text-gray-500 group-hover:text-red-600 transition-colors">
                            {bit.icon}
                          </span>
                        )}
                        <span className="font-medium group-hover:text-red-700 transition-colors">
                          {bit.title}
                        </span>

                        <div className="ml-auto flex items-center gap-1">
                          <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-gray-400 group-hover:text-red-600 transition-colors"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            initial={{ x: 0 }}
                            whileHover={{ x: 3 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 10,
                            }}
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </motion.svg>
                          <span className="text-xs text-gray-400 group-hover:text-red-600 transition-colors">
                            visit
                          </span>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              className="mt-10 flex justify-between border-t border-gray-200 pt-4 text-xs text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <span>Photography by Bundlebit</span>
              <span>Page 21 of 36</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default DemoMagazineTheme;
