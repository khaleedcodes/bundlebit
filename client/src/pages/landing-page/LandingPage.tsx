import FeaturesSection from "./FeaturesSection";
import HeroSection from "./HeroSection";
import Header from "./Header";
import BundleCardList from "./BundleCardList";
import Footer from "./Footer";
import FaqSection from "./FaqSection";
function LandingPage() {
  return (
    <div className="flex w-full justify-center ">
      <div className=" p-3 w-full h-full flex flex-col text-white">
        <Header />
        <HeroSection />
        <FeaturesSection />
        <BundleCardList />
        <FaqSection/>
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
