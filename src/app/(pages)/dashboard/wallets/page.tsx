import WalletTableFilter from "@/app/ui/molecules/WalletTableFilter";
import React from "react";

const WalletPage = () => {
  return (
    <div className="grid gap-y-4">
      <h1 className="text-xl font-bold text-twikkl-main">Wallets</h1>
      <div className="bg-twikkl-tertiary rounded-3xl flex p-8 w-full">
        <WalletTableFilter />
      </div>
    </div>
  );
};

export default WalletPage;
