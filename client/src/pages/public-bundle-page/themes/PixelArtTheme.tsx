import { Bundle } from "../usePublicBundle";
import defaultAvatar from "../../../assets/images/default-avatar.jpeg";

interface PixelArtThemeProps {
  bundle: Bundle;
}

const PixelArtTheme: React.FC<PixelArtThemeProps> = ({ bundle }) => {
  const sortedBits = [...bundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-[#191925] text-white font-['Press_Start_2P',monospace] relative overflow-hidden">
      {/* Pixel art background */}
      <div className="absolute inset-0 z-0">
        {/* Pixelated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(60,60,80,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(60,60,80,0.2)_1px,transparent_1px)] bg-[size:8px_8px]"></div>
        
        {/* Pixelated "stars" in background */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/60"></div>
        <div className="absolute top-1/3 left-2/3 w-2 h-2 bg-white/40"></div>
        <div className="absolute top-2/3 left-1/6 w-2 h-2 bg-white/50"></div>
        <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-white/30"></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-white/70"></div>
        
        {/* Pixel art "mountains" at bottom */}
        <div className="absolute bottom-0 inset-x-0 h-20 bg-[#252532]" style={{
          clipPath: "polygon(0% 100%, 8% 70%, 16% 90%, 24% 60%, 32% 80%, 40% 40%, 48% 70%, 56% 30%, 64% 50%, 72% 20%, 80% 60%, 88% 40%, 96% 70%, 100% 100%)"
        }}></div>
      </div>
      
      <div className="w-full max-w-md mx-auto z-10 animate-[fadeIn_1s_step-end]">
        <div className="bg-[#252532] p-4 border-4 border-[#565699] shadow-[8px_8px_0px_#000000]">
          {/* Pixelated header bar */}
          <div className="bg-[#565699] text-white px-3 py-2 mb-4 flex items-center justify-between">
            <span className="text-xs">PROFILE.EXE</span>
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-[#ff5555]"></div>
              <div className="w-3 h-3 bg-[#ffff55]"></div>
              <div className="w-3 h-3 bg-[#55ff55]"></div>
            </div>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 w-28 h-28 bg-[#c0c0c0] p-2 relative">
              <img
                src={bundle.profilePicture || defaultAvatar}
                alt={bundle.displayName}
                className="w-full h-full object-cover pixelated border-2 border-[#000000]"
              />
              
              {/* Pixelated corners */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-4 border-l-4 border-[#000000]"></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 border-t-4 border-r-4 border-[#000000]"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-4 border-l-4 border-[#000000]"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-4 border-r-4 border-[#000000]"></div>
            </div>
            
            <h1 className="text-lg text-[#fd5454] mb-1">
              {bundle.displayName}
            </h1>
            
            <p className="text-[#64e864] text-[10px]">
              @{bundle.bundleName}
            </p>
            
            {bundle.bio && (
              <div className="mt-4 text-white text-[10px] max-w-xs p-2 border-2 border-[#808080] bg-[#16161f]">
                <p>{bundle.bio}</p>
              </div>
            )}
          </div>
          
          <div className="mt-6 border-t-4 border-[#565699] pt-6">
            <p className="text-[10px] text-[#fd5454] mb-2">SELECT_OPTION:</p>
            
            <div className="space-y-3">
              {sortedBits.map((bit, index) => (
                <a
                  key={index}
                  href={bit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 w-full px-3 py-2 bg-[#16161f] border-2 border-[#565699] hover:bg-[#565699]/20 transition-colors text-[10px] relative"
                >
                  <div className="text-[#fdfd54] mr-1 group-hover:text-white transition-colors">
                    [{String.fromCharCode(65 + index)}]
                  </div>
                  
                  {bit.icon && (
                    <span className="text-[#64e864] group-hover:text-white transition-colors">
                      {bit.icon}
                    </span>
                  )}
                  <span className="text-white">
                    {bit.title}
                  </span>

                  <div className="ml-auto flex items-center gap-1">
                    <div className="h-2 w-2 bg-[#fd5454]"></div>
                    <div className="h-2 w-2 bg-[#fdfd54]"></div>
                    <div className="h-2 w-2 bg-[#64e864]"></div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-block px-4 py-2 bg-[#252532] border-2 border-[#565699] text-[8px] text-[#c0c0c0]">
              <span>PRESS [ENTER] TO CONTINUE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PixelArtTheme;