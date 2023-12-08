import Card from "./Card";

const CardWrapper = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardWrapper;
