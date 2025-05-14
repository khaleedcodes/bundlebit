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

function DemoNeubrutalismTheme() {
  const sortedBits = [...demoBundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  // Generate random pastel background colors for link buttons
  const pastelColors = [
    "bg-yellow-300",
    "bg-green-300",
    "bg-blue-300",
    "bg-purple-300",
    "bg-pink-300",
    "bg-orange-300",
    "bg-teal-300",
    "bg-indigo-300",
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-[#f0f0e4] text-gray-900 font-['Plus_Jakarta_Sans',sans-serif] relative">
      {/* Large abstract shape decorations */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-300 rounded-full opacity-50"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-300 rounded-full opacity-50"></div>
      <div className="absolute top-40 right-40 w-20 h-20 bg-pink-300 rounded-full opacity-50"></div>

      <div className="w-full max-w-md mx-auto z-10 animate-[fadeIn_0.8s_ease-out]">
        <div className="bg-white px-10 py-12 rounded-xl border-4 border-gray-900 shadow-[8px_8px_0px_#000000]">
          <div className="flex flex-col items-center text-center">
            <div className="mb-8 relative">
              <div className="absolute -inset-2 bg-pink-300 rounded-full -rotate-6 shadow-[4px_4px_0px_#000000]"></div>
              <img
                src={demoBundle.profilePicture || defaultAvatar}
                alt={demoBundle.displayName}
                className="relative w-28 h-28 rounded-full object-cover border-4 border-gray-900 z-10"
              />
            </div>

            <h1 className="text-3xl font-bold text-gray-900 tracking-tight mt-2">
              {demoBundle.displayName}
            </h1>

            <p className="text-blue-600 text-sm font-semibold mt-1">
              @{demoBundle.bundleName}
            </p>

            {demoBundle.bio && (
              <div className="mt-4 inline-block bg-yellow-300 px-6 py-3 rounded-lg border-4 border-gray-900 shadow-[4px_4px_0px_#000000] transform rotate-1">
                <p className="text-gray-900 text-sm max-w-xs font-medium">
                  {demoBundle.bio}
                </p>
              </div>
            )}
          </div>

          <div className="mt-8 space-y-5">
            {sortedBits.map((bit, index) => {
              // Pick a color based on the index, cycling through the available pastel colors
              const colorClass = pastelColors[index % pastelColors.length];

              return (
                <a
                  key={index}
                  href={bit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-3 w-full px-6 py-4 rounded-xl ${colorClass} border-4 border-gray-900 hover:translate-y-[-4px] hover:translate-x-[-4px] hover:shadow-[8px_8px_0px_#000000] shadow-[4px_4px_0px_#000000] transition-all duration-200 text-gray-900 font-bold`}
                  style={{ transform: `rotate(${((index % 3) - 1) * 0.8}deg)` }}
                >
                  {bit.icon && <span className="text-xl">{bit.icon}</span>}
                  <span>{bit.title}</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-auto text-gray-900"
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
              );
            })}
          </div>

          <div className="mt-12 flex justify-center">
            <div className="inline-block bg-white px-4 py-2 border-4 border-gray-900 shadow-[4px_4px_0px_#000000] transform -rotate-2">
              <span className="text-sm font-bold">Bundlebit × 2025</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemoNeubrutalismTheme;
