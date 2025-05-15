import { TabType } from "../../types/types";
import { useState } from "react";
// import DashboardScreen from "./screens/DashboardScreen";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import MyBundleScreen from "./screens/MyBundleScreen";

function DashboardPage() {
  const [tab, setTab] = useState<TabType>("My Bundle");
  function switchTab(tabName: TabType) {
    setTab(tabName);
  }
  return (
    <div className="flex w-full max-md:flex-col bg-first-primary text-second-primary min-h-screen">
      <div className="border-b border-b-first-section-divider md:hidden">
        <TopBar switchTab={switchTab} />
      </div>
      <div className="border-r border-r-first-section-divider max-md:hidden">
        <SideBar switchTab={switchTab} />
      </div>
      <div className="w-full p-10 max-sm:p-4">
        {tab === "My Bundle" && <MyBundleScreen />}
        {/* {tab === "My Bundle" ? <MyBundleScreen /> : <DashboardScreen />} */}
      </div>
    </div>
  );
}

export default DashboardPage;
