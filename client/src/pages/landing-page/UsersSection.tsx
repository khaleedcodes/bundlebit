import UserCardList from "./UserCardList";
import { Link } from "react-router-dom";
function UsersSection() {
  return (
    <div className="flex items-center justify-center flex-wrap flex-col gap-16">
      <div>
        <h1 className="text-5xl max-sm:text-3xl font-bold text-center">
          Trusted by a growing community of users
        </h1>
      </div>
      <UserCardList />
      <Link
        to="/signup"
        className="flex transition-all duration-300 text-white p-4 text-lg pl-4 pr-4 rounded-full font-bold bg-third-blue hover:bg-second-blue w-[220px] items-center justify-center"
      >
        Get started for free
      </Link>
    </div>
  );
}

export default UsersSection;
