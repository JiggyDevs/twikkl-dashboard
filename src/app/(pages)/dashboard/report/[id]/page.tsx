"use client";

import dynamic from "next/dynamic";
import {
  ArrowRightIcon,
  ArrowRightLeftIcon,
  CloseIcon,
  CommentIcon,
  FlagIcon,
  LikeIcon,
  LocationIcon,
  ShareLinkIcon,
  VolumeIcon,
} from "../../../../../../public/svg";
import Image from "next/image";
import Tab2 from "@/app/ui/molecules/Tab2";
import CopyLink from "@/app/ui/atoms/CopyLink";
import CommentBox from "@/app/ui/molecules/CommentBox";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const RecentSinglePage = ({ params }: { params: { slug: string } }) => {
  return (
    <div className="flex flex-col md:flex-row h-screen md:h-[85vh] gap-y-6 md:gap-y-0 gap-x-6 md:w-full">
      <div className="bg-[#000000] px-3 md:px-8 flex items-center justify-between relative w-full h-[50%] md:h-auto">
        <span className="self-start mt-4 md:mt-8">
          <CloseIcon color="#fff" />
        </span>
        <div className="relative h-full w-[80%] md:w-[85%] mx-2 md:mx-0">
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
        <span className="h-10 w-10 bg-twikkl-primary rounded-full grid place-content-center cursor-pointer absolute right-2 md:right-6 bottom-4 md:bottom-10">
          <VolumeIcon />
        </span>
      </div>
      <div className="flex flex-col gap-y-4 h-[50%]">
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
        <div className="text-twikkl-primary flex items-center flex-wrap md:justify-between gap-y-4">
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
          <div className="flex gap-x-16 md:gap-x-6">
            <ArrowRightLeftIcon />
            <div className="flex items-center gap-x-2 text-twikkl-main">
              <ShareLinkIcon />
              <span>Share</span>
            </div>
          </div>
        </div>
        {/* copy link */}
        <CopyLink />
        {/* copy link */}
        <div className="bg-twikkl-tertiary pt-8 rounded-3xl space-y-8">
          <Tab2 />
          <CommentBox />
        </div>
      </div>
    </div>
  );
};

export default RecentSinglePage;
