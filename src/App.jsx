import { useState } from "react";
import Header from "./components/Header";
import Items from "./components/cart/Items";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "chipsy", price: 100, count: 1 },
    { id: 2, name: "pepsi", price: 200, count: 1 },
    { id: 3, name: "cigartes", price: 300, count: 1 },
    { id: 4, name: "baneh", price: 400, count: 1 },
  ]);

  const [addedProducts] = useState([
    { id: 1, name: "chipsy", price: 100, count: 1 },
    { id: 2, name: "pepsi", price: 200, count: 1 },
    { id: 3, name: "cigartes", price: 300, count: 1 },
    { id: 4, name: "baneh", price: 400, count: 1 },
  ]);

  const [theme, setTheme] = useState(true);

  const increment = (id) => {};

  return (
    <div className=" text-center space-y-5 bg-white">
      <Header addedProducts={addedProducts} />
      <Items products={products} increment={increment} />
    </div>
  );
};

export default App;
