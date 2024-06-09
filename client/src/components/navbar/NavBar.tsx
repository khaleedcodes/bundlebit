import WordMark from "./WordMark";
import NavLinks from "./NavLinks";
function NavBar() {
  return (
    <div className="sticky top-0 flex justify-center max-sm:hidden bg-black z-10">
      <nav className="justify-between items-center flex p-4 max-w-screen-xl w-full">
        <WordMark />
        <div className="flex items-center gap-8">
          <NavLinks />
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
