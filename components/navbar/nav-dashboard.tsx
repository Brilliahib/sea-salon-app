import Link from "next/link";
import NavItems from "@/lib/constants";
import NavLink from "./nav-link";
import { CircleUser } from "lucide-react";

const NavbarDashboard = () => {
  return (
    <header className="sticky top-0 z-40 shrink-0 flex w-full items-center justify-between border-b bg-background pb-4 py-4 pad-x">
      <Link href="/" className="flex items-center">
        <h1 className="text-xl font-bold">SEA Salon</h1>
      </Link>

      <nav className="flex items-center justify-between">
        <ul className="flex items-center gap-x-8">
          <li className="block">
            <div className="flex items-center gap-x-3">
              <h1 className="text-muted-foreground text-sm">
                Hello, Akhila Zahra!
              </h1>
              <CircleUser />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavbarDashboard;
