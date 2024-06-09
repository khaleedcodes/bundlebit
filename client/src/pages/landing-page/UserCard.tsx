import { useState } from "react";
import { UserCardType } from "../../types/types";
function UserCard({ bundleLink, bundleName, userImage }: UserCardType) {
  const [isOverLayActive, setIsOverLayActive] = useState(false);

  function toggleOverLay() {
    setIsOverLayActive(!isOverLayActive);
  }

  return (
    <div
      onMouseEnter={toggleOverLay}
      onMouseLeave={toggleOverLay}
      className="w-96 h-96 bg-[#040F0F] rounded-3xl overflow-hidden"
    >
      <a
        href={bundleLink}
        target="_blank"
        className="overflow-hidden h-full w-full"
      >
        <div className="flex flex-col justify-center h-full w-full items-center relative overflow-hidden p-4">
          <div className="rounded-full overflow-hidden">
            <img src={userImage} className="object-cover" />
          </div>
          <div
            className={`card__overlay w-full h-full absolute flex justify-center items-center bg-second-blue rounded-3xl ${
              isOverLayActive ? "card__overlay--active" : ""
            }`}
          >
            <p
              className={`card__overlay-text bg-white text-third-blue p-2 rounded-3xl pr-4 pl-4 ${
                isOverLayActive ? "card__overlay--active" : ""
              }`}
            >
              {bundleName}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default UserCard;
