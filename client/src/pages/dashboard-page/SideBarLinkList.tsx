import { SideBarLinkType } from "../../types/types";
import { SideBarLinkListProps } from "../../types/types";
import SideBarLink from "./SideBarLink";
const sideBarLinks: SideBarLinkType[] = [
  { tabName: "My Bundle" },
  // { tabName: "Dashboard" },
];
import { useAuth } from "../../context/AuthContext";

function SideBarLinkList({ switchTab }: SideBarLinkListProps) {
  const { logout } = useAuth();
  return (
    <div className="gap-4 flex flex-col max-md:flex-row max-md:items-center">
      {sideBarLinks.map(({ tabName }, index) => {
        return (
          <SideBarLink tabName={tabName} switchTab={switchTab} key={index} />
        );
      })}
      <div>
        <button
          onClick={() => {
            logout();
          }}
        >
          logout
        </button>
      </div>
    </div>
  );
}

export default SideBarLinkList;
