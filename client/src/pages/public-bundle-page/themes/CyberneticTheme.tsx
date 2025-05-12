import { Bundle } from "../usePublicBundle";
import defaultAvatar from "../../../assets/images/default-avatar.jpeg";

interface CyberneticThemeProps {
  bundle: Bundle;
}

const CyberneticTheme: React.FC<CyberneticThemeProps> = ({ bundle }) => {
  const sortedBits = [...bundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-[#070b14] text-white font-['JetBrains_Mono',monospace] relative overflow-hidden">
      {/* Cybernetic background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Hexagonal grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4NCIgaGVpZ2h0PSI0OCI+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMGY0YzgxIiBzdHJva2Utd2lkdGg9IjAuNSIgZD0iTTAgNDR2LTQyaDQybDQyIDQyaC00MnptNDIgNGgtNDJ2LTQybDQyLTQydjQyeiIvPjwvc3ZnPg==')] bg-[length:42px_24px] opacity-20"></div>
        
        {/* Digital circuit lines */}
        <div className="absolute left-0 right-0 top-1/4 h-px bg-cyan-900/50"></div>
        <div className="absolute left-0 right-0 top-3/4 h-px bg-cyan-900/50"></div>
        <div className="absolute top-0 bottom-0 left-1/4 w-px bg-cyan-900/50"></div>
        <div className="absolute top-0 bottom-0 right-1/4 w-px bg-cyan-900/50"></div>
        
        {/* Glowing cores/nodes */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-cyan-500 animate-[pulse_4s_ease-in-out_infinite]" style={{boxShadow: '0 0 10px #06b6d4, 0 0 20px #06b6d4'}}></div>
        <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-cyan-500 animate-[pulse_4s_ease-in-out_infinite_0.5s]" style={{boxShadow: '0 0 10px #06b6d4, 0 0 20px #06b6d4'}}></div>
        <div className="absolute bottom-1/4 left-1/4 w-2 h-2 rounded-full bg-cyan-500 animate-[pulse_4s_ease-in-out_infinite_1s]" style={{boxShadow: '0 0 10px #06b6d4, 0 0 20px #06b6d4'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 rounded-full bg-cyan-500 animate-[pulse_4s_ease-in-out_infinite_1.5s]" style={{boxShadow: '0 0 10px #06b6d4, 0 0 20px #06b6d4'}}></div>
        
        {/* Data flow animations */}
        <div className="absolute top-[25%] left-[25%] right-[25%] h-px">
          <div className="h-full w-10 bg-cyan-400/70 animate-[dataFlowRight_4s_linear_infinite]" style={{boxShadow: '0 0 5px #06b6d4'}}></div>
        </div>
        <div className="absolute bottom-[25%] right-[25%] left-[25%] h-px">
          <div className="h-full w-10 bg-cyan-400/70 animate-[dataFlowLeft_5s_linear_infinite]" style={{boxShadow: '0 0 5px #06b6d4'}}></div>
        </div>
        <div className="absolute top-[25%] bottom-[25%] left-[25%] w-px">
          <div className="w-full h-10 bg-cyan-400/70 animate-[dataFlowDown_4s_linear_infinite]" style={{boxShadow: '0 0 5px #06b6d4'}}></div>
        </div>
        <div className="absolute bottom-[25%] top-[25%] right-[25%] w-px">
          <div className="w-full h-10 bg-cyan-400/70 animate-[dataFlowUp_6s_linear_infinite]" style={{boxShadow: '0 0 5px #06b6d4'}}></div>
        </div>
      </div>
      
      <div className="w-full max-w-md mx-auto z-10 animate-[fadeIn_1s_ease-out]">
        <div className="bg-slate-900/80 backdrop-blur-sm p-8 rounded-md border border-cyan-900/80 shadow-lg relative overflow-hidden">
          {/* HUD interface elements */}
          <div className="absolute top-0 left-0 w-12 h-2 bg-cyan-500/20"></div>
          <div className="absolute top-0 right-0 w-12 h-2 bg-cyan-500/20"></div>
          <div className="absolute bottom-0 left-0 w-12 h-2 bg-cyan-500/20"></div>
          <div className="absolute bottom-0 right-0 w-12 h-2 bg-cyan-500/20"></div>
          
          {/* Digital scan lines effect */}
          <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(6,182,212,0.025)_50%)] bg-[size:100%_4px] pointer-events-none"></div>
          
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 relative">
              {/* Cybernetic profile frame */}
              <div className="absolute -inset-3 border-2 border-cyan-900 rounded-md"></div>
              <div className="absolute -inset-3 border border-cyan-500/30 rounded-md"></div>
              <div className="absolute -inset-1 border border-cyan-500/20 rounded-md"></div>
              
              {/* Corner brackets */}
              <div className="absolute -top-3 -left-3 w-5 h-5 border-t-2 border-l-2 border-cyan-500/70"></div>
              <div className="absolute -top-3 -right-3 w-5 h-5 border-t-2 border-r-2 border-cyan-500/70"></div>
              <div className="absolute -bottom-3 -left-3 w-5 h-5 border-b-2 border-l-2 border-cyan-500/70"></div>
              <div className="absolute -bottom-3 -right-3 w-5 h-5 border-b-2 border-r-2 border-cyan-500/70"></div>
              
              {/* Profile picture with cybernetic overlay */}
              <div className="relative w-28 h-28 border-2 border-cyan-900 overflow-hidden">
                <img
                  src={bundle.profilePicture || defaultAvatar}
                  alt={bundle.displayName}
                  className="w-full h-full object-cover"
                />
                
                {/* Digital scan lines */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent opacity-70"></div>
                
                {/* HUD targeting elements */}
                <div className="absolute inset-0 flex items-center justify-center opacity-70">
                  <div className="w-20 h-20 border-2 border-dashed border-cyan-500/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
                </div>
              </div>
            </div>
            
            <h1 className="text-xl font-bold text-cyan-400 mb-1 tracking-wide group">
              <span className="inline-block mr-2 bg-cyan-500/20 px-1">[</span>
              {bundle.displayName.toUpperCase()}
              <span className="inline-block ml-2 bg-cyan-500/20 px-1">]</span>
            </h1>
            
            <p className="text-cyan-300/70 text-xs">
              <span className="tracking-widest">//</span> @{bundle.bundleName} <span className="tracking-widest">//</span>
            </p>
            
            {bundle.bio && (
              <div className="mt-4 p-4 bg-slate-950/50 border border-cyan-900/50 text-xs text-cyan-100/80 font-light">
                <p className="font-mono">
                  <span className="text-cyan-500 mr-1">&gt;</span> {bundle.bio}
                </p>
              </div>
            )}
          </div>

          <div className="mt-6 space-y-3">
            {sortedBits.map((bit, index) => (
              <a
                key={index}
                href={bit.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 w-full px-5 py-3 bg-slate-950/50 border border-cyan-900/50 hover:border-cyan-500/50 hover:bg-cyan-900/10 transition-all duration-300 text-white text-sm relative overflow-hidden"
              >
                {/* Cybernetic interaction effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div className="absolute left-0 inset-y-0 w-px bg-cyan-500/50 group-hover:bg-cyan-400 transition-colors"></div>
                
                {bit.icon && (
                  <span className="text-lg text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    {bit.icon}
                  </span>
                )}
                <span className="font-light group-hover:text-cyan-100 transition-colors">
                  {bit.title}
                </span>

                <div className="ml-auto flex items-center gap-1 text-xs text-cyan-500/70">
                  <span className="tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">&lt;</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-cyan-500 group-hover:text-cyan-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">&gt;</span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <div className="px-4 py-2 bg-cyan-900/20 border border-cyan-900/50 text-xs text-cyan-400 tracking-wider">
              <span className="inline-block">CYBERNETIC.SYS v3.7</span>
              <span className="inline-block ml-2 animate-[blink_1s_step-end_infinite]">|</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom animations defined in index.css */}
    </div>
  );
};

export default CyberneticTheme;