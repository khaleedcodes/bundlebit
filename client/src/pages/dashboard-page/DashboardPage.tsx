import { TabType } from "../../types/types";
import { useState } from "react";
import DashboardScreen from "./DashboardScreen";
import BlogScreen from "./BlogScreen";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

function DashboardPage() {
  const [tab, setTab] = useState<TabType>("Dashboard");
  function switchTab(tabName: TabType) {
    setTab(tabName);
  }
  return (
    <div className="flex w-full max-sm:flex-col bg-first-primary text-second-primary h-screen">
      <div className="border-b border-b-first-section-divider sm:hidden">
        <TopBar switchTab={switchTab} />
      </div>
      <div className="border-r border-r-first-section-divider max-sm:hidden">
        <SideBar switchTab={switchTab} />
      </div>
      <div className="w-full p-10 max-sm:p-4">
        {tab === "Dashboard" ? <DashboardScreen /> : <BlogScreen />}
      </div>
    </div>
  );
}

export default DashboardPage;
