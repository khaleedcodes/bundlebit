const Analytics = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-second-text-color">
        Analytics
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 bg-first-card rounded-lg">
          <h4 className="text-sm font-semibold text-second-text-color">
            Total Views
          </h4>
          <p className="text-xl font-bold text-second-text-color">1,234</p>
        </div>
        <div className="p-4 bg-first-card rounded-lg">
          <h4 className="text-sm font-semibold text-second-text-color">
            Link Clicks
          </h4>
          <p className="text-xl font-bold text-second-text-color">567</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
