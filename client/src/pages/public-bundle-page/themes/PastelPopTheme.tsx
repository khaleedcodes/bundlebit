import { Bundle } from "../usePublicBundle";
import defaultAvatar from "../../../assets/images/default-avatar.jpeg";

interface PastelPopThemeProps {
  bundle: Bundle;
}

const PastelPopTheme: React.FC<PastelPopThemeProps> = ({ bundle }) => {
  const sortedBits = [...bundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  // Fun pastel colors for the links
  const pastelColors = [
    "bg-pink-200 hover:bg-pink-300 border-pink-300 shadow-pink-300/40",
    "bg-blue-200 hover:bg-blue-300 border-blue-300 shadow-blue-300/40",
    "bg-green-200 hover:bg-green-300 border-green-300 shadow-green-300/40",
    "bg-purple-200 hover:bg-purple-300 border-purple-300 shadow-purple-300/40",
    "bg-yellow-200 hover:bg-yellow-300 border-yellow-300 shadow-yellow-300/40",
    "bg-cyan-200 hover:bg-cyan-300 border-cyan-300 shadow-cyan-300/40",
    "bg-orange-200 hover:bg-orange-300 border-orange-300 shadow-orange-300/40",
    "bg-emerald-200 hover:bg-emerald-300 border-emerald-300 shadow-emerald-300/40",
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-gradient-to-b from-pink-50 to-purple-100 text-gray-700 font-['Quicksand',sans-serif]">
      {/* Fun background decorations */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-pink-200 opacity-50"></div>
        <div className="absolute top-1/4 -left-20 w-60 h-60 rounded-full bg-blue-200 opacity-30"></div>
        <div className="absolute -bottom-10 right-1/4 w-40 h-40 rounded-full bg-purple-200 opacity-40"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 rounded-full bg-yellow-200 opacity-30"></div>
        <div className="absolute bottom-1/4 left-1/4 w-30 h-30 rounded-full bg-green-200 opacity-20"></div>
      </div>
      
      <div className="w-full max-w-md mx-auto z-10 animate-[fadeIn_0.8s_ease-out]">
        <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-purple-200">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <div className="p-2 bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 rounded-full">
                <img
                  src={bundle.profilePicture || defaultAvatar}
                  alt={bundle.displayName}
                  className="w-28 h-28 rounded-full object-cover border-4 border-white"
                />
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-800">
              {bundle.displayName}
            </h1>
            
            <p className="text-pink-500 text-sm font-medium mt-1">
              @{bundle.bundleName}
            </p>
            
            {bundle.bio && (
              <p className="mt-3 text-gray-600 text-sm max-w-xs">
                {bundle.bio}
              </p>
            )}
          </div>

          <div className="mt-8 space-y-4">
            {sortedBits.map((bit, index) => {
              // Pick a color based on the index, cycling through the available pastel colors
              const colorClass = pastelColors[index % pastelColors.length];
              
              return (
                <a
                  key={index}
                  href={bit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-3 w-full px-6 py-4 rounded-full ${colorClass} transition-all duration-300 text-gray-700 font-medium border-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
                >
                  {bit.icon && (
                    <span className="text-xl">
                      {bit.icon}
                    </span>
                  )}
                  <span className="font-bold">
                    {bit.title}
                  </span>

                  <div className="ml-auto bg-white w-6 h-6 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-500 group-hover:text-gray-700 transition-colors"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="mt-10 flex justify-center">
            <div className="px-5 py-2 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full">
              <span className="text-sm font-medium text-gray-700">
                Made with 💖 by Bundlebit
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastelPopTheme;