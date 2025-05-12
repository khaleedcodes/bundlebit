import { Bundle } from "../usePublicBundle";
import defaultAvatar from "../../../assets/images/default-avatar.jpeg";

interface GalacticNightThemeProps {
  bundle: Bundle;
}

const GalacticNightTheme: React.FC<GalacticNightThemeProps> = ({ bundle }) => {
  const sortedBits = [...bundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-black text-white font-['Space_Grotesk',sans-serif] relative overflow-hidden">
      {/* Cosmic/space background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Starry background with tiny white dots */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[size:14px_14px]"></div>
        
        {/* Cosmic dust and nebulae */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(128, 0, 128, 0.4) 0%, transparent 30%), 
                            radial-gradient(circle at 70% 60%, rgba(0, 128, 255, 0.4) 0%, transparent 40%), 
                            radial-gradient(circle at 40% 80%, rgba(255, 0, 128, 0.4) 0%, transparent 30%)`
        }}></div>
        
        {/* Animated shooting stars */}
        <div className="absolute w-0.5 h-0.5 rounded-full bg-white top-1/4 left-1/3 opacity-80 animate-[shootingStar_8s_ease-in-out_infinite]" style={{ animationDelay: '0s' }}></div>
        <div className="absolute w-0.5 h-0.5 rounded-full bg-white top-1/3 left-2/3 opacity-80 animate-[shootingStar_12s_ease-in-out_infinite]" style={{ animationDelay: '3s' }}></div>
        <div className="absolute w-0.5 h-0.5 rounded-full bg-white top-2/3 left-1/4 opacity-80 animate-[shootingStar_10s_ease-in-out_infinite]" style={{ animationDelay: '5s' }}></div>
        
        {/* Large celestial objects / planets */}
        <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-br from-indigo-900 to-purple-700 opacity-20 blur-md"></div>
        <div className="absolute top-20 -left-10 w-40 h-40 rounded-full bg-gradient-to-br from-blue-900 to-indigo-700 opacity-20 blur-md"></div>
      </div>
      
      <div className="w-full max-w-md mx-auto z-10 animate-[fadeIn_1.5s_ease-out]">
        <div className="bg-slate-900/60 backdrop-blur-lg p-8 rounded-2xl border border-indigo-500/20 shadow-[0_0_40px_rgba(99,102,241,0.2)] relative overflow-hidden">
          {/* Celestial glow around the card */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-20 blur-sm"></div>
          
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 relative">
              {/* Circular orbit around profile picture */}
              <div className="absolute inset-0 border-2 border-dashed border-indigo-500/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
              
              {/* Small planets orbiting profile */}
              <div className="absolute w-3 h-3 rounded-full bg-blue-400 animate-[orbit_8s_linear_infinite]" style={{ transformOrigin: 'center' }}></div>
              <div className="absolute w-2 h-2 rounded-full bg-purple-400 animate-[orbit_12s_linear_infinite]" style={{ animationDelay: '2s', transformOrigin: 'center' }}></div>
              
              {/* Profile picture */}
              <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-indigo-500/30 glow-effect">
                <img
                  src={bundle.profilePicture || defaultAvatar}
                  alt={bundle.displayName}
                  className="w-full h-full object-cover"
                />
                
                {/* Cosmic dust overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10"></div>
              </div>
            </div>
            
            <h1 className="text-2xl font-bold text-white mb-1 tracking-wide">
              {bundle.displayName}
            </h1>
            
            <p className="text-indigo-300 text-sm">
              @{bundle.bundleName}
            </p>
            
            {bundle.bio && (
              <div className="mt-4 p-4 rounded-xl bg-slate-800/70 border border-indigo-500/20">
                <p className="text-indigo-100/90 text-sm">
                  {bundle.bio}
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
                className="group flex items-center gap-3 w-full px-5 py-3.5 rounded-xl bg-slate-800/50 border border-indigo-500/20 hover:border-indigo-500/50 hover:bg-slate-800/80 transition-all duration-300 text-white relative overflow-hidden"
              >
                {/* Star dust effect on hover */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(99,102,241,0.15)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {bit.icon && (
                  <span className="text-lg text-indigo-300 group-hover:text-indigo-200 transition-colors">
                    {bit.icon}
                  </span>
                )}
                <span className="font-medium group-hover:text-indigo-100 transition-colors">
                  {bit.title}
                </span>

                {/* Cosmic portal icon */}
                <div className="ml-auto">
                  <div className="w-7 h-7 rounded-full bg-slate-700/70 flex items-center justify-center border border-indigo-500/30 group-hover:border-indigo-500/70 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-indigo-300 group-hover:text-indigo-200 transition-colors"
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
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <div className="px-4 py-2 rounded-full bg-slate-800/50 border border-indigo-500/20 text-xs text-indigo-300">
              <span className="tracking-widest">GALACTIC NIGHT • COSMOS</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom animations defined in index.css */}
      <style dangerouslySetInnerHTML={{__html: `
        .glow-effect {
          box-shadow: 0 0 15px rgba(99, 102, 241, 0.5);
        }
      `}} />
    </div>
  );
};

export default GalacticNightTheme;