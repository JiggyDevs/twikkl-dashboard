"use client";
import { resetModalState } from "@/app/lib/entities/modal.entity";
import Button from "../../atoms/Button";
import { useRouter } from "next/navigation";

const LogoutModal = () => {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/auth/sign-in");
    resetModalState();
  };

  return (
    <div className="w-full grid gap-y-8 bg-twikkl-tertiary p-8 rounded-3xl h-full max-h-[11.375rem] md:max-w-[25%] mx-auto">
      <p className="text-twikkl-main text-xl text-center">
        Are you sure you want to logout?
      </p>
      <div className="flex items-center gap-x-6">
        <Button label="Log out" onClick={handleLogout} />
        <Button label="cancel" disable />
      </div>
    </div>
  );
};

export default LogoutModal;
