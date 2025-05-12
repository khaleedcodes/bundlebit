import { Bundle } from "../usePublicBundle";
import defaultAvatar from "../../../assets/images/default-avatar.jpeg";

interface NatureThemeProps {
  bundle: Bundle;
}

const NatureTheme: React.FC<NatureThemeProps> = ({ bundle }) => {
  const sortedBits = [...bundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-gradient-to-b from-green-800 to-green-950 text-white font-['Quicksand',sans-serif] relative overflow-hidden">
      {/* Nature-inspired background elements */}
      <div className="absolute inset-0 z-0">
        {/* Leafy texture pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIiBmaWxsPSJub25lIj48cGF0aCBkPSJNMzAgMTBDMzUgMTUgNDAgMTUgNDUgMTBNMTUgMTBDMjAgMTUgMjUgMTUgMzAgMTBNMTAgMzBDMTUgMzUgMTUgNDAgMTAgNDVNNTAgMzBDNDUgMzUgNDUgNDAgNTAgNDVNMTUgNTBDMjAgNDUgMjUgNDUgMzAgNTBNNDUgNTBDNDAgNDUgMzUgNDUgMzAgNTAiIHN0cm9rZT0iIzAyMjcwNyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L3N2Zz4=')] opacity-10"></div>
        
        {/* Soft light rays */}
        <div className="absolute top-0 left-1/4 w-1/2 h-full bg-gradient-to-b from-lime-300/5 to-transparent"></div>
        
        {/* Fake wooden texture background */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/10 via-transparent to-amber-950/5"></div>
        
        {/* Subtle leaves falling animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 left-1/5 w-4 h-4 bg-green-300/20 rotate-45 animate-[float_15s_ease-in-out_infinite]"></div>
          <div className="absolute -top-4 left-2/4 w-3 h-6 bg-green-400/10 rounded-full animate-[float_20s_ease-in-out_infinite]" style={{animationDelay: "3s"}}></div>
          <div className="absolute -top-4 left-3/4 w-5 h-5 bg-lime-300/10 rotate-12 animate-[float_17s_ease-in-out_infinite]" style={{animationDelay: "7s"}}></div>
          <div className="absolute -top-4 left-1/3 w-4 h-4 bg-green-300/10 -rotate-12 animate-[float_18s_ease-in-out_infinite]" style={{animationDelay: "5s"}}></div>
        </div>
      </div>
      
      <div className="w-full max-w-md mx-auto z-10 animate-[fadeIn_1s_ease-out]">
        <div className="bg-gradient-to-b from-green-900/80 to-green-950/80 backdrop-blur-sm rounded-xl p-8 border border-green-700/50 shadow-lg">
          {/* Vine decorations */}
          <div className="absolute -top-6 -left-6 w-12 h-24 bg-gradient-to-br from-green-500/30 to-transparent rounded-full blur-md"></div>
          <div className="absolute -bottom-6 -right-6 w-12 h-24 bg-gradient-to-tl from-green-500/30 to-transparent rounded-full blur-md"></div>
          
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-6">
              {/* Leaf-like frame around profile pic */}
              <div className="absolute -inset-4 bg-[radial-gradient(ellipse_at_center,rgba(132,204,22,0.2),transparent_70%)]"></div>
              <div className="p-1 bg-gradient-to-br from-green-500/30 to-lime-500/30 rounded-full">
                <img
                  src={bundle.profilePicture || defaultAvatar}
                  alt={bundle.displayName}
                  className="w-28 h-28 rounded-full object-cover border-2 border-green-400/50"
                />
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-green-50">
              {bundle.displayName}
            </h1>
            
            <p className="text-lime-300 text-sm font-medium">
              @{bundle.bundleName}
            </p>
            
            {bundle.bio && (
              <p className="mt-3 text-green-100/80 text-sm max-w-xs">
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
                className="group flex items-center gap-3 w-full px-6 py-4 rounded-lg bg-green-800/40 border border-green-700/50 hover:border-green-500/50 hover:bg-green-700/40 transition-all duration-300 text-white backdrop-blur-sm hover:shadow-md"
              >
                {bit.icon && (
                  <span className="text-xl text-lime-300 group-hover:text-lime-200 transition-colors">
                    {bit.icon}
                  </span>
                )}
                <span className="group-hover:text-lime-100 transition-colors">
                  {bit.title}
                </span>

                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-auto text-green-400/70 group-hover:text-green-300 group-hover:translate-x-0.5 transition-all" 
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 12h16" />
                  <path d="M13 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <div className="px-4 py-1 bg-green-800/50 rounded-full text-xs border border-green-700/30">
              <span className="text-green-300">Naturally by Bundlebit 🌿</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NatureTheme;