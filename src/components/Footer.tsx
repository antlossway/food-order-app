import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div
      className="h-12 md:h-24 p-4 lg:px-20 xl:px-40
    text-red-500 flex items-center justify-between"
    >
      <div className="uppercase text-xl md:font-bold md:text-center">
        <Link href="/">Massimo</Link>
      </div>
      <p className="uppercase">© All rights Reserved</p>
    </div>
  );
};

export default Footer;
