"use client";

import { useRouter } from "next/navigation";

import { ArrowLeftIcon } from "../../../../../public/svg";
import Image from "next/image";

const ProfileCard = () => {
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
          src="/img/profile.webp"
          alt="profile-image"
          width={80}
          height={80}
          className="rounded-full h-20 w-20"
        />
        <div className="flex flex-col gap-y-1">
          <span className="font-medium text-twikkl-main text-2xl">
            Ubongabasi.jgy
          </span>
          <span className=" text-twikkl-primary">@ubongabasi.jgy</span>
        </div>
      </div>
      <div>
        <h2 className="text-twikkl-inactive font-semibold">Bio</h2>
        <p className="text-twikkl-main text-[0.9375rem]">
          UX Design Enthusiast currently working as a chef in Lagos.
        </p>
      </div>
      <div>
        <h2 className="text-twikkl-inactive font-semibold">Email</h2>
        <p className="text-twikkl-main text-[0.9375rem]">
          ubongabasindak@gmail.com
        </p>
      </div>
      <div>
        <h2 className="text-twikkl-inactive font-semibold">Phone Number</h2>
        <p className="text-twikkl-main text-[0.9375rem]">+2347087897394</p>
      </div>
      <div>
        <h2 className="text-twikkl-inactive font-semibold">Address</h2>
        <p className="text-twikkl-main text-[0.9375rem]">5 Akpan Nsek Street</p>
      </div>
      <div>
        <h2 className="text-twikkl-inactive font-semibold">Gender</h2>
        <p className="text-twikkl-main text-[0.9375rem]">Male</p>
      </div>
    </div>
  );
};

export default ProfileCard;
