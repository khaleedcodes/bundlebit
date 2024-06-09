import { Link } from "react-router-dom";

function WordMark() {
  return (
    <div className="flex items-center justify-center">
      <Link to="/" className="flex items-center">
        <p className=" text-third-blue text-2xl font-bold">
          Bundle<span className="text-second-blue">up</span>
        </p>
      </Link>
    </div>
  );
}

export default WordMark;
