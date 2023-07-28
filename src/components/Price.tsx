"use client";

import { useEffect, useState } from "react";

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};
const Price = ({ price, id, options }: Props) => {
  const [totalPrice, setTotalPrice] = useState(price);
  const [selected, setSelected] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setTotalPrice(
      quantity * (options ? options[selected].additionalPrice + price : price)
    );
  }, [quantity, selected, options, price]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${totalPrice.toFixed(2)}</h2>
      {/* options container */}
      <div className="flex gap-4">
        {options?.map((option, index) => (
          <button
            key={option.title}
            className="min-w-[6rem] ring-1 ring-red-400 rounded-md px-4 py-2"
            style={{
              background: selected === index ? "rgb(248 113 113" : "white",
              color: selected === index ? "white" : "red",
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>
      {/* quantity container */}
      <div className="flex justify-between items-center">
        <div className="flex justify-between w-full p-3 ring-1 ring-red-500">
          <span>Quantity</span>
          {/* quantity 1-10 */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() =>
                setQuantity((prev) => (prev === 10 ? 10 : prev + 1))
              }
            >
              {">"}
            </button>
          </div>
        </div>
        {/* add to cart button  */}
        <button className="uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-500 ">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;
