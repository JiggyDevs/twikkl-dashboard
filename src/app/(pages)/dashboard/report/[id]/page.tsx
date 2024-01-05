"use client";

import dynamic from "next/dynamic";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CloseIcon,
  CommentIcon,
  FlagIcon,
  LikeIcon,
  LocationIcon,
  ShareLinkIcon,
  VolumeIcon,
} from "../../../../../../public/svg";
import Image from "next/image";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const RecentSinglePage = ({ params }: { params: { slug: string } }) => {
  //   console.log(params);
  return (
    <div className="grid grid-cols-[8fr_2fr] h-[85vh] gap-x-6 w-full">
      <div className="bg-[#000000] px-8 flex items-center justify-between relative w-full">
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
      <div className="flex flex-col gap-y-4">
        {/* user info follow and content */}
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
        {/* likes, comment and flags */}
        <div className="text-twikkl-primary flex items-center justify-between">
          <div className="font-medium flex items-center gap-x-6">
            <div className="flex items-center gap-x-2">
              <LikeIcon />
              <span>6.1M</span>
            </div>
            <div className="flex items-center gap-x-2">
              <CommentIcon />
              <span>32.5K</span>
            </div>
            <div className="flex items-center gap-x-2">
              <FlagIcon />
              <span>487.6K</span>
            </div>
          </div>
          {/* share links */}
          <div className="flex gap-x-6">
            <div className="h-10 w-10 bg-twikkl-main rounded-full flex justify-center items-center gap-x-1">
              <ArrowLeftIcon color="#fff" />
              <ArrowRightIcon color="#fff" />
            </div>
            <div className="flex items-center gap-x-2 text-twikkl-main">
              <ShareLinkIcon />
              <span>Share</span>
            </div>
          </div>
        </div>
        {/* copy link */}
        <div className="flex bg-white py-2 px-6 rounded-lg items-center gap-8">
          <span className="text-twikkl-inactive">
            https:www.twikkl.com/@maxwell.jgy/video/782356323.2456..
          </span>
          <span className="text-twikkl-main text whitespace-nowrap">
            Copy Link
          </span>
        </div>
        {/* copy link */}
        lll
      </div>
    </div>
  );
};

export default RecentSinglePage;
