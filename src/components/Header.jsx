import { FaCartShopping } from "react-icons/fa6";

const Header = ({ addedProducts }) => {
  return (
    <div className="navbar flex w-full justify-between px-8 items-center  bg-red-600">
      <div className="">
        <a className="btn btn-ghost text-xl text-white">Cart</a>
      </div>

      <div className="flex gap-10">
        {addedProducts.map((product) => (
          <button className="btn btn-success text-white" key={product.id}>
            {product.name}
          </button>
        ))}
      </div>

      <div className="flex-none gap-2 me-4">
        <FaCartShopping className="text-white text-3xl" />
        <span className="text-white text-3xl">0</span>
      </div>
    </div>
  );
};

export default Header;
