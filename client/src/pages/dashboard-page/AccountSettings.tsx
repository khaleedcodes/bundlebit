import { useState } from "react";

const AccountSettings = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSave = () => {
    // Handle save logic
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-second-text-color">
        Account Settings
      </h3>
      <div>
        <label className="block text-sm font-semibold text-second-text-color">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mt-1 border border-second-section-divider rounded-md bg-first-primary text-second-text-color"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-second-text-color">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mt-1 border border-second-section-divider rounded-md bg-first-primary text-second-text-color"
        />
      </div>
      <button
        onClick={handleSave}
        className="w-full py-2 mt-4 text-white bg-third-blue rounded-md hover:bg-third-blue/80"
      >
        Save Changes
      </button>
    </div>
  );
};

export default AccountSettings;
