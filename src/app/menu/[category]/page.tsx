import { pizzas } from "@/app/data";
import Image from "next/image";
import Link from "next/link";

const CategoryPage = () => {
  return (
    // <div className="flex flex-wrap text-red-500">
    <div className="grid grid-cols-12 text-red-500">
      {pizzas.map((pizza) => (
        <Link
          href={`/product/${pizza.id}`}
          key={pizza.id}
          className="w-full col-span-12 sm:col-span-6 lg:col-span-4 h-[60vh] border-r-2 border-b-2 border-red-500
          p-4 flex flex-col justify-between
          group
          even:bg-fuchsia-50"
        >
          {/* image container */}
          {pizza.img && (
            <div className="relative h-[80%] ">
              <Image src={pizza.img} alt="" className=" object-contain " fill />
            </div>
          )}
          {/* text container */}
          <div className="flex items-center justify-between ">
            <h1 className="text-2xl uppercase p-2">{pizza.title}</h1>
            <h2 className="group-hover:hidden text-xl">${pizza.price}</h2>
            <button className="hidden group-hover:block uppercase bg-red-500 text-white rounded-md px-4 py-2 font-bold">
              Add to Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
