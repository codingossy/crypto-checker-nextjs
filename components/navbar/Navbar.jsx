import Link from "next/link";


const Navbar = () => {
  return (
    <div className="capitalize hidden md:flex">
      <ul className="flex items-center space-x-12 text-white">
        <li  className="hover:text-red-500">
          <Link className="cursor-pointer"  href="/">home</Link>
        </li>
        <li className="hover:text-red-500">
          <Link href="/about">about</Link>
        </li>
        <li className="hover:text-red-500">
          <Link href="/contact">contact</Link>
        </li>
        <li className="hover:text-red-500">
          <Link href="/login">login</Link>
        </li>
        <li className="hover:text-red-500">
          <Link href="/register">register</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
