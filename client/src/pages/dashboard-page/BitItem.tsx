// import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import type { bitItemProps } from "../../types/types";
import { Trash } from "lucide-react";
// import { Eye, Pen } from "lucide-react";
// import { UserCircle } from "lucide-react";

function BitItem({ _id, title, url, getBits }: bitItemProps) {
  // const [isTitleEdit, setIsTitleEdit] = useState(false);

  const { token } = useAuth();

  async function handleDelete(bitID: string) {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/bundles/me/bits/${bitID}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (res.ok) {
      getBits();
    }

    const data = await res.json();
    console.log(data.message);
  }
  return (
    <li
      key={_id}
      className="flex justify-between items-center bg-[#1c1d23] p-6 rounded-2xl"
    >
      <div className="flex w-full gap-4 items-center">
        {/* <UserCircle size={32} className="text-second-icon" /> */}
        <div className="flex w-full flex-col gap-3">
          <div className="gap-2 justify-between flex">
            <div className="flex gap-2">
              <div className="flex">
                {/* {isTitleEdit ? (
                  <input
                    type="text"
                    className="bg-transparent border"
                    value={title}
                  />
                ) : (
                  <p>{title}</p>
                )} */}
                <p className="sm:hidden">
                  {title.length > 25 ? `${title.substring(0, 25)}...` : title}
                </p>
                <p className="hidden sm:inline">
                  {title.length > 35 ? `${title.substring(0, 35)}...` : title}
                </p>
              </div>
              {/* <button
                className="text-green-500"
                onClick={() => {
                  setIsTitleEdit((prev) => !prev);
                }}
              >
                <Pen size={14} className="text-third-blue" />
              </button> */}
            </div>
            {/* <button className="" onClick={() => {}}>
              <Eye size={20} className="text-yellow-500" />
            </button> */}
          </div>
          <div className="flex gap-2 justify-between items-center">
            <div className="flex gap-2">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-grey hover:underline sm:hidden"
              >
                {url.length > 25 ? `${url.substring(0, 25)}...` : url}
              </a>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-grey hover:underline hidden sm:inline"
              >
                {url.length > 35 ? `${url.substring(0, 35)}...` : url}
              </a>
              {/* <button className="text-green-500" onClick={() => {}}>
                <Pen size={14} className="text-third-blue" />
              </button> */}
            </div>
            <button
              onClick={() => {
                handleDelete(_id);
              }}
            >
              <Trash size={20} className="text-red-500" />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default BitItem;
