import { PageLayoutProp } from "../types/types";
// import NavBar from "../components/navbar/NavBar";
// import Footer from "../components/footer/Footer";
// import MobileNavBar from "../components/navbar/MobileNavBar";

function PageLayout({ children }: PageLayoutProp) {
  return (
    <div className="flex flex-col bg-black gap-6">
      {/* <NavBar /> */}
      {/* <MobileNavBar /> */}
      {children}
      {/* <Footer /> */}
    </div>
  );
}

export default PageLayout;
