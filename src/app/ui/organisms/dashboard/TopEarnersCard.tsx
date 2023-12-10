import { selectMonths } from "@/app/lib/data";
import Select from "../../atoms/Select";
import data from "@/app/lib/data/index.json";
import Image from "next/image";
import { TwikklVerifiedIcon } from "../../../../../public/svg";

const TopEarnersCard = () => {
  const { topEarnersData } = data;
  return (
    <div className="grid bg-twikkl-tertiary p-8 rounded-3xl max-h-[20rem]">
      <div className="flex items-center justify-between">
        <h1 className="font-medium">Top Earners</h1>
        <Select
          placeHolder="This month"
          mxWt="max-w-[8rem]"
          options={selectMonths}
        />
      </div>
      <div className="mt-4 grid gap-y-5 overflow-y-auto py-2">
        {topEarnersData?.map((earner) => (
          <div
            key={earner.name}
            className="grid grid-cols-2 md:grid-cols-[0.65fr_0.35fr] gap-x-2"
          >
            <div className="flex items-center gap-x-4">
              <div className="relative">
                <Image
                  src={earner.image}
                  width={35}
                  height={35}
                  alt={earner.name + "image"}
                  className="rounded-full h-8 w-8 md:h-9 md:w-9"
                />
                <span className="absolute -top-1 -right-2">
                  <TwikklVerifiedIcon />
                </span>
              </div>
              <span className="font-light text-twikkl-main truncate">
                {earner.name}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">{earner.amount}</span>
              <span className="font-light">{earner.position}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopEarnersCard;
