"use client";

import Image from "next/image";
import { TwikklVerifiedIcon } from "../../../../../public/svg";
import { viewAllVoters } from "@/app/lib/actions/voters-actions";

const VotersCard = ({
  label,
  data,
}: {
  label: string;
  data: { name: string; image: string }[];
}) => {
  return (
    <div className="w-full grid grid-rows-[0.05fr_0.95fr] bg-twikkl-tertiary p-8 rounded-3xl max-h-[45.5rem]">
      <div className="flex items-center justify-between">
        <h1 className="font-medium">{label || ""}</h1>
        <span
          className="text-xs text-twikkl-primary cursor-pointer"
          onClick={viewAllVoters}
        >
          See all
        </span>
      </div>
      <div className="mt-5 grid gap-y-5 overflow-y-auto py-2">
        {data?.map((voter) => (
          <div
            key={voter.name + "voters-key"}
            className="flex items-center gap-x-6"
          >
            <div className="relative">
              <Image
                src={voter.image}
                width={35}
                height={35}
                alt={voter?.name + "image"}
                className="rounded-full h-8 w-8 md:h-9 md:w-9"
              />
              <span className="absolute -top-1 -right-2">
                <TwikklVerifiedIcon />
              </span>
            </div>
            <h3 className="font-light text-twikkl-main truncate">
              {voter.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VotersCard;
