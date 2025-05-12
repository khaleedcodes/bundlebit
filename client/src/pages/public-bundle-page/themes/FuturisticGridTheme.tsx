import { Bundle } from "../usePublicBundle";
import defaultAvatar from "../../../assets/images/default-avatar.jpeg";

interface FuturisticGridThemeProps {
  bundle: Bundle;
}

const FuturisticGridTheme: React.FC<FuturisticGridThemeProps> = ({ bundle }) => {
  const sortedBits = [...bundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-black text-white font-['JetBrains_Mono',monospace] relative overflow-hidden">
      {/* Futuristic grid background */}
      <div className="absolute inset-0 z-0">
        {/* Perspective grid effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,128,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(0,128,255,0.15)_1px,transparent_1px)] bg-[size:100px_100px] [transform:perspective(500px)_rotateX(60deg)] origin-[center_top]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)]"></div>
        
        {/* Glowing horizon line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-blue-500/50 blur-[2px]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-500/10 to-transparent"></div>
      </div>
      
      <div className="w-full max-w-md mx-auto z-10 animate-[fadeIn_1s_ease-out]">
        <div className="backdrop-blur-sm bg-black/70 rounded-lg p-8 border border-blue-500/20 shadow-[0_0_40px_rgba(59,130,246,0.2)] relative">
          {/* Futuristic accents */}
          <div className="absolute -top-2 left-4 right-4 h-px bg-blue-500/60"></div>
          <div className="absolute -bottom-2 left-4 right-4 h-px bg-blue-500/60"></div>
          <div className="absolute -left-2 top-4 bottom-4 w-px bg-blue-500/60"></div>
          <div className="absolute -right-2 top-4 bottom-4 w-px bg-blue-500/60"></div>
          
          <div className="flex flex-col items-center text-center mb-8">
            <div className="relative mb-6">
              <div className="absolute -inset-2 rounded-lg bg-blue-500/20 animate-pulse"></div>
              <div className="p-1 border border-blue-500/40 rounded-md">
                <img
                  src={bundle.profilePicture || defaultAvatar}
                  alt={bundle.displayName}
                  className="w-28 h-28 object-cover rounded-sm"
                />
              </div>
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-blue-500"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-blue-500"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-blue-500"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-blue-500"></div>
            </div>
            
            <div className="border-b border-blue-500/20 pb-1 mb-2 w-full text-center">
              <h1 className="text-3xl font-bold tracking-wide text-blue-100">
                {bundle.displayName}
              </h1>
            </div>
            
            <p className="text-blue-400 text-sm tracking-wider">
              @{bundle.bundleName}
            </p>
            
            {bundle.bio && (
              <p className="mt-4 text-blue-100/80 text-xs max-w-xs leading-relaxed tracking-wide">
                {bundle.bio}
              </p>
            )}
          </div>

          <div className="space-y-3">
            {sortedBits.map((bit, index) => (
              <a
                key={index}
                href={bit.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 w-full px-5 py-3 rounded-sm bg-black/50 border border-blue-500/20 hover:border-blue-500/60 hover:bg-blue-900/10 transition-all duration-300 text-blue-100 relative overflow-hidden"
              >
                {/* Animated scan line on hover */}
                <div className="absolute inset-0 bg-blue-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700 z-0"></div>
                
                {bit.icon && (
                  <span className="text-lg text-blue-400 relative z-10">
                    {bit.icon}
                  </span>
                )}
                <span className="font-medium tracking-wide text-sm relative z-10">
                  {bit.title}
                </span>

                <div className="ml-auto relative z-10 flex items-center">
                  <div className="w-2 h-2 bg-blue-500/50 rounded-full mr-1"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-blue-400 group-hover:text-blue-300 group-hover:translate-x-0.5 transition-all"
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

          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center gap-2 border border-blue-500/20 px-3 py-1 rounded-sm">
              <span className="text-xs text-blue-400/80 tracking-widest uppercase">SYSTEM.OK</span>
              <div className="w-2 h-2 bg-blue-500 animate-pulse rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuturisticGridTheme;