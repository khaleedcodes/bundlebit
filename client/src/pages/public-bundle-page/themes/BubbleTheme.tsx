import { Bundle } from "../usePublicBundle";
import defaultAvatar from "../../../assets/images/default-avatar.jpeg";
import { useEffect, useState } from "react";

interface BubbleThemeProps {
  bundle: Bundle;
}

// Custom bubble component
const Bubble = ({ size, left, animationDuration, animationDelay }: { size: number; left: number; animationDuration: number; animationDelay: number }) => {
  return (
    <div 
      className="absolute bottom-0 rounded-full bg-gradient-to-tr from-blue-300/40 to-blue-100/10 backdrop-blur-sm animate-[float_10s_ease-in-out_infinite]"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${left}%`,
        animationDuration: `${animationDuration}s`,
        animationDelay: `${animationDelay}s`,
      }}
    ></div>
  );
};

const BubbleTheme: React.FC<BubbleThemeProps> = ({ bundle }) => {
  const sortedBits = [...bundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  // Generate random bubbles
  const [bubbles, setBubbles] = useState<JSX.Element[]>([]);
  
  useEffect(() => {
    const generatedBubbles: JSX.Element[] = [];
    for (let i = 0; i < 15; i++) {
      const size = Math.random() * 80 + 20;
      const left = Math.random() * 100;
      const animationDuration = Math.random() * 10 + 5;
      const animationDelay = Math.random() * 5;
      
      generatedBubbles.push(
        <Bubble 
          key={i} 
          size={size} 
          left={left} 
          animationDuration={animationDuration}
          animationDelay={animationDelay}
        />
      );
    }
    setBubbles(generatedBubbles);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-gradient-to-b from-blue-400 to-cyan-600 text-white font-['Nunito',sans-serif] relative overflow-hidden">
      {/* Bubble background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {bubbles}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-600/50 to-transparent"></div>
      </div>
      
      <div className="w-full max-w-md mx-auto z-10 animate-[fadeIn_0.8s_ease-out]">
        <div className="backdrop-blur-md bg-white/20 rounded-3xl p-8 border border-white/30 shadow-[0_10px_50px_rgba(8,145,178,0.2)]">
          {/* Circular accent elements */}
          <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-gradient-to-br from-blue-300 to-cyan-400 opacity-70"></div>
          <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-300 opacity-70"></div>
          
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 relative">
              {/* Bubble effect around the profile pic */}
              <div className="absolute inset-0 scale-[1.15] rounded-full bg-gradient-to-br from-white/50 to-white/10 backdrop-blur-sm"></div>
              <img
                src={bundle.profilePicture || defaultAvatar}
                alt={bundle.displayName}
                className="relative w-28 h-28 rounded-full object-cover border-4 border-white/70 shadow-lg"
              />
              
              {/* Small bubble decorations */}
              <div className="absolute -top-2 -right-1 w-6 h-6 rounded-full bg-gradient-to-br from-blue-200/80 to-cyan-200/50 backdrop-blur-sm"></div>
              <div className="absolute -bottom-1 -left-2 w-5 h-5 rounded-full bg-gradient-to-br from-blue-200/80 to-cyan-200/50 backdrop-blur-sm"></div>
            </div>
            
            <h1 className="text-3xl font-bold">
              {bundle.displayName}
            </h1>
            
            <p className="text-blue-100 text-sm font-semibold mt-1">
              @{bundle.bundleName}
            </p>
            
            {bundle.bio && (
              <p className="mt-3 text-white/90 text-sm max-w-xs">
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
                className="group flex items-center gap-3 w-full px-6 py-4 rounded-full backdrop-blur-md bg-white/30 hover:bg-white/40 border border-white/30 transition-all duration-300 text-white hover:shadow-lg hover:scale-[1.02]"
              >
                {bit.icon && (
                  <span className="text-xl">
                    {bit.icon}
                  </span>
                )}
                <span className="font-semibold">
                  {bit.title}
                </span>

                <div className="ml-auto bg-white/30 rounded-full w-7 h-7 flex items-center justify-center group-hover:bg-white/50 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white group-hover:translate-x-0.5 transition-transform"
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
            <div className="bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full">
              <span className="text-sm font-medium">Bubble by Bundlebit</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BubbleTheme;