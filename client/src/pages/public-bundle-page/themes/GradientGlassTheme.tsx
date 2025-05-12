import { Bundle } from "../usePublicBundle";
import defaultAvatar from "../../../assets/images/default-avatar.jpeg";

interface GradientGlassThemeProps {
  bundle: Bundle;
}

const GradientGlassTheme: React.FC<GradientGlassThemeProps> = ({ bundle }) => {
  const sortedBits = [...bundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 relative overflow-hidden font-['Poppins',sans-serif]">
      {/* Full gradient backdrop */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 z-0"></div>
      
      {/* Mesh gradient overlay */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(218,70,239,0.5),transparent_40%)] z-0"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,164,105,0.5),transparent_40%)] z-0"></div>
      
      <div className="w-full max-w-md mx-auto z-10 animate-[fadeIn_1s_ease-out]">
        <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-8 border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-purple-400/70 via-pink-400/70 to-orange-400/70 rounded-full blur-md"></div>
              <img
                src={bundle.profilePicture || defaultAvatar}
                alt={bundle.displayName}
                className="relative w-28 h-28 rounded-full object-cover border-2 border-white/50 shadow-lg"
              />
            </div>
            
            <h1 className="text-3xl font-bold text-white mt-2">
              {bundle.displayName}
            </h1>
            
            <p className="text-white/80 text-sm font-medium mt-1">
              @{bundle.bundleName}
            </p>
            
            {bundle.bio && (
              <p className="mt-3 text-white/90 text-sm max-w-xs">
                {bundle.bio}
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
                className="group flex items-center gap-3 w-full px-6 py-4 rounded-xl backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 text-white hover:shadow-lg"
              >
                {bit.icon && (
                  <span className="text-xl text-white group-hover:text-white/90 transition-colors duration-300">
                    {bit.icon}
                  </span>
                )}
                <span className="font-medium group-hover:text-white transition-colors duration-300">
                  {bit.title}
                </span>

                <div className="ml-auto bg-white/10 rounded-full w-6 h-6 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white/80 group-hover:text-white group-hover:translate-x-0.5 transition-all"
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
            <div className="py-1 px-4 rounded-full backdrop-blur-md bg-white/10 border border-white/20">
              <span className="text-xs text-white/70">
                Bundlebit Glass
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradientGlassTheme;