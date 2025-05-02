import NavLink from "./NavLink";
import { LinkType } from "../../types/types";
function NavLinks() {
  const links: LinkType[] = [
    { type: "login", linkName: "Log in", link: "b/login" },
    { type: "getstarted", linkName: "Get started for free", link: "/b/signup" },
  ];
  return (
    <div className="flex gap-6 max-sm:justify-center">
      {links.map(({ type, linkName, link }, index) => {
        return (
          <NavLink type={type} linkName={linkName} link={link} key={index} />
        );
      })}
    </div>
  );
}

export default NavLinks;
