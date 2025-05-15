import { Link } from "react-router-dom";

function WordMark() {
  return (
    <div className="flex items-center justify-center">
      <Link to="/" className="flex items-center">
        <p className=" text-new-main-1 text-2xl font-bold">
          Bundle<span className="text-new-main-2">bit</span>
        </p>
      </Link>
    </div>
  );
}

export default WordMark;
