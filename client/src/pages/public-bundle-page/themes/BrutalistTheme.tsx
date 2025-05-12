import { Bundle } from "../usePublicBundle";
import defaultAvatar from "../../../assets/images/default-avatar.jpeg";

interface BrutalistThemeProps {
  bundle: Bundle;
}

const BrutalistTheme: React.FC<BrutalistThemeProps> = ({ bundle }) => {
  const sortedBits = [...bundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-white text-black font-mono">
      <div className="w-full max-w-md mx-auto">
        <div className="border-4 border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex flex-col items-center border-b-4 border-black pb-6 mb-6">
            <div className="border-4 border-black p-1 mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <img
                src={bundle.profilePicture || defaultAvatar}
                alt={bundle.displayName}
                className="w-28 h-28 object-cover"
              />
            </div>
            
            <h1 className="text-3xl font-bold uppercase tracking-tight mt-2">
              {bundle.displayName}
            </h1>
            
            <div className="bg-black text-white px-2 py-0.5 mt-1 tracking-wide">
              @{bundle.bundleName}
            </div>
            
            {bundle.bio && (
              <p className="mt-3 text-sm max-w-xs font-mono uppercase text-center">
                {bundle.bio}
              </p>
            )}
          </div>

          <div className="space-y-4">
            {sortedBits.map((bit, index) => (
              <a
                key={index}
                href={bit.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 w-full px-4 py-3 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all duration-150 text-black font-bold uppercase"
              >
                {bit.icon && (
                  <span className="text-xl">
                    {bit.icon}
                  </span>
                )}
                <span>
                  {bit.title}
                </span>

                <span className="ml-auto font-bold text-xl transition-transform">→</span>
              </a>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <div className="border-t-4 border-black pt-4 w-full text-center">
              <span className="text-xs uppercase font-bold">
                Built with Bundlebit
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrutalistTheme;
