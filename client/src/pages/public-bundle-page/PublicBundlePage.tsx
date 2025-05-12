import { usePublicBundle } from "./usePublicBundle";
import AbsoluteTheme from "./themes/AbsoluteTheme";
import ArcadeTheme from "./themes/ArcadeTheme";
import AuroraTheme from "./themes/AuroraTheme";
import BrutalistTheme from "./themes/BrutalistTheme";
import BubbleTheme from "./themes/BubbleTheme";
import CyberGradientTheme from "./themes/CyberGradientTheme";
import CyberneticTheme from "./themes/CyberneticTheme";
import DefaultTheme from "./themes/DefaultTheme";
import DiamondTheme from "./themes/DiamondTheme";
import DiscordTheme from "./themes/DiscordTheme";
import DuotoneTheme from "./themes/DuotoneTheme";
import FestivalTheme from "./themes/FestivalTheme";
import FireflyTheme from "./themes/FireflyTheme";
import FloatingIslandTheme from "./themes/FloatingIslandTheme";
import FoilShimmerTheme from "./themes/FoilShimmerTheme";
import FuturisticGridTheme from "./themes/FuturisticGridTheme";
import GalacticNightTheme from "./themes/GalacticNightTheme";
import GlassTheme from "./themes/GlassTheme";
import GlassmorphismTheme from "./themes/GlassmorphismTheme";
import GlitchcoreTheme from "./themes/GlitchcoreTheme";
import GradientGlassTheme from "./themes/GradientGlassTheme";
import HolographicTheme from "./themes/HolographicTheme";
import LavaLampTheme from "./themes/LavaLampTheme";
import LuxeGoldTheme from "./themes/LuxeGoldTheme";
import MagazineTheme from "./themes/MagazineTheme";
import MatrixTheme from "./themes/MatrixTheme";
import MinimalTheme from "./themes/MinimalTheme";
import MinimalWhiteTheme from "./themes/MinimalWhiteTheme";
import MinecraftTheme from "./themes/MinecraftTheme";
import NatureTheme from "./themes/NatureTheme";
import NeonTheme from "./themes/NeonTheme";
import NeubrutalismTheme from "./themes/NeubrutalismTheme";
import OceanDepthTheme from "./themes/OceanDepthTheme";
import OutrunTheme from "./themes/OutrunTheme";
import PaperTheme from "./themes/PaperTheme";
import PastelPopTheme from "./themes/PastelPopTheme";
import PixelArtTheme from "./themes/PixelArtTheme";
import RetroTheme from "./themes/RetroTheme";
import ScrapbookTheme from "./themes/ScrapbookTheme";
import SketchTheme from "./themes/SketchTheme";
import StarfieldTheme from "./themes/StarfieldTheme";
import SunsetTheme from "./themes/SunsetTheme";
import SynthwaveTheme from "./themes/SynthwaveTheme";
import TerminalTheme from "./themes/TerminalTheme";
import TikTokGlowTheme from "./themes/TitTokGlowTheme";
import TopographyTheme from "./themes/TopographyTheme";
import VHSTheme from "./themes/VHSTheme";
import VaporwaveTheme from "./themes/VaporwaveTheme";
import ViceCityTheme from "./themes/ViceCityTheme";
import WatercolorTheme from "./themes/WatercolorTheme";
import ZenTheme from "./themes/ZenTheme";

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
    case "absolute":
      return <AbsoluteTheme bundle={bundle} />;
    case "arcade":
      return <ArcadeTheme bundle={bundle} />;
    case "aurora":
      return <AuroraTheme bundle={bundle} />;
    case "brutalist":
      return <BrutalistTheme bundle={bundle} />;
    case "bubble":
      return <BubbleTheme bundle={bundle} />;
    case "cybergradient":
      return <CyberGradientTheme bundle={bundle} />;
    case "cybernetic":
      return <CyberneticTheme bundle={bundle} />;
    case "diamond":
      return <DiamondTheme bundle={bundle} />;
    case "discord":
      return <DiscordTheme bundle={bundle} />;
    case "duotone":
      return <DuotoneTheme bundle={bundle} />;
    case "festival":
      return <FestivalTheme bundle={bundle} />;
    case "firefly":
      return <FireflyTheme bundle={bundle} />;
    case "floatingisland":
      return <FloatingIslandTheme bundle={bundle} />;
    case "foilshimmer":
      return <FoilShimmerTheme bundle={bundle} />;
    case "futuristicgrid":
      return <FuturisticGridTheme bundle={bundle} />;
    case "galacticnight":
      return <GalacticNightTheme bundle={bundle} />;
    case "glass":
      return <GlassTheme bundle={bundle} />;
    case "glassmorphism":
      return <GlassmorphismTheme bundle={bundle} />;
    case "glitchcore":
      return <GlitchcoreTheme bundle={bundle} />;
    case "gradientglass":
      return <GradientGlassTheme bundle={bundle} />;
    case "holographic":
      return <HolographicTheme bundle={bundle} />;
    case "lavalamp":
      return <LavaLampTheme bundle={bundle} />;
    case "luxegold":
      return <LuxeGoldTheme bundle={bundle} />;
    case "magazine":
      return <MagazineTheme bundle={bundle} />;
    case "matrix":
      return <MatrixTheme bundle={bundle} />;
    case "minimal":
      return <MinimalTheme bundle={bundle} />;
    case "minimalwhite":
      return <MinimalWhiteTheme bundle={bundle} />;
    case "minecraft":
      return <MinecraftTheme bundle={bundle} />;
    case "nature":
      return <NatureTheme bundle={bundle} />;
    case "neon":
      return <NeonTheme bundle={bundle} />;
    case "neubrutalism":
      return <NeubrutalismTheme bundle={bundle} />;
    case "oceandepth":
      return <OceanDepthTheme bundle={bundle} />;
    case "outrun":
      return <OutrunTheme bundle={bundle} />;
    case "paper":
      return <PaperTheme bundle={bundle} />;
    case "pastelpop":
      return <PastelPopTheme bundle={bundle} />;
    case "pixelart":
      return <PixelArtTheme bundle={bundle} />;
    case "retro":
      return <RetroTheme bundle={bundle} />;
    case "scrapbook":
      return <ScrapbookTheme bundle={bundle} />;
    case "sketch":
      return <SketchTheme bundle={bundle} />;
    case "starfield":
      return <StarfieldTheme bundle={bundle} />;
    case "sunset":
      return <SunsetTheme bundle={bundle} />;
    case "synthwave":
      return <SynthwaveTheme bundle={bundle} />;
    case "terminal":
      return <TerminalTheme bundle={bundle} />;
    case "tiktokglow":
      return <TikTokGlowTheme bundle={bundle} />;
    case "topography":
      return <TopographyTheme bundle={bundle} />;
    case "vaporwave":
      return <VaporwaveTheme bundle={bundle} />;
    case "vicecity":
      return <ViceCityTheme bundle={bundle} />;
    case "vhs":
      return <VHSTheme bundle={bundle} />;
    case "watercolor":
      return <WatercolorTheme bundle={bundle} />;
    case "zen":
      return <ZenTheme bundle={bundle} />;
    case "default":
    default:
      return <DefaultTheme bundle={bundle} />;
  }
};

export default PublicBundlePage;
