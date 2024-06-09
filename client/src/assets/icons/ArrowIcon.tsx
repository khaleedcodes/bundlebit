import { ArrowIconProps } from "../../types/types";
function ArrowIcon({
  isHover,
  setIsHoverTrue,
  setIsHoverFalse,
}: ArrowIconProps) {
  return (
    <div
      className={`${isHover ? "translate-x-1" : ""} transition-all`}
      onMouseEnter={setIsHoverTrue}
      onMouseLeave={setIsHoverFalse}
    >
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 12H18M18 12L13 7M18 12L13 17"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default ArrowIcon;
