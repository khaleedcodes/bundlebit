import AccountSettings from "../AccountSettings";
import Analytics from "../Analytics";
import ThemeToggle from "../ThemeToggle";
function DashboardScreen() {
  return (
    <div className="h-full flex flex-col gap-6">
      <ThemeToggle />
      <Analytics />
      <AccountSettings />
    </div>
  );
}

export default DashboardScreen;
