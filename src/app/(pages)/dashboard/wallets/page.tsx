import Table from "@/app/ui/organisms/Table";
import data from "@/app/lib/data/index.json";
import { walletTableHeaders } from "@/app/lib/data";
import WalletTableFilter from "@/app/ui/molecules/WalletTableFilter";
import Pagination from "@/app/ui/molecules/Pagination";

const WalletPage = () => {
  return (
    <div className="grid gap-y-4">
      <h1 className="text-xl font-bold text-twikkl-main">Wallets</h1>
      <div className="bg-twikkl-tertiary rounded-3xl grid px-4 py-6 md:p-8 w-full gap-y-4">
        <WalletTableFilter />
        <Table columns={walletTableHeaders} data={data.twiKKlWalletData} />
        <Pagination />
      </div>
    </div>
  );
};

export default WalletPage;
