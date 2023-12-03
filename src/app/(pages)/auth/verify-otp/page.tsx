"use client";

import Button from "@/app/ui/atoms/Button";
import OTPComponent from "@/app/ui/atoms/OtpInput";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState } from "react";

const VerifyOtpPage = () => {
  const [otp, setOTP] = useState<string>("");

  const { push } = useRouter();

  return (
    <div className="flex flex-col w-full max-w-lg mx-auto space-y-10">
      <div className="space-y-2">
        <h2 className="text-2xl font-medium text-twikkl-main">Enter Code</h2>
        <p className="text-xl text-twikkl-main tracking-wide ">
          We sent a code to{" "}
          <span className="font-semibold text-xl block">
            ubongabasindak@gmail.com
          </span>
        </p>
      </div>

      <div className="flex flex-col">
        <OTPComponent otp={otp} setOTP={setOTP} />

        <Link
          href={"/auth/sign-in"}
          className="self-end text-twikkl-primary text-sm mt-2 underline"
        >
          Return to Login
        </Link>
      </div>

      <div className="flex flex-col items-center w-full gap-y-6">
        <Button
          label="Reset Password"
          onClick={() => push("/auth/create-new-password")}
        />
        <p className="text-sm font-normal">
          You didn’t receive the email?{" "}
          <Link
            href={"#"}
            className="self-end text-twikkl-primary text-sm mt-2 underline"
          >
            Click to resend
          </Link>
        </p>
      </div>
    </div>
  );
};

export default VerifyOtpPage;
