import { useState } from "react";

interface Link {
  id: string;
  title: string;
  url: string;
}

const LinkManager = () => {
  const [links, setLinks] = useState<Link[]>([]);
  const [newLink, setNewLink] = useState({ title: "", url: "" });

  const handleAddLink = () => {
    console.log("added");
  };

  return (
    <div className="gap-4 flex-col flex bg-first-card p-6 rounded-2xl">
      <div>
        <input
          type="text"
          placeholder="Title"
          value={newLink.title}
          onChange={(e) => setNewLink({ ...newLink, title: e.target.value })}
          className="w-full mt-1 rounded-2xl p-4 bg-[#1c1d23]"
        />
        <input
          type="url"
          placeholder="URL"
          value={newLink.url}
          onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
          className="w-full mt-1 rounded-2xl p-4 bg-[#1c1d23]"
        />
        <button
          onClick={handleAddLink}
          className="w-full py-2 mt-4 text-white bg-third-blue rounded-md hover:bg-third-blue/80"
        >
          Add Link
        </button>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-second-text-color">
          Your Links
        </h3>
        <ul className="space-y-4 mt-4">
          {links.map((link) => (
            <li key={link.id} className="flex justify-between items-center">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-third-blue hover:underline"
              >
                {link.title}
              </a>
              <button className="text-red-500">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LinkManager;
