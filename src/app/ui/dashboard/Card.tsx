const Card = () => {
  return (
    <div className="flex flex-col gap-y-6 bg-twikkl-tertiary rounded-3xl p-6">
      <div className="flex items-center gap-x-3">
        <span className="h-[0.625rem] w-[0.625rem] bg-red-500 rounded-full"></span>
        <h3 className="">Total Users</h3>
      </div>
      <div className="flex flex-col gap-y-4">
        <h1 className="text-5xl font-bold">3.5m</h1>
        <p className="flex justify-between items-center">
          <div className="text-twikkl-primary">+5%</div>
          <div className="text-twikkl-main">Last Month</div>
        </p>
      </div>
    </div>
  );
};

export default Card;
