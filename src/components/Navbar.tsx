import Link from "next/link";
import MobileMenu from "./MobileMenu";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 md:h-24 text-red-500 p-4 lg:px-20 xl:px-40 flex justify-between items-center border-b-2 border-b-red-500 ">
      {/* left links */}
      <div className="hidden md:flex gap-4 lg:px-20 xl:px-40 flex-1">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
      </div>

      {/* logo */}
      <div className="uppercase text-xl md:font-bold md:text-center flex-1">
        <Link href="/">Massimo</Link>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden justify-self-end">
        <MobileMenu />
      </div>

      {/* right links */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div
          className="md:absolute md:top-3 md:right-2 lg:static
        flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md"
        >
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span>12345</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
