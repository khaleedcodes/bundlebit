import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import defaultAvatar from "../../assets/images/default-avatar.jpeg";

interface Bit {
  title: string;
  url: string;
  icon?: string;
  isPinned: boolean;
  order: number;
}

interface Bundle {
  bundleName: string;
  displayName: string;
  bio?: string;
  profilePicture?: string;
  bits: Bit[];
  theme?: string;
}

const PublicBundlePage = () => {
  const { username } = useParams<{ username: string }>();
  const [bundle, setBundle] = useState<Bundle | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBundle = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/bundles/${username}`
        );
        if (!res.ok) throw new Error("Bundle not found");
        const data = await res.json();
        setBundle(data);
      } catch (err) {
        console.error(err);
        setBundle(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBundle();
  }, [username]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0f0f11] to-[#16161a] text-white">
        <div className="relative">
          <div className="w-16 h-16 rounded-full border-t-4 border-l-4 border-r-4 border-indigo-500 animate-spin"></div>
          <div className="absolute inset-0 w-16 h-16 rounded-full border-b-4 border-indigo-400 opacity-30"></div>
        </div>
      </div>
    );
  }

  if (!bundle) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0f0f11] to-[#16161a] text-white px-6 text-center">
        <div className="w-24 h-24 rounded-full bg-[#1a1a1d] border border-red-500/30 flex items-center justify-center mb-6 shadow-lg shadow-red-500/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-red-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold mb-2">Bundle not found</h1>
        <p className="text-gray-400 max-w-xs">
          We couldn't find the bundle you're looking for. It may have been
          removed or doesn't exist.
        </p>
      </div>
    );
  }

  const sortedBits = [...bundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-gradient-to-b from-[#0f0f11] to-[#16161a] text-white font-['Inter',system-ui,sans-serif]">
      <div className="w-full max-w-md mx-auto transform transition-all duration-300 ease-in-out">
        <div className="bg-gradient-to-b from-[#1a1a1d]/80 to-[#1a1a1d] backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-800/80 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-600/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl"></div>

          {/* Profile section */}
          <div className="relative flex flex-col items-center text-center z-10">
            {/* Profile picture with animated border */}
            <div className="group relative">
              <img
                src={bundle.profilePicture || defaultAvatar}
                alt={bundle.displayName}
                className="w-28 h-28 rounded-full object-cover shadow-lg border-2 border-indigo-500/70 p-[2px] bg-[#0f0f11] z-10 relative"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-400 via-indigo-500 to-purple-600 blur-[2px] opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>

            {/* Name and details */}
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

          {/* Links section */}
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

          {/* Small attribution at the bottom */}
          <div className="mt-10 flex justify-center">
            <span className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
              Created with{" "}
              <a
                href="https://bundlebit.me/"
                className="text-first-blue hover:text-third-blue transition-colors text-decoration-none"
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

export default PublicBundlePage;
