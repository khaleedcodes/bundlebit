import { Bundle } from "../usePublicBundle";
import defaultAvatar from "../../../assets/images/default-avatar.jpeg";
import { useEffect, useState } from "react";

interface TerminalThemeProps {
  bundle: Bundle;
}

const TerminalTheme: React.FC<TerminalThemeProps> = ({ bundle }) => {
  const sortedBits = [...bundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  const [text, setText] = useState('');
  const fullText = `// Loading user profile... \n// Connecting to database... \n// Access granted.\n`;
  
  // Typewriter effect
  useEffect(() => {
    let i = 0;
    const typeTimer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typeTimer);
      }
    }, 50);
    
    return () => clearInterval(typeTimer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-black text-green-500 font-mono">
      {/* Scanline effect */}
      <div className="absolute inset-0 z-0 bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(32,128,32,0.025)_50%)] bg-[size:100%_4px] pointer-events-none"></div>
        <div className="absolute inset-0 animate-[scanline_8s_linear_infinite] opacity-10 border-t border-green-500/30 z-10 pointer-events-none"></div>
      </div>
      
      <div className="w-full max-w-xl mx-auto z-10">
        <div className="border border-green-500/30 bg-black p-4 shadow-[0_0_10px_rgba(0,255,0,0.2)]">
          {/* Terminal header */}
          <div className="border-b border-green-500/30 pb-2 mb-4 flex items-center">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
            <code className="text-xs ml-2 text-green-400">user@bundlebit:~</code>
          </div>
          
          <div className="font-mono text-sm">
            <pre className="mb-4 opacity-80">{text}<span className="animate-pulse">_</span></pre>
            
            <div className="flex items-center gap-3 mb-6">
              <img
                src={bundle.profilePicture || defaultAvatar}
                alt={bundle.displayName}
                className="w-16 h-16 rounded-sm object-cover border border-green-500/50 grayscale contrast-125 brightness-75"
              />
              <div>
                <p className="text-lg font-bold inline-flex items-center">
                  {bundle.displayName}
                  <span className="w-2 h-4 bg-green-500 ml-1 animate-pulse"></span>
                </p>
                <p className="text-green-400 text-sm font-mono">
                  @{bundle.bundleName}
                </p>
                {bundle.bio && (
                  <p className="text-green-300/80 text-xs max-w-xs mt-1">
                    {bundle.bio}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              {sortedBits.map((bit, index) => (
                <a
                  key={index}
                  href={bit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 w-full px-3 py-2 border border-green-500/20 hover:border-green-500/60 hover:bg-green-500/5 transition-all duration-150 text-green-400"
                >
                  <span className="text-green-600">$</span>
                  {bit.icon && (
                    <span className="text-sm">
                      {bit.icon}
                    </span>
                  )}
                  <span className="font-mono">
                    {bit.title.toLowerCase().replace(/\s+/g, '-')}
                  </span>

                  <code className="ml-auto text-xs text-green-400/70 group-hover:text-green-400 transition-all">
                    --open-url
                  </code>
                </a>
              ))}
            </div>

            <div className="mt-8 border-t border-green-500/20 pt-2">
              <code className="text-xs text-green-400/50">
                © Bundlebit {new Date().getFullYear()} | Exit code 0
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalTheme;