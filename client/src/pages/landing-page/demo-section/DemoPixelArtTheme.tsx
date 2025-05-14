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

function DemoPixelArtTheme() {
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
  const springConfig = { damping: 15, stiffness: 200 }; // More jagged for pixel art style
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);
  const springIdleY = useSpring(idleY, { damping: 10, stiffness: 80 }); // More jagged for pixel art
  const springIdleRotate = useSpring(idleRotate, {
    damping: 10,
    stiffness: 80,
  });
  const springIdleScale = useSpring(idleScale, { damping: 10, stiffness: 80 });

  // Parameters for the 3D effect
  const perspective = 800;
  const maxTilt = 8; // More tilt for pixel art style
  const scale = 1.03;

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

  // Idle animation with more pixelated, less smooth motion
  useEffect(() => {
    if (!isHovering) {
      // Start looping idle animations with step-like movements for pixel art style
      const idleAnimationInterval = setInterval(() => {
        // Stepped vertical bobbing for pixel art vibe
        const yStep = Math.round(Math.sin(Date.now() / 1000) * 4) / 2; // More stepped for pixel art
        idleY.set(yStep * 2);

        // Stepped subtle rotation
        const rotateStep = Math.round(Math.sin(Date.now() / 1500) * 2) / 2; // More stepped
        idleRotate.set(rotateStep);

        // Subtle scale pulsing in steps
        const scaleStep = Math.round(Math.sin(Date.now() / 2000) * 10) / 1000;
        idleScale.set(1 + scaleStep);
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

    // Calculate rotation values based on mouse position - step values for pixel art feel
    const rotateYStep = Math.round((mouseX / bounds.width) * maxTilt * 4) / 2;
    const rotateXStep = -Math.round((mouseY / bounds.height) * maxTilt * 4) / 2;

    rotateX.set(rotateXStep);
    rotateY.set(rotateYStep);
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
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-[#191925] text-white font-['Press_Start_2P',monospace] relative overflow-hidden">
      {/* Pixel art background */}
      <div className="absolute inset-0 z-0">
        {/* Pixelated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(60,60,80,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(60,60,80,0.2)_1px,transparent_1px)] bg-[size:8px_8px]"></div>

        {/* Pixelated "stars" in background */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/60"
          animate={{ opacity: [0.6, 0.2, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        ></motion.div>
        <motion.div
          className="absolute top-1/3 left-2/3 w-2 h-2 bg-white/40"
          animate={{ opacity: [0.4, 0.1, 0.4] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5,
          }}
        ></motion.div>
        <motion.div
          className="absolute top-2/3 left-1/6 w-2 h-2 bg-white/50"
          animate={{ opacity: [0.5, 0.2, 0.5] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        ></motion.div>
        <motion.div
          className="absolute top-1/2 left-3/4 w-2 h-2 bg-white/30"
          animate={{ opacity: [0.3, 0.05, 0.3] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1.5,
          }}
        ></motion.div>
        <motion.div
          className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-white/70"
          animate={{ opacity: [0.7, 0.3, 0.7] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2,
          }}
        ></motion.div>

        {/* Pixel art "mountains" at bottom */}
        <div
          className="absolute bottom-0 inset-x-0 h-20 bg-[#252532]"
          style={{
            clipPath:
              "polygon(0% 100%, 8% 70%, 16% 90%, 24% 60%, 32% 80%, 40% 40%, 48% 70%, 56% 30%, 64% 50%, 72% 20%, 80% 60%, 88% 40%, 96% 70%, 100% 100%)",
          }}
        ></div>
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
          transition={{ duration: 0.5, ease: "steps(5)" }} // Stepped animation for pixel art feel
        >
          <div className="bg-[#252532] p-4 border-4 border-[#565699] shadow-[8px_8px_0px_#000000]">
            {/* Pixelated header bar */}
            <motion.div
              className="bg-[#565699] text-white px-3 py-2 mb-4 flex items-center justify-between"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.3, ease: "steps(10)" }}
            >
              <span className="text-xs">PROFILE.EXE</span>
              <div className="flex gap-2">
                <motion.div
                  className="w-3 h-3 bg-[#ff5555]"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.1 }}
                ></motion.div>
                <motion.div
                  className="w-3 h-3 bg-[#ffff55]"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.1 }}
                ></motion.div>
                <motion.div
                  className="w-3 h-3 bg-[#55ff55]"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.1 }}
                ></motion.div>
              </div>
            </motion.div>

            <div className="flex flex-col items-center text-center">
              <motion.div
                className="mb-6 w-28 h-28 bg-[#c0c0c0] p-2 relative"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.3, ease: "steps(5)" }}
              >
                <img
                  src={demoBundle.profilePicture || defaultAvatar}
                  alt={demoBundle.displayName}
                  className="w-full h-full object-cover pixelated border-2 border-[#000000]"
                />

                {/* Pixelated corners */}
                <motion.div
                  className="absolute -top-2 -left-2 w-4 h-4 border-t-4 border-l-4 border-[#000000]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.1 }}
                ></motion.div>
                <motion.div
                  className="absolute -top-2 -right-2 w-4 h-4 border-t-4 border-r-4 border-[#000000]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.1 }}
                ></motion.div>
                <motion.div
                  className="absolute -bottom-2 -left-2 w-4 h-4 border-b-4 border-l-4 border-[#000000]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.1 }}
                ></motion.div>
                <motion.div
                  className="absolute -bottom-2 -right-2 w-4 h-4 border-b-4 border-r-4 border-[#000000]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.1 }}
                ></motion.div>
              </motion.div>

              <motion.h1
                className="text-lg text-[#fd5454] mb-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.2, ease: "steps(5)" }}
              >
                {demoBundle.displayName}
              </motion.h1>

              <motion.p
                className="text-[#64e864] text-[10px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.2, ease: "steps(5)" }}
              >
                @{demoBundle.bundleName}
              </motion.p>

              {demoBundle.bio && (
                <motion.div
                  className="mt-4 text-white text-[10px] max-w-xs p-2 border-2 border-[#808080] bg-[#16161f]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.2, ease: "steps(5)" }}
                >
                  <p>{demoBundle.bio}</p>
                </motion.div>
              )}
            </div>

            <motion.div
              className="mt-6 border-t-4 border-[#565699] pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.3 }}
            >
              <motion.p
                className="text-[10px] text-[#fd5454] mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.2 }}
              >
                SELECT_OPTION:
              </motion.p>

              <div className="space-y-3">
                {sortedBits.map((bit, index) => (
                  <motion.a
                    key={index}
                    href={bit.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 w-full px-3 py-2 bg-[#16161f] border-2 border-[#565699] hover:bg-[#565699]/20 transition-colors text-[10px] relative"
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.1 * index + 0.9,
                      duration: 0.2,
                      ease: "steps(5)",
                    }}
                    whileHover={{
                      x: 4,
                      backgroundColor: "rgba(86, 86, 153, 0.2)",
                      transition: { duration: 0.1, ease: "steps(2)" },
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="text-[#fdfd54] mr-1 group-hover:text-white transition-colors"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    >
                      [{String.fromCharCode(65 + index)}]
                    </motion.div>

                    {bit.icon && (
                      <span className="text-[#64e864] group-hover:text-white transition-colors">
                        {bit.icon}
                      </span>
                    )}
                    <span className="text-white">{bit.title}</span>

                    <div className="ml-auto flex items-center gap-1">
                      <motion.div
                        className="h-2 w-2 bg-[#fd5454]"
                        animate={{ opacity: [1, 0.7, 1] }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          delay: index * 0.1,
                        }}
                      ></motion.div>
                      <motion.div
                        className="h-2 w-2 bg-[#fdfd54]"
                        animate={{ opacity: [1, 0.7, 1] }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          delay: index * 0.1 + 0.2,
                        }}
                      ></motion.div>
                      <motion.div
                        className="h-2 w-2 bg-[#64e864]"
                        animate={{ opacity: [1, 0.7, 1] }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          delay: index * 0.1 + 0.4,
                        }}
                      ></motion.div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.3 }}
            >
              <motion.div
                className="inline-block px-4 py-2 bg-[#252532] border-2 border-[#565699] text-[8px] text-[#c0c0c0]"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                whileHover={{ scale: 1.05 }}
              >
                <span>PRESS [ENTER] TO CONTINUE</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default DemoPixelArtTheme;
