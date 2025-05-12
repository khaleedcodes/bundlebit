import { Bundle } from "../usePublicBundle";
import defaultAvatar from "../../../assets/images/default-avatar.jpeg";

interface DefaultThemeProps {
  bundle: Bundle;
}

const DefaultTheme: React.FC<DefaultThemeProps> = ({ bundle }) => {
  const sortedBits = [...bundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-gradient-to-b from-[#0f0f11] to-[#16161a] text-white font-['Inter',system-ui,sans-serif]">
      <div className="w-full max-w-md mx-auto transform transition-all duration-300 ease-in-out animate-[slideUp_0.5s_ease-out]">
        <div className="bg-gradient-to-b from-[#1a1a1d]/80 to-[#1a1a1d] backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-800/80 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-600/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl"></div>

          <div className="relative flex flex-col items-center text-center z-10">
            <div className="group relative">
              <img
                src={bundle.profilePicture || defaultAvatar}
                alt={bundle.displayName}
                className="w-28 h-28 rounded-full object-cover shadow-lg border-2 border-indigo-500/70 p-[2px] bg-[#0f0f11] z-10 relative"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-400 via-indigo-500 to-purple-600 blur-[2px] opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
            <h1 className="mt-5 text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              {bundle.displayName}
            </h1>
            <p className="text-indigo-400 text-sm font-medium">
              @{bundle.bundleName}
            </p>
            {bundle.bio && (
              <p className="mt-3 text-gray-400 text-sm max-w-xs">
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
                className="group flex items-center gap-3 w-full px-6 py-4 rounded-xl bg-[#0f0f11]/80 border border-gray-800/50 hover:border-indigo-500/50 hover:bg-gradient-to-r hover:from-indigo-600/20 hover:to-purple-600/20 transition-all duration-300 text-white font-medium shadow-md hover:shadow-lg hover:shadow-indigo-500/10 transform hover:-translate-y-0.5"
              >
                {bit.icon && (
                  <span className="text-xl group-hover:text-indigo-400 transition-colors">
                    {bit.icon}
                  </span>
                )}
                <span className="group-hover:text-indigo-100 transition-colors">
                  {bit.title}
                </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-auto text-gray-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all"
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
            <span className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
              Created with{" "}
              <a
                href="https://bundlebit.me/"
                className="text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Bundlebit
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultTheme;
