import { Bundle } from "../usePublicBundle";
import defaultAvatar from "../../../assets/images/default-avatar.jpeg";

interface FloatingIslandThemeProps {
  bundle: Bundle;
}

const FloatingIslandTheme: React.FC<FloatingIslandThemeProps> = ({ bundle }) => {
  const sortedBits = [...bundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-gradient-to-b from-sky-400 via-sky-500 to-indigo-500 text-gray-800 font-['Quicksand',sans-serif] relative overflow-hidden">
      {/* Floating islands background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Clouds */}
        <div className="absolute top-10 left-10 w-36 h-20 bg-white/90 rounded-full blur-md"></div>
        <div className="absolute top-16 left-32 w-24 h-16 bg-white/80 rounded-full blur-md"></div>
        <div className="absolute top-20 right-20 w-40 h-16 bg-white/90 rounded-full blur-md"></div>
        <div className="absolute top-24 right-48 w-20 h-12 bg-white/80 rounded-full blur-md"></div>
        <div className="absolute bottom-56 left-1/4 w-28 h-14 bg-white/70 rounded-full blur-md"></div>
        <div className="absolute bottom-72 right-1/3 w-32 h-16 bg-white/70 rounded-full blur-md"></div>
        
        {/* Distant floating islands */}
        <div className="absolute left-10 bottom-40 w-24 h-8 bg-emerald-700 rounded-full blur-sm"></div>
        <div className="absolute left-16 bottom-38 w-16 h-12 bg-emerald-800 rounded-t-full blur-sm"></div>
        
        <div className="absolute right-20 bottom-48 w-28 h-10 bg-emerald-700 rounded-full blur-sm"></div>
        <div className="absolute right-24 bottom-46 w-20 h-14 bg-emerald-800 rounded-t-full blur-sm"></div>
        
        {/* Birds */}
        <div className="absolute top-1/4 left-1/4 text-white/70 text-sm animate-[flyRight_20s_linear_infinite]">✦</div>
        <div className="absolute top-1/3 right-1/3 text-white/70 text-sm animate-[flyLeft_25s_linear_infinite]" style={{ animationDelay: '3s' }}>✦</div>
        <div className="absolute top-1/2 left-1/3 text-white/70 text-sm animate-[flyRight_22s_linear_infinite]" style={{ animationDelay: '7s' }}>✦</div>
      </div>
      
      <div className="w-full max-w-md mx-auto z-10 animate-[float_6s_ease-in-out_infinite]">
        {/* Main floating island */}
        <div className="relative bg-white/95 rounded-t-3xl p-8 shadow-2xl border-t border-l border-r border-white/50">
          {/* Island base shadows */}
          <div className="absolute -bottom-6 inset-x-4 h-6 bg-emerald-800 rounded-b-full blur-md"></div>
          <div className="absolute -bottom-10 inset-x-10 h-8 bg-emerald-900/80 rounded-b-full blur-lg"></div>
          
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 relative">
              {/* Float effect for profile picture */}
              <div className="absolute inset-0 animate-[float_4s_ease-in-out_infinite_0.5s]">
                <img
                  src={bundle.profilePicture || defaultAvatar}
                  alt={bundle.displayName}
                  className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
              <div className="w-28 h-28 opacity-0">Spacer</div>
            </div>
            
            <h1 className="text-2xl font-bold text-gray-800 mb-1">
              {bundle.displayName}
            </h1>
            
            <p className="text-sky-600 text-sm font-medium">
              @{bundle.bundleName}
            </p>
            
            {bundle.bio && (
              <div className="mt-4 p-4 rounded-xl bg-sky-50 border border-sky-100 shadow-inner">
                <p className="text-gray-600 text-sm">
                  {bundle.bio}
                </p>
              </div>
            )}
            
            {/* Little floating island decoration */}
            <div className="relative w-16 h-10 mt-4">
              <div className="absolute inset-x-0 top-0 h-3 bg-emerald-100 rounded-full"></div>
              <div className="absolute inset-x-2 top-2 h-2 bg-emerald-200 rounded-full"></div>
              <div className="absolute inset-x-4 top-3 h-2 bg-emerald-300 rounded-full"></div>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {sortedBits.map((bit, index) => (
              <a
                key={index}
                href={bit.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 w-full px-5 py-3.5 rounded-xl bg-white shadow-sm border border-sky-100 hover:border-sky-200 hover:shadow-md transition-all duration-300 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Cloud passing effect on hover */}
                <div className="absolute inset-y-0 -left-20 w-16 h-full bg-white/80 blur-md opacity-0 group-hover:opacity-100 group-hover:animate-[cloudPass_2s_ease-in-out]"></div>
                
                {bit.icon && (
                  <span className="text-lg text-sky-500 group-hover:text-sky-600 transition-colors">
                    {bit.icon}
                  </span>
                )}
                <span className="font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                  {bit.title}
                </span>

                <div className="ml-auto w-7 h-7 rounded-full bg-sky-50 flex items-center justify-center border border-sky-100 group-hover:bg-sky-100 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-sky-500 group-hover:text-sky-600 transition-colors"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <div className="px-4 py-2 rounded-full bg-sky-50 border border-sky-100 text-xs text-sky-600 animate-[float_5s_ease-in-out_infinite_1s]">
              <span>Floating Island · Serenity</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom animations defined in index.css */}
    </div>
  );
};

export default FloatingIslandTheme;