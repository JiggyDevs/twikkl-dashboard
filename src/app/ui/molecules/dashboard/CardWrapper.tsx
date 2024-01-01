import Card from "./Card";
import data from "@/app/lib/data/index.json";

const CardWrapper = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
      <Card {...data?.cardDatas[0]} indicator="lightOrange" />
      <Card {...data?.cardDatas[1]} indicator="green" />
      <Card {...data?.cardDatas[2]} indicator="purple" />
      <Card {...data?.cardDatas[3]} indicator="darkOrange" />
      <Card {...data?.cardDatas[4]} indicator="darkBlue" />
    </div>
  );
};

export default CardWrapper;
