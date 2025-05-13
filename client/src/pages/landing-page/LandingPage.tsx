import FeaturesSection from "./FeaturesSection";
import HeroSection from "./HeroSection";
import Header from "./Header";
import BundleCardList from "./BundleCardList";
import Footer from "./Footer";
// import DemoBundlePreview from "./DemoBundlePreview";
function LandingPage() {
  return (
    <div className="flex w-full justify-center bg-black">
      <div className=" p-3 w-full h-full flex flex-col text-white">
        {/* <DemoBundlePreview/> */}
        <Header />
        <HeroSection />
        <FeaturesSection />
        <BundleCardList />
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
