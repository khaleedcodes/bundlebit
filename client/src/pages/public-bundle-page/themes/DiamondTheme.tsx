import { Bundle } from "../usePublicBundle";
import defaultAvatar from "../../../assets/images/default-avatar.jpeg";

interface DiamondThemeProps {
  bundle: Bundle;
}

const DiamondTheme: React.FC<DiamondThemeProps> = ({ bundle }) => {
  const sortedBits = [...bundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-gradient-to-b from-sky-950 to-gray-900 text-white font-['Poppins',sans-serif] relative overflow-hidden">
      {/* Diamond/crystal background effects */}
      <div className="absolute inset-0 z-0">
        {/* Crystalline structure lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(78,152,236,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(78,152,236,0.05)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
        
        {/* Diamond facet reflections */}
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/4 bg-blue-400/5 rotate-45 backdrop-blur-sm"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-blue-400/5 -rotate-12 backdrop-blur-sm"></div>
        
        {/* Light reflections */}
        <div className="absolute top-0 left-1/3 w-1/4 h-1/4 bg-white/5 blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1/5 h-1/5 bg-white/5 blur-xl"></div>
      </div>
      
      <div className="w-full max-w-md mx-auto z-10 animate-[fadeIn_1s_ease-out]">
        <div className="relative bg-gray-900/60 backdrop-blur-sm p-10 overflow-hidden">
          {/* Diamond edges */}
          <div className="absolute top-0 left-0 w-full h-full border-2 border-sky-400/30"></div>
          <div className="absolute top-5 left-5 right-5 bottom-5 border-2 border-blue-300/20 -rotate-1"></div>
          <div className="absolute top-10 left-10 right-10 bottom-10 border border-blue-300/10 rotate-1"></div>
          
          {/* Shining reflections */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
          
          <div className="flex flex-col items-center text-center relative">
            <div className="mb-8 relative">
              {/* Diamond frame for profile pic */}
              <div className="absolute -inset-3 bg-gradient-to-r from-sky-300/30 via-blue-300/20 to-indigo-300/30 rotate-45 blur-sm"></div>
              <div className="w-32 h-32 rotate-45 relative overflow-hidden border border-blue-300/30">
                <img
                  src={bundle.profilePicture || defaultAvatar}
                  alt={bundle.displayName}
                  className="absolute -inset-5 scale-[1.3] object-cover -rotate-45"
                />
              </div>
            </div>
            
            <h1 className="text-3xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-sky-200">
              {bundle.displayName}
            </h1>
            
            <p className="text-sky-300/80 text-sm font-medium">
              @{bundle.bundleName}
            </p>
            
            {bundle.bio && (
              <p className="mt-3 text-blue-100/70 text-sm max-w-xs">
                {bundle.bio}
              </p>
            )}
            
            {/* Diamond separator */}
            <div className="w-8 h-8 mt-5 mb-2 border border-sky-400/30 rotate-45 relative">
              <div className="absolute inset-0.5 border border-blue-300/20"></div>
            </div>
          </div>

          <div className="space-y-3">
            {sortedBits.map((bit, index) => (
              <a
                key={index}
                href={bit.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 w-full px-6 py-4 bg-gray-800/40 border border-blue-500/10 hover:border-blue-400/30 transition-all duration-300 text-white relative overflow-hidden transform"
                style={{ clipPath: "polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%)" }}
              >
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                
                {bit.icon && (
                  <span className="text-lg text-sky-300 group-hover:text-sky-200 transition-colors z-10 relative">
                    {bit.icon}
                  </span>
                )}
                <span className="font-medium group-hover:text-sky-100 transition-colors z-10 relative">
                  {bit.title}
                </span>

                <div className="ml-auto">
                  <div className="w-6 h-6 border border-sky-400/30 rotate-45 flex items-center justify-center group-hover:border-sky-400/50 transition-colors z-10 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 text-sky-300 -rotate-45 group-hover:text-sky-200 transition-colors"
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
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <div className="px-4 py-2 border border-blue-400/10 relative">
              <div className="absolute inset-0.5 border border-blue-400/5"></div>
              <span className="text-xs text-sky-300/70 tracking-widest uppercase">
                diamond edition
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiamondTheme;