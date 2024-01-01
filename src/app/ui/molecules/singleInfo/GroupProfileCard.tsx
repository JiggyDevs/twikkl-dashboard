"use client";

import { useRouter } from "next/navigation";

import { ArrowLeftIcon } from "../../../../../public/svg";
import Image from "next/image";

const GroupProfileCard = () => {
  const router = useRouter();

  return (
    <div className="p-8 rounded-3xl bg-twikkl-tertiary grid gap-y-6">
      <div
        className="inline-flex items-center gap-x-2 cursor-pointer"
        onClick={() => router.back()}
      >
        <span className="h-6 w-6 bg-twikkl-main rounded-full grid place-content-center">
          <ArrowLeftIcon color="#fff" />
        </span>
        <span className="text-twikkl-primary text-sm">Return</span>
      </div>
      <div className="flex gap-x-6 items-center">
        <Image
          src="/img/chatgpt.webp"
          alt="profile-image"
          width={80}
          height={80}
          className="rounded-full h-20 w-20"
        />
        <div className="flex flex-col gap-y-1">
          <span className="font-medium text-twikkl-main text-2xl">Open AI</span>
          <span className=" text-twikkl-primary">🔐 Closed group</span>
        </div>
      </div>
      <div>
        <h2 className="text-twikkl-inactive font-semibold">About</h2>
        <p className="text-twikkl-main text-[0.9375rem]">
          Conducting fundamental, long-term research toward the creation of safe
          Artificial General Intelligence.
        </p>
      </div>
      <div>
        <h2 className="text-twikkl-inactive font-semibold">Created By</h2>
        <p className="text-twikkl-main text-[0.9375rem]">@ubongabasi.n</p>
      </div>
      <div>
        <h2 className="text-twikkl-inactive font-semibold">
          Eligibility Criteria
        </h2>
        <p className="text-twikkl-main text-[0.9375rem]">BAYC NFT or 10 JGY</p>
      </div>
      <div>
        <h2 className="text-twikkl-inactive font-semibold">
          Average Posts Daily
        </h2>
        <p className="text-twikkl-main text-[0.9375rem]">200</p>
      </div>
      {/* <div>
        <h2 className="text-twikkl-inactive font-semibold">Gender</h2>
        <p className="text-twikkl-main text-[0.9375rem]">Male</p>
      </div> */}
    </div>
  );
};

export default GroupProfileCard;
