// import profile1 from "../../assets/images/profile.jpeg";
// import profile2 from "../../assets/images/profile2.png";
import VerifiedIcon from "../../assets/icons/VerifiedIcon";
function AvatarCard() {
  return (
    <div className="flex gap-2 justify-start items-center">
      {/* <img src={profile1} className="h-8 w-8" /> */}
      <div className="flex items-center justify-center gap-[.1rem]">
        <p className=" font-bold dark:text-first-text-color transition-colors duration-300 text-second-text-color text-lg">
          khaleed
        </p>
        <VerifiedIcon />
      </div>
    </div>
  );
}

export default AvatarCard;
