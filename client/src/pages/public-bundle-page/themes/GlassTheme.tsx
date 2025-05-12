import { Bundle } from "../usePublicBundle";
import defaultAvatar from "../../../assets/images/default-avatar.jpeg";

interface GlassThemeProps {
  bundle: Bundle;
}

const GlassTheme: React.FC<GlassThemeProps> = ({ bundle }) => {
  const sortedBits = [...bundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-700 text-white font-['Inter',system-ui,sans-serif]">
      {/* Abstract geometric pattern background */}
      <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')] bg-cover bg-center opacity-30"></div>
      
      {/* Floating shapes effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-32 h-32 bg-purple-400/20 rounded-full blur-3xl animate-[float_6s_ease-in-out_infinite]"></div>
        <div className="absolute top-[20%] right-[15%] w-40 h-40 bg-blue-400/20 rounded-full blur-3xl animate-[float_6s_ease-in-out_infinite]" style={{animationDelay: "1s"}}></div>
        <div className="absolute bottom-[15%] left-[20%] w-36 h-36 bg-pink-400/20 rounded-full blur-3xl animate-[float_6s_ease-in-out_infinite]" style={{animationDelay: "2s"}}></div>
      </div>
      
      <div className="w-full max-w-md mx-auto z-10">
        <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 shadow-xl border border-white/20 transition-all duration-300 hover:shadow-2xl hover:bg-white/20">
          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <img
                src={bundle.profilePicture || defaultAvatar}
                alt={bundle.displayName}
                className="w-28 h-28 rounded-full object-cover shadow-lg border-2 border-white/30 p-[2px]"
              />
              <div className="absolute -inset-1 rounded-full bg-white/20 blur-sm -z-10"></div>
            </div>
            
            <h1 className="mt-5 text-3xl font-bold">
              {bundle.displayName}
            </h1>
            
            <p className="text-blue-200 text-sm font-medium">
              @{bundle.bundleName}
            </p>
            
            {bundle.bio && (
              <p className="mt-3 text-white/80 text-sm max-w-xs">
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
                className="group flex items-center gap-3 w-full px-6 py-4 rounded-xl backdrop-blur-lg bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 text-white"
              >
                {bit.icon && (
                  <span className="text-xl group-hover:scale-110 transition-transform">
                    {bit.icon}
                  </span>
                )}
                <span>
                  {bit.title}
                </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-auto text-white/60 group-hover:text-white group-hover:translate-x-0.5 transition-all"
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

          <div className="mt-10 flex justify-center">
            <span className="text-xs text-white/60 border border-white/10 px-3 py-1 rounded-full">
              Powered by Bundlebit
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlassTheme;
