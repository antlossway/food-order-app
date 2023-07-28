import { singleProduct } from "@/app/data";
import Price from "@/components/Price";
import Image from "next/image";

const SingleProductPage = () => {
  return (
    <div
      className="p-4 lg:px-20 xl:px-40 h-screen
      flex flex-col md:flex-row justify-around md:items-center md:gap-8 text-red-500
      "
    >
      {/* image container */}
      {singleProduct.img && (
        <div className="flex-1 relative w-full p-8 md:h-[60%] ">
          <Image
            className="object-contain"
            src={singleProduct.img}
            alt=""
            fill
          />
        </div>
      )}
      {/* text container */}
      <div className="flex-1 md:h-[60%] flex flex-col gap-4  md:justify-center md:gap-6 xl:gap-8">
        <h1 className="text-3xl xl:text-4xl font-bold uppercase">
          {singleProduct.title}
        </h1>
        <p>{singleProduct.desc}</p>
        <Price
          price={singleProduct.price}
          id={singleProduct.id}
          options={singleProduct.options}
        />
      </div>
    </div>
  );
};

export default SingleProductPage;
