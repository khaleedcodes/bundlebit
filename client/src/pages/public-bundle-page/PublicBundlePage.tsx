import { usePublicBundle } from "./usePublicBundle";
// import DefaultTheme from "./bundle-themes/DefaultTheme";
// import BrutalistTheme from "./bundle-themes/BrutalistTheme";
// import GlassTheme from "./bundle-themes/GlassTheme";
// import MatrixTheme from "./bundle-themes/MatrixTheme";
// import MinimalTheme from "./bundle-themes/MinimalTheme";
// import NeonTheme from "./bundle-themes/NeonTheme";
// import PaperTheme from "./bundle-themes/PaperTheme";
import RetroTheme from "./bundle-themes/RetroTheme";

const PublicBundlePage = () => {
  const { bundle, loading } = usePublicBundle();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-gradient-to-b from-[#0f0f11] to-[#16161a]">
        <div className="w-16 h-16 border-t-4 border-indigo-500 rounded-full animate-spin" />
      </div>
    );
  }

  if (!bundle) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white px-6 text-center bg-gradient-to-b from-[#0f0f11] to-[#16161a]">
        <div className="text-red-500 mb-4">
          <svg className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold mb-2">Bundle not found</h1>
        <p className="text-gray-400">
          This bundle does not exist or has been removed.
        </p>
      </div>
    );
  }

  // Theme switcher logic
  switch (bundle.theme) {
    case "default":
    default:
      return <RetroTheme bundle={bundle} />;
  }
};

export default PublicBundlePage;
