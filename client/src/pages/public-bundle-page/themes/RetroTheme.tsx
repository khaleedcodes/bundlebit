import { Bundle } from "../usePublicBundle";
import defaultAvatar from "../../../assets/images/default-avatar.jpeg";

interface RetroThemeProps {
  bundle: Bundle;
}

const RetroTheme: React.FC<RetroThemeProps> = ({ bundle }) => {
  const sortedBits = [...bundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-indigo-900 text-white font-['Montserrat',system-ui,sans-serif]">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e559ff_1px,transparent_1px)] [background-size:40px_40px] opacity-20"></div>
      
      {/* Sun/planet elements */}
      <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur-3xl opacity-20"></div>
      
      <div className="w-full max-w-md mx-auto relative z-10">
        <div className="border-2 border-fuchsia-500 bg-indigo-800/90 rounded-xl p-8 shadow-[0_0_20px_rgba(217,70,239,0.3)]">
          {/* Retro line design elements */}
          <div className="absolute -top-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-orange-500"></div>
          <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-fuchsia-500 to-cyan-400"></div>
          
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-orange-500 rounded-full blur-sm"></div>
              <img
                src={bundle.profilePicture || defaultAvatar}
                alt={bundle.displayName}
                className="relative w-28 h-28 rounded-full object-cover border-2 border-fuchsia-500"
              />
            </div>
            
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-orange-500">
              {bundle.displayName.toUpperCase()}
            </h1>
            
            <p className="text-fuchsia-300 text-sm font-medium mt-1">
              @{bundle.bundleName}
            </p>
            
            {bundle.bio && (
              <p className="mt-3 text-cyan-200 text-sm max-w-xs">
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
                className="group flex items-center gap-3 w-full px-6 py-4 rounded-lg border-2 border-fuchsia-500 bg-indigo-900/70 hover:bg-indigo-800/90 transition-all duration-300 text-white font-medium relative overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-fuchsia-500/0 to-orange-500/0 group-hover:from-cyan-500/10 group-hover:via-fuchsia-500/10 group-hover:to-orange-500/10 transition-all duration-300"></div>
                
                {bit.icon && (
                  <span className="text-xl relative z-10">
                    {bit.icon}
                  </span>
                )}
                <span className="relative z-10">
                  {bit.title}
                </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-auto text-fuchsia-400 group-hover:text-fuchsia-300 relative z-10"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <div className="bg-indigo-900/80 px-4 py-1 rounded-full border border-fuchsia-500/50 text-xs text-fuchsia-300 shadow-[0_0_10px_rgba(217,70,239,0.2)]">
              Powered by Bundlebit
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetroTheme;
