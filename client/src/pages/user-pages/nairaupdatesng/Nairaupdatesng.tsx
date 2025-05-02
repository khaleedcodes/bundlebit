import khaleedImage from "./nairaupdatesng-image.png";
import VerifiedIcon from "../../../assets/icons/VerifiedIcon";
import UserLink from "../UserLink";
import { UserLinkType } from "../../../types/types";
import { Link } from "react-router-dom";
const userLinkList: UserLinkType[] = [
  {
    link: "https://nairaupdatesng.co/",
    linkName: "Website",
  },
  {
    link: "mailto:nairaupdatesng@gmail.com",
    linkName: "Email",
  },
];
function Nairaupdatesng() {
  return (
    <div className="flex w-full justify-center flex-col items-center">
      <div className=" p-3 max-w-screen-sm w-full h-full flex flex-col gap-6 min-h-lvh items-center pt-10 pb-10">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="w-24 h-24">
            <img src={khaleedImage} />
          </div>
          <div className="flex items-center gap-1">
            <p className="font-bold text-xl">@Nairaupdatesng</p>
            <VerifiedIcon />
          </div>
        </div>
        <div className="w-full items-center flex flex-col gap-4 justify-center">
          {userLinkList.map(({ link, linkName }, index) => {
            return <UserLink link={link} linkName={linkName} key={index} />;
          })}
        </div>
        <Link
          to="/b/signup"
          className="transition-all duration-300 text-white p-2 pl-4 pr-4 rounded-2xl bg-third-blue hover:bg-second-blue mt-auto"
        >
          Create your bundle for free
        </Link>
      </div>
    </div>
  );
}

export default Nairaupdatesng;
