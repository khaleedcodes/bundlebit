import { SideBarProps } from "../../types/types";
import AvatarCard from "./AvatarCard";
import SideBarLinkList from "./SideBarLinkList";

function SideBar({ switchTab }: SideBarProps) {
  return (
    <div className="h-full flex flex-col gap-8 p-10 w-full min-w-56">
      <AvatarCard />
      <SideBarLinkList switchTab={switchTab} />
    </div>
  );
}

export default SideBar;
