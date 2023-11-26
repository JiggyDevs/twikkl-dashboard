import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      Layout{" "}
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
};

export default Layout;
