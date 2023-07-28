import Link from "next/link";
import { menu } from "../data";

const MenuPage = () => {
  return (
    <div
      className="p-4 lg:px-20 xl:px-40  md:h-[calc(100vh-9rem)]
    flex flex-col md:flex-row items-center"
    >
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="bg-cover w-full h-1/3 md:h-1/2 p-8"
          style={{ backgroundImage: `url(${category.img})` }}
        >
          {/* text container */}
          <div className={`text-${category.color} w-1/2 h-full flex flex-col `}>
            <h1 className="text-3xl font-bold uppercase">{category.title}</h1>
            <p className="flex-1 text-sm my-8">{category.desc}</p>
            <button
              className={`hidden 2xl:block
              bg-${category.color} px-4 py-2 rounded
              text-${
                category.color === "black" ? "white" : "black"
              } border border-white`}
            >
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
