const ViewItems = ({ product: { name, price, count, id }, increment }) => {
  return (
    <div className="rounded-md flex justify-evenly items-center p-2 bg-slate-500 text-white font-bold mb-3">
      <span>Name : {name}</span>
      <span>Price : {price}</span>
      <span>Count : {count}</span>
      <button className="btn btn-success" onClick={() => increment(id)}>
        +
      </button>
      <button className="btn btn-warning">-</button>
      <button className="btn btn-error">Del</button>
      <span>Total : 100</span>
    </div>
  );
};

export default ViewItems;
