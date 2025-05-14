import defaultAvatar from "../../../assets/images/default-avatar.jpeg";

const demoBundle = {
  displayName: "Lena Ray",
  bundleName: "lenaray",
  profilePicture: defaultAvatar,
  bio: "Designer. Dreamer. Building beautiful things for the web.",
  bits: [
    {
      title: "Portfolio Website",
      url: "https://lena.design",
      icon: "💼",
      order: 1,
      isPinned: true,
    },
    {
      title: "Dribbble Shots",
      url: "https://dribbble.com/lenaray",
      icon: "🎨",
      order: 2,
      isPinned: false,
    },
    {
      title: "LinkedIn Profile",
      url: "https://linkedin.com/in/lenaray",
      icon: "🔗",
      order: 3,
      isPinned: false,
    },
    {
      title: "Instagram",
      url: "https://instagram.com/lenaray",
      icon: "📸",
      order: 4,
      isPinned: false,
    },
  ],
};
function DemoMagazineTheme() {
  const sortedBits = [...demoBundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  // Get the current month and year
  const currentDate = new Date();
  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-gray-100 text-gray-900 font-['Playfair_Display',serif] relative overflow-hidden">
      {/* Editorial magazine background */}
      <div className="absolute inset-0 z-0">
        {/* Paper texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDEgMCAwIDAgMCAxIDAgMCAwIDAgMSAwIDAgMCAwLjYgMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-5"></div>

        {/* Magazine grid lines */}
        <div className="absolute inset-0 border-b border-gray-200 top-1/3"></div>
        <div className="absolute inset-0 border-b border-gray-200 top-2/3"></div>
        <div className="absolute inset-y-0 border-l border-gray-200 left-1/3"></div>
        <div className="absolute inset-y-0 border-l border-gray-200 left-2/3"></div>
      </div>

      <div className="w-full max-w-lg mx-auto z-10 animate-[fadeIn_1s_ease-out]">
        <div className="relative bg-white p-10 shadow-lg border border-gray-200">
          {/* Magazine title header */}
          <div className="absolute top-4 right-4 text-right">
            <p className="text-xs text-gray-500 uppercase tracking-widest">
              {month} {year} • Issue 12
            </p>
          </div>

          {/* Red accent bar */}
          <div className="absolute left-0 top-10 bottom-10 w-1 bg-red-700"></div>

          <header className="mb-10 border-b border-gray-200 pb-6">
            <h1 className="text-6xl font-bold tracking-tight text-gray-900 mb-1 uppercase">
              PROFILE
            </h1>
            <p className="text-xl text-gray-500 font-light italic">
              The digital presence edition
            </p>
          </header>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Left column: Image and name */}
            <div className="md:w-1/3">
              <div className="mb-4 relative">
                {/* Magazine-style cropped image */}
                <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                  <img
                    src={demoBundle.profilePicture || defaultAvatar}
                    alt={demoBundle.displayName}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Caption under image */}
                <p className="mt-2 text-xs text-gray-500 italic">
                  {demoBundle.displayName}, digital creator
                </p>
              </div>
            </div>

            {/* Right column: Content */}
            <div className="md:w-2/3">
              <div className="mb-6">
                <h2 className="text-4xl font-bold mb-1">
                  {demoBundle.displayName}
                </h2>
                <p className="text-red-600 text-sm font-medium italic">
                  @{demoBundle.bundleName}
                </p>

                {demoBundle.bio && (
                  <div className="mt-4">
                    <p className="first-letter:text-4xl first-letter:font-bold first-letter:mr-1 first-letter:float-left text-gray-700 leading-relaxed">
                      {demoBundle.bio}
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-6">
                <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-4 border-b border-gray-200 pb-1">
                  Digital Footprint
                </h3>

                <div className="space-y-3">
                  {sortedBits.map((bit, index) => (
                    <a
                      key={index}
                      href={bit.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 w-full py-2 text-gray-900 border-b border-gray-100 hover:border-gray-300 transition-colors"
                    >
                      {bit.icon && (
                        <span className="text-lg text-gray-500 group-hover:text-red-600 transition-colors">
                          {bit.icon}
                        </span>
                      )}
                      <span className="font-medium group-hover:text-red-700 transition-colors">
                        {bit.title}
                      </span>

                      <div className="ml-auto flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-gray-400 group-hover:text-red-600 transition-colors"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-xs text-gray-400 group-hover:text-red-600 transition-colors">
                          visit
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-between border-t border-gray-200 pt-4 text-xs text-gray-500">
            <span>Photography by Bundlebit</span>
            <span>Page 21 of 36</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemoMagazineTheme;
