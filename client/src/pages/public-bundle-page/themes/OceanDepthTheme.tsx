import { Bundle } from "../usePublicBundle";
import defaultAvatar from "../../../assets/images/default-avatar.jpeg";

interface OceanDepthThemeProps {
  bundle: Bundle;
}

const OceanDepthTheme: React.FC<OceanDepthThemeProps> = ({ bundle }) => {
  const sortedBits = [...bundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-gradient-to-b from-blue-900 via-blue-950 to-black text-white font-['Montserrat',sans-serif] relative overflow-hidden">
      {/* Deep ocean background with bubbles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-950/80 to-black"></div>
        
        {/* Animated bubbles */}
        <div className="absolute h-full w-full">
          <div className="absolute bottom-0 left-1/4 w-4 h-4 rounded-full bg-blue-200/20 animate-[float_8s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-10 left-1/3 w-6 h-6 rounded-full bg-blue-200/10 animate-[float_12s_ease-in-out_infinite]" style={{animationDelay: "2s"}}></div>
          <div className="absolute bottom-5 left-2/3 w-3 h-3 rounded-full bg-blue-200/20 animate-[float_10s_ease-in-out_infinite]" style={{animationDelay: "1s"}}></div>
          <div className="absolute bottom-20 left-1/2 w-5 h-5 rounded-full bg-blue-200/10 animate-[float_15s_ease-in-out_infinite]" style={{animationDelay: "5s"}}></div>
          <div className="absolute bottom-0 left-3/4 w-8 h-8 rounded-full bg-blue-200/5 animate-[float_18s_ease-in-out_infinite]" style={{animationDelay: "3s"}}></div>
        </div>
        
        {/* Light rays effect */}
        <div className="absolute top-0 left-1/4 w-40 h-[100vh] bg-gradient-to-b from-blue-400/5 to-transparent transform -rotate-45 blur-xl"></div>
        <div className="absolute top-0 right-1/4 w-20 h-[60vh] bg-gradient-to-b from-blue-300/5 to-transparent transform rotate-45 blur-xl"></div>
      </div>
      
      <div className="w-full max-w-md mx-auto z-10 animate-[fadeIn_1s_ease-out]">
        <div className="backdrop-blur-sm bg-blue-950/30 rounded-xl p-8 border border-blue-500/20 shadow-[0_0_30px_rgba(37,99,235,0.2)]">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-6">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500/30 to-cyan-300/30 blur-md animate-pulse"></div>
              <img
                src={bundle.profilePicture || defaultAvatar}
                alt={bundle.displayName}
                className="relative w-28 h-28 rounded-full object-cover border-2 border-blue-400/50"
              />
            </div>
            
            <h1 className="text-3xl font-bold text-blue-100">
              {bundle.displayName}
            </h1>
            
            <p className="text-cyan-300 text-sm font-medium mt-1">
              @{bundle.bundleName}
            </p>
            
            {bundle.bio && (
              <p className="mt-3 text-blue-200/80 text-sm max-w-xs">
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
                className="group flex items-center gap-3 w-full px-6 py-4 rounded-lg bg-blue-900/30 border border-blue-700/50 hover:border-blue-400/60 transition-all duration-300 text-white backdrop-blur-sm hover:bg-blue-800/20 hover:shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:scale-[1.02]"
              >
                {bit.icon && (
                  <span className="text-xl text-cyan-300 group-hover:text-cyan-200 transition-colors">
                    {bit.icon}
                  </span>
                )}
                <span className="group-hover:text-blue-100 transition-colors">
                  {bit.title}
                </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-auto text-blue-400/70 group-hover:text-blue-300 group-hover:translate-x-0.5 transition-all"
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
            <div className="flex items-center gap-1 text-blue-400/70 text-xs">
              <span className="inline-block w-8 h-[1px] bg-blue-500/50"></span>
              Deep Blue by Bundlebit
              <span className="inline-block w-8 h-[1px] bg-blue-500/50"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OceanDepthTheme;