import { Bundle } from "../usePublicBundle";
import defaultAvatar from "../../../assets/images/default-avatar.jpeg";

interface ArcadeThemeProps {
  bundle: Bundle;
}

const ArcadeTheme: React.FC<ArcadeThemeProps> = ({ bundle }) => {
  const sortedBits = [...bundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-black text-white font-['Press_Start_2P',monospace] relative overflow-hidden">
      {/* Arcade background with gradient and grid */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Arcade gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.15)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        
        {/* Starry background */}
        <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animation: `pulse-glow ${Math.random() * 3 + 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="w-full max-w-md mx-auto z-10 animate-[fadeIn_1s_step-end]">
        <div className="bg-black/60 border-4 border-pink-500 p-6 rounded-lg shadow-[0_0_30px_rgba(219,39,119,0.5)] relative">
          {/* Arcade cabinet design elements */}
          <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"></div>
          
          <div className="text-center mt-8">
            <div className="mb-6 relative">
              {/* CRT screen effect for profile image */}
              <div className="relative w-32 h-32 mx-auto border-4 border-purple-500 rounded-lg overflow-hidden">
                <img
                  src={bundle.profilePicture || defaultAvatar}
                  alt={bundle.displayName}
                  className="w-full h-full object-cover"
                />
                {/* Scan line effect */}
                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.3)_50%)] bg-[size:100%_4px] pointer-events-none opacity-70"></div>
                {/* Glowing frame */}
                <div className="absolute inset-0 border-2 border-white/10 rounded-sm"></div>
                <div className="absolute inset-0 animate-[scanline_2s_linear_infinite] h-[10px] w-full bg-white/10 z-10"></div>
              </div>
              
              {/* Game title-like display */}
              <div className="mt-2 text-center">
                <h1 className="text-lg text-pink-500 font-bold animate-[glow_2s_ease-in-out_infinite] tracking-wider mb-0">
                  {bundle.displayName.toUpperCase()}
                </h1>
                <p className="text-xs text-purple-300 mt-1">
                  @{bundle.bundleName}
                </p>
              </div>
            </div>
            
            {bundle.bio && (
              <div className="my-4 p-3 bg-gradient-to-r from-pink-900/50 to-purple-900/50 border border-pink-500/30 rounded">
                <p className="text-xs text-purple-100 leading-relaxed">
                  {bundle.bio}
                </p>
              </div>
            )}
            
            {/* Score display */}
            <div className="my-4 flex justify-between text-xs border-y-2 border-pink-500/50 py-2">
              <span>SCORE: 9999</span>
              <span className="text-yellow-300">HI-SCORE: 99999</span>
            </div>
            
            {/* Link buttons as arcade controls */}
            <div className="space-y-3">
              {sortedBits.map((bit, index) => (
                <a
                  key={index}
                  href={bit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center w-full px-4 py-3 bg-gradient-to-r from-indigo-900/80 to-purple-900/80 hover:from-pink-600 hover:to-purple-600 border-2 border-pink-500 rounded-md transition-all duration-200 relative overflow-hidden"
                >
                  {/* Pixelated hover effect */}
                  <div className="absolute inset-0 bg-grid opacity-0 group-hover:opacity-30"></div>
                  
                  {/* Button index like arcade controls */}
                  <span className="inline-flex items-center justify-center w-8 h-8 border-2 border-pink-500 rounded-full text-white mr-3 group-hover:bg-pink-500 transition-colors">
                    {String.fromCharCode(65 + index)}
                  </span>
                  
                  <div className="flex-1">
                    {bit.icon && (
                      <span className="inline-block mr-2 text-pink-400 group-hover:text-white transition-colors">
                        {bit.icon}
                      </span>
                    )}
                    <span className="text-sm text-white">
                      {bit.title}
                    </span>
                  </div>
                  
                  {/* D-pad arrow */}
                  <div className="text-pink-400 group-hover:text-white transition-colors">
                    {'>>'}
                  </div>
                </a>
              ))}
            </div>
            
            {/* Credits section */}
            <div className="mt-8 flex justify-between text-xs border-t-2 border-pink-500/50 pt-4">
              <span>© 2025 ARCADE</span>
              <span className="text-yellow-300 animate-[blink_1s_step-end_infinite]">INSERT COIN</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArcadeTheme;