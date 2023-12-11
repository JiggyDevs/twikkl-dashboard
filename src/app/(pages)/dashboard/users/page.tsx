import Select from "@/app/ui/atoms/Select";
import React from "react";

const UsersPage = () => {
  return (
    <div className="grid gap-y-4">
      <h1 className="text-xl font-bold text-twikkl-main">TwikkL Users</h1>
      <div className="bg-twikkl-tertiary rounded-3xl flex p-8 w-full">
        <div className="flex gap-x-6 w-full">
          <Select
            placeHolder="Followers"
            options={[{ label: "Followers", value: "10k" }]}
          />
          <Select
            placeHolder="Points"
            options={[{ label: "10k-20k", value: "start" }]}
          />
          <Select
            placeHolder="Gender"
            options={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
