import { Bundle } from "../usePublicBundle";
import defaultAvatar from "../../../assets/images/default-avatar.jpeg";

interface NeonThemeProps {
  bundle: Bundle;
}

const NeonTheme: React.FC<NeonThemeProps> = ({ bundle }) => {
  const sortedBits = [...bundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-gray-950 text-white font-['Poppins',system-ui,sans-serif]">
      <div className="w-full max-w-md mx-auto transform transition-all duration-300 ease-in-out">
        <div className="relative rounded-3xl p-8 bg-black/70 border border-pink-500/20 shadow-[0_0_50px_-12px_rgba(236,72,153,0.4)] overflow-hidden">
          {/* Background grid effect */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,6,6,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(6,6,6,0.9)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col items-center text-center mb-8">
              <div className="group relative mb-4">
                <img
                  src={bundle.profilePicture || defaultAvatar}
                  alt={bundle.displayName}
                  className="w-28 h-28 rounded-full object-cover shadow-[0_0_15px_rgba(236,72,153,0.6)] border-2 border-pink-500 p-[2px]"
                />
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.4),rgba(236,72,153,0))] blur opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
              
              <h1 className="text-3xl font-bold tracking-tight text-white animate-[glow_2s_ease-in-out_infinite_alternate]">
                {bundle.displayName}
              </h1>
              
              <p className="text-pink-500 text-sm font-medium mt-1">
                @{bundle.bundleName}
              </p>
              
              {bundle.bio && (
                <p className="mt-3 text-gray-400 text-sm max-w-xs">
                  {bundle.bio}
                </p>
              )}
            </div>

            <div className="space-y-4">
              {sortedBits.map((bit, index) => (
                <a
                  key={index}
                  href={bit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 w-full px-6 py-4 rounded-xl bg-gray-900/80 border border-pink-500/30 hover:border-pink-500/80 shadow-[0_0_10px_rgba(236,72,153,0.1)] hover:shadow-[0_0_20px_rgba(236,72,153,0.2)] transition-all duration-300 text-white font-medium"
                >
                  {bit.icon && (
                    <span className="text-xl group-hover:text-pink-400 transition-colors">
                      {bit.icon}
                    </span>
                  )}
                  <span className="group-hover:text-pink-100 transition-colors">
                    {bit.title}
                  </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-auto text-pink-500/60 group-hover:text-pink-400 group-hover:translate-x-0.5 transition-all"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              ))}
            </div>

            <div className="mt-10 text-center">
              <span className="inline-block px-4 py-2 rounded-full text-xs text-pink-400 border border-pink-500/20 hover:border-pink-500/40 transition-colors">
                Made with Bundlebit
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeonTheme;
