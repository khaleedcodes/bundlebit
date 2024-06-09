import FeatureCard from "./FeatureCard";
import ChartIcon from "../../assets/icons/ChartIcon";
import CustomIcon from "../../assets/icons/CustomIcon";
import ShopIcon from "../../assets/icons/ShopIcon";
import { FeatureCardType } from "../../types/types";
const features: FeatureCardType[] = [
  {
    featureIcon: CustomIcon,
    featureHeader: "Craft a personalized mini-website in seconds",
    featureDescription:
      "Instantly create your own Bundle, tailored to showcase your brand or aesthetic.",
  },
  {
    featureIcon: ChartIcon,
    featureHeader: "Grow your audience across all your social platforms.",
    featureDescription:
      "Empower your audience with effortless access to all your content through a single link. Everything you offer is just one click away!",
  },
  {
    featureIcon: ShopIcon,
    featureHeader: "Monetize your audience and sell products effortlessly",
    featureDescription:
      "Offer your products for sale, accept payments, and provide options for your audience to support, tip, or donate.",
  },
];
function FeatureCardList() {
  return (
    <div className="w-full h-full flex justify-center items-stretch gap-6 flex-wrap">
      {features.map(
        ({ featureIcon, featureHeader, featureDescription }, index) => {
          return (
            <FeatureCard
              key={index}
              featureIcon={featureIcon}
              featureHeader={featureHeader}
              featureDescription={featureDescription}
            />
          );
        }
      )}
    </div>
  );
}

export default FeatureCardList;
