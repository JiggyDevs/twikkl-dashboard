"use client";

import clsx from "clsx";
import { useState } from "react";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("Account");

  const tabs = ["Account", "Security", "Notification"];

  return (
    <div className="flex gap-x-8 items-center">
      {tabs.map((tab, i) => (
        <button
          key={`tabs-key-${tab}-${i}`}
          className={clsx(
            "py-2 px-7 rounded-lg font-light",
            tab === activeTab
              ? "bg-twikkl-primary text-white border-none"
              : "border border-twikkl-inactive text-twikkl-main"
          )}
          onClick={() => {
            setActiveTab((prev) => tab);
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tab;
