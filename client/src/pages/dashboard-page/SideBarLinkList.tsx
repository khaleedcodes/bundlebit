import { SideBarLinkType } from "../../types/types";
import { SideBarLinkListProps } from "../../types/types";
import SideBarLink from "./SideBarLink";
const sideBarLinks: SideBarLinkType[] = [
  { tabName: "My Bundle" },
  { tabName: "Dashboard" },
];

function SideBarLinkList({ switchTab }: SideBarLinkListProps) {
  return (
    <div className="gap-4 flex flex-col max-sm:flex-row max-sm:items-center">
      {sideBarLinks.map(({ tabName }, index) => {
        return (
          <SideBarLink tabName={tabName} switchTab={switchTab} key={index} />
        );
      })}
    </div>
  );
}

export default SideBarLinkList;
