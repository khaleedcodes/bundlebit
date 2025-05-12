import { Bundle } from "../usePublicBundle";
import defaultAvatar from "../../../assets/images/default-avatar.jpeg";

interface HolographicThemeProps {
  bundle: Bundle;
}

const HolographicTheme: React.FC<HolographicThemeProps> = ({ bundle }) => {
  const sortedBits = [...bundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-gray-950 text-white font-['Exo_2',sans-serif] relative overflow-hidden">
      {/* Holographic background effect */}
      <div className="absolute inset-0 z-0">
        {/* Rainbow holographic gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-[pulse-glow_8s_ease-in-out_infinite]"></div>
        
        {/* Holographic grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(123,213,245,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(123,213,245,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
        
        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(123,213,245,0.2)_0%,transparent_70%)]"></div>
        
        {/* Caustic light effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 left-1/4 w-1/2 h-1/2 bg-cyan-300/30 rounded-full blur-3xl animate-[pulse-glow_10s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-1/3 right-1/4 w-1/3 h-1/3 bg-fuchsia-300/30 rounded-full blur-3xl animate-[pulse-glow_8s_ease-in-out_infinite]" style={{animationDelay: "2s"}}></div>
        </div>
      </div>
      
      <div className="w-full max-w-md mx-auto z-10 animate-[fadeIn_0.8s_ease-out]">
        <div className="relative bg-white/5 backdrop-blur-xl rounded-xl p-8 border border-white/20 shadow-xl overflow-hidden">
          {/* Holographic rainbow edge */}
          <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 animate-[pulse-glow_6s_ease-in-out_infinite] blur-xl opacity-70"></div>
          
          {/* Scanline effect */}
          <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(123,213,245,0.1)_50%)] bg-[size:100%_4px]"></div>
          
          <div className="flex flex-col items-center text-center relative z-10">
            <div className="mb-6 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/40 via-fuchsia-400/40 to-cyan-400/40 animate-[pulse-glow_4s_ease-in-out_infinite] rounded-full opacity-80 blur-md"></div>
              <img
                src={bundle.profilePicture || defaultAvatar}
                alt={bundle.displayName}
                className="relative w-28 h-28 rounded-full object-cover z-10 border border-white/30"
              />
            </div>
            
            <h1 className="text-3xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-fuchsia-300 animate-[pulse-glow_5s_ease-in-out_infinite]">
              {bundle.displayName}
            </h1>
            
            <p className="text-cyan-200/90 text-sm font-medium mt-1">
              @{bundle.bundleName}
            </p>
            
            {bundle.bio && (
              <p className="mt-3 text-white/80 text-sm max-w-xs">
                {bundle.bio}
              </p>
            )}
          </div>

          <div className="mt-8 space-y-3 relative z-10">
            {sortedBits.map((bit, index) => (
              <a
                key={index}
                href={bit.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 w-full px-6 py-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/10 transition-all duration-300 text-white relative overflow-hidden"
              >
                {/* Rainbow edge on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-fuchsia-500/0 to-cyan-500/0 group-hover:from-blue-500/20 group-hover:via-fuchsia-500/20 group-hover:to-cyan-500/20 transition-all duration-500"></div>
                
                {bit.icon && (
                  <span className="text-xl text-cyan-300 group-hover:text-white transition-colors z-10 relative">
                    {bit.icon}
                  </span>
                )}
                <span className="group-hover:text-white transition-colors z-10 relative font-medium">
                  {bit.title}
                </span>

                <div className="ml-auto z-10 relative bg-white/10 rounded-full w-6 h-6 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-cyan-200 group-hover:text-white transition-colors"
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

          <div className="mt-10 flex justify-center relative z-10">
            <div className="px-4 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
              <span className="text-xs text-cyan-200/80 tracking-wider">
                HOLO·VERSION·1.0
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HolographicTheme;