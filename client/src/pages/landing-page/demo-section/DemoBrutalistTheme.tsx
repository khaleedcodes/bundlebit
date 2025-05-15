import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

import defaultAvatar from "../../../assets/images/default-avatar.jpeg";

const demoBundle = {
  displayName: "Lena Ray",
  bundleName: "lenaray",
  profilePicture: defaultAvatar,
  bio: "Designer. Dreamer. Building beautiful things for the web.",
  bits: [
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

function DemoBrutalistTheme() {
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
  const maxTilt = 10; // Slightly less tilt for brutalist style
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
        idleY.set(Math.sin(Date.now() / 1000) * 3); // Less movement for brutalist style

        // Very subtle rotation
        idleRotate.set(Math.sin(Date.now() / 1500) * 0.7); // Less rotation for brutalist style

        // Subtle scale pulsing
        idleScale.set(1 + Math.sin(Date.now() / 2000) * 0.005); // Less scaling for brutalist style
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
    <div className="min-h-[75vh] flex items-center justify-center text-black font-mono">
      <div
        ref={containerRef}
        className="w-full max-w-[370px] mx-auto"
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
          <div className="border-4 border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-3xl">
            <motion.div
              className="flex flex-col items-center border-b-4 border-black pb-6 mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                className="border-4 border-black p-1 mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img
                  src={demoBundle.profilePicture || defaultAvatar}
                  alt={demoBundle.displayName}
                  className="w-28 h-28 object-cover"
                />
              </motion.div>

              <motion.h1
                className="text-3xl font-bold uppercase tracking-tight mt-2"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {demoBundle.displayName}
              </motion.h1>

              <motion.div
                className="bg-black text-white px-2 py-0.5 mt-1 tracking-wide"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                @{demoBundle.bundleName}
              </motion.div>

              {demoBundle.bio && (
                <motion.p
                  className="mt-3 text-sm max-w-xs font-mono uppercase text-center"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {demoBundle.bio}
                </motion.p>
              )}
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {sortedBits.map((bit, index) => (
                <motion.a
                  key={index}
                  href={bit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 w-full px-4 py-3 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all duration-150 text-black font-bold uppercase"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index + 0.5 }}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {bit.icon && <span className="text-xl">{bit.icon}</span>}
                  <span>{bit.title}</span>

                  <motion.span
                    className="ml-auto font-bold text-xl"
                    initial={{ x: 0 }}
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    →
                  </motion.span>
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              className="mt-8 flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="border-t-4 border-black pt-4 w-full text-center">
                <motion.span
                  className="text-xs uppercase font-bold"
                  whileHover={{ scale: 1.1 }}
                >
                  Built with Bundlebit
                </motion.span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default DemoBrutalistTheme;
