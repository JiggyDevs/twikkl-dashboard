import data from "@/app/lib/data/index.json";
import Image from "next/image";
import { CloseIcon, TwikklVerifiedIcon } from "../../../../../public/svg";
import { toggleModalState } from "@/app/lib/entities/modal.entity";

const VotersModal = () => {
  const { votersData } = data;
  return (
    <div className="w-full grid grid-rows-[0.05fr_0.95fr] bg-twikkl-tertiary p-8 rounded-3xl h-full max-h-[35rem] md:max-w-[35%] mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-xl">Voters</h1>
        <CloseIcon onClick={toggleModalState} />
      </div>
      <div className="mt-5 grid gap-y-5 overflow-y-auto py-2">
        {votersData.map((voter) => (
          <div
            key={voter.name + "voters-key"}
            className="flex items-center gap-x-6"
          >
            <div className="relative">
              <Image
                src={voter.image}
                width={35}
                height={35}
                alt={voter.name + "image"}
                className="rounded-full h-8 w-8 md:h-9 md:w-9"
              />
              <span className="absolute -top-1 -right-2">
                <TwikklVerifiedIcon />
              </span>
            </div>
            <span className="font-light text-twikkl-main truncate">
              {voter.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VotersModal;
