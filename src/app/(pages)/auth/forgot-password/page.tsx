import Button from "@/app/ui/atoms/Button";
import Input from "@/app/ui/atoms/Input";

const ForgotPasswordPage = () => {
  return (
    <div className="flex flex-col w-full max-w-lg mx-auto space-y-6">
      <div className="mb-4 space-y-2">
        <h2 className="text-2xl font-medium text-twikkl-main">
          Forgot Password?
        </h2>
        <p className="text-xl text-twikkl-main tracking-wide ">
          No need to worry, we&apos;ll send you reset instructions.
        </p>
      </div>

      <Input
        label="Email"
        placeholder="example@gmail.com"
        type="email"
        extraInfo={{ label: "Return to Login", to: "/auth/sign-in" }}
      />

      <Button disable label="Reset Password" />
    </div>
  );
};

export default ForgotPasswordPage;
