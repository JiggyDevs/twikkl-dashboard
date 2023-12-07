"use client";

import Button from "@/app/ui/atoms/Button";
import Input from "@/app/ui/atoms/Input";
import { useRouter } from "next/navigation";

const SignInPage = () => {
  const { push } = useRouter();

  return (
    <div className="flex flex-col w-full max-w-lg mx-auto">
      <div className="mb-4 space-y-3">
        <h2 className="text-2xl font-medium text-twikkl-main">Welcome!</h2>
        <p className="text-xl text-twikkl-main tracking-wide ">
          Sign In into your admin dashboard
        </p>
      </div>

      <div className="flex flex-col gap-y-5 mt-5 mb-10">
        <Input label="Username" placeholder="example@gmail.com" type="email" />
        <Input
          label="Password"
          placeholder="password"
          type="password"
          extraInfo={{ label: "Forgot Password?", to: "/auth/forgot-password" }}
        />
      </div>

      <Button label="Sign In" onClick={() => push("/dashboard")} />
    </div>
  );
};

export default SignInPage;
