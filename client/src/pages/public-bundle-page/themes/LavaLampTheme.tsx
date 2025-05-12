import { Bundle } from "../usePublicBundle";
import defaultAvatar from "../../../assets/images/default-avatar.jpeg";
import { useEffect, useState } from "react";

interface LavaLampThemeProps {
  bundle: Bundle;
}

// Animated blob component
const Blob = ({ 
  size = 1, 
  top, 
  left, 
  color = "bg-purple-500", 
  delay = 0,
  duration = 20
}: { 
  size?: number; 
  top: number; 
  left: number; 
  color?: string; 
  delay?: number;
  duration?: number;
}) => {
  const borderRadius = `${40 + Math.random() * 20}% ${50 + Math.random() * 20}% ${35 + Math.random() * 30}% ${60 + Math.random() * 20}%`;
  
  return (
    <div 
      className={`absolute ${color}/30 blur-3xl animate-[float_20s_ease-in-out_infinite]`} 
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: `${top}%`,
        left: `${left}%`,
        borderRadius,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    ></div>
  );
};

const LavaLampTheme: React.FC<LavaLampThemeProps> = ({ bundle }) => {
  const sortedBits = [...bundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  // Generate fluid blobs for background
  const [blobs, setBlobs] = useState<JSX.Element[]>([]);
  
  useEffect(() => {
    const colors = ["bg-purple-500", "bg-pink-500", "bg-indigo-600", "bg-fuchsia-600"];
    const generatedBlobs: JSX.Element[] = [];
    
    for (let i = 0; i < 8; i++) {
      const size = Math.random() * 300 + 150;
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const delay = Math.random() * 10;
      const duration = Math.random() * 10 + 15;
      
      generatedBlobs.push(
        <Blob 
          key={i} 
          size={size} 
          top={top} 
          left={left} 
          color={color}
          delay={delay}
          duration={duration}
        />
      );
    }
    
    setBlobs(generatedBlobs);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-gray-950 text-white font-['Rubik',sans-serif] relative overflow-hidden">
      {/* Lava lamp background */}
      <div className="absolute inset-0 z-0">
        {/* Dark gradient base */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"></div>
        
        {/* Lava blobs */}
        <div className="absolute inset-0 overflow-hidden">
          {blobs}
        </div>
      </div>
      
      <div className="w-full max-w-md mx-auto z-10 animate-[fadeIn_1s_ease-out]">
        <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 shadow-xl">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 relative">
              {/* Glowing highlight effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-indigo-500/30 rounded-full blur-xl"></div>
              <img
                src={bundle.profilePicture || defaultAvatar}
                alt={bundle.displayName}
                className="relative w-28 h-28 rounded-full object-cover border-2 border-white/20 z-10"
              />
            </div>
            
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300">
              {bundle.displayName}
            </h1>
            
            <p className="text-purple-300/90 text-sm font-medium mt-1">
              @{bundle.bundleName}
            </p>
            
            {bundle.bio && (
              <p className="mt-3 text-gray-300/80 text-sm max-w-xs">
                {bundle.bio}
              </p>
            )}
          </div>

          <div className="mt-8 space-y-3">
            {sortedBits.map((bit, index) => (
              <a
                key={index}
                href={bit.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-500 text-white backdrop-blur-sm"
              >
                {bit.icon && (
                  <span className="text-xl text-purple-300 group-hover:text-pink-300 transition-colors duration-500">
                    {bit.icon}
                  </span>
                )}
                <span className="font-medium group-hover:text-purple-100 transition-colors duration-500">
                  {bit.title}
                </span>

                <div className="ml-auto relative overflow-hidden rounded-full w-6 h-6 bg-white/5 group-hover:bg-white/10 transition-colors duration-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-purple-300 group-hover:text-pink-300 transition-colors duration-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <div className="px-4 py-2 border border-white/5 rounded-lg bg-white/5">
              <span className="text-xs font-medium text-purple-300">Fluid by Bundlebit</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LavaLampTheme;