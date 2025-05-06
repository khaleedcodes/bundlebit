import { SideBarProps } from "../../types/types";
import AvatarCard from "./AvatarCard";
import SideBarLinkList from "./SideBarLinkList";
import { useAuth } from "../../context/AuthContext";

function SideBar({ switchTab }: SideBarProps) {
  const { logout } = useAuth();

  return (
    <div className="h-full flex flex-col gap-8 p-10 w-full min-w-56">
      <AvatarCard />
      <SideBarLinkList switchTab={switchTab} />
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

export default SideBar;
