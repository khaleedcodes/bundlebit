import { Bundle } from "../usePublicBundle";
import defaultAvatar from "../../../assets/images/default-avatar.jpeg";

interface MinimalThemeProps {
  bundle: Bundle;
}

const MinimalTheme: React.FC<MinimalThemeProps> = ({ bundle }) => {
  const sortedBits = [...bundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-gray-50 text-gray-800 font-sans">
      <div className="w-full max-w-md mx-auto">
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <div className="flex flex-col items-center text-center mb-8">
            <img
              src={bundle.profilePicture || defaultAvatar}
              alt={bundle.displayName}
              className="w-24 h-24 rounded-full object-cover grayscale"
            />
            
            <h1 className="mt-4 text-2xl font-medium text-gray-900">
              {bundle.displayName}
            </h1>
            
            <p className="text-gray-500 text-sm">
              @{bundle.bundleName}
            </p>
            
            {bundle.bio && (
              <p className="mt-2 text-gray-600 text-sm max-w-xs">
                {bundle.bio}
              </p>
            )}
          </div>

          <div className="space-y-2.5">
            {sortedBits.map((bit, index) => (
              <a
                key={index}
                href={bit.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 w-full px-4 py-3 rounded bg-gray-50 hover:bg-gray-100 transition-colors duration-200 text-gray-700"
              >
                <span className="text-gray-400 group-hover:text-gray-600 transition-colors">
                  {bit.icon ? (
                    <span>{bit.icon}</span>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )}
                </span>
                <span className="font-medium">
                  {bit.title}
                </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-auto text-gray-400 group-hover:text-gray-600 transition-colors"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <span className="text-xs text-gray-400">
              via Bundlebit
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinimalTheme;
