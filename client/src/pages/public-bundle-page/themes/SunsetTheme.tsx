import { Bundle } from "../usePublicBundle";
import defaultAvatar from "../../../assets/images/default-avatar.jpeg";

interface SunsetThemeProps {
  bundle: Bundle;
}

const SunsetTheme: React.FC<SunsetThemeProps> = ({ bundle }) => {
  const sortedBits = [...bundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-gradient-to-b from-orange-500 via-pink-600 to-purple-700 text-white font-['Montserrat',sans-serif] relative overflow-hidden">
      {/* Layered waves SVG */}
      <div className="absolute inset-0 z-0">
        {/* First wave */}
        <div className="absolute bottom-0 left-0 right-0 h-64 z-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full opacity-20 absolute bottom-0">
            <path fill="#fff" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,213.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        
        {/* Second wave */}
        <div className="absolute bottom-0 left-0 right-0 h-48 z-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full opacity-30 absolute bottom-0 animate-[wave_15s_linear_infinite]">
            <path fill="#fff" fillOpacity="1" d="M0,96L48,122.7C96,149,192,203,288,224C384,245,480,235,576,202.7C672,171,768,117,864,112C960,107,1056,149,1152,154.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>
      
      <div className="w-full max-w-md mx-auto z-10 animate-[fadeIn_0.8s_ease-out]">
        <div className="backdrop-blur-md bg-white/10 rounded-xl p-8 border border-white/20 shadow-lg">
          {/* Sun/circle shape behind profile */}
          <div className="absolute top-4 inset-x-0 mx-auto w-32 h-32 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 opacity-80 blur-md z-0"></div>
          
          <div className="flex flex-col items-center text-center relative z-10">
            <div className="relative mb-2">
              <img
                src={bundle.profilePicture || defaultAvatar}
                alt={bundle.displayName}
                className="w-28 h-28 rounded-full object-cover border-2 border-white/50 z-10"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 to-pink-500 blur-sm z-0"></div>
            </div>
            
            <h1 className="mt-4 text-3xl font-bold">
              {bundle.displayName}
            </h1>
            
            <p className="text-yellow-200 text-sm font-medium">
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
                className="group flex items-center gap-3 w-full px-6 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 text-white font-medium"
              >
                {bit.icon && (
                  <span className="text-xl text-yellow-200 group-hover:text-yellow-100 transition-colors">
                    {bit.icon}
                  </span>
                )}
                <span className="group-hover:text-white transition-colors">
                  {bit.title}
                </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-auto text-yellow-200/60 group-hover:text-yellow-100 group-hover:translate-x-0.5 transition-all"
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

          <div className="mt-10 flex justify-center relative z-10">
            <span className="inline-block text-xs text-white/60 backdrop-blur-sm bg-white/10 px-4 py-1 rounded-full">
              Sunset vibes by Bundlebit
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SunsetTheme;