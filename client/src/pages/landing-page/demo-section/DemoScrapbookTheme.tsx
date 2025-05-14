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

function DemoScrapbookTheme() {
  const sortedBits = [...demoBundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

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
  const springConfig = { damping: 15, stiffness: 250 }; // Less rigid for scrapbook style
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);
  const springIdleY = useSpring(idleY, { damping: 10, stiffness: 80 }); // Looser for scrapbook
  const springIdleRotate = useSpring(idleRotate, {
    damping: 10,
    stiffness: 80,
  });
  const springIdleScale = useSpring(idleScale, { damping: 10, stiffness: 80 });

  // Parameters for the 3D effect
  const perspective = 1000;
  const maxTilt = 7; // Moderate tilt for scrapbook style
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

  // Idle animation with natural paper-like movements
  useEffect(() => {
    if (!isHovering) {
      // Start looping idle animations with more organic movement for scrapbook
      const idleAnimationInterval = setInterval(() => {
        // Gentle vertical bobbing like paper
        idleY.set(Math.sin(Date.now() / 1000) * 4);

        // Gentle rotation like paper in a light breeze
        idleRotate.set(Math.sin(Date.now() / 1500) * 1.2);

        // Subtle scale breathing
        idleScale.set(1 + Math.sin(Date.now() / 2000) * 0.01);
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

    // Calculate rotation values based on mouse position - smoother for paper feel
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
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-amber-50 text-gray-800 font-['Caveat',cursive] relative overflow-hidden">
      {/* Scrapbook background texture */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Paper texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDEgMCAwIDAgMCAxIDAgMCAwIDAgMSAwIDAgMCAwLjQgMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-30"></div>

        {/* Decorative doodles and elements */}
        <motion.div
          className="absolute top-10 left-10 w-24 h-24 border-4 border-dashed border-pink-300/50 rounded-full"
          animate={{ rotate: [12, 15, 12] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="absolute bottom-20 right-20 w-32 h-16 border-4 border-blue-300/50 rounded-xl"
          animate={{ rotate: [-6, -10, -6] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        ></motion.div>
        <motion.div
          className="absolute top-1/4 right-10 w-20 h-20 border-4 border-amber-400/50"
          animate={{ rotate: [45, 40, 45] }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        ></motion.div>

        {/* Paper tape strips */}
        <motion.div
          className="absolute top-40 left-20 w-40 h-5 bg-yellow-200/70"
          animate={{ rotate: [12, 14, 12], y: [0, 2, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="absolute bottom-32 left-1/4 w-32 h-5 bg-blue-200/70"
          animate={{ rotate: [-6, -8, -6], y: [0, -2, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        ></motion.div>
        <motion.div
          className="absolute right-1/4 top-20 w-24 h-5 bg-pink-200/70"
          animate={{ rotate: [-12, -10, -12], x: [0, 2, 0] }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          }}
        ></motion.div>
      </div>

      <div
        ref={containerRef}
        className="w-full max-w-md mx-auto z-10"
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
          <div className="bg-white p-8 shadow-lg border-2 border-gray-200 transform rotate-[-2deg] relative">
            {/* Washi tape corners */}
            <motion.div
              className="absolute -top-3 -left-6 w-16 h-6 bg-green-300/80 transform rotate-[-10deg]"
              whileHover={{
                rotate: [-10, -5, -10],
                transition: { duration: 0.5 },
              }}
            ></motion.div>
            <motion.div
              className="absolute -top-3 -right-6 w-16 h-6 bg-pink-300/80 transform rotate-[10deg]"
              whileHover={{
                rotate: [10, 5, 10],
                transition: { duration: 0.5 },
              }}
            ></motion.div>
            <motion.div
              className="absolute -bottom-3 -left-6 w-16 h-6 bg-blue-300/80 transform rotate-[10deg]"
              whileHover={{
                rotate: [10, 15, 10],
                transition: { duration: 0.5 },
              }}
            ></motion.div>
            <motion.div
              className="absolute -bottom-3 -right-6 w-16 h-6 bg-yellow-300/80 transform rotate-[-10deg]"
              whileHover={{
                rotate: [-10, -15, -10],
                transition: { duration: 0.5 },
              }}
            ></motion.div>

            <div className="flex flex-col items-center text-center">
              {/* Profile picture with polaroid frame */}
              <motion.div
                className="mb-6 w-36 bg-white p-2 border-2 border-gray-200 shadow-md transform rotate-[3deg]"
                initial={{ rotate: 3, scale: 0.9, opacity: 0 }}
                animate={{ rotate: 3, scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                whileHover={{
                  rotate: [3, 0, 3],
                  scale: 1.05,
                  transition: { duration: 0.8 },
                }}
              >
                <div className="relative h-36 w-32 overflow-hidden bg-amber-50">
                  <img
                    src={demoBundle.profilePicture || defaultAvatar}
                    alt={demoBundle.displayName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-2 mb-1">
                  <span className="text-gray-600 text-sm">
                    ✨ {demoBundle.displayName} ✨
                  </span>
                </div>
              </motion.div>

              <motion.h1
                className="text-3xl font-bold text-gray-800 mb-1"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {demoBundle.displayName}
              </motion.h1>

              <motion.p
                className="text-gray-600 text-xl"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                @{demoBundle.bundleName}
              </motion.p>

              {demoBundle.bio && (
                <motion.div
                  className="mt-4 p-4 bg-yellow-100/60 border-2 border-yellow-200 transform rotate-[1deg] max-w-xs relative"
                  initial={{ opacity: 0, y: 10, rotate: 1 }}
                  animate={{ opacity: 1, y: 0, rotate: 1 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{
                    rotate: [1, -1, 1],
                    transition: { duration: 1 },
                  }}
                >
                  <p className="text-gray-700 text-lg">{demoBundle.bio}</p>
                  {/* Decorative pushpin */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-red-500 shadow-sm"
                    whileHover={{ scale: 1.2 }}
                  ></motion.div>
                </motion.div>
              )}
            </div>

            <motion.div
              className="mt-8 space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {sortedBits.map((bit, index) => {
                const bgColorClass = [
                  "bg-pink-100",
                  "bg-blue-100",
                  "bg-green-100",
                  "bg-yellow-100",
                  "bg-purple-100",
                ][index % 5];

                return (
                  <motion.a
                    key={index}
                    href={bit.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-3 w-full px-5 py-3 text-gray-700 relative overflow-hidden ${bgColorClass} transform transition-transform hover:scale-[1.02] hover:rotate-[0.5deg]`}
                    style={{
                      transform: `rotate(${((index % 3) - 1) * 1.5}deg)`,
                    }}
                    initial={{
                      opacity: 0,
                      x: index % 2 === 0 ? -20 : 20,
                      y: 10,
                    }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{
                      delay: 0.1 * index + 0.6,
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                    }}
                    whileHover={{
                      scale: 1.03,
                      rotate: index % 2 === 0 ? 1 : -1,
                      transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Decorative elements */}
                    <div className="absolute top-0 left-0 w-full h-full border-2 border-gray-300/30"></div>

                    {bit.icon && (
                      <motion.span
                        className="text-xl z-10 relative text-gray-700"
                        animate={{ rotate: [0, 5, 0, -5, 0] }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.5,
                        }}
                      >
                        {bit.icon}
                      </motion.span>
                    )}
                    <span className="font-semibold text-xl z-10 relative">
                      {bit.title}
                    </span>

                    {/* Decorative arrow */}
                    <motion.div
                      className="ml-auto z-10 relative"
                      whileHover={{ x: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-gray-700"
                      >
                        <path
                          d="M4 12H20M20 12L14 6M20 12L14 18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.div>

                    {/* Paper clip */}
                    {index % 2 === 0 && (
                      <motion.div
                        className="absolute -top-2 -right-2 w-6 h-12 border-r-4 border-t-4 border-b-4 border-gray-400 rounded-r-full transform rotate-45"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1.1, rotate: 35 }}
                      ></motion.div>
                    )}
                  </motion.a>
                );
              })}
            </motion.div>

            <motion.div
              className="mt-8 flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 + sortedBits.length * 0.1 }}
            >
              <motion.div
                className="inline-block bg-gray-100 px-4 py-2 text-gray-600 transform -rotate-1 border-2 border-gray-300/50"
                whileHover={{
                  rotate: [-1, 1, -1],
                  scale: 1.05,
                  transition: { duration: 0.8 },
                }}
              >
                <span className="text-lg">📝 Scrapbook Edition ✂️</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default DemoScrapbookTheme;
