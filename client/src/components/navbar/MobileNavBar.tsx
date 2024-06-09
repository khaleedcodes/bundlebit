import { useEffect, useState } from "react";
import HamburgerButton from "./HamburgerButton";
import NavLinks from "./NavLinks";
import WordMark from "./WordMark";

function MobileNavBar() {
  const [isLinkActive, setIsLinkActive] = useState(false);
  function toggleIsLinkActive() {
    setIsLinkActive((isLinkActive) => !isLinkActive);
  }
  function toggleIsLinkActiveScroll() {
    if (isLinkActive) {
      toggleIsLinkActive();
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", toggleIsLinkActiveScroll);
    return () => {
      window.removeEventListener("scroll", toggleIsLinkActiveScroll);
    };
  });

  return (
    <div className="flex justify-center sm:hidden sticky top-0 overflow-hidden z-10 bg-black">
      <nav
        className={`flex p-4 flex-col max-w-7xl w-full transition-all gap-3 duration-300 ${
          isLinkActive ? "h-[110px]" : "h-[53px]"
        }`}
      >
        <div className="flex gap-5 items-center w-full justify-between">
          <WordMark />
          <HamburgerButton onClick={toggleIsLinkActive} />
        </div>
        <NavLinks />
      </nav>
    </div>
  );
}

export default MobileNavBar;
