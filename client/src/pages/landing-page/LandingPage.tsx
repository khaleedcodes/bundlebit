import FeaturesSection from "./FeaturesSection";
import HeroSection from "./HeroSection";
import UsersSection from "./UsersSection";

function LandingPage() {
  return (
    <div className="flex w-full justify-center ">
      <div className=" p-3 max-w-screen-xl w-full h-full flex flex-col text-white gap-32">
        <HeroSection />
        <FeaturesSection />
        <UsersSection/>
      </div>
    </div>
  );
}

export default LandingPage;
