import { Bundle } from "../usePublicBundle";
import defaultAvatar from "../../../assets/images/default-avatar.jpeg";

interface FoilShimmerThemeProps {
  bundle: Bundle;
}

const FoilShimmerTheme: React.FC<FoilShimmerThemeProps> = ({ bundle }) => {
  const sortedBits = [...bundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-gradient-to-b from-gray-100 to-gray-200 text-gray-900 font-['Red_Hat_Display',sans-serif] relative overflow-hidden">
      {/* Light reflections background */}
      <div className="absolute inset-0 z-0">
        {/* Subtle noise texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48ZmlsdGVyIGlkPSJub2lzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSI+PGZlVHVyYnVsZW5jZSBiYXNlRnJlcXVlbmN5PSIwLjAzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIiB0eXBlPSJmcmFjdGFsTm9pc2UiIG51bU9jdGF2ZXM9IjEiIHJlc3VsdD0ibm9pc2UiPjwvZmVUdXJidWxlbmNlPjxmZUNvbG9yTWF0cml4IHR5cGU9InNhdHVyYXRlIiB2YWx1ZXM9IjAiIGluPSJub2lzZSIgcmVzdWx0PSJzYXR1cmF0ZWROb2lzZSI+PC9mZUNvbG9yTWF0cml4PjxmZUNvbXBvc2l0ZSBvcGVyYXRvcj0iYXJpdGhtZXRpYyIgazE9IjAiIGsyPSIuMDUiIGszPSIwIiBrND0iMCIgaW49InNhdHVyYXRlZE5vaXNlIj48L2ZlQ29tcG9zaXRlPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiLz48L3N2Zz4=')] opacity-50"></div>
        
        {/* Rainbow shimmer reflections */}
        <div className="absolute top-0 left-1/4 w-1/2 h-full animate-[pulse-glow_10s_ease-in-out_infinite] opacity-10 bg-gradient-to-r from-pink-500 via-purple-500 via-indigo-500 via-blue-500 via-emerald-500 via-green-500 via-yellow-500 to-red-500 mix-blend-overlay"></div>
        <div className="absolute bottom-0 right-1/4 w-1/2 h-full animate-[pulse-glow_8s_ease-in-out_infinite] opacity-10 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-emerald-500 via-blue-500 via-indigo-500 via-purple-500 to-pink-500 mix-blend-overlay" style={{animationDelay: "3s"}}></div>
      </div>
      
      <div className="w-full max-w-md mx-auto z-10 animate-[fadeIn_1s_ease-out]">
        <div className="bg-gradient-to-br from-white/80 via-white/90 to-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/60 overflow-hidden">
          {/* Foil shimmer overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48ZmlsdGVyIGlkPSJzcGFya2xlIj48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIwIiByZXN1bHQ9ImJsdXIiLz48ZmVDb21wb3NpdGUgaW4yPSJibHVyIiBvcGVyYXRvcj0iaW4iLz48ZmVDb21wb3NpdGUgaW49InNhdHVyYXRlZE5vaXNlIiBvcGVyYXRvcj0iYXJpdGhtZXRpYyIgazE9IjIuNSIgazI9Ii42NSIgazM9Ii4zIiBrND0iLjA1IiByZXN1bHQ9InNoaW1tZXIiLz48L2ZpbHRlcj48L3N2Zz4=')] opacity-30 mix-blend-overlay"></div>
          
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 relative">
              {/* Elegant metallic frame for profile pic */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 shadow-md"></div>
              <img
                src={bundle.profilePicture || defaultAvatar}
                alt={bundle.displayName}
                className="relative w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg z-10"
              />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-800 tracking-wide mt-2">
              {bundle.displayName}
            </h1>
            
            <p className="text-gray-500 text-sm font-medium">
              @{bundle.bundleName}
            </p>
            
            {bundle.bio && (
              <p className="mt-3 text-gray-600 text-sm max-w-xs">
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
                className="group flex items-center gap-3 w-full px-6 py-4 rounded-xl bg-gradient-to-r from-white/60 to-gray-100/80 hover:from-white hover:to-gray-50/90 border border-white/60 transition-all duration-300 text-gray-700 shadow-sm hover:shadow-md relative overflow-hidden"
              >
                {/* Foil shimmer highlight on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-purple-500/0 via-blue-500/0 via-cyan-500/0 via-emerald-500/0 via-yellow-500/0 to-orange-500/0 group-hover:from-pink-500/5 group-hover:via-purple-500/5 group-hover:via-blue-500/5 group-hover:via-cyan-500/5 group-hover:via-emerald-500/5 group-hover:via-yellow-500/5 group-hover:to-orange-500/5 transition-colors duration-500 opacity-0 group-hover:opacity-100"></div>
                
                {bit.icon && (
                  <span className="text-lg text-gray-500 group-hover:text-gray-700 transition-colors duration-300 relative z-10">
                    {bit.icon}
                  </span>
                )}
                <span className="font-medium text-gray-800 relative z-10">
                  {bit.title}
                </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-auto text-gray-400 group-hover:text-gray-600 group-hover:translate-x-0.5 transition-all duration-300 relative z-10"
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
            <div className="text-xs text-gray-500 px-4 py-1 border-t border-gray-200 flex items-center gap-1">
              <span className="inline-block w-3 h-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mr-1"></span>
              premium foil edition
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoilShimmerTheme;