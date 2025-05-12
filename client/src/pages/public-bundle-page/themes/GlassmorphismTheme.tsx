import { Bundle } from "../usePublicBundle";
import defaultAvatar from "../../../assets/images/default-avatar.jpeg";

interface GlassmorphismThemeProps {
  bundle: Bundle;
}

const GlassmorphismTheme: React.FC<GlassmorphismThemeProps> = ({ bundle }) => {
  const sortedBits = [...bundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 text-gray-700 font-['Inter',sans-serif] relative overflow-hidden">
      {/* Glassmorphism background circles and blurred shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Colorful blurred circles in background */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        <div className="absolute bottom-1/4 left-1/3 w-60 h-60 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        <div className="absolute -bottom-10 right-1/4 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        
        {/* Light grid overlay for texture */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      
      <div className="w-full max-w-md mx-auto z-10 animate-[fadeIn_1s_ease-out]">
        <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl p-8 shadow-lg relative overflow-hidden">
          {/* Inner light reflections */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/20 rounded-full"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 rounded-full"></div>
          
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 relative">
              {/* Glass effect around profile picture */}
              <div className="w-28 h-28 rounded-full bg-white/20 backdrop-blur-sm p-1.5 border border-white/40 shadow-xl">
                <img
                  src={bundle.profilePicture || defaultAvatar}
                  alt={bundle.displayName}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            
            <h1 className="text-2xl font-semibold text-white/90 mb-1">
              {bundle.displayName}
            </h1>
            
            <p className="text-white/70 text-sm font-medium">
              @{bundle.bundleName}
            </p>
            
            {bundle.bio && (
              <div className="mt-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/30">
                <p className="text-white/80 text-sm">
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
                className="group flex items-center gap-3 w-full px-5 py-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 transition-all duration-300 text-white/90 relative overflow-hidden"
              >
                {/* Light shimmer effect on hover */}
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-40 group-hover:animate-[shimmer_1.5s_infinite] group-hover:opacity-100"></div>
                
                {bit.icon && (
                  <span className="text-lg text-white/80 group-hover:text-white transition-colors">
                    {bit.icon}
                  </span>
                )}
                <span className="font-medium group-hover:text-white transition-colors">
                  {bit.title}
                </span>

                <div className="ml-auto">
                  <div className="w-7 h-7 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover:bg-white/20 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white/70 group-hover:text-white transition-colors"
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
            <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-xs text-white/70">
              <span>Glassmorphism • Design</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlassmorphismTheme;