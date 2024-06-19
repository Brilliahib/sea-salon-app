import Link from "next/link";
import NavItems from "@/lib/constants";
import NavLink from "./nav-link";
import NavDrop from "./nav-drop";
import Button from "../button/button";

const Navbar = () => {
  return (
    <header className="pad-x sticky top-0 z-40 flex w-full items-center justify-between border-b bg-background py-4">
      <Link href="/" className="flex items-center">
        <h1 className="text-xl font-bold">SEA Salon</h1>
      </Link>

      <nav className="flex items-center justify-between">
        <ul className="flex items-center gap-x-8">
          {NavItems.map((item, index) => (
            <li key={index} className="hidden sm:block">
              <NavLink href={item.href} name={item.name} />
            </li>
          ))}
          <li className="flex items-center">
            <Link href="/login">
              <Button className="font-bold justify-center text-sm">
                Login
              </Button>
            </Link>
          </li>
          <li className="flex items-center md:hidden inline">
            <NavDrop />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
