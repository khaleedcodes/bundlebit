import FeaturesSections from "./FeaturesSection";
import HeroSections from "./HeroSection";
import Header from "./Header";
import BundleCardList from "./BundleCardList";
import Footer from "./Footer";
function LandingPage() {
  return (
    <div className="flex w-full justify-center ">
      <div className=" p-3 w-full h-full flex flex-col text-white">
        <Header />
        <HeroSections />
        <FeaturesSections />
        <BundleCardList />
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
