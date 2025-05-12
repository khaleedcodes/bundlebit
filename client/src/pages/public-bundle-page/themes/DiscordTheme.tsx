import { Bundle } from "../usePublicBundle";
import defaultAvatar from "../../../assets/images/default-avatar.jpeg";

interface DiscordThemeProps {
  bundle: Bundle;
}

const DiscordTheme: React.FC<DiscordThemeProps> = ({ bundle }) => {
  const sortedBits = [...bundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-[#36393f] text-white font-['gg_sans',sans-serif] relative overflow-hidden">
      {/* Discord-inspired background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Discord background color */}
        <div className="absolute inset-0 bg-[#36393f]"></div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGZpbHRlciBpZD0iYSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSI+PGZlVHVyYnVsZW5jZSBiYXNlRnJlcXVlbmN5PSIuMDUiIG51bU9jdGF2ZXM9IjIiIHN0aXRjaFRpbGVzPSJzdGl0Y2giIHR5cGU9ImZyYWN0YWxOb2lzZSIvPjxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAxIDAgMCAwIDAgMSAwIDAgMCAwIDEgMCAwIDAgMC4zIDAiLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjYSkiLz48L3N2Zz4=')]"></div>

        {/* Discord-like blurple accent */}
        <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#5865f2]/20 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-[#5865f2]/20 blur-3xl"></div>
      </div>

      <div className="w-full max-w-md mx-auto z-10 animate-[fadeIn_0.3s_ease-out]">
        {/* Discord UI container */}
        <div className="bg-[#2f3136] rounded-lg shadow-lg overflow-hidden">
          {/* Server header */}
          <div className="bg-[#202225] px-4 py-3 border-b border-[#1e1f22] flex items-center">
            <svg
              width="28"
              height="20"
              viewBox="0 0 28 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.0212 1.67671C21.3107 0.879656 19.5079 0.318797 17.6584 0C17.4062 0.461742 17.1749 0.934541 16.9708 1.4184C15.003 1.12145 12.9974 1.12145 11.0283 1.4184C10.819 0.934541 10.589 0.461744 10.3368 0.00546311C8.48074 0.324393 6.67795 0.885118 4.96746 1.68231C1.56727 6.77853 0.649666 11.7538 1.11317 16.652C3.10022 18.1418 5.3262 19.2743 7.69304 20C8.22237 19.2743 8.69795 18.4993 9.11147 17.691C8.32300 17.3997 7.57091 17.0424 6.86648 16.6135C7.06091 16.4762 7.24954 16.3387 7.43104 16.1847C11.5496 18.1749 16.052 18.1749 20.1284 16.1847C20.3099 16.3332 20.5154 16.4762 20.7029 16.6135C19.9818 17.0369 19.2756 17.3997 18.447 17.691C18.8856 18.4993 19.3362 19.2689 19.8672 19.9945C22.234 19.2689 24.4755 18.1364 26.4571 16.652C26.9867 11.0897 25.6115 6.15656 23.0212 1.67671ZM9.68041 13.6383C8.39754 13.6383 7.34085 12.4453 7.34085 10.994C7.34085 9.54272 8.37155 8.34973 9.68041 8.34973C10.9893 8.34973 12.0395 9.54272 12.0187 10.994C12.0187 12.4453 10.9828 13.6383 9.68041 13.6383ZM18.3161 13.6383C17.0332 13.6383 15.9765 12.4453 15.9765 10.994C15.9765 9.54272 17.0122 8.34973 18.3161 8.34973C19.6404 8.34973 20.6861 9.54272 20.6666 10.994C20.6666 12.4453 19.6404 13.6383 18.3161 13.6383Z"
                fill="#5865f2"
              />
            </svg>
            <div className="ml-2 font-medium">Discord Profile</div>

            {/* Discord notification counter */}
            <div className="ml-auto flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-[#5865f2] flex items-center justify-center text-xs">
                3
              </div>
            </div>
          </div>

          {/* User profile section */}
          <div className="bg-[#36393f] p-6">
            {/* Banner - Discord style */}
            <div className="h-24 rounded-t-lg bg-gradient-to-r from-[#5865f2] to-[#b280ff] mb-16 relative">
              {/* User avatar - Discord style */}
              <div className="absolute -bottom-14 left-6 w-[84px] h-[84px] rounded-full bg-[#36393f] p-1">
                <img
                  src={bundle.profilePicture || defaultAvatar}
                  alt={bundle.displayName}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>

            {/* Discord profile card */}
            <div className="bg-[#202225] rounded-lg p-4 mb-6">
              {/* Discord badge row */}
              <div className="flex mb-3">
                <div className="px-2 py-0.5 bg-[#5865f2] rounded-md text-xs font-medium">
                  Online
                </div>
                {/* Discord Nitro badge */}
                <div className="ml-2 px-2 py-0.5 bg-[#ff73fa]/10 text-[#ff73fa] rounded-md text-xs font-medium flex items-center">
                  <svg
                    className="w-3 h-3 mr-1"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M2.98966977,9.35789159 C2.98966977,9.77582472 3.2519663,10.0400862 3.68,10.0400862 L5.87773117,10.0400862 L11.2670967,23.9385247 L20,10 L7.5,10 C7.06866984,10 6.80677917,9.72618016 6.80677917,9.3203125 L6.80677917,3.82238694 C6.80677917,3.43930176 7.06866984,3.16204398 7.5,3.16204398 L19,3.16204398 L18.2310643,0.894918793 L5.56209276,0.894918793 C4.08677034,0.894918793 2.89033023,2.09135893 2.89033023,3.57584633 L2.98966977,9.35789159 Z" />
                  </svg>
                  <span>Nitro</span>
                </div>
              </div>

              {/* Username with Discord tag */}
              <div className="flex items-baseline">
                <h1 className="text-xl font-semibold text-white">
                  {bundle.displayName}
                </h1>
                <span className="ml-1 text-gray-400 text-sm">
                  #{Math.floor(1000 + Math.random() * 9000)}
                </span>
              </div>

              <div className="text-[#989aa2] text-sm mt-1">
                @{bundle.bundleName}
              </div>

              {/* Discord about me section */}
              {bundle.bio && (
                <div className="mt-4">
                  <h3 className="uppercase text-xs font-bold text-[#989aa2] mb-1">
                    ABOUT ME
                  </h3>
                  <p className="text-sm text-[#dbdee1]">{bundle.bio}</p>
                </div>
              )}
            </div>
          </div>

          {/* Discord connected links section */}
          <div className="px-6 py-4 bg-[#2f3136]">
            <h3 className="uppercase text-xs font-bold text-[#989aa2] mb-3">
              CONNECTIONS
            </h3>

            <div className="space-y-2">
              {sortedBits.map((bit, index) => (
                <a
                  key={index}
                  href={bit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 w-full p-3 bg-[#36393f] hover:bg-[#4f545c]/20 rounded-md transition-colors duration-200 animate-[slideIn_0.3s_ease-out_forwards]"
                  style={{
                    animationDelay: `${index * 0.05}s`,
                    opacity: 0,
                    transform: "translateY(10px)",
                  }}
                >
                  <div className="w-8 h-8 rounded-full bg-[#5865f2] flex items-center justify-center text-white">
                    {bit.icon || (
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.75 1a.75.75 0 0 1 .75.75V8a.5.5 0 0 0 1 0V5.467l.086-.004c.317-.012.637-.008.816.027.134.027.294.096.448.182.077.042.15.147.15.314V8a.5.5 0 1 0 1 0V6.435a4.9 4.9 0 0 1 .106-.01c.316-.024.584-.01.708.04.118.046.3.207.486.43.081.096.15.19.2.259V8.5a.5.5 0 0 0 1 0v-1h.342a1 1 0 0 1 .995 1.1l-.271 2.715a2.5 2.5 0 0 1-.517 1.296C11.225 13.5 9.5 14 8 14a.5.5 0 1 0 0 1 3.5 3.5 0 0 0 2.525-1.072l.29.3a1.5 1.5 0 0 0 2.128 0 .506.506 0 0 0 .043-.58 4.566 4.566 0 0 0-.582-.99.503.503 0 0 0-.196-.583 4.85 4.85 0 0 1-.315-.28l-.043-.05a2.5 2.5 0 0 0-.238-.235 5.205 5.205 0 0 0-.252-.93 4.5 4.5 0 0 0-.319-1.238.5.5 0 0 0-.876.137v2.245a.75.75 0 0 1-1.5 0v-2.5a.5.5 0 0 0-1 0v1.116c-.13.09-.269.16-.415.202-.487.14-.887.028-1.22-.043-.223-.047-.398-.118-.55-.176v.92a.75.75 0 0 1-1.5 0v-3.22a.5.5 0 0 0-.223-.416C5.636 5.641 5.27 5.48 4.89 5.357c-.386-.125-.894-.30-1.458-.026a5.55 5.55 0 0 0-.8.212.75.75 0 0 1-.932-.513 1.49 1.49 0 0 1 .51-1.753C2.835 2.8 3.997 2.534 5 2.5c.783-.022 1.55.135 2.25.406v-.156a1.75 1.75 0 0 1 1.75-1.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v.313a7.54 7.54 0 0 1 1.755-.399 1.5 1.5 0 0 1 .118 2.985c-.502.04-.92.142-1.272.262a5.97 5.97 0 0 0-.53.213.75.75 0 0 1-.323.07z" />
                      </svg>
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="text-sm font-medium text-white">
                      {bit.title}
                    </div>
                    <div className="text-xs text-[#989aa2]">
                      Connected Account
                    </div>
                  </div>

                  {/* Verify badge */}
                  <div className="text-[#989aa2] group-hover:text-[#5865f2] transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Discord-style user bar */}
          <div className="bg-[#202225] p-2 flex items-center">
            <div className="w-8 h-8 rounded-full bg-[#5865f2] flex items-center justify-center text-white text-xs mr-2">
              {bundle.displayName.charAt(0).toUpperCase()}
            </div>
            <div className="text-sm font-medium">{bundle.displayName}</div>

            {/* Discord icons */}
            <div className="ml-auto flex space-x-2 text-[#989aa2]">
              <div className="w-7 h-7 rounded-full hover:bg-[#36393f] flex items-center justify-center transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                </svg>
              </div>
              <div className="w-7 h-7 rounded-full hover:bg-[#36393f] flex items-center justify-center transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                  <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" />
                </svg>
              </div>
              <div className="w-7 h-7 rounded-full hover:bg-[#36393f] flex items-center justify-center transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animation */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `,
        }}
      />
    </div>
  );
};

export default DiscordTheme;
