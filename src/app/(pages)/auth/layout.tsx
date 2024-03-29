import Image from "next/image";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-grow overflow-hidden md:grid md:grid-cols-[1.3fr_1.2fr]">
      <div className="hidden md:grid bg-twikkl-main place-content-center">
        <Image
          src="/img/twikkl_logo.webp"
          alt="Twikkl-brand-img"
          width={457}
          height={457}
          priority
        />
      </div>
      <div className="bg-twikkl-tertiary flex-grow overflow-hidden flex flex-col md:justify-center items-center w-full px-10 py-6 md:py-0 gap-y-12 md:gap-y-0">
        <Image
          src="/img/twikkl_logo.webp"
          alt="Twikkl-brand-img"
          className="md:hidden"
          width={170}
          height={170}
          priority
        />

        {children}
      </div>
    </div>
  );
};

export default Layout;
