import { Bundle } from "../usePublicBundle";
import defaultAvatar from "../../../assets/images/default-avatar.jpeg";

interface OutrunThemeProps {
  bundle: Bundle;
}

const OutrunTheme: React.FC<OutrunThemeProps> = ({ bundle }) => {
  const sortedBits = [...bundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-black text-white font-['Orbitron',sans-serif] relative overflow-hidden">
      {/* Outrun/retrowave sunset background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Sunset gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 via-purple-700 to-pink-500"></div>
        
        {/* Sun */}
        <div className="absolute bottom-40 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-gradient-to-t from-pink-500 to-yellow-400 opacity-80 blur-sm"></div>
        
        {/* Grid horizon */}
        <div className="absolute bottom-0 left-0 right-0 h-[40vh] overflow-hidden perspective">
          <div className="h-full w-full bg-[linear-gradient(rgba(0,0,0,0)_0px,rgba(255,81,246,0.6)_1px),linear-gradient(90deg,rgba(0,0,0,0)_0px,rgba(255,81,246,0.6)_1px)] bg-[size:40px_40px] [transform:rotateX(60deg)] origin-top"></div>
        </div>
        
        {/* Mountain silhouettes */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-black" style={{
          clipPath: 'polygon(0% 100%, 10% 60%, 20% 80%, 30% 40%, 40% 70%, 50% 30%, 60% 50%, 70% 20%, 80% 60%, 90% 40%, 100% 100%)'
        }}></div>
        
        {/* Stars */}
        <div className="absolute inset-0 top-0 bottom-1/2">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-px bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                opacity: Math.random() * 0.5 + 0.5
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="w-full max-w-md mx-auto z-10 animate-[fadeIn_1s_ease-out]">
        <div className="backdrop-blur-sm bg-black/30 p-8 border border-pink-500/50 rounded-lg relative overflow-hidden shadow-[0_0_50px_rgba(219,39,119,0.3)]">
          {/* Chrome strip */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-400 via-pink-500 to-cyan-400"></div>
          
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 relative">
              {/* Chrome ring around profile image */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-cyan-400 via-pink-500 to-cyan-400 opacity-80 animate-[spin_20s_linear_infinite]"></div>
              <img
                src={bundle.profilePicture || defaultAvatar}
                alt={bundle.displayName}
                className="relative w-28 h-28 rounded-full object-cover border-2 border-cyan-400 z-10 shadow-[0_0_15px_rgba(6,182,212,0.5)]"
              />
            </div>
            
            <h1 className="text-3xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-cyan-400 to-pink-500 animate-[pulse-glow_4s_ease-in-out_infinite]">
              {bundle.displayName.toUpperCase()}
            </h1>
            
            <p className="text-cyan-300 text-sm mt-1 tracking-widest">
              @{bundle.bundleName}
            </p>
            
            {bundle.bio && (
              <div className="mt-4 p-4 rounded-md backdrop-blur-md bg-gradient-to-r from-black/50 via-purple-900/30 to-black/50 border border-cyan-500/30">
                <p className="text-white/80 text-sm">
                  {bundle.bio}
                </p>
              </div>
            )}
          </div>

          <div className="mt-8 space-y-3">
            {sortedBits.map((bit, index) => (
              <a
                key={index}
                href={bit.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 w-full px-5 py-3.5 rounded-md bg-black/50 border border-pink-500/50 hover:border-pink-500 hover:bg-black/70 transition-all duration-300 relative overflow-hidden"
              >
                {/* Chrome bar on hover */}
                <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-cyan-400 via-pink-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                
                {bit.icon && (
                  <span className="text-lg text-pink-500 group-hover:text-pink-400 transition-colors">
                    {bit.icon}
                  </span>
                )}
                <span className="font-medium tracking-wide text-white group-hover:text-pink-100 transition-colors">
                  {bit.title}
                </span>

                <div className="ml-auto w-8 h-8 rounded-full bg-black/70 p-2 flex items-center justify-center border border-pink-500/30 group-hover:border-cyan-400 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-full w-full text-cyan-400"
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
            <div className="px-6 py-3 rounded-full backdrop-blur-sm bg-black/30 border border-pink-500/30 text-xs tracking-[0.3em] text-cyan-300">
              <span>OUTRUN • 1986</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutrunTheme;