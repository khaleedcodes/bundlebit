import { Bundle } from "../usePublicBundle";
import defaultAvatar from "../../../assets/images/default-avatar.jpeg";

interface ZenThemeProps {
  bundle: Bundle;
}

const ZenTheme: React.FC<ZenThemeProps> = ({ bundle }) => {
  const sortedBits = [...bundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-gradient-to-b from-sky-50 to-blue-100 text-gray-700 font-['Outfit',sans-serif] relative overflow-hidden">
      {/* Zen-inspired background elements */}
      <div className="absolute inset-0 z-0">
        {/* Subtle wave pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiB2aWV3Qm94PSIwIDAgMTUwIDE1MCIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTAgMjVDMjUgNDIgNzUgNDIgMTAwIDI1IiBzdHJva2U9IiNlNmYwZjYiIHN0cm9rZS13aWR0aD0iMiIgLz48cGF0aCBkPSJNNTAgNzVDNzUgOTIgMTI1IDkyIDE1MCA3NSIgc3Ryb2tlPSIjZTZmMGY2IiBzdHJva2Utd2lkdGg9IjIiIC8+PHBhdGggZD0iTTAgMTI1QzI1IDE0MiA3NSAxNDIgMTAwIDEyNSIgc3Ryb2tlPSIjZTZmMGY2IiBzdHJva2Utd2lkdGg9IjIiIC8+PC9zdmc+')] opacity-50"></div>
        
        {/* Circular soft highlight */}
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-white/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="w-full max-w-md mx-auto z-10 animate-[fadeIn_1.2s_ease-out]">
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-100/80">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 relative">
              {/* Zen circle around profile */}
              <div className="absolute inset-0 scale-[1.3] rounded-full border-4 border-sky-100 opacity-50"></div>
              <img
                src={bundle.profilePicture || defaultAvatar}
                alt={bundle.displayName}
                className="relative w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
              />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-800">
              {bundle.displayName}
            </h1>
            
            <p className="text-sky-600 text-sm font-medium">
              @{bundle.bundleName}
            </p>
            
            {bundle.bio && (
              <p className="mt-3 text-gray-600 text-sm max-w-xs">
                {bundle.bio}
              </p>
            )}
            
            {/* Zen separator */}
            <div className="mt-4 w-16 h-[2px] bg-gradient-to-r from-transparent via-sky-300 to-transparent"></div>
          </div>

          <div className="mt-8 space-y-3">
            {sortedBits.map((bit, index) => (
              <a
                key={index}
                href={bit.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 w-full px-6 py-4 rounded-xl bg-white/80 border border-blue-100 hover:border-sky-300 transition-all duration-500 text-gray-700 shadow-sm hover:shadow-md"
              >
                {bit.icon && (
                  <span className="text-xl text-sky-700 group-hover:text-sky-500 transition-colors duration-500">
                    {bit.icon}
                  </span>
                )}
                <span className="font-medium group-hover:text-sky-700 transition-colors duration-500">
                  {bit.title}
                </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-auto text-gray-400 group-hover:text-sky-500 transition-all duration-500 opacity-0 group-hover:opacity-100"
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
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <div className="flex flex-col items-center gap-2">
              {/* Zen enso circle */}
              <div className="w-8 h-8 rounded-full border-2 border-sky-200/80 border-l-transparent"></div>
              <span className="text-xs text-gray-500">
                Mindfully crafted
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZenTheme;