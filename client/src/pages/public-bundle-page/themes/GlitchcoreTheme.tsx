import { Bundle } from "../usePublicBundle";
import defaultAvatar from "../../../assets/images/default-avatar.jpeg";
import { useState, useEffect } from "react";

interface GlitchcoreThemeProps {
  bundle: Bundle;
}

const GlitchcoreTheme: React.FC<GlitchcoreThemeProps> = ({ bundle }) => {
  const sortedBits = [...bundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  // For random glitch effects
  const [glitchTrigger, setGlitchTrigger] = useState(0);
  
  // Trigger glitch effect periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchTrigger(prev => prev + 1);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-black text-white font-['VT323',monospace] relative overflow-hidden">
      {/* Glitchcore background effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Static/noise background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAuMSAwIDAgMCAwIDAuMSAwIDAgMCAwIDAuMSAwIDAgMCAwLjMgMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-30"></div>
        
        {/* Scan lines */}
        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(255,255,255,0.04)_50%)] bg-[size:100%_4px]"></div>
        
        {/* Random glitch elements */}
        <div className="absolute inset-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <div 
              key={i}
              className="absolute bg-white/10"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                height: `${Math.random() * 5 + 1}px`,
                width: `${Math.random() * 100 + 20}px`,
                opacity: Math.random() * 0.5,
                transform: `rotate(${Math.random() * 180}deg)`,
                filter: 'blur(0.5px)',
              }}
            />
          ))}
        </div>
        
        {/* RGB split/glow effects */}
        <div className={`absolute inset-0 bg-red-500/5 mix-blend-screen transform translate-x-[1px] translate-y-[0px] ${glitchTrigger % 5 === 0 ? 'animate-[glitch_0.3s_ease_forwards]' : ''}`}></div>
        <div className={`absolute inset-0 bg-blue-500/5 mix-blend-screen transform translate-x-[-1px] translate-y-[0px] ${glitchTrigger % 5 === 0 ? 'animate-[glitch_0.3s_ease_forwards]' : ''}`}></div>
        <div className={`absolute inset-0 bg-green-500/5 mix-blend-screen ${glitchTrigger % 5 === 0 ? 'animate-[flicker_0.3s_ease_forwards]' : ''}`}></div>
      </div>
      
      <div className="w-full max-w-md mx-auto z-10 animate-[glitchIn_1s_ease-out]">
        <div className="bg-black/80 backdrop-blur-sm border border-white/20 p-8 relative">
          {/* Glitched header bar */}
          <div className={`absolute -inset-[1px] border border-white/50 opacity-50 ${glitchTrigger % 3 === 0 ? 'animate-[borderGlitch_0.3s_linear]' : ''}`}></div>
          
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 relative">
              {/* Glitched avatar */}
              <div className={`relative w-28 h-28 border-2 border-white/50 ${glitchTrigger % 4 === 0 ? 'animate-[shake_0.3s_linear]' : ''}`}>
                {/* RGB split overlays */}
                <div className="absolute inset-0 bg-red-500/30 mix-blend-screen transform translate-x-[2px] translate-y-[-2px] z-10"></div>
                <div className="absolute inset-0 bg-blue-500/30 mix-blend-screen transform translate-x-[-2px] translate-y-[2px] z-10"></div>
                
                <img
                  src={bundle.profilePicture || defaultAvatar}
                  alt={bundle.displayName}
                  className="w-full h-full object-cover grayscale"
                />
                
                {/* Scanlines */}
                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(255,255,255,0.1)_50%)] bg-[size:100%_2px] z-20"></div>
                
                {/* Glitch overlay on random intervals */}
                <div 
                  className={`absolute inset-0 bg-transparent ${glitchTrigger % 5 === 0 ? 'animate-[glitchImage_0.3s_linear]' : ''}`}
                  style={{ backgroundPosition: `${Math.random() * 100}% ${Math.random() * 100}%` }}
                ></div>
              </div>
            </div>
            
            {/* Glitched name */}
            <h1 
              className={`text-3xl font-bold mb-1 tracking-widest ${glitchTrigger % 3 === 0 ? 'animate-[textGlitch_0.3s_linear]' : ''}`}
              style={{ textShadow: '2px 0 0 rgba(255,0,0,0.5), -2px 0 0 rgba(0,0,255,0.5)' }}
            >
              {bundle.displayName.toUpperCase()}
            </h1>
            
            <p className="text-white/70 text-sm mb-4">
              @{bundle.bundleName}
            </p>
            
            {bundle.bio && (
              <div className={`mb-6 p-3 bg-white/5 border border-white/10 ${glitchTrigger % 4 === 0 ? 'animate-[shake_0.2s_linear]' : ''}`}>
                <p className="text-white/80 text-sm">{bundle.bio}</p>
              </div>
            )}
          </div>

          <div className="space-y-3 mt-6">
            {sortedBits.map((bit, index) => (
              <a
                key={index}
                href={bit.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-3 w-full px-5 py-4 bg-white/5 hover:bg-white/10 border border-white/20 transition-all duration-200 relative overflow-hidden ${glitchTrigger % 6 === index % 6 ? 'animate-[borderGlitch_0.3s_linear]' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* RGB split on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="absolute inset-0 bg-red-500/10 mix-blend-screen transform translate-x-[3px] translate-y-[-1px]"></div>
                  <div className="absolute inset-0 bg-blue-500/10 mix-blend-screen transform translate-x-[-3px] translate-y-[1px]"></div>
                  <div className="absolute inset-0 bg-green-500/10 mix-blend-screen"></div>
                </div>
                
                {bit.icon && (
                  <span className="text-lg text-white group-hover:text-red-400 transition-colors duration-200 relative z-10">
                    {bit.icon}
                  </span>
                )}
                <span 
                  className="font-medium group-hover:tracking-widest transition-all duration-300 relative z-10"
                  style={{ 
                    textShadow: 'none',
                    transition: 'text-shadow 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.textShadow = '1px 0 0 rgba(255,0,0,0.5), -1px 0 0 rgba(0,0,255,0.5)';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.textShadow = 'none';
                  }}
                >
                  {bit.title}
                </span>

                <div className="ml-auto relative z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white/60 group-hover:text-white/90 transition-colors duration-200"
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

          <div className="mt-8 flex justify-center">
            <div 
              className={`inline-flex items-center space-x-2 px-4 py-2 border border-white/30 text-xs tracking-[0.5em] uppercase ${glitchTrigger % 4 === 0 ? 'animate-[textGlitch_0.3s_linear]' : ''}`}
            >
              <span 
                className="relative"
                style={{ textShadow: '1px 0 0 rgba(255,0,0,0.5), -1px 0 0 rgba(0,0,255,0.5)' }}
              >
                Glitchcore
              </span>
              <span className="animate-[blink_1s_step-end_infinite]">|</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-5px, 5px); }
          40% { transform: translate(-5px, -5px); }
          60% { transform: translate(5px, 5px); }
          80% { transform: translate(5px, -5px); }
          100% { transform: translate(0); }
        }
        
        @keyframes shake {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
        
        @keyframes borderGlitch {
          0% { clip-path: inset(0% 0% 0% 0%); }
          20% { clip-path: inset(20% 0% 0% 0%); }
          40% { clip-path: inset(0% 30% 0% 0%); }
          60% { clip-path: inset(0% 0% 10% 0%); }
          80% { clip-path: inset(0% 0% 0% 20%); }
          100% { clip-path: inset(0% 0% 0% 0%); }
        }
        
        @keyframes textGlitch {
          0% { transform: translate(0); }
          10% { transform: translate(-2px, -2px); }
          20% { transform: translate(2px, 2px); }
          30% { transform: translate(-2px, 2px); }
          40% { transform: translate(2px, -2px); }
          50% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          70% { transform: translate(-2px, 2px); }
          80% { transform: translate(0); letter-spacing: 0.1em; }
          90% { transform: translate(0); letter-spacing: -0.1em; }
          100% { transform: translate(0); letter-spacing: normal; }
        }
        
        @keyframes glitchImage {
          0% { background-color: transparent; }
          20% { background-color: rgba(255,0,0,0.2); background-blend-mode: lighten; }
          40% { background-color: rgba(0,255,255,0.2); background-blend-mode: darken; }
          60% { background-color: rgba(255,0,255,0.2); background-blend-mode: lighten; }
          80% { background-color: rgba(0,255,0,0.2); background-blend-mode: darken; }
          100% { background-color: transparent; }
        }
        
        @keyframes glitchIn {
          0% { clip-path: inset(50% 50% 50% 50%); }
          20% { clip-path: inset(60% 0% 20% 40%); }
          40% { clip-path: inset(20% 40% 60% 0%); }
          60% { clip-path: inset(40% 20% 0% 60%); }
          80% { clip-path: inset(0% 60% 40% 20%); }
          100% { clip-path: inset(0% 0% 0% 0%); }
        }
        
        @keyframes flicker {
          0% { opacity: 1; }
          10% { opacity: 0; }
          20% { opacity: 1; }
          30% { opacity: 0; }
          40% { opacity: 1; }
          100% { opacity: 1; }
        }
      `}} />
    </div>
  );
};

export default GlitchcoreTheme;