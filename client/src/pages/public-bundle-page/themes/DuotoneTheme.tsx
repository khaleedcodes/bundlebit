import { Bundle } from "../usePublicBundle";
import defaultAvatar from "../../../assets/images/default-avatar.jpeg";

interface DuotoneThemeProps {
  bundle: Bundle;
}

const DuotoneTheme: React.FC<DuotoneThemeProps> = ({ bundle }) => {
  const sortedBits = [...bundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-indigo-950 text-white font-['DM_Sans',sans-serif] relative overflow-hidden">
      {/* Duotone background effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Duotone color overlay with gradients */}
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900 via-indigo-950 to-purple-900"></div>
        
        {/* Grainy texture overlay */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDEgMCAwIDAgMCAxIDAgMCAwIDAgMSAwIDAgMCAxIDAiLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjYSkiLz48L3N2Zz4=')]"></div>
        
        {/* Duotone geometric shapes */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-500 rounded-full opacity-10 mix-blend-lighten blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full opacity-10 mix-blend-lighten blur-3xl"></div>
      </div>
      
      <div className="w-full max-w-md mx-auto z-10 animate-[fadeIn_1s_ease-out]">
        <div className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 shadow-lg relative overflow-hidden">
          {/* Duotone divider line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-cyan-500"></div>
          
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 relative">
              {/* Duotone effect on profile picture */}
              <div className="relative w-28 h-28 rounded-full overflow-hidden">
                <img
                  src={bundle.profilePicture || defaultAvatar}
                  alt={bundle.displayName}
                  className="w-full h-full object-cover grayscale"
                />
                {/* Duotone color overlay for image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 to-cyan-500 opacity-30 mix-blend-color"></div>
                <div className="absolute inset-0 border-2 border-white/10 rounded-full"></div>
              </div>
            </div>
            
            <h1 className="text-2xl font-bold text-white mb-1 tracking-tight">
              {bundle.displayName}
            </h1>
            
            <p className="text-pink-300 text-sm font-medium">
              @{bundle.bundleName}
            </p>
            
            {bundle.bio && (
              <div className="mt-4 p-4 rounded-lg bg-white/5 border border-white/10">
                <p className="text-white/80 text-sm">
                  {bundle.bio}
                </p>
              </div>
            )}
          </div>

          <div className="mt-6 space-y-3">
            {sortedBits.map((bit, index) => (
              <a
                key={index}
                href={bit.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 w-full px-5 py-3.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-white relative overflow-hidden"
              >
                {/* Duotone hover effect */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {bit.icon && (
                  <span className="text-lg text-cyan-300 group-hover:text-cyan-200 transition-colors">
                    {bit.icon}
                  </span>
                )}
                <span className="font-medium group-hover:text-white transition-colors">
                  {bit.title}
                </span>

                <div className="ml-auto">
                  <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-pink-300 group-hover:text-pink-200 transition-colors"
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
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-white/70">
              <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">DUOTONE • AESTHETIC</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DuotoneTheme;