import { useAuth } from "../../context/AuthContext";

function AvatarCard() {
  const { user } = useAuth();
  return (
    <div className="flex gap-2 justify-start items-center">
      <div className="flex items-center justify-center gap-[.1rem]">
        <p className=" font-bold dark:text-first-text-color transition-colors duration-300 text-second-text-color text-lg">
          {user.username}
        </p>
      </div>
    </div>
  );
}

export default AvatarCard;
