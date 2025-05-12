import { Bundle } from "../usePublicBundle";
import defaultAvatar from "../../../assets/images/default-avatar.jpeg";

interface ViceCityThemeProps {
  bundle: Bundle;
}

const ViceCityTheme: React.FC<ViceCityThemeProps> = ({ bundle }) => {
  const sortedBits = [...bundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 font-['VT323',monospace] relative overflow-hidden">
      {/* Vice City sunset background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Sunset gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900 via-pink-600 to-orange-400"></div>
        
        {/* Sun */}
        <div className="absolute bottom-[30%] left-1/2 -translate-x-1/2 w-72 h-72 bg-gradient-to-t from-orange-500 to-yellow-300 rounded-full opacity-80 blur-md"></div>
        
        {/* Grid horizon */}
        <div className="absolute bottom-0 left-0 right-0 h-[40%] perspective">
          <div className="h-full w-full bg-[linear-gradient(rgba(0,0,0,0)_0px,rgba(255,100,255,0.5)_1px),linear-gradient(90deg,rgba(0,0,0,0)_0px,rgba(255,100,255,0.5)_1px)] bg-[size:30px_30px] [transform:rotateX(60deg)] origin-top"></div>
        </div>

        {/* Palm trees silhouettes */}
        <div className="absolute bottom-[15%] left-1/4 w-32 h-64">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-32 bg-black"></div>
          <div className="absolute bottom-[32px] left-1/2 -translate-x-1/2 w-40 h-20 bg-black" 
            style={{clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"}}></div>
          <div className="absolute bottom-[52px] left-1/2 -translate-x-1/2 w-40 h-20 bg-black transform -rotate-12" 
            style={{clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"}}></div>
          <div className="absolute bottom-[72px] left-1/2 -translate-x-1/2 w-40 h-20 bg-black transform rotate-12" 
            style={{clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"}}></div>
        </div>
        
        <div className="absolute bottom-[15%] right-1/4 w-32 h-64">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-32 bg-black"></div>
          <div className="absolute bottom-[32px] left-1/2 -translate-x-1/2 w-40 h-20 bg-black" 
            style={{clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"}}></div>
          <div className="absolute bottom-[52px] left-1/2 -translate-x-1/2 w-40 h-20 bg-black transform rotate-12" 
            style={{clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"}}></div>
          <div className="absolute bottom-[72px] left-1/2 -translate-x-1/2 w-40 h-20 bg-black transform -rotate-12" 
            style={{clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"}}></div>
        </div>
        
        {/* Scanlines overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[size:100%_4px] pointer-events-none opacity-30"></div>
      </div>
      
      <div className="w-full max-w-md mx-auto z-10 animate-[fadeIn_1s_ease-out]">
        <div className="bg-black/40 backdrop-blur-sm p-8 border-2 border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.5)] relative">
          {/* GTA-style header bar */}
          <div className="absolute -top-10 left-0 right-0 h-10 bg-black/70 flex items-center justify-center">
            <h1 className="text-5xl font-bold text-white tracking-wide" 
                style={{
                  textShadow: "3px 3px 0px #ec4899, 6px 6px 0px #06b6d4"
                }}>
              {bundle.bundleName.toUpperCase()}
            </h1>
          </div>
          
          <div className="flex flex-col items-center text-center pt-8">
            <div className="mb-6 relative">
              {/* GTA-style character display */}
              <div className="w-40 h-40 relative overflow-hidden border-4 border-cyan-500 shadow-[0_0_15px_rgba(236,72,153,0.5)]">
                <img
                  src={bundle.profilePicture || defaultAvatar}
                  alt={bundle.displayName}
                  className="w-full h-full object-cover"
                />
                
                {/* Flicker animation */}
                <div className="absolute inset-0 opacity-0 bg-cyan-500/20 animate-[flicker_3s_ease-in-out_infinite]"></div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-pink-500 to-cyan-500 p-1 mb-6 w-full">
              <h2 className="text-3xl font-bold text-white px-3 py-1 bg-black/50 tracking-wide">
                {bundle.displayName.toUpperCase()}
              </h2>
            </div>
            
            {bundle.bio && (
              <div className="mb-6 bg-black/70 border-l-4 border-pink-500 p-4 w-full text-left">
                <p className="text-white text-xl">
                  {bundle.bio}
                </p>
              </div>
            )}
          </div>

          <div className="space-y-3 mb-6">
            {sortedBits.map((bit, index) => (
              <a
                key={index}
                href={bit.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center w-full px-5 py-4 bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-cyan-400 hover:to-pink-400 transform hover:translate-y-[-2px] transition-all duration-200 text-white relative overflow-hidden"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 97% 100%, 3% 100%)",
                  boxShadow: "0 4px 0 rgba(0,0,0,0.3)"
                }}
              >
                <div className="absolute inset-[2px] bg-[#111] flex items-center"
                     style={{
                       clipPath: "polygon(0 0, 100% 0, 97% 100%, 3% 100%)"
                     }}>
                  {bit.icon && (
                    <span className="text-2xl text-cyan-400 group-hover:text-pink-400 transition-colors px-2">
                      {bit.icon}
                    </span>
                  )}
                  <span className="font-bold text-2xl group-hover:text-pink-300 transition-colors">
                    {bit.title.toUpperCase()}
                  </span>

                  <div className="ml-auto px-2">
                    <div className="w-8 h-8 flex items-center justify-center text-2xl text-cyan-400 group-hover:text-pink-400">
                      →
                    </div>
                  </div>
                </div>
                
                {/* Animated selection */}
                <div className="absolute left-0 top-0 h-full w-1 bg-white opacity-0 group-hover:opacity-100 group-hover:animate-[pulse_1s_ease-in-out_infinite]"></div>
              </a>
            ))}
          </div>

          <div className="flex justify-between items-center text-white text-xl mt-8 border-t-2 border-pink-500 pt-4">
            <span>VICE CITY</span>
            <div className="flex space-x-4">
              <span className="animate-[pulse_1.5s_ease-in-out_infinite]">1986</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add keyframes for flicker animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes flicker {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.3; }
          52% { opacity: 0; }
          54% { opacity: 0.3; }
          56% { opacity: 0; }
          58% { opacity: 0.3; }
          60%, 85% { opacity: 0; }
        }
      `}} />
    </div>
  );
};

export default ViceCityTheme;