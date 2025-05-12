import { Bundle } from "../usePublicBundle";
import defaultAvatar from "../../../assets/images/default-avatar.jpeg";
import { useEffect, useState } from "react";

interface FireflyThemeProps {
  bundle: Bundle;
}

// Firefly component for the animated background
const Firefly = ({ size, top, left, animationDuration }: { 
  size: number; 
  top: number; 
  left: number; 
  animationDuration: number;
}) => {
  return (
    <div
      className="absolute rounded-full bg-yellow-100 animate-[pulse-glow_3s_ease-in-out_infinite]"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: `${top}%`,
        left: `${left}%`,
        boxShadow: `0 0 ${size * 2}px ${size}px rgba(253, 224, 71, 0.3)`,
        animationDuration: `${animationDuration}s`,
      }}
    ></div>
  );
};

const FireflyTheme: React.FC<FireflyThemeProps> = ({ bundle }) => {
  const sortedBits = [...bundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  // Generate fireflies for the magical background
  const [fireflies, setFireflies] = useState<JSX.Element[]>([]);
  
  useEffect(() => {
    const generatedFireflies: JSX.Element[] = [];
    for (let i = 0; i < 30; i++) {
      const size = Math.random() * 3 + 1;
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const animationDuration = Math.random() * 3 + 2;
      
      generatedFireflies.push(
        <Firefly 
          key={i} 
          size={size} 
          top={top} 
          left={left} 
          animationDuration={animationDuration}
        />
      );
    }
    setFireflies(generatedFireflies);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-gradient-to-b from-blue-950 to-gray-950 text-white font-['Catamaran',sans-serif] relative overflow-hidden">
      {/* Magical night background with fireflies */}
      <div className="absolute inset-0 z-0">
        {/* Fireflies */}
        {fireflies}
        
        {/* Subtle light rays from the moon */}
        <div className="absolute top-10 left-1/4 w-40 h-40 bg-blue-300/5 rounded-full blur-3xl"></div>
        
        {/* Dark tree silhouette at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48cGF0aCBkPSJNMCw2MCBDMTAsNDAgMjAsNTUgMzAsNDUgQzQwLDM1IDUwLDQ1IDYwLDQwIEM3MCwzNSA4MCw0NSA5MCw0MCBDMTAwLDM1IDEwMCw2MCAxMDAsNjAgTDEwMCwxMDAgTDAsIDEwMCBaIiBmaWxsPSIjMDAwMDA4Ii8+PC9zdmc+')]"></div>
      </div>
      
      <div className="w-full max-w-md mx-auto z-10 animate-[fadeIn_1s_ease-out]">
        <div className="backdrop-blur-sm bg-blue-950/40 rounded-xl p-8 border border-blue-300/10 shadow-[0_0_40px_rgba(253,224,71,0.1)]">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-6">
              {/* Glowing aura around profile pic */}
              <div className="absolute inset-0 scale-[1.1] rounded-full bg-gradient-to-r from-yellow-300/30 to-amber-300/20 blur-md"></div>
              <img
                src={bundle.profilePicture || defaultAvatar}
                alt={bundle.displayName}
                className="relative w-28 h-28 rounded-full object-cover border-2 border-yellow-300/30 shadow-[0_0_15px_rgba(253,224,71,0.3)]"
              />
            </div>
            
            <h1 className="text-3xl font-bold text-white">
              {bundle.displayName}
            </h1>
            
            <p className="text-yellow-100/70 text-sm font-medium mt-1">
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
                className="group flex items-center gap-3 w-full px-6 py-4 rounded-xl bg-blue-900/30 border border-blue-400/10 hover:border-yellow-300/30 transition-all duration-300 text-white shadow-[0_0_10px_rgba(253,224,71,0.05)] hover:shadow-[0_0_15px_rgba(253,224,71,0.2)]"
              >
                <div className="relative">
                  {bit.icon && (
                    <span className="text-xl text-yellow-200/80 group-hover:text-yellow-200 transition-colors z-10 relative">
                      {bit.icon}
                    </span>
                  )}
                  <div className="absolute inset-0 blur-md bg-yellow-300/0 group-hover:bg-yellow-300/30 transition-all duration-700 scale-[2]"></div>
                </div>
                
                <span className="group-hover:text-yellow-50 transition-colors duration-300">
                  {bit.title}
                </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-auto text-blue-400/70 group-hover:text-yellow-200/80 transition-colors"
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
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <div className="px-4 py-2 border border-blue-400/10 rounded-lg text-xs text-yellow-100/60">
              <span>✨ Enchantment by Bundlebit ✨</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FireflyTheme;