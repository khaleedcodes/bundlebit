import WordMark from "../navbar/WordMark";
function Footer() {
  return (
    <div className="flex justify-center w-full">
      <div className=" p-3 max-w-screen-xl w-full items-center flex text-white">
        <div className="flex items-end gap-1">
          <WordMark />
          <p className="text-lg">
            by{" "}
            <a
              href="https://khaleed.co/"
              className="text-first-blue hover:text-third-blue transition-all"
              target="_blank"
            >
              Khaleed Opeloyeru
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
