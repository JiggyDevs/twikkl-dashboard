"use client";

import Button from "@/app/ui/atoms/Button";
import Input from "@/app/ui/atoms/Input";

const CreateNewPassword = () => {
  return (
    <div className="flex flex-col w-full max-w-lg mx-auto">
      <div className="mb-4 space-y-3">
        <h2 className="text-2xl font-medium text-twikkl-main">
          Create New Password
        </h2>
        <p className="text-xl text-twikkl-main tracking-wide ">
          Minimum of 8 character is required
        </p>
      </div>

      <div className="flex flex-col gap-y-5 mt-5 mb-10">
        <Input label="Create Password" placeholder="password" type="password" />
        <Input
          label="Confirm Password"
          placeholder="password"
          type="password"
        />
      </div>

      <Button label="Reset Password" onClick={() => console.log("Hello")} />
    </div>
  );
};

export default CreateNewPassword;
