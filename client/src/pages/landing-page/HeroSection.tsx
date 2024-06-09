// import heroImage from "../../assets/images/hero-image.png";
import { Link } from "react-router-dom";
function HeroSection() {
  return (
    <div
      className=" flex items-center justify-between flex-wrap sm:justify-center gap-16"
      style={{ minHeight: "calc(100vh - 70px)" }}
    >
      <div className="flex flex-col grow basis-96 gap-10  items-center">
        <div className="flex flex-col gap-10 ">
          <p className="text-7xl max-lg:text-6xl max-md:5xl max-sm:text-4xl font-bold text-center">
            Your <span className="text-third-blue">everything</span> link to
            showcase all you do.
          </p>
          <p className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-sm text-center">
            Create your <span className="text-third-blue">Bundle</span> to
            showcase all you links
          </p>
        </div>

        <Link
          to="/signup"
          className="flex transition-all duration-300 text-white p-4 text-lg pl-4 pr-4 rounded-full font-bold bg-third-blue hover:bg-second-blue w-[300px] items-center justify-center"
        >
          Create your{" "}
          <span className="text-first-blue">&nbsp;Bundle&nbsp;</span> for free
        </Link>
      </div>
      {/* <div className="basis-96 grow max-w-[500px]">
        <img src={heroImage} />
      </div> */}
    </div>
  );
}

export default HeroSection;
