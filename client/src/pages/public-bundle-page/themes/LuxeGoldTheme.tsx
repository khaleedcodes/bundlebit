import { Bundle } from "../usePublicBundle";
import defaultAvatar from "../../../assets/images/default-avatar.jpeg";

interface LuxeGoldThemeProps {
  bundle: Bundle;
}

const LuxeGoldTheme: React.FC<LuxeGoldThemeProps> = ({ bundle }) => {
  const sortedBits = [...bundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-black text-white font-['Playfair_Display',serif] relative">
      {/* Dark velvet background with subtle pattern */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#1a0a12] to-black">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNkOGI0ZmUiIHN0cm9rZS13aWR0aD0iMi41IiBvcGFjaXR5PSIwLjUiPjxwYXRoIGQ9Ik0yMCAwLjVMMC41IDIwTDIwIDM5LjVMMzkuNSAyMEwyMCAwLjVaIi8+PC9nPjwvc3ZnPg==')]"></div>
      </div>
      
      <div className="w-full max-w-md mx-auto z-10 animate-[fadeIn_1s_ease-out]">
        <div className="bg-gradient-to-b from-[#1c1616] to-[#0c0709] rounded-lg p-8 border border-amber-800/30 shadow-2xl relative">
          {/* Gold accent lighting */}
          <div className="absolute -top-10 left-1/2 w-40 h-40 -translate-x-1/2 bg-amber-500/20 rounded-full blur-3xl"></div>
          
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-6">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-600 to-yellow-400 blur opacity-80"></div>
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-300 border-2 border-amber-300/50"></div>
              <img
                src={bundle.profilePicture || defaultAvatar}
                alt={bundle.displayName}
                className="relative w-28 h-28 rounded-full object-cover p-[2px]"
              />
            </div>
            
            <h1 className="text-4xl text-amber-400 font-bold tracking-wide italic mt-2">
              {bundle.displayName}
            </h1>
            
            <p className="text-amber-300/80 text-sm font-medium italic mt-1">
              @{bundle.bundleName}
            </p>
            
            {bundle.bio && (
              <p className="mt-3 text-amber-100/70 text-sm max-w-xs leading-relaxed">
                {bundle.bio}
              </p>
            )}
            
            {/* Gold divider */}
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mt-6"></div>
          </div>

          <div className="mt-8 space-y-3">
            {sortedBits.map((bit, index) => (
              <a
                key={index}
                href={bit.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 w-full px-6 py-4 rounded-md bg-black/50 hover:bg-black/80 border border-amber-900/50 hover:border-amber-600/70 transition-all duration-300 text-amber-100"
              >
                <div className="relative">
                  {bit.icon && (
                    <span className="text-xl text-amber-400 group-hover:text-amber-300 transition-colors relative z-10">
                      {bit.icon}
                    </span>
                  )}
                  <div className="absolute -inset-1 bg-amber-700/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <span className="group-hover:text-amber-300 transition-colors font-medium">
                  {bit.title}
                </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-auto text-amber-700 group-hover:text-amber-400 transition-colors"
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

          <div className="mt-10 flex justify-center">
            <div className="flex flex-col items-center">
              {/* Gold emblem */}
              <div className="w-8 h-8 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full flex items-center justify-center mb-2">
                <span className="text-xs text-black font-bold">B</span>
              </div>
              <span className="text-amber-500/80 text-xs tracking-widest uppercase">
                BUNDLEBIT
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxeGoldTheme;