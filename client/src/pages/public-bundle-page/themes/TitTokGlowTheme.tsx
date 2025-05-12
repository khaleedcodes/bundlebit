import { Bundle } from "../usePublicBundle";
import defaultAvatar from "../../../assets/images/default-avatar.jpeg";

interface TikTokGlowThemeProps {
  bundle: Bundle;
}

const TikTokGlowTheme: React.FC<TikTokGlowThemeProps> = ({ bundle }) => {
  const sortedBits = [...bundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-black text-white font-['Inter',sans-serif] relative overflow-hidden">
      {/* TikTok-inspired background effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Dark gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
        
        {/* Vertical color streaks - TikTok colors */}
        <div className="absolute -left-20 top-0 bottom-0 w-40 bg-[#69C9D0]/20 blur-3xl transform -skew-x-12 animate-[float_15s_ease-in-out_infinite_alternate]"></div>
        <div className="absolute -right-20 top-0 bottom-0 w-40 bg-[#EE1D52]/20 blur-3xl transform skew-x-12 animate-[float_18s_ease-in-out_infinite_alternate-reverse]"></div>
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>
      
      <div className="w-full max-w-md mx-auto z-10 animate-[fadeIn_1s_ease-out]">
        <div className="relative">
          {/* Profile section with glow effect */}
          <div className="mb-8 flex flex-col items-center relative">
            {/* Avatar with glow ring */}
            <div className="relative mb-6 group">
              {/* Animated glow ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#EE1D52] via-[#69C9D0] to-[#EE1D52] opacity-75 blur-md animate-[spin_6s_linear_infinite] group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Secondary pulse glow */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-[#EE1D52] via-[#69C9D0] to-[#EE1D52] opacity-0 blur-xl group-hover:opacity-40 transition-opacity duration-500 animate-[pulse_2s_ease-in-out_infinite]"></div>
              
              {/* Profile image */}
              <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-white/10">
                <img
                  src={bundle.profilePicture || defaultAvatar}
                  alt={bundle.displayName}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* TikTok-style verified badge */}
            <div className="absolute bottom-24 right-1/3 w-7 h-7 bg-[#69C9D0] rounded-full flex items-center justify-center animate-[bounceIn_0.6s_ease-out]">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
            </div>
            
            {/* Username with TikTok style */}
            <h1 className="text-2xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-[#EE1D52] to-[#69C9D0] animate-[pulse-subtle_3s_ease-in-out_infinite]">
              {bundle.displayName}
            </h1>
            
            <p className="text-gray-400 text-sm mb-4">
              @{bundle.bundleName}
            </p>
            
            {/* TikTok-style stats */}
            <div className="flex space-x-6 text-center mb-4">
              <div className="flex flex-col">
                <span className="text-white font-bold">124K</span>
                <span className="text-gray-400 text-xs">Followers</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold">845</span>
                <span className="text-gray-400 text-xs">Following</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold">2.1M</span>
                <span className="text-gray-400 text-xs">Likes</span>
              </div>
            </div>
            
            {bundle.bio && (
              <p className="text-gray-300 text-sm max-w-xs text-center">
                {bundle.bio}
              </p>
            )}
          </div>

          {/* Links section with TikTok-inspired cards */}
          <div className="space-y-3">
            {sortedBits.map((bit, index) => (
              <a
                key={index}
                href={bit.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 w-full px-5 py-4 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#69C9D0]/50 rounded-xl transition-all duration-300 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Animated glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#EE1D52]/0 via-[#69C9D0]/20 to-[#EE1D52]/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
                
                {/* Pop animation on hover */}
                <div className="relative z-10 flex items-center gap-3 w-full transform group-hover:scale-[1.02] transition-transform duration-200">
                  {bit.icon && (
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-lg text-[#69C9D0] group-hover:text-[#EE1D52] transition-colors duration-300">
                      {bit.icon}
                    </div>
                  )}
                  <span className="font-medium text-white group-hover:text-[#69C9D0] transition-colors duration-300">
                    {bit.title}
                  </span>

                  {/* TikTok-style arrow */}
                  <div className="ml-auto">
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-[#EE1D52] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* TikTok-style footer */}
          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-2">
              <span className="bg-[#EE1D52] h-5 w-5 rounded-full"></span>
              <span className="bg-white h-5 w-5 rounded-full"></span>
              <span className="bg-[#69C9D0] h-5 w-5 rounded-full"></span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse-subtle {
          0%, 100% { opacity: 0.9; }
          50% { opacity: 1; }
        }
      `}} />
    </div>
  );
};

export default TikTokGlowTheme;