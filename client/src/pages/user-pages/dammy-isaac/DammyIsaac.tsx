import dammyisaacImage from "./dammyisaac-image.png";
import VerifiedIcon from "../../../assets/icons/VerifiedIcon";
import UserLink from "../UserLink";
import { UserLinkType } from "../../../types/types";
import { Link } from "react-router-dom";
const userLinkList: UserLinkType[] = [
  {
    link: "https://www.tiktok.com/@dammyisaac",
    linkName: "TikTok",
  },
  {
    link: "https://open.spotify.com/artist/0HMRy9CP4UOqfOLbZrUj7l?si=456XgEGiTZWW7HnTDdvq4g",
    linkName: "Spotify",
  },
  {
    link: "https://music.apple.com/ng/artist/dammy-isaac/1169638454",
    linkName: "Apple Music",
  },
  {
    link: "https://www.instagram.com/dammyisaac?igsh=Nnp5ZHZ1dmR4enQ1",
    linkName: "Instagram",
  },

  {
    link: "https://twitter.com/Dammyisaac_",
    linkName: "X",
  },
  {
    link: "https://www.facebook.com/profile.php?id=100064041725359",
    linkName: "Facebook",
  },
  {
    link: "mailto:dammyisaacmusic@gmail.com",
    linkName: "Email",
  },
];
function DammyIsaac() {
  return (
    <div className="flex w-full justify-center flex-col items-center">
      <div className=" p-3 max-w-screen-sm w-full h-full flex flex-col gap-6 min-h-lvh items-center pt-10 pb-10">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="w-24 h-24">
            <img src={dammyisaacImage} />
          </div>
          <div className="flex items-center gap-1">
            <p className="font-bold text-xl">@dammyisaac</p>
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

export default DammyIsaac;
