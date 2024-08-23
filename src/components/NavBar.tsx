import Link from "next/link";
import React from "react";
import { Search } from "./Search";

const navLinks = [
  { path: "explore", name: "Buy" },
  { path: "about", name: "About" },
  { path: "services", name: "Services" },
  { path: "contact", name: "Contact Us" },
];

export const NavBar = () => {
  return (
    <div className="bg-white dark:bg-blackaf fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="icon.svg" className="h-8" alt="Cart Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Kaizen Cart
          </span>
        </div>
        <Search />
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-blackaf dark:border-gray-700">
            {navLinks.map((details,index)=>(<li key={index}>
              <Link
                href= {details.path}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                {details.name}
              </Link>
            </li>))}
            
          </ul>
        </div>
      </div>
    </div>
  );
};
