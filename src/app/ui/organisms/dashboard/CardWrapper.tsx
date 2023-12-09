import Card from "./Card";
import data from "../../../lib/data/index.json";

const CardWrapper = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
      <Card {...data?.cardDatas[0]} />
      <Card {...data?.cardDatas[1]} />
      <Card {...data?.cardDatas[2]} />
      <Card {...data?.cardDatas[3]} />
      <Card {...data?.cardDatas[4]} />
    </div>
  );
};

export default CardWrapper;
