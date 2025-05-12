import { usePublicBundle } from "./usePublicBundle";
import DefaultTheme from "./themes/DefaultTheme";
import NeonTheme from "./themes/NeonTheme";
import GlassTheme from "./themes/GlassTheme";
import BrutalistTheme from "./themes/BrutalistTheme";
import MinimalTheme from "./themes/MinimalTheme";
import RetroTheme from "./themes/RetroTheme";
import PaperTheme from "./themes/PaperTheme";
import TerminalTheme from "./themes/TerminalTheme";
import SunsetTheme from "./themes/SunsetTheme";
import MatrixTheme from "./themes/MatrixTheme";
import VaporwaveTheme from "./themes/VaporwaveTheme";
import AuroraTheme from "./themes/AuroraTheme";
import LuxeGoldTheme from "./themes/LuxeGoldTheme";
import StarfieldTheme from "./themes/StarfieldTheme";
import PastelPopTheme from "./themes/PastelPopTheme";
import SketchTheme from "./themes/SketchTheme";
import OceanDepthTheme from "./themes/OceanDepthTheme";
import NatureTheme from "./themes/NatureTheme";
import BubbleTheme from "./themes/BubbleTheme";
import CyberGradientTheme from "./themes/CyberGradientTheme";
import ZenTheme from "./themes/ZenTheme";
import FestivalTheme from "./themes/FestivalTheme";
import FireflyTheme from "./themes/FireflyTheme";
import WatercolorTheme from "./themes/WatercolorTheme";
import LavaLampTheme from "./themes/LavaLampTheme";
import MinimalWhiteTheme from "./themes/MinimalWhiteTheme";
import GradientGlassTheme from "./themes/GradientGlassTheme";
import FuturisticGridTheme from "./themes/FuturisticGridTheme";
import VHSTheme from "./themes/VHSTheme";
import HolographicTheme from "./themes/HolographicTheme";
import FoilShimmerTheme from "./themes/FoilShimmerTheme";
import DiamondTheme from "./themes/DiamondTheme";
import PixelArtTheme from "./themes/PixelArtTheme";
import MagazineTheme from "./themes/MagazineTheme";
import SynthwaveTheme from "./themes/SynthwaveTheme";
import NeubrutalismTheme from "./themes/NeubrutalismTheme";
import GlassmorphismTheme from "./themes/GlassmorphismTheme";
import GalacticNightTheme from "./themes/GalacticNightTheme";
import FloatingIslandTheme from "./themes/FloatingIslandTheme";
import DuotoneTheme from "./themes/DuotoneTheme";
import CyberneticTheme from "./themes/CyberneticTheme";
import ScrapbookTheme from "./themes/ScrapbookTheme";
import ArcadeTheme from "./themes/ArcadeTheme";
import OutrunTheme from "./themes/OutrunTheme";
import AbsoluteTheme from "./themes/AbsoluteTheme";
import TopographyTheme from "./themes/TopographyTheme";
import ViceCityTheme from "./themes/ViceCityTheme";
import MinecraftTheme from "./themes/MinecraftTheme";
import TikTokGlowTheme from "./themes/TitTokGlowTheme";
import DiscordTheme from "./themes/DiscordTheme";
import GlitchcoreTheme from "./themes/GlitchcoreTheme";

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
      return <GlitchcoreTheme bundle={bundle} />;
  }
};

export default PublicBundlePage;
