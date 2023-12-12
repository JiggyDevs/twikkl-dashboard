import clsx from "clsx";
import { TrendsDownIcon, TrendsUpIcon } from "../../../../../public/svg";
import { cardsColorMap } from "@/app/lib/data";

const Card = ({
  type = "",
  label = "",
  percentage = 0,
  value = "",
}: {
  label: string;
  type: string;
  value: string;
  percentage: number;
}) => {
  const isPercentageIncrease = percentage > 0;

  return (
    <div className="flex flex-col gap-y-6 bg-twikkl-tertiary rounded-3xl p-6">
      <div className="flex items-center gap-x-3">
        <span
          className={clsx(
            "h-[0.625rem] w-[0.625rem] rounded-full",
            cardsColorMap[type as keyof typeof cardsColorMap]
          )}
        ></span>
        <h3>{label}</h3>
      </div>
      <div className="flex flex-col gap-y-4">
        <h1 className="text-5xl font-bold">{value}</h1>
        <div className="flex justify-between items-center">
          <div
            className={clsx(
              "flex items-center gap-x-2",
              isPercentageIncrease ? "text-twikkl-primary" : "text-[#E20000]"
            )}
          >
            <span className="">{percentage}%</span>
            {isPercentageIncrease ? <TrendsUpIcon /> : <TrendsDownIcon />}
          </div>
          <div className="text-twikkl-main">Last Month</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
