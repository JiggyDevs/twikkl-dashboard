"use client";

import clsx from "clsx";
import { useState } from "react";

const Tab2 = () => {
  const [activeTab, setActiveTab] = useState("Tokens");

  const tabs = ["Tokens", "NFTs"];

  return (
    <div className="flex justify-around items-center border-b border-twikkl-inactive">
      {tabs.map((tab, i) => (
        <button
          key={`tabs2-key-${tab}-${i}`}
          className={clsx(
            "py-2 px-7 rounded-lg font-light transition-all duration-200",
            tab === activeTab
              ? "text-twikkl-primary relative before:absolute before:content-[''] before:bottom-0 before:w-full before:bg-twikkl-primary before:h-[0.1875rem] before:left-0 before:rounded-t-lg"
              : "text-twikkl-inactive"
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

export default Tab2;
