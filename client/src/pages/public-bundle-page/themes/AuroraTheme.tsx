import { Bundle } from "../usePublicBundle";
import defaultAvatar from "../../../assets/images/default-avatar.jpeg";

interface AuroraThemeProps {
  bundle: Bundle;
}

const AuroraTheme: React.FC<AuroraThemeProps> = ({ bundle }) => {
  const sortedBits = [...bundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-gray-900 text-white font-['Montserrat',sans-serif] relative overflow-hidden">
      {/* Aurora background effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 inset-x-0 h-full w-full bg-gradient-to-b from-teal-400/30 via-purple-500/30 to-pink-500/30 animate-[pulse-glow_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-0 inset-x-0 h-full w-full bg-gradient-to-t from-purple-600/30 via-violet-600/20 to-transparent"></div>
        <div className="absolute -inset-40 opacity-50">
          <div className="absolute top-1/4 left-1/4 w-full h-full rounded-full bg-gradient-to-r from-cyan-400/30 to-indigo-400/30 blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-[float_15s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-full h-full rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-3xl transform translate-x-1/2 translate-y-1/2 animate-[float_15s_ease-in-out_infinite_reverse]" style={{animationDelay: "2s"}}></div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0),rgba(0,0,0,0.4)_90%)]"></div>
      </div>
      
      <div className="w-full max-w-md mx-auto z-10 animate-[fadeIn_1s_ease-out]">
        <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 border border-white/20">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 rounded-full blur opacity-70 animate-[pulse-glow_4s_ease-in-out_infinite]"></div>
              <img
                src={bundle.profilePicture || defaultAvatar}
                alt={bundle.displayName}
                className="relative w-28 h-28 rounded-full object-cover shadow-lg border-2 border-white/50"
              />
            </div>
            
            <h1 className="mt-4 text-3xl font-bold">
              {bundle.displayName}
            </h1>
            
            <p className="text-purple-200 text-sm font-medium">
              @{bundle.bundleName}
            </p>
            
            {bundle.bio && (
              <p className="mt-3 text-white/80 text-sm max-w-xs">
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
                className="group flex items-center gap-3 w-full px-6 py-4 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 text-white hover:shadow-lg hover:shadow-purple-500/20"
              >
                {bit.icon && (
                  <span className="text-xl text-cyan-200 group-hover:text-purple-200 transition-colors">
                    {bit.icon}
                  </span>
                )}
                <span className="group-hover:text-purple-200 transition-colors">
                  {bit.title}
                </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-auto text-white/60 group-hover:text-purple-200 group-hover:translate-x-0.5 transition-all"
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
            <span className="text-xs text-white/50 flex items-center gap-2">
              <span className="inline-block w-5 h-[1px] bg-gradient-to-r from-cyan-400 to-transparent"></span>
              Aurora by Bundlebit
              <span className="inline-block w-5 h-[1px] bg-gradient-to-l from-purple-400 to-transparent"></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuroraTheme;