"use client";

import { useEffect, useState } from "react";

// Components
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";

import { usePathname } from "next/navigation";

const NavDrop = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  return (
    <>
      <Popover>
        <PopoverTrigger aria-label="Dropdown" className="relative">
          <div
            aria-label="dropdown"
            className="group flex w-8 cursor-pointer flex-col items-end justify-center gap-y-1.5 py-2"
          >
            <div className="h-0.5 w-full bg-foreground" />
            <div
              className={`anim-fast h-0.5 bg-foreground group-hover:w-full ${
                isOpen ? "w-full" : "w-1/2"
              }`}
            />
          </div>
        </PopoverTrigger>
        <PopoverContent className="absolute -right-4 mt-4 flex w-fit flex-col gap-3 px-0 pb-2.5 pt-3 sm:pb-3 md:mt-5">
          <div className="flex flex-col gap-y-1">
            <div className="flex flex-col gap-y-1 px-1 sm:hidden">
              <div className="mb-1 flex items-center gap-x-12 px-2">
                <h3 className="whitespace-nowrap text-xs font-medium text-muted-foreground">
                  Navigations
                </h3>
              </div>
              <Link
                className={`anim group rounded-sm px-2 py-1 hover:bg-muted ${
                  pathname === "/about" ? "bg-muted" : "bg-transparent"
                }`}
                href="/about"
              >
                <p
                  className={`whitespace-nowrap text-sm font-medium group-hover:text-foreground md:text-base ${
                    pathname === "/about"
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  About
                </p>
              </Link>
              <Link
                className={`anim group rounded-sm px-2 py-1 hover:bg-muted ${
                  pathname === "/blog" ? "bg-muted" : "bg-transparent"
                }`}
                href="/blog"
              >
                <p
                  className={`whitespace-nowrap text-sm font-medium group-hover:text-foreground md:text-base ${
                    pathname === "/blog"
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  Blog
                </p>
              </Link>
              <Link
                className={`anim group rounded-sm px-2 py-1 hover:bg-muted ${
                  pathname === "/playground" ? "bg-muted" : "bg-transparent"
                }`}
                href="/playground"
              >
                <p
                  className={`whitespace-nowrap text-sm font-medium group-hover:text-foreground md:text-base ${
                    pathname === "/playground"
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  Playground
                </p>
              </Link>
              <Link
                className={`anim group rounded-sm px-2 py-1 hover:bg-muted ${
                  pathname === "/template" ? "bg-muted" : "bg-transparent"
                }`}
                href="/template"
              >
                <p
                  className={`whitespace-nowrap text-sm font-medium group-hover:text-foreground md:text-base ${
                    pathname === "/template"
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  Template
                </p>
              </Link>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};
export default NavDrop;
