import { Bundle } from "../usePublicBundle";
import defaultAvatar from "../../../assets/images/default-avatar.jpeg";
import { useEffect, useState } from "react";

interface FestivalThemeProps {
  bundle: Bundle;
}

// Confetti particle component
const Confetti = ({ color, size, left, delay, duration }: { color: string; size: number; left: number; delay: number; duration: number }) => {
  return (
    <div 
      className="absolute top-0 animate-[float_5s_linear_forwards]"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        left: `${left}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        transform: `rotate(${Math.random() * 360}deg)`,
      }}
    ></div>
  );
};

const FestivalTheme: React.FC<FestivalThemeProps> = ({ bundle }) => {
  const sortedBits = [...bundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  // Generate colorful confetti particles
  const [confetti, setConfetti] = useState<JSX.Element[]>([]);
  
  useEffect(() => {
    const colors = ['#FF5252', '#FF4081', '#E040FB', '#7C4DFF', '#536DFE', '#448AFF', '#40C4FF', '#18FFFF', '#64FFDA', '#69F0AE', '#B2FF59', '#EEFF41', '#FFFF00', '#FFD740', '#FFAB40', '#FF6E40'];
    // const shapes = ['rounded-none', 'rounded-full', 'rotate-45'];
    
    const confettiElements: JSX.Element[] = [];
    for (let i = 0; i < 60; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.random() * 10 + 5;
      const left = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = Math.random() * 5 + 3;
      
      confettiElements.push(
        <Confetti 
          key={i} 
          color={color} 
          size={size} 
          left={left} 
          delay={delay}
          duration={duration}
        />
      );
    }
    setConfetti(confettiElements);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-gradient-to-b from-purple-600 to-pink-500 text-white font-['Poppins',sans-serif] relative overflow-hidden">
      {/* Festival background with confetti */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {confetti}
        
        {/* Colorful gradient backgrounds */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,64,129,0.3),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(124,77,255,0.3),transparent_60%)]"></div>
      </div>
      
      <div className="w-full max-w-md mx-auto z-10 animate-[fadeIn_0.8s_ease-out]">
        <div className="backdrop-blur-md bg-white/20 rounded-2xl p-8 border border-white/30 shadow-[0_0_30px_rgba(255,64,129,0.3)]">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 relative">
              {/* Colorful ring around profile pic */}
              <div className="absolute inset-0 scale-[1.15] rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 animate-[pulse-glow_3s_ease-in-out_infinite]"></div>
              <img
                src={bundle.profilePicture || defaultAvatar}
                alt={bundle.displayName}
                className="relative w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
            
            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300">
              {bundle.displayName}
            </h1>
            
            <p className="text-white text-sm font-medium mt-1">
              @{bundle.bundleName}
            </p>
            
            {bundle.bio && (
              <p className="mt-3 text-white/90 text-sm max-w-xs">
                {bundle.bio}
              </p>
            )}
          </div>

          <div className="mt-8 space-y-3">
            {sortedBits.map((bit, index) => {
              // Alternate between different festival colors
              const colors = [
                "bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600",
                "bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600",
                "bg-gradient-to-r from-green-400 to-cyan-500 hover:from-green-500 hover:to-cyan-600",
                "bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600"
              ];
              const colorClass = colors[index % colors.length];
              
              return (
                <a
                  key={index}
                  href={bit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-3 w-full px-6 py-4 rounded-xl ${colorClass} border border-white/20 transition-all duration-300 text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02]`}
                >
                  {bit.icon && (
                    <span className="text-xl">
                      {bit.icon}
                    </span>
                  )}
                  <span className="font-bold">
                    {bit.title}
                  </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-auto text-white/70 group-hover:text-white group-hover:translate-x-0.5 transition-all"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              );
            })}
          </div>

          <div className="mt-10 flex justify-center">
            <div className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium shadow-md">
              <span>🎉 Let's celebrate! 🎉</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FestivalTheme;