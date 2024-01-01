"use client";

import dynamic from "next/dynamic";
import {
  ArrowRightIcon,
  CloseIcon,
  VolumeIcon,
} from "../../../../../../public/svg";
import Image from "next/image";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const RecentSinglePage = ({ params }: { params: { slug: string } }) => {
  console.log(params);
  return (
    <div className="grid grid-cols-[0.6fr_0.4fr] h-[85vh] gap-x-6">
      <div className="bg-[#000000] px-8 flex items-center justify-between relative">
        <span className="self-start mt-8">
          <CloseIcon color="#fff" />
        </span>
        <div className="relative h-full w-[85%]">
          <ReactPlayer
            className="absolute"
            url="https://youtu.be/SAY30lci8mI?si=zCab6sgKg-hjHhdG"
            width="100%"
            height="100%"
            light={true}
            volume={1}
          />
        </div>
        <span className="h-[2.21rem] w-[2.21rem] bg-white rounded-full grid place-content-center cursor-pointer">
          <ArrowRightIcon color="#000" />
        </span>
        <span className="h-10 w-10 bg-twikkl-primary rounded-full grid place-content-center cursor-pointer absolute right-6 bottom-10">
          <VolumeIcon />
        </span>
      </div>
      <div className="">
        <div className="bg-twikkl-tertiary rounded-3xl p-6 flex items-center justify-between">
          <div className="flex gap-x-4 items-start cursor-pointer">
            <Image
              src="/img/profile.webp"
              width={47}
              height={47}
              alt="user-image"
              className="h-12 w-12 rounded-full"
              placeholder="blur"
              blurDataURL="/img/profile.webp"
            />
            <div className="">
              <h2 className="font-semibold text-twikkl-main">maxwell.jgy</h2>{" "}
              <p className="text-sm text-twikkl-main">
                Maxwell Sebastian . <span>12 hrs ago</span>
              </p>
            </div>
          </div>

          <button className="">Follow</button>
        </div>
      </div>
    </div>
  );
};

export default RecentSinglePage;
