import { useState } from "react";
import { motion } from "framer-motion";
import defaultAvatar from "../../assets/images/default-avatar.jpeg";
import { FaLink } from "react-icons/fa";

function BundleCard(bundle: {
  bundleLink: string;
  bundleName: string;
  name: string;
  tags: string[];
}) {
  const [isOverLayActive, setIsOverLayActive] = useState(false);

  function toggleOverLay() {
    setIsOverLayActive(!isOverLayActive);
  }
  return (
    <>
      <motion.a
        href={bundle.bundleLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-first-card rounded-2xl border border-first-section-divider overflow-hidden block "
        whileHover={{
          y: -5,
          boxShadow:
            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        }}
        transition={{ duration: 0.2 }}
        onMouseEnter={toggleOverLay}
        onMouseLeave={toggleOverLay}
      >
        {/* <div
                    className={`h-40 bg-gradient-to-r from-${bundle.gradientFrom} to-${bundle.gradientTo} relative overflow-hidden`}
                  >
                    <div className="absolute -bottom-10 left-6">
                      <div className="w-20 h-20 rounded-full border-4 border-first-card overflow-hidden bg-first-card">
                        {bundle.userIcon}
                      </div>
                    </div>
                  </div> */}
        <div className="flex flex-col justify-center h-full w-full items-center relative overflow-hidden">
          <div className=" w-full">
            <div className="h-40 overflow-hidden">
              <img src={defaultAvatar} className="object-cover h-40 w-full" />
            </div>

            <div className="p-6 w-full">
              <h3 className="font-poppins font-semibold text-xl mb-3">
                {bundle.name}
              </h3>
              {/* <p className="text-grey text-sm mb-4">{bundle.username}</p> */}
              <div className="flex flex-wrap gap-2 mb-6">
                {bundle.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`${
                      tagIndex === 0
                        ? "bg-first-accent/10 text-first-accent"
                        : "bg-third-blue/10 text-third-blue"
                    } text-xs px-3 py-1 rounded-full`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center text-grey text-sm">
                <FaLink className="mr-2" />
                <span>{`bundlebit.me${bundle.bundleName}`}</span>
              </div>
            </div>
          </div>
          <div
            className={`card__overlay w-full h-full absolute flex justify-center items-center bg-second-blue rounded-2xl ${
              isOverLayActive ? "card__overlay--active" : ""
            }`}
          >
            <p
              className={`card__overlay-text bg-white text-third-blue p-2 rounded-3xl pr-4 pl-4 ${
                isOverLayActive ? "card__overlay--active" : ""
              }`}
            >
              {bundle.bundleName}
            </p>
          </div>
        </div>
      </motion.a>
    </>
  );
}

export default BundleCard;
