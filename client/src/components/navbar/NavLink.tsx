import type { NavLinkProp } from "../../types/types";
import { Link } from "react-router-dom";

function NavLink({ type, linkName, link }: NavLinkProp) {
  return (
    <div className="">
      {type === "login" ? (
        <a
          href={link}
          className="transition-all duration-300 text-white hover:border-b-third-blue border-transparent border-b-2 pb-1"
        >
          {linkName}
        </a>
      ) : (
        <Link
          to={link}
          className="transition-all duration-300 text-white p-2 pl-4 pr-4 rounded-2xl bg-third-blue hover:bg-second-blue"
        >
          {linkName}
        </Link>
      )}
    </div>
  );
}

export default NavLink;
