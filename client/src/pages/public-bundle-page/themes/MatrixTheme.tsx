import { Bundle } from "../usePublicBundle";
import defaultAvatar from "../../../assets/images/default-avatar.jpeg";
import { useEffect, useState } from "react";

interface MatrixThemeProps {
  bundle: Bundle;
}

const MatrixTheme: React.FC<MatrixThemeProps> = ({ bundle }) => {
  const sortedBits = [...bundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  // Digital rain characters
  const [codeRain, setCodeRain] = useState<JSX.Element[]>([]);
  
  useEffect(() => {
    // Generate matrix code rain elements
    const characters = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ01234567890123456789';
    const rainElements: JSX.Element[] = [];
    
    for (let i = 0; i < 50; i++) {
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = 3 + Math.random() * 5;
      const char = characters.charAt(Math.floor(Math.random() * characters.length));
      
      rainElements.push(
        <div 
          key={i}
          className="absolute text-green-500 opacity-0 text-sm font-mono animate-[matrix-rain_5s_ease-in-out_infinite]"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`
          }}
        >
          {char}
        </div>
      );
    }
    
    setCodeRain(rainElements);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-black text-green-500 font-mono relative overflow-hidden">
      {/* Matrix code rain background */}
      <div className="absolute inset-0 z-0 opacity-60">
        {codeRain}
      </div>
      
      <div className="w-full max-w-md mx-auto z-10">
        <div className="border border-green-500/30 bg-black/80 backdrop-blur-sm p-8 shadow-[0_0_30px_rgba(0,255,0,0.2)]">
          <div className="flex flex-col items-center text-center">
            <div className="relative group mb-6">
              <div className="absolute -inset-2 rounded-full bg-green-500/20 blur opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src={bundle.profilePicture || defaultAvatar}
                alt={bundle.displayName}
                className="relative w-28 h-28 rounded-full object-cover border-2 border-green-500/60 grayscale brightness-75 contrast-125"
              />
            </div>
            
            <h1 className="text-3xl font-bold text-green-400 tracking-wide">
              <span className="inline-block animate-[glitch_5s_ease-in-out_infinite]">
                {bundle.displayName}
              </span>
            </h1>
            
            <p className="text-green-500/80 text-sm font-mono mt-1">
              @{bundle.bundleName}
            </p>
            
            {bundle.bio && (
              <p className="mt-3 text-green-400/70 text-sm max-w-xs">
                <span className="inline-block animate-[pulse_2s_ease-in-out_infinite]">&gt;</span> {bundle.bio}
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
                className="group flex items-center gap-3 w-full px-6 py-4 border border-green-500/30 hover:border-green-500/70 hover:bg-green-900/10 transition-all duration-300 text-green-400 bg-black/50 backdrop-blur-sm"
              >
                <span className="text-green-600 opacity-70 group-hover:opacity-100 transition-opacity">&gt;</span>
                {bit.icon && (
                  <span className="text-xl group-hover:text-green-300 transition-colors">
                    {bit.icon}
                  </span>
                )}
                <span className="font-mono group-hover:text-green-300 transition-colors">
                  {bit.title.toLowerCase().replace(/\s+/g, '_')}
                </span>

                <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="inline-block w-2 h-4 bg-green-500 animate-pulse"></span>
                </span>
              </a>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <div className="text-xs text-green-500/50 border-t border-green-500/20 pt-2 w-full text-center">
              <span className="inline-block animate-[pulse_1.5s_ease-in-out_infinite]">&gt;</span> {`system.exit(bundlebit.loaded())`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatrixTheme;