import { UserCardType } from "../../types/types";
import UserCard from "./UserCard";
import khaleedImage from "../user-pages/khaleed/khaleed-image.jpeg";
import nairaupdatesngImage from "../user-pages/nairaupdatesng/nairaupdatesng-image.png";
import nimorImage from "../user-pages/nimor/nimor-image.png";
const users: UserCardType[] = [
  {
    bundleLink: "https://bundleup.us/nimor",
    bundleName: "/nimor",
    userImage: nimorImage,
  },
  {
    bundleLink: "https://bundleup.us/khaleed",
    bundleName: "/khaleed",
    userImage: khaleedImage,
  },
  {
    bundleLink: "https://bundleup.us/nairaupdatesng",
    bundleName: "/nairaupdatesng",
    userImage: nairaupdatesngImage,
  },
];
function UserCardList() {
  return (
    <div className="flex gap-6 flex-wrap justify-center items-center">
      {users.map(({ bundleLink, bundleName, userImage }, index) => {
        return (
          <UserCard
            key={index}
            bundleLink={bundleLink}
            bundleName={bundleName}
            userImage={userImage}
          />
        );
      })}
    </div>
  );
}

export default UserCardList;
