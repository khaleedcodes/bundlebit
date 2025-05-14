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

function DemoScrapbookTheme() {
  const sortedBits = [...demoBundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-amber-50 text-gray-800 font-['Caveat',cursive] relative overflow-hidden">
      {/* Scrapbook background texture */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Paper texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDEgMCAwIDAgMCAxIDAgMCAwIDAgMSAwIDAgMCAwLjQgMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-5"></div>

        {/* Decorative doodles and elements */}
        <div className="absolute top-10 left-10 w-24 h-24 border-4 border-dashed border-pink-300/50 rounded-full transform rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-32 h-16 border-4 border-blue-300/50 rounded-xl transform -rotate-6"></div>
        <div className="absolute top-1/4 right-10 w-20 h-20 border-4 border-amber-400/50 transform rotate-45"></div>

        {/* Paper tape strips */}
        <div className="absolute top-40 left-20 w-40 h-5 bg-yellow-200/70 transform rotate-12"></div>
        <div className="absolute bottom-32 left-1/4 w-32 h-5 bg-blue-200/70 transform -rotate-6"></div>
        <div className="absolute right-1/4 top-20 w-24 h-5 bg-pink-200/70 transform rotate-[-12deg]"></div>
      </div>

      <div className="w-full max-w-md mx-auto z-10">
        <div className="bg-white p-8 shadow-lg border-2 border-gray-200 transform rotate-[-2deg] relative">
          {/* Washi tape corners */}
          <div className="absolute -top-3 -left-6 w-16 h-6 bg-green-300/80 transform rotate-[-10deg]"></div>
          <div className="absolute -top-3 -right-6 w-16 h-6 bg-pink-300/80 transform rotate-[10deg]"></div>
          <div className="absolute -bottom-3 -left-6 w-16 h-6 bg-blue-300/80 transform rotate-[10deg]"></div>
          <div className="absolute -bottom-3 -right-6 w-16 h-6 bg-yellow-300/80 transform rotate-[-10deg]"></div>

          <div className="flex flex-col items-center text-center">
            {/* Profile picture with polaroid frame */}
            <div className="mb-6 w-36 bg-white p-2 border-2 border-gray-200 shadow-md transform rotate-[3deg]">
              <div className="relative h-36 w-32 overflow-hidden bg-amber-50">
                <img
                  src={demoBundle.profilePicture || defaultAvatar}
                  alt={demoBundle.displayName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-2 mb-1">
                <span className="text-gray-600 text-sm">
                  ✨ {demoBundle.displayName} ✨
                </span>
              </div>
            </div>

            <h1 className="text-3xl font-bold text-gray-800 mb-1">
              {demoBundle.displayName}
            </h1>

            <p className="text-gray-600 text-xl">@{demoBundle.bundleName}</p>

            {demoBundle.bio && (
              <div className="mt-4 p-4 bg-yellow-100/60 border-2 border-yellow-200 transform rotate-[1deg] max-w-xs">
                <p className="text-gray-700 text-lg">{demoBundle.bio}</p>
                {/* Decorative pushpin */}
                <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-red-500 shadow-sm"></div>
              </div>
            )}
          </div>

          <div className="mt-8 space-y-4">
            {sortedBits.map((bit, index) => (
              <a
                key={index}
                href={bit.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 w-full px-5 py-3 text-gray-700 relative overflow-hidden transform transition-transform hover:scale-[1.02] hover:rotate-[0.5deg]"
                style={{
                  transform: `rotate(${((index % 3) - 1) * 1.5}deg)`,
                  backgroundColor: [
                    "bg-pink-100",
                    "bg-blue-100",
                    "bg-green-100",
                    "bg-yellow-100",
                    "bg-purple-100",
                  ][index % 5],
                }}
              >
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full border-2 border-gray-300/30"></div>

                {bit.icon && (
                  <span className="text-xl z-10 relative text-gray-700">
                    {bit.icon}
                  </span>
                )}
                <span className="font-semibold text-xl z-10 relative">
                  {bit.title}
                </span>

                {/* Decorative arrow */}
                <div className="ml-auto z-10 relative">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-700"
                  >
                    <path
                      d="M4 12H20M20 12L14 6M20 12L14 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Paper clip */}
                {index % 2 === 0 && (
                  <div className="absolute -top-2 -right-2 w-6 h-12 border-r-4 border-t-4 border-b-4 border-gray-400 rounded-r-full transform rotate-45"></div>
                )}
              </a>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <div className="inline-block bg-gray-100 px-4 py-2 text-gray-600 transform -rotate-1 border-2 border-gray-300/50">
              <span className="text-lg">📝 Scrapbook Edition ✂️</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemoScrapbookTheme;
