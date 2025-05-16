import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import BitItem from "./BitItem";
import { PropagateLoader } from "react-spinners";

interface Bit {
  _id: string;
  title: string;
  url: string;
  isPinned: boolean;
  order: number;
}

const BitManager = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const { token } = useAuth();

  const [bits, setBits] = useState<Bit[]>([]);
  const [newBit, setNewBit] = useState({ title: "", url: "" });

  async function getBits() {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/bundles/me/bits`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    setBits(data.bits);
  }

  useEffect(() => {
    if (token) getBits();
  }, [token]);

  const urlPattern =
    /^(https?:\/\/)([\w-]+\.)+[\w-]{2,}(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!urlPattern.test(newBit.url)) {
      setMessage("Please enter a valid URL");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/bundles/me/bits`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newBit),
      });
      const data = await res.json();
      if (res.ok) {
        setNewBit({ title: "", url: "" });
        getBits();
      }
      setMessage(data.message);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!message) return;

    const timeout = setTimeout(() => {
      setMessage("");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [message]);

  return (
    <div className="gap-8 flex-col flex bg-first-card p-6 rounded-2xl">
      <form onSubmit={handleSubmit} className="gap-4 flex-col flex">
        <input
          type="text"
          placeholder="Title"
          value={newBit.title}
          onChange={(e) => setNewBit({ ...newBit, title: e.target.value })}
          className="w-full mt-1 rounded-2xl p-4 bg-[#1c1d23]"
          required
        />
        <input
          type="text"
          placeholder="URL"
          value={newBit.url}
          onChange={(e) => setNewBit({ ...newBit, url: e.target.value })}
          className="w-full mt-1 rounded-2xl p-4 bg-[#1c1d23]"
          required
        />
        {message && (
          <div className="text-third-blue text-center transition-opacity duration-300">
            {message}
          </div>
        )}

        <button
          disabled={loading}
          type="submit"
          style={{
            cursor: loading ? "not-allowed" : "pointer",
          }}
          className={`bg-third-blue h-11 disabled:bg-second-blue hover:bg-second-blue transition-all duration-150 p-3 text-white font-bold rounded-md w-full`}
        >
          {loading ? (
            <div className="h-full flex items-center justify-center pb-2">
              <PropagateLoader size={10} color="#fff" />
            </div>
          ) : (
            <p className="h-full flex items-center justify-center">Add Bit</p>
          )}
        </button>
      </form>
      <div className="bg-first-primary h-[2px]"></div>
      <div>
        {bits && (
          <ul className="flex flex-col gap-4">
            {bits.map(({ _id, title, url }) => (
              <BitItem
                _id={_id}
                title={title}
                url={url}
                getBits={getBits}
                key={_id}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default BitManager;
