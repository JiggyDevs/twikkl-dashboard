"use client";

import dynamic from "next/dynamic";
import {
  ArrowRightIcon,
  CloseIcon,
  LocationIcon,
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
        <div className="bg-twikkl-tertiary rounded-3xl p-6 space-y-6">
          <div className="flex items-center justify-between">
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
            <button className="py-1 bg-twikkl-primary text-white px-6 text-[0.9375rem] rounded-2xl font-semibold">
              Follow
            </button>
          </div>
          <div className="text-sm text-twikkl-main">
            <p className="text-justify">
              The joy of using AI is like discovering a whole new world! 🌍✨
              It&apos;s fascinating to see how artificial intelligence can
              simplify tasks and make our lives easier.{" "}
              {["#AIWonderland", "#TechMagic"].map((tag, i) => (
                <span
                  key={`recent-user-` + { tag } + i}
                  className="text-twikkl-inactive ml-2"
                >
                  {tag}{" "}
                </span>
              ))}
            </p>
            <p className="mt-4">
              🎶 Original sound -{" "}
              <span className="text-twikkl-primary">@maxwell.jgy</span>
            </p>
            <span className="inline-flex items-center gap-x-2 bg-[#D7EBD9] rounded-lg py-2 pl-3 pr-2 text-sm text-twikkl-main mt-3">
              <LocationIcon /> Lagos, Nigeria
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentSinglePage;
