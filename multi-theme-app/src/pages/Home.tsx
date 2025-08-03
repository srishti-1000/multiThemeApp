import { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  return (
    <div className="bg-bg text-text font-base min-h-screen px-4 transition-colors duration-300 py-[6rem]">
        <h2 className="text-2xl font-semibold mb-2 text-center ">
          Welcome to the Home Page
        </h2>
        <p className="mb-4 text-center">Explore some products fetched from an API. </p>
        <div className="grid grid-cols-3 gap-6 text-center">
          {products.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200  p-4 rounded-lg shadow-sm bg-white dark:bg-gray-800 transition-colors m-[10px]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-40 object-contain mx-auto mb-4 h-[100px] w-[100px]"
              />
              <h3 className="font-semibold text-base mb-1">{item.title}</h3>
              <p className="text-sm font-medium">${item.price}</p>
            </div>
          ))}
        </div>
    </div>
  );
};  

export default Home;
