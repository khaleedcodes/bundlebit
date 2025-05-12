import { Bundle } from "../usePublicBundle";
import defaultAvatar from "../../../assets/images/default-avatar.jpeg";

interface CyberGradientThemeProps {
  bundle: Bundle;
}

const CyberGradientTheme: React.FC<CyberGradientThemeProps> = ({ bundle }) => {
  const sortedBits = [...bundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white font-['Rajdhani',sans-serif] relative overflow-hidden">
      {/* Cyber background elements */}
      <div className="absolute inset-0 z-0">
        {/* Dynamic grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(45,10,100,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(45,10,100,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [transform:perspective(500px)_rotateX(60deg)]"></div>
        
        {/* Cyberpunk-style flares */}
        <div className="absolute top-0 left-1/4 right-1/4 h-40 bg-blue-500/20 blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-1/2 h-40 bg-purple-700/20 blur-[100px]"></div>
        <div className="absolute bottom-1/4 left-0 w-40 h-40 rounded-full bg-cyan-500/10 blur-[80px]"></div>
        
        {/* Animated scanning line */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent animate-[scanline_4s_linear_infinite]"></div>
        </div>
      </div>
      
      <div className="w-full max-w-md mx-auto z-10 animate-[fadeIn_0.8s_ease-out]">
        <div className="bg-gradient-to-br from-gray-900/90 to-indigo-950/90 backdrop-blur-md rounded-lg p-8 border border-indigo-500/30 shadow-[0_0_30px_rgba(67,56,202,0.3)]">
          {/* Futuristic holographic elements */}
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg -rotate-12 border border-white/10"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-lg rotate-12 border border-white/10"></div>
          
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 relative">
              {/* Cyber frame effect */}
              <div className="absolute inset-0 scale-[1.1] rounded-lg bg-gradient-to-r from-cyan-500/30 to-purple-500/30 [clip-path:polygon(0%_0%,100%_0%,100%_75%,75%_100%,0%_100%)]"></div>
              <div className="p-1 border-2 border-cyan-400/40 [clip-path:polygon(0%_0%,100%_0%,100%_75%,75%_100%,0%_100%)]">
                <img
                  src={bundle.profilePicture || defaultAvatar}
                  alt={bundle.displayName}
                  className="w-28 h-28 object-cover [clip-path:polygon(0%_0%,100%_0%,100%_75%,75%_100%,0%_100%)]"
                />
              </div>
              
              {/* Holographic elements */}
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-cyan-400 animate-pulse"></div>
              <div className="absolute -bottom-1 -left-1 h-3 w-3 bg-purple-400 animate-pulse" style={{animationDelay: "0.5s"}}></div>
            </div>
            
            <h1 className="text-3xl font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-purple-400">
              {bundle.displayName}
            </h1>
            
            <p className="text-cyan-300 text-sm font-semibold mt-1">
              @{bundle.bundleName}
            </p>
            
            {bundle.bio && (
              <p className="mt-3 text-gray-300 text-sm max-w-xs">
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
                className="group flex items-center gap-3 w-full px-6 py-4 bg-gray-900/60 border border-indigo-500/30 hover:border-cyan-500/50 transition-all duration-300 text-white relative overflow-hidden [clip-path:polygon(0%_0%,97%_0%,100%_30%,100%_100%,3%_100%,0%_70%)]"
              >
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-cyan-400/0 to-purple-600/0 group-hover:from-purple-600/10 group-hover:via-cyan-400/10 group-hover:to-purple-600/10 transition-all duration-500"></div>
                
                {bit.icon && (
                  <span className="text-xl text-cyan-300 group-hover:text-cyan-200 transition-colors">
                    {bit.icon}
                  </span>
                )}
                <span className="font-semibold tracking-wide group-hover:text-cyan-100 transition-colors">
                  {bit.title}
                </span>

                <div className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-indigo-400 group-hover:text-cyan-300 transition-colors"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <div className="px-4 py-1 border border-cyan-500/30 bg-indigo-900/30 [clip-path:polygon(10%_0%,100%_0%,90%_100%,0%_100%)]">
              <span className="text-xs font-bold tracking-widest text-cyan-300 uppercase">Cybr:Grade v2.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberGradientTheme;