import Input from "@/app/ui/atoms/Input";
import TextArea from "@/app/ui/atoms/TextArea";
import ImageUpload from "@/app/ui/molecules/ImageUpload";
import Tab from "@/app/ui/molecules/Tab";
import Image from "next/image";
import React from "react";

const SettingsPage = () => {
  return (
    <main>
      <h1 className="text-twikkl-main text-xl font-semibold mb-4">Settings</h1>
      <Tab />
      <div className="bg-twikkl-tertiary p-8 rounded-3xl mt-4">
        <div className="">
          <h2 className="text-twikkl-inactive mb-2">Profile Info</h2>
          <div className="flex gap-x-5 items-start">
            <Image
              src="/img/profile.webp"
              width={80}
              height={80}
              alt="user-image"
              className="h-20 w-20 rounded-full"
              placeholder="blur"
              blurDataURL="/img/profile.webp"
            />
            <div>
              <h2 className="font-semibold text-twikkl-main text-2xl mb-1">
                UbongAbasi Ndak
              </h2>
              <span className="text-twikkl-primary font-normal">
                @ubongabasi.jgy
              </span>
            </div>
          </div>
          <h2 className="text-twikkl-inactive my-4">
            Update your photo and personal details
          </h2>
        </div>
        <form className="grid grid-cols-2 gap-x-8">
          <div className="space-y-4">
            <Input label="First Name" defaultValue="UbongAbasi" />
            <Input label="Last Name" defaultValue="Ndak" />
            <TextArea
              label="Bio"
              defaultValue="UX Design Enthusiast currently working as a chef in Lagos."
            />
            <ImageUpload />
          </div>
          <div className="space-y-4">
            <Input
              label="Email"
              type="email"
              defaultValue="example@gmail.com"
            />
            <Input label="Phone Number" defaultValue="07078983749" />
            <Input
              label="Address"
              defaultValue="20 Adewale Kuku Street, Millennium  Estate"
            />
            <Input label="State" defaultValue="Lagos" />
            <Input label="Country" defaultValue="Nigeria" />
            <Input label="Time Zone" defaultValue="07078983749" />
          </div>
        </form>
      </div>
    </main>
  );
};

export default SettingsPage;
