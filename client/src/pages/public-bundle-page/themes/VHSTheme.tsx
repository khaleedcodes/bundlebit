import { Bundle } from "../usePublicBundle";
import defaultAvatar from "../../../assets/images/default-avatar.jpeg";

interface VHSThemeProps {
  bundle: Bundle;
}

const VHSTheme: React.FC<VHSThemeProps> = ({ bundle }) => {
  const sortedBits = [...bundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-black text-white font-['VT323',monospace] relative overflow-hidden">
      {/* VHS distortion effects */}
      <div className="absolute inset-0 z-0">
        {/* Base background */}
        <div className="absolute inset-0 bg-black"></div>
        
        {/* RGB split effect */}
        <div className="absolute inset-0 mix-blend-screen">
          <div className="absolute inset-0 bg-red-500/20 -translate-x-[3px]"></div>
          <div className="absolute inset-0 bg-blue-500/20 translate-x-[3px]"></div>
          <div className="absolute inset-0 bg-green-500/20"></div>
        </div>
        
        {/* Static noise overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48ZmlsdGVyIGlkPSJub2lzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSI+PGZlVHVyYnVsZW5jZSBiYXNlRnJlcXVlbmN5PSIwLjgiIHN0aXRjaFRpbGVzPSJzdGl0Y2giIHR5cGU9ImZyYWN0YWxOb2lzZSIgbnVtT2N0YXZlcz0iMyIgcmVzdWx0PSJub2lzZSI+PC9mZVR1cmJ1bGVuY2U+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIgaW4PSJub2lzZSIgcmVzdWx0PSJzYXR1cmF0ZWROb2lzZSI+PC9mZUNvbG9yTWF0cml4PjxmZUNvbXBvc2l0ZSBvcGVyYXRvcj0iYXJpdGhtZXRpYyIgazEiPSIwIiBrMj0iLjEiIGszPSIwIiBrND0iMCIgaW49InNhdHVyYXRlZE5vaXNlIj48L2ZlQ29tcG9zaXRlPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiLz48L3N2Zz4=')] opacity-10"></div>
        
        {/* Scan lines */}
        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px] pointer-events-none opacity-20"></div>
        
        {/* Random VHS glitches */}
        <div className="absolute h-[3px] w-full bg-white/20 top-[22%] animate-[glitch_8s_ease-in-out_infinite]"></div>
        <div className="absolute h-[3px] w-full bg-white/10 top-[40%] animate-[glitch_9s_ease-in-out_infinite]" style={{animationDelay: "3s"}}></div>
        <div className="absolute h-[5px] w-full bg-white/10 bottom-[30%] animate-[glitch_7s_ease-in-out_infinite]" style={{animationDelay: "5s"}}></div>
      </div>
      
      <div className="w-full max-w-md mx-auto z-10 animate-[fadeIn_0.8s_ease-out]">
        <div className="bg-black border-t-4 border-l-4 border-r-4 border-white p-8 relative">
          {/* VHS label strip */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 -rotate-6 bg-white/80 px-4 py-1 text-black text-sm font-bold tracking-wide">
            VHS-{Math.floor(Math.random() * 9000) + 1000}
          </div>
          
          {/* Faux tracking error banner */}
          <div className="absolute -top-3 left-0 right-0 py-1 bg-black/90 border-y-2 border-white/50 text-center">
            <span className="text-sm animate-[glitch_4s_ease-in-out_infinite] inline-block">TRACKING</span>
          </div>
          
          <div className="flex flex-col items-center text-center mb-8 animate-[glitch_10s_ease-in-out_infinite]">
            <div className="relative mb-4">
              <div className="absolute -inset-1 bg-transparent border-2 border-white blur-[1px] animate-[glitch_5s_ease-in-out_infinite]"></div>
              <img
                src={bundle.profilePicture || defaultAvatar}
                alt={bundle.displayName}
                className="w-28 h-28 grayscale contrast-125 brightness-110 object-cover"
              />
            </div>
            
            <h1 className="text-4xl font-bold text-white tracking-wide mb-1 relative">
              <span className="relative inline-block">
                {bundle.displayName.toUpperCase()}
                <span className="absolute inset-0 text-transparent bg-clip-text bg-red-500 -translate-x-[2px] blur-[1px] opacity-70">{bundle.displayName.toUpperCase()}</span>
                <span className="absolute inset-0 text-transparent bg-clip-text bg-blue-500 translate-x-[2px] blur-[1px] opacity-70">{bundle.displayName.toUpperCase()}</span>
              </span>
            </h1>
            
            <p className="text-white/80 text-lg mb-2">
              @{bundle.bundleName}
            </p>
            
            {bundle.bio && (
              <p className="text-white/70 text-base max-w-xs mt-1">
                {bundle.bio}
              </p>
            )}
          </div>

          <div className="space-y-2">
            {sortedBits.map((bit, index) => (
              <a
                key={index}
                href={bit.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 w-full px-4 py-3 bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/20 text-white relative overflow-hidden"
              >
                {/* Glitch effect on hover */}
                <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-y-0 left-0 w-1 bg-white/40 group-hover:bg-purple-500/70"></div>
                
                {bit.icon && (
                  <span className="text-2xl text-white/80 group-hover:text-white transition-colors">
                    {bit.icon}
                  </span>
                )}
                <span className="font-bold tracking-wider group-hover:text-white transition-colors text-lg uppercase">
                  {bit.title}
                </span>

                <div className="ml-auto">
                  <div className="w-5 h-3 bg-white/80 group-hover:bg-white group-hover:animate-[pulse_1s_linear_infinite] transition-colors"></div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 flex justify-center border-t-2 border-white/30 pt-4">
            <div className="inline-flex items-center gap-2">
              <div className="w-4 h-4 rounded-full border-2 border-white animate-[pulse_1.5s_ease-in-out_infinite]"></div>
              <span className="text-sm text-white/70 uppercase tracking-[0.3em]">
                REC
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VHSTheme;