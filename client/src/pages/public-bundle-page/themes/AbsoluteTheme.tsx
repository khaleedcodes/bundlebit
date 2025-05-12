import { Bundle } from "../usePublicBundle";
import defaultAvatar from "../../../assets/images/default-avatar.jpeg";

interface AbsoluteThemeProps {
  bundle: Bundle;
}

const AbsoluteTheme: React.FC<AbsoluteThemeProps> = ({ bundle }) => {
  const sortedBits = [...bundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-gray-950 text-gray-300 font-['Inter',sans-serif] relative overflow-hidden">
      {/* Abstract minimalist background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"></div>
        
        {/* Minimalist geometric shapes */}
        <div className="absolute top-1/4 right-1/4 w-60 h-60 rounded-full bg-gray-800/30 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-gray-800/20 blur-3xl"></div>
        
        {/* Abstract line elements */}
        <div className="absolute top-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700/30 to-transparent"></div>
        <div className="absolute bottom-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700/30 to-transparent"></div>
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-700/30 to-transparent"></div>
        <div className="absolute right-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-700/30 to-transparent"></div>
      </div>
      
      <div className="w-full max-w-md mx-auto z-10 animate-[fadeIn_1s_ease-out]">
        <div className="bg-black/20 backdrop-blur-sm p-10 rounded-lg border border-white/5 shadow-xl relative overflow-hidden">
          <div className="flex flex-col items-center text-center">
            <div className="mb-8 relative">
              {/* Minimalist profile frame */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-gray-900 to-gray-800"></div>
              <div className="relative h-28 w-28 rounded-full overflow-hidden border border-white/10">
                <img
                  src={bundle.profilePicture || defaultAvatar}
                  alt={bundle.displayName}
                  className="h-full w-full object-cover grayscale"
                />
              </div>
            </div>
            
            <h1 className="text-2xl font-light tracking-wide text-white mb-1">
              {bundle.displayName}
            </h1>
            
            <p className="text-gray-400 text-sm font-medium">
              @{bundle.bundleName}
            </p>
            
            {bundle.bio && (
              <div className="mt-6 max-w-sm text-center">
                <p className="text-gray-400 text-sm leading-relaxed">
                  {bundle.bio}
                </p>
              </div>
            )}
            
            <div className="w-12 h-px bg-white/10 my-6"></div>
          </div>

          <div className="space-y-3">
            {sortedBits.map((bit, index) => (
              <a
                key={index}
                href={bit.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 w-full px-5 py-3.5 rounded-sm border border-white/5 hover:border-white/10 hover:bg-white/5 transition-all duration-500 ease-out"
              >
                <div className="relative flex items-center gap-3 w-full">
                  {/* Line progress on hover */}
                  <div className="absolute left-0 bottom-0 h-px w-0 bg-white/20 group-hover:w-full transition-all duration-500 ease-out"></div>
                  
                  {bit.icon && (
                    <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                      {bit.icon}
                    </span>
                  )}
                  <span className="font-light group-hover:text-white transition-colors duration-300">
                    {bit.title}
                  </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 text-white transition-opacity duration-300"
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
              </a>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <div className="text-[10px] tracking-[0.4em] uppercase text-gray-500">
              <span>Absolute • Minimalism</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbsoluteTheme;