import { UserLinkProps } from "../../types/types";

function UserLink({ link, linkName }: UserLinkProps) {
  return (
    <>
      <a
        className="w-full flex justify-center p-3 border transform hover:scale-105 transition-all duration-200 rounded-lg"
        href={link}
        target="_blank"
      >
        {linkName}
      </a>
    </>
  );
}

export default UserLink;
