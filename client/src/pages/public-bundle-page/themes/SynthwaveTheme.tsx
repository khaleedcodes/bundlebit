import { Bundle } from "../usePublicBundle";
import defaultAvatar from "../../../assets/images/default-avatar.jpeg";

interface SynthwaveThemeProps {
  bundle: Bundle;
}

const SynthwaveTheme: React.FC<SynthwaveThemeProps> = ({ bundle }) => {
  const sortedBits = [...bundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-gradient-to-b from-indigo-950 to-purple-950 text-white font-['Orbitron',sans-serif] relative overflow-hidden">
      {/* Synthwave background with sun and grid */}
      <div className="absolute inset-0 z-0">
        {/* Synthwave Sun */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-gradient-to-t from-orange-600 via-pink-600 to-fuchsia-600 rounded-t-full blur-sm opacity-70"></div>
        
        {/* Perspective grid */}
        <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-[linear-gradient(transparent_0px,rgba(159,18,201,0.7)_1px),linear-gradient(90deg,transparent_0px,rgba(159,18,201,0.7)_1px)] bg-[size:30px_30px] [transform:perspective(500px)_rotateX(60deg)] origin-bottom"></div>
        
        {/* Glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/0 via-fuchsia-900/20 to-indigo-900/0"></div>
      </div>
      
      <div className="w-full max-w-md mx-auto z-10 animate-[fadeIn_1s_ease-out]">
        <div className="backdrop-blur-sm bg-black/30 rounded-lg p-8 border border-fuchsia-500/30 shadow-[0_0_40px_rgba(159,18,201,0.3)] overflow-hidden">
          {/* Synthwave stripes at the top */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-fuchsia-500 to-pink-500"></div>
          
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 relative">
              {/* Neon glow around profile image */}
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-600/30 via-fuchsia-600/30 to-pink-600/30 rounded-full blur-lg animate-[pulse-glow_4s_ease-in-out_infinite]"></div>
              <img
                src={bundle.profilePicture || defaultAvatar}
                alt={bundle.displayName}
                className="relative w-28 h-28 rounded-full object-cover border-2 border-fuchsia-500/50 shadow-lg shadow-fuchsia-500/20 z-10"
              />
            </div>
            
            <h1 className="text-3xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-fuchsia-400 to-pink-400 animate-[pulse-glow_5s_ease-in-out_infinite]">
              {bundle.displayName.toUpperCase()}
            </h1>
            
            <p className="text-fuchsia-300 text-sm font-medium mt-1 tracking-wider">
              @{bundle.bundleName}
            </p>
            
            {bundle.bio && (
              <p className="mt-3 text-blue-100/80 text-sm max-w-xs">
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
                className="group flex items-center gap-3 w-full px-6 py-4 rounded-lg bg-black/50 border border-fuchsia-500/30 hover:border-fuchsia-500/70 hover:bg-black/70 transition-all duration-500 text-white relative overflow-hidden"
              >
                {/* Glow line on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-blue-500 via-fuchsia-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {bit.icon && (
                  <span className="text-xl text-fuchsia-300 group-hover:text-fuchsia-200 transition-colors duration-300">
                    {bit.icon}
                  </span>
                )}
                <span className="font-medium tracking-wide group-hover:text-fuchsia-50 transition-colors duration-300">
                  {bit.title}
                </span>

                <div className="ml-auto bg-black/30 rounded-full w-7 h-7 flex items-center justify-center border border-fuchsia-500/30 group-hover:border-fuchsia-500/70 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-fuchsia-400 group-hover:text-fuchsia-300 transition-colors duration-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <div className="px-4 py-2 border border-fuchsia-500/30 bg-black/30 rounded-full text-xs tracking-widest uppercase text-fuchsia-300">
              <span>SYNTHWAVE ⚡ 1986</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SynthwaveTheme;