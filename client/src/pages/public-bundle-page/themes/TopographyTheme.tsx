import { Bundle } from "../usePublicBundle";
import defaultAvatar from "../../../assets/images/default-avatar.jpeg";

interface TopographyThemeProps {
  bundle: Bundle;
}

const TopographyTheme: React.FC<TopographyThemeProps> = ({ bundle }) => {
  const sortedBits = [...bundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-emerald-50 text-gray-800 font-['Montserrat',sans-serif] relative overflow-hidden">
      {/* Topography map background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Base color */}
        <div className="absolute inset-0 bg-emerald-50"></div>
        
        {/* Topography pattern - using SVG background with contour lines */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii4wNSIgbnVtT2N0YXZlcz0iMyIgc2VlZD0iMiIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjUgMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-40 mix-blend-multiply"></div>
        
        {/* Contour lines overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1)_0%,rgba(255,255,255,0)_60%)] opacity-70"></div>
        
        {/* Accent features */}
        <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-emerald-300/20 blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-emerald-300/20 blur-2xl"></div>
      </div>
      
      <div className="w-full max-w-md mx-auto z-10 animate-[fadeIn_1s_ease-out]">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-emerald-100 relative overflow-hidden">
          {/* Card decoration - topographical accent */}
          <div className="absolute top-0 inset-x-0 h-2 bg-emerald-500"></div>
          
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 relative">
              {/* Profile picture with map-pin style */}
              <div className="relative">
                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img
                    src={bundle.profilePicture || defaultAvatar}
                    alt={bundle.displayName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
            <h1 className="text-2xl font-bold text-gray-800 mb-1">
              {bundle.displayName}
            </h1>
            
            <p className="text-emerald-600 text-sm font-medium">
              @{bundle.bundleName}
            </p>
            
            {bundle.bio && (
              <div className="mt-4 p-4 rounded-lg bg-emerald-50 border border-emerald-100">
                <p className="text-gray-700 text-sm">
                  {bundle.bio}
                </p>
              </div>
            )}
            
            {/* Coordinates display */}
            <div className="mt-4 w-full flex justify-center">
              <div className="px-3 py-1 rounded-full bg-gray-100 text-xs text-gray-500 font-mono">
                43°42'N 79°24'W
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {sortedBits.map((bit, index) => (
              <a
                key={index}
                href={bit.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 w-full px-5 py-3.5 rounded-lg bg-white border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all duration-300 relative overflow-hidden"
              >
                {/* Topography pattern on hover */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii4wNSIgbnVtT2N0YXZlcz0iMyIgc2VlZD0iMiIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjUgMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                
                {/* Map pin or icon */}
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-emerald-100 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                  {bit.icon || (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                
                <div className="flex-1">
                  <span className="font-medium text-gray-800 group-hover:text-emerald-800 transition-colors">
                    {bit.title}
                  </span>
                  
                  {/* Distance indicator */}
                  <div className="text-xs text-gray-500 mt-0.5 group-hover:text-emerald-600 transition-colors">
                    {(index + 1) * 3.2} km
                  </div>
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400 group-hover:text-emerald-600 transition-colors duration-300"
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

          <div className="mt-8 flex justify-center">
            <div className="px-4 py-2 rounded-full border border-emerald-200 text-xs text-emerald-700">
              <span>Topography • Expedition</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopographyTheme;