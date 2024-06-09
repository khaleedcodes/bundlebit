import { FeatureCardProps } from "../../types/types";
function FeatureCard({
  featureIcon: FeatureIcon,
  featureHeader,
  featureDescription,
}: FeatureCardProps) {
  return (
    <div className=" rounded-2xl flex flex-col gap-6 p-6 basis-[400px] items-start justify-center bg-[#040F0F]">
      <div>
        <FeatureIcon />
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-2xl font-bold ">
          {featureHeader}
          {/* Expand your audience across all your social platforms. */}
        </p>
        <p className="text-lg">
          {featureDescription}
          {/* Empower your audience with effortless access to all your content
          through a single link. Everything you offer is just one click away! */}
        </p>
      </div>
    </div>
  );
}

export default FeatureCard;
