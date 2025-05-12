import { Bundle } from "../usePublicBundle";
import defaultAvatar from "../../../assets/images/default-avatar.jpeg";

interface VaporwaveThemeProps {
  bundle: Bundle;
}

const VaporwaveTheme: React.FC<VaporwaveThemeProps> = ({ bundle }) => {
  const sortedBits = [...bundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-black text-white font-['VT323',monospace] relative overflow-hidden">
      {/* Retro grid background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-800 via-purple-900 to-black opacity-70"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,0,240,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,0,240,0.5)_1px,transparent_1px)] bg-[size:40px_40px] [transform:perspective(300px)_rotateX(60deg)] opacity-20"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-fuchsia-600/40 to-transparent"></div>
      </div>
      
      {/* Glitch overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/5 via-transparent to-transparent"></div>
        <div className="absolute inset-0 mix-blend-color-dodge bg-[radial-gradient(circle,rgba(255,0,255,0.1),transparent_70%)]"></div>
        
        {/* RGB split/noise effect */}
        <div className="absolute inset-0 opacity-5 animate-[glitch_20s_linear_infinite]">
          <div className="absolute inset-0 bg-red-500 mix-blend-screen -translate-x-[1px]"></div>
          <div className="absolute inset-0 bg-blue-500 mix-blend-screen translate-x-[1px]"></div>
        </div>
        
        {/* Scanlines */}
        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px] pointer-events-none opacity-20"></div>
      </div>
      
      <div className="w-full max-w-md mx-auto z-10 animate-[slideUp_0.8s_ease-out]">
        <div className="border-2 border-cyan-400/80 bg-black/60 rounded-none p-8 shadow-[0_0_20px_rgba(80,250,250,0.5)]">
          {/* VHS label strip */}
          <div className="absolute -top-2 left-0 right-0 h-6 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-cyan-400"></div>
          
          <div className="flex flex-col items-center text-center mt-6">
            <div className="relative mb-6">
              <div className="absolute -inset-2 rounded-none bg-cyan-500/30 mix-blend-screen animate-[pulse-glow_3s_ease-in-out_infinite]"></div>
              <img
                src={bundle.profilePicture || defaultAvatar}
                alt={bundle.displayName}
                className="relative w-28 h-28 rounded-none object-cover border-2 border-cyan-400/80 grayscale contrast-125 brightness-110"
                style={{ clipPath: "polygon(5% 5%, 100% 0%, 95% 95%, 0% 100%)" }}
              />
            </div>
            
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-cyan-300 uppercase tracking-widest animate-[glitch_8s_ease-in-out_infinite]">
              {bundle.displayName}
            </h1>
            
            <p className="text-cyan-300 text-lg font-bold mt-1">
              @{bundle.bundleName}
            </p>
            
            {bundle.bio && (
              <p className="mt-4 text-fuchsia-300/80 text-lg max-w-xs uppercase">
                {bundle.bio}
              </p>
            )}
          </div>

          <div className="mt-8 space-y-4">
            {sortedBits.map((bit, index) => (
              <a
                key={index}
                href={bit.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 w-full px-6 py-4 border-2 border-cyan-500/50 hover:border-fuchsia-400 hover:bg-cyan-900/10 transition-all duration-300 text-white shadow-[0_0_8px_rgba(80,250,250,0.3)] hover:shadow-[0_0_15px_rgba(255,0,240,0.5)]"
                style={{ clipPath: "polygon(1% 0%, 100% 0%, 99% 100%, 0% 100%)" }}
              >
                {bit.icon && (
                  <span className="text-xl text-cyan-300 group-hover:text-fuchsia-300 transition-colors">
                    {bit.icon}
                  </span>
                )}
                <span className="uppercase tracking-wider group-hover:text-fuchsia-200 transition-colors">
                  {bit.title}
                </span>

                <span className="ml-auto text-cyan-300 group-hover:text-fuchsia-300 transition-colors">
                  ►
                </span>
              </a>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <div className="text-sm text-cyan-300/70 border-t-2 border-cyan-500/30 pt-4 w-full text-center uppercase tracking-widest">
              © BUNDLEBIT {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VaporwaveTheme;