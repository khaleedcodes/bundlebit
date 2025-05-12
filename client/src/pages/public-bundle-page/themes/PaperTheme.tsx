import { Bundle } from "../usePublicBundle";
import defaultAvatar from "../../../assets/images/default-avatar.jpeg";

interface PaperThemeProps {
  bundle: Bundle;
}

const PaperTheme: React.FC<PaperThemeProps> = ({ bundle }) => {
  const sortedBits = [...bundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-yellow-50 text-gray-800 font-['Georgia',serif]">
      {/* Paper texture background */}
      <div className="absolute inset-0 z-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgdmlld0JveD0iMCAwIDUwIDUwIj48cGF0aCBkPSJNMjUsMjVIMCIgc3Ryb2tlPSIjZTJkZmNjIiBzdHJva2Utd2lkdGg9IjAuNSIvPjxwYXRoIGQ9Ik01MCwyNUgwIiBzdHJva2U9IiNlMmRmY2MiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9zdmc+')]"></div>
      
      <div className="w-full max-w-md mx-auto z-10 animate-[slideUp_0.8s_ease-out]">
        <div className="bg-white rounded-sm p-8 shadow-md relative overflow-hidden">
          {/* Torn paper edge top */}
          <div className="absolute top-0 left-0 right-0 h-6 bg-white overflow-hidden">
            <div className="h-12 bg-yellow-50 -mt-6 mx-4" style={{ 
              maskImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTIiPjxwYXRoIGQ9Ik0wLDAgQzUsMCAyMCw4IDI1LDEyIEMzMCw4IDQ1LDAgNTAsMCBDNTUsMCA3MCw4IDc1LDEyIEM4MCw4IDk1LDAgMTAwLDAgVjEyIEgwIFoiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=')",
              maskSize: "33% 100%",
              maskRepeat: "repeat-x"
            }}></div>
          </div>
          
          <div className="flex flex-col items-center text-center pt-4">
            <div className="relative">
              <img
                src={bundle.profilePicture || defaultAvatar}
                alt={bundle.displayName}
                className="w-28 h-28 rounded-full object-cover border-4 border-yellow-100 shadow-md"
              />
              <div className="absolute inset-0 rounded-full shadow-inner"></div>
            </div>
            
            <h1 className="mt-5 text-3xl font-bold text-gray-800 tracking-tight">
              {bundle.displayName}
            </h1>
            
            <p className="text-amber-700 text-sm font-medium mt-1">
              @{bundle.bundleName}
            </p>
            
            {bundle.bio && (
              <p className="mt-3 text-gray-600 text-sm max-w-xs italic">
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
                className="group flex items-center gap-3 w-full px-6 py-4 rounded-sm bg-yellow-50 border border-yellow-200 hover:bg-yellow-100 transition-all duration-300 text-gray-700 font-medium shadow-sm"
              >
                {bit.icon && (
                  <span className="text-xl text-amber-700 group-hover:text-amber-600 transition-colors">
                    {bit.icon}
                  </span>
                )}
                <span className="group-hover:text-gray-900 transition-colors">
                  {bit.title}
                </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-auto text-amber-700/60 group-hover:text-amber-700 group-hover:translate-x-0.5 transition-all"
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
            <span className="text-xs text-gray-500 border-t border-yellow-200 pt-2">
              Made with care by Bundlebit
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaperTheme;