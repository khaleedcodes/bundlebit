import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";

interface Bit {
  _id: string;
  title: string;
  url: string;
  isPinned: boolean;
  order: number;
}

const BitManager = () => {
  const { token } = useAuth();

  const [bits, setBits] = useState<Bit[]>([]);
  const [newBit, setNewBit] = useState({ title: "", url: "" });

  async function getBits() {
    const res = await fetch("http://localhost:5000/api/bundles/me/bits", {
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/bundles/me/bits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newBit),
    });
    console.log(res);
    if (res.ok) {
      setNewBit({ title: "", url: "" });
      getBits();
    }
  };

  return (
    <div className="gap-4 flex-col flex bg-first-card p-6 rounded-2xl">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={newBit.title}
          onChange={(e) => setNewBit({ ...newBit, title: e.target.value })}
          className="w-full mt-1 rounded-2xl p-4 bg-[#1c1d23]"
        />
        <input
          type="url"
          placeholder="URL"
          value={newBit.url}
          onChange={(e) => setNewBit({ ...newBit, url: e.target.value })}
          className="w-full mt-1 rounded-2xl p-4 bg-[#1c1d23]"
        />
        <button
          type="submit"
          className="w-full py-2 mt-4 text-white bg-third-blue rounded-md hover:bg-third-blue/80"
        >
          Add Bit
        </button>
      </form>
      <div>
        <h3 className="text-lg font-semibold text-second-text-color">
          Your Bits
        </h3>
        {bits && (
          <ul className="space-y-4 mt-4">
            {bits.map((bit) => (
              <li key={bit._id} className="flex justify-between items-center">
                <a
                  href={bit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-third-blue hover:underline"
                >
                  {bit.title}
                </a>
                <button className="text-red-500">Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default BitManager;
