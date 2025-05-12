import { Bundle } from "../usePublicBundle";
import defaultAvatar from "../../../assets/images/default-avatar.jpeg";

interface MinimalWhiteThemeProps {
  bundle: Bundle;
}

const MinimalWhiteTheme: React.FC<MinimalWhiteThemeProps> = ({ bundle }) => {
  const sortedBits = [...bundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-white text-gray-900 font-['SF_Pro_Display',-apple-system,BlinkMacSystemFont,sans-serif]">
      <div className="w-full max-w-md mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6">
            <img
              src={bundle.profilePicture || defaultAvatar}
              alt={bundle.displayName}
              className="w-24 h-24 rounded-full object-cover shadow-sm"
            />
          </div>
          
          <h1 className="text-2xl font-semibold text-gray-900">
            {bundle.displayName}
          </h1>
          
          <p className="text-gray-500 text-sm mt-1">
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
              className="group flex items-center gap-3 w-full px-5 py-3.5 rounded-md bg-gray-50 hover:bg-gray-100 border border-gray-100 transition-all duration-300 text-gray-800"
            >
              {bit.icon && (
                <span className="text-lg text-gray-500 group-hover:text-gray-700 transition-colors">
                  {bit.icon}
                </span>
              )}
              <span className="font-medium text-sm group-hover:text-gray-900 transition-colors">
                {bit.title}
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-auto text-gray-400 group-hover:text-gray-600 group-hover:translate-x-0.5 transition-all"
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
          <span className="text-[10px] text-gray-400 tracking-wide uppercase">
            Bundlebit
          </span>
        </div>
      </div>
    </div>
  );
};

export default MinimalWhiteTheme;