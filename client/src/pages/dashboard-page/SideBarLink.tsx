import { SideBarLinkProps } from "../../types/types";
function SideBarLink({ switchTab, tabName }: SideBarLinkProps) {
  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        switchTab(tabName);
      }}
    >
      {tabName}
    </div>
  );
}

export default SideBarLink;
