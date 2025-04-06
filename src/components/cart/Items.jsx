import ViewItems from "./ViewItems";

const Items = ({ products, increment }) => {
  return (
    <div className="flex w-full justify-center items-center flex-col gap-6">
      <h1 className="text-3xl font-extrabold text-green-700">Items</h1>

      <div className="flex w-full justify-evenly items-center">
        <button className="btn btn-success">Reset</button>
        <button className="btn btn-warning">Empty</button>
        <button className="btn btn-error">Dark/Light</button>
      </div>

      <div className="container mx-auto w-full">
        {products.map((product, index) => (
          <ViewItems product={product} key={index} increment={increment} />
        ))}
      </div>

      <h1 className="text-3xl font-extrabold text-green-700">
        Total Paid : 100
      </h1>
    </div>
  );
};

export default Items;
