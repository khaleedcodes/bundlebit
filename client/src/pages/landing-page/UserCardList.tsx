import { UserCardType } from "../../types/types";
import UserCard from "./UserCard";
import defaultAvatar from "../../assets/images/default-avatar.jpeg";

const users: UserCardType[] = [
  {
    bundleLink: "https://bundlebit.me/nimor",
    bundleName: "/nimor",
    userImage: defaultAvatar,
  },
  {
    bundleLink: "https://bundlebit.me/khaleed",
    bundleName: "/khaleed",
    userImage: defaultAvatar,
  },
  {
    bundleLink: "https://bundlebit.me/nairaupdatesng",
    bundleName: "/nairaupdatesng",
    userImage: defaultAvatar,
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
