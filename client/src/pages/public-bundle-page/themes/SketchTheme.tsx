import { Bundle } from "../usePublicBundle";
import defaultAvatar from "../../../assets/images/default-avatar.jpeg";

interface SketchThemeProps {
  bundle: Bundle;
}

const SketchTheme: React.FC<SketchThemeProps> = ({ bundle }) => {
  const sortedBits = [...bundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-[#f8f8f5] text-gray-700 font-['Comic_Sans_MS',_'Comic_Sans',_cursive]">
      {/* Sketchy background with grid */}
      <div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNkZGRjZGEiIHN0cm9rZS13aWR0aD0iMSI+PHBhdGggZD0iTTAgMjBIMzAgTTIwIDBWMzAiIHN0cm9rZS1kYXNoYXJyYXk9IjIsMiIvPjwvZz48L3N2Zz4=')]"></div>
      <div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgNDAwIDQwMCI+PGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTBlMGUwIiBzdHJva2Utd2lkdGg9IjEuNSI+PHBhdGggZD0iTTAgMEgzOTBNMCA0MEgzOTBNMCA4MEgzOTBNMCAxMjBIMzkwTTAgMTYwSDM5ME0wIDIwMEgzOTBNMCAyNDBIMzkwTTAgMjgwSDM5ME0wIDMyMEgzOTBNMCAzNjBIMzkwTTAgNDBWMzkwTTQwIDQwVjM5ME04MCA0MFYzOTBNMTIwIDQwVjM5ME0xNjAgNDBWMzkwTTIwMCA0MFYzOTBNMjQwIDQwVjM5ME0yODAgNDBWMzkwTTMyMCA0MFYzOTBNMzYwIDQwVjM5MCIgc3Ryb2tlLWRhc2hhcnJheT0iNSw1Ii8+PC9nPjwvc3ZnPg==')]"></div>
      
      <div className="w-full max-w-md mx-auto z-10 animate-[fadeIn_0.8s_ease-out]">
        <div className="bg-white rounded-lg p-8 border-2 border-gray-400 border-dashed shadow-[4px_4px_0px_#303030] relative transform rotate-[0.5deg]">
          {/* Hand-drawn styled header */}
          <div className="absolute -top-5 -left-5 bg-yellow-200 w-20 h-10 transform -rotate-6 flex items-center justify-center border-2 border-gray-400 border-dashed shadow-md">
            <span className="text-sm font-bold">Profile</span>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 relative">
              {/* Sketchy circle around avatar */}
              <div className="absolute inset-0 rounded-full border-4 border-gray-500 border-dashed transform scale-110 rotate-3"></div>
              <div className="p-1 bg-white border-2 border-gray-400 border-dashed rounded-full">
                <img
                  src={bundle.profilePicture || defaultAvatar}
                  alt={bundle.displayName}
                  className="w-28 h-28 rounded-full object-cover"
                />
              </div>
              {/* Hand-drawn marker effect */}
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-red-400 rounded-full border border-gray-500 transform rotate-12 flex items-center justify-center text-white">
                <span className="text-xs font-bold">Pic</span>
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-800 underline decoration-wavy decoration-2 decoration-yellow-400">
              {bundle.displayName}
            </h1>
            
            <p className="text-blue-600 text-sm font-bold mt-1">
              @{bundle.bundleName}
            </p>
            
            {bundle.bio && (
              <div className="mt-3 bg-yellow-50 p-3 border border-gray-400 border-dashed transform -rotate-1 max-w-xs">
                <p className="text-gray-700 text-sm">
                  {bundle.bio}
                </p>
              </div>
            )}
          </div>

          <div className="mt-8 space-y-4">
            {sortedBits.map((bit, index) => (
              <a
                key={index}
                href={bit.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 w-full px-5 py-3 bg-white border-2 border-gray-400 border-dashed hover:bg-blue-50 transition-colors rounded-lg shadow-[2px_2px_0px_#303030] hover:shadow-[4px_4px_0px_#303030] transform hover:-translate-y-0.5 hover:translate-x-0.5"
                style={{ transform: `rotate(${(index % 3 - 1) * 0.8}deg)` }}
              >
                {bit.icon && (
                  <span className="text-xl">
                    {bit.icon}
                  </span>
                )}
                <span className="font-bold">
                  {bit.title}
                </span>

                <div className="ml-auto">
                  {/* Hand-drawn arrow */}
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="text-gray-700"
                    style={{ strokeDasharray: "1,2" }}
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <div className="transform rotate-[-1deg] bg-blue-100 py-1 px-4 border-2 border-gray-400 border-dashed inline-block">
              <span className="text-sm font-bold">Handcrafted by Bundlebit</span>
            </div>
          </div>
          
          {/* Post-it note effect */}
          <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-pink-200 transform rotate-12 flex items-center justify-center p-2 shadow-md">
            <p className="text-xs transform -rotate-12 text-center font-bold">Remember to share this page!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SketchTheme;