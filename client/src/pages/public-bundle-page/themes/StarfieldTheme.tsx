import { Bundle } from "../usePublicBundle";
import defaultAvatar from "../../../assets/images/default-avatar.jpeg";
import { useState, useEffect } from "react";

interface StarfieldThemeProps {
  bundle: Bundle;
}

// Custom star component to create the starfield effect
const Star = ({ size = 1, top, left, animationDelay = 0 }: { size?: number, top: number, left: number, animationDelay?: number }) => {
  return (
    <div 
      className="absolute rounded-full bg-white animate-[pulse-glow_3s_ease-in-out_infinite]"
      style={{
        top: `${top}%`,
        left: `${left}%`,
        width: `${size}px`,
        height: `${size}px`,
        animationDelay: `${animationDelay}s`,
        opacity: Math.random() * 0.7 + 0.3,
      }}
    />
  );
};

const StarfieldTheme: React.FC<StarfieldThemeProps> = ({ bundle }) => {
  const sortedBits = [...bundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  // Generate stars for the starfield
  const [stars, setStars] = useState<JSX.Element[]>([]);
  
  useEffect(() => {
    const generatedStars: JSX.Element[] = [];
    for (let i = 0; i < 100; i++) {
      const size = Math.random() * 2 + 0.5;
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const delay = Math.random() * 3;
      
      generatedStars.push(
        <Star key={i} size={size} top={top} left={left} animationDelay={delay} />
      );
    }
    setStars(generatedStars);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-gradient-to-b from-black via-indigo-950 to-black text-white font-['Space_Grotesk',sans-serif] relative overflow-hidden">
      {/* Starfield background */}
      <div className="absolute inset-0 z-0">
        {stars}
        
        {/* Distant galaxies/nebulae */}
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-purple-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-blue-800/10 rounded-full blur-3xl"></div>
        <div className="absolute top-2/3 left-2/3 w-56 h-56 bg-indigo-700/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="w-full max-w-md mx-auto z-10 animate-[fadeIn_1s_ease-out]">
        <div className="backdrop-blur-sm bg-indigo-950/50 rounded-2xl p-8 border border-indigo-700/30 shadow-[0_0_50px_rgba(99,102,241,0.15)]">
          {/* Custom "orbit" design around the profile image */}
          <div className="relative flex justify-center mb-8">
            <div className="absolute w-40 h-40 rounded-full border border-indigo-600/30 animate-[pulse-glow_10s_ease-in-out_infinite]"></div>
            <div className="absolute w-32 h-32 rounded-full border border-indigo-500/40"></div>
            
            <div className="relative z-10">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600/40 to-purple-600/40 blur-sm"></div>
              <img
                src={bundle.profilePicture || defaultAvatar}
                alt={bundle.displayName}
                className="w-28 h-28 rounded-full object-cover border-2 border-indigo-500/50 z-10 relative"
              />
            </div>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl font-bold text-white">
              {bundle.displayName}
            </h1>
            
            <p className="text-indigo-300 text-sm font-medium mt-1">
              @{bundle.bundleName}
            </p>
            
            {bundle.bio && (
              <p className="mt-3 text-blue-100/70 text-sm max-w-xs">
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
                className="group flex items-center gap-3 w-full px-6 py-4 rounded-xl bg-indigo-900/40 border border-indigo-700/30 hover:border-indigo-500/60 hover:bg-indigo-800/30 transition-all duration-300 text-white"
              >
                {bit.icon && (
                  <span className="text-lg group-hover:text-indigo-300 transition-colors">
                    {bit.icon}
                  </span>
                )}
                <span className="group-hover:text-indigo-200 transition-colors">
                  {bit.title}
                </span>

                <div className="ml-auto relative">
                  <div className="absolute -inset-1 bg-indigo-600/0 group-hover:bg-indigo-600/30 rounded-full blur transition-all duration-300"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-indigo-400 group-hover:text-white relative z-10 transition-colors"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <div className="flex items-center gap-2 text-indigo-400/70 text-xs">
              <span className="inline-block w-1 h-1 bg-indigo-400 rounded-full"></span>
              Cosmic links by Bundlebit
              <span className="inline-block w-1 h-1 bg-indigo-400 rounded-full"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarfieldTheme;