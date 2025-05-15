import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import BitManager from "../BitManager";
import { Copy } from "lucide-react";
// import ProfileForm from "../ProfileForm";

function MyBundleScreen() {
  const { user } = useAuth();

  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(`https://bundlebit.me/${user.username}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // clear after 2s
  };

  return (
    <div className="h-full overflow-y-scroll scrollbar-hidden-until-overflow flex justify-center items-center">
      <div className="h-[90%] w-full max-w-[800px] flex flex-col gap-8">
        <div className="w-full flex bg-first-card rounded-xl p-4 items-center gap-4 justify-between max-lg:flex-col">
          <p className="text-white text-center">
            🎉 Your Bundle is live:{" "}
            <a
              href={`https://bundlebit.me/${user.username}`}
              className="underline text-first-blue hover:text-third-blue"
            >
              bundlebit.me/{user.username}
            </a>
          </p>
          <button
            onClick={copyToClipboard}
            className="bg-green-600 disabled:bg-green-400 hover:bg-green-500 transition-all duration-150 px-3 py-2 text-white font-bold rounded-full flex items-center justify-center gap-2"
          >
            <Copy size={17} className="text-white" />
            {copied ? <div>Link copied!</div> : <div>Copy Your Bundle URL</div>}
          </button>
        </div>
        {/* <ProfileForm /> */}
        <BitManager />
      </div>
    </div>
  );
}

export default MyBundleScreen;
