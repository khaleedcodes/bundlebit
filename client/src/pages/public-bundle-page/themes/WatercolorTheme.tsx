import { Bundle } from "../usePublicBundle";
import defaultAvatar from "../../../assets/images/default-avatar.jpeg";

interface WatercolorThemeProps {
  bundle: Bundle;
}

const WatercolorTheme: React.FC<WatercolorThemeProps> = ({ bundle }) => {
  const sortedBits = [...bundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-stone-50 text-gray-800 font-['Crimson_Pro',serif] relative overflow-hidden">
      {/* Watercolor background */}
      <div className="absolute inset-0 z-0">
        {/* Soft watercolor blobs/stains */}
        <div className="absolute top-0 left-0 w-2/3 h-1/2 bg-rose-100/60 rounded-full blur-3xl transform -translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 right-0 w-3/4 h-2/3 bg-blue-100/60 rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4"></div>
        <div className="absolute top-1/3 right-1/4 w-1/3 h-1/3 bg-amber-100/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1/4 h-1/4 bg-emerald-100/40 rounded-full blur-3xl"></div>
        
        {/* Paper texture overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PGZpbHRlciBpZD0iYSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9Ii4wNSIgbnVtT2N0YXZlcz0iNSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjxmZURpZmZ1c2VMaWdodGluZyBkaWZmdXNlQ29uc3RhbnQ9IjEiIHN1cmZhY2VTY2FsZT0iMiI+PGZlRGlzdGFudExpZ2h0IGF6aW11dGg9IjQ1IiBlbGV2YXRpb249IjEyMCIvPjwvZmVEaWZmdXNlTGlnaHRpbmc+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-60"></div>
      </div>
      
      <div className="w-full max-w-md mx-auto z-10 animate-[fadeIn_1s_ease-out]">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-stone-200 shadow-md">
          {/* Uneven watercolor edge effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-rose-100/0 via-blue-100/30 to-amber-100/0 opacity-80 blur-lg -z-10 rounded-[30px]" style={{borderRadius: '58% 42% 38% 62% / 42% 55% 45% 58%'}}></div>
          
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 relative">
              {/* Profile image with watercolor border */}
              <div className="absolute -inset-3 bg-gradient-to-br from-rose-200/70 via-blue-200/70 to-amber-200/70 rounded-full blur-md" style={{borderRadius: '60% 40% 30% 70% / 40% 50% 50% 60%'}}></div>
              <img
                src={bundle.profilePicture || defaultAvatar}
                alt={bundle.displayName}
                className="relative w-28 h-28 rounded-full object-cover border-4 border-white"
              />
            </div>
            
            <h1 className="text-3xl font-semibold text-gray-800 mt-2">
              {bundle.displayName}
            </h1>
            
            <p className="text-rose-500 text-sm italic mt-1">
              @{bundle.bundleName}
            </p>
            
            {bundle.bio && (
              <p className="mt-4 text-gray-600 text-sm max-w-xs font-light leading-relaxed">
                {bundle.bio}
              </p>
            )}
          </div>

          <div className="mt-8 space-y-3">
            {sortedBits.map((bit, index) => {
              // Various pastel watercolor styles for links
              const colors = [
                "bg-rose-50 hover:bg-rose-100/80 border-rose-200/50",
                "bg-blue-50 hover:bg-blue-100/80 border-blue-200/50",
                "bg-amber-50 hover:bg-amber-100/80 border-amber-200/50",
                "bg-emerald-50 hover:bg-emerald-100/80 border-emerald-200/50",
                "bg-violet-50 hover:bg-violet-100/80 border-violet-200/50"
              ];
              const colorClass = colors[index % colors.length];
              
              return (
                <a
                  key={index}
                  href={bit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-3 w-full px-6 py-4 rounded-xl ${colorClass} backdrop-blur-sm border transition-all duration-500 text-gray-700 shadow-sm hover:shadow`}
                  style={{borderRadius: `${20 + (index % 3) * 8}px ${20 - (index % 2) * 5}px ${20 - (index % 4) * 3}px ${20 + (index % 2) * 6}px`}}
                >
                  {bit.icon && (
                    <span className="text-xl">
                      {bit.icon}
                    </span>
                  )}
                  <span className="font-medium">
                    {bit.title}
                  </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-auto text-gray-400/0 group-hover:text-gray-400 transition-all duration-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              );
            })}
          </div>

          <div className="mt-10 flex justify-center">
            <div className="text-sm text-gray-500 italic">
              <span>Painted with care</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatercolorTheme;