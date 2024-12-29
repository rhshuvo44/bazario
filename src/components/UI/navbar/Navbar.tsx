"use client";
import { categoryNavLinks } from "@/constant";
import renderMenu from "@/utils/CategoryMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/store", label: "Our Store" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact" },
    { path: "/blog", label: "Blog" },
  ];

  return (
    <div className="navbar bg-[#232F3E] text-white">
      <div className="navbar-start w-full">
        <ul className="menu menu-horizontal px-1 bg-[#232F3E] hidden md:block w-64">
          <li>
            <details className="dropdown-hover">
              <summary className="uppercase hover:text-white focus-visible:text-white active:text-white z-[99999999]">
                Shop Categories
              </summary>
              <ul className="p-2 bg-[#232F3E] rounded-sm z-[9999] w-64">
                {renderMenu(categoryNavLinks)}
              </ul>
            </details>
          </li>
        </ul>

        <div className="md:hidden flex items-center justify-center w-full">
          <div className="flex">
            <div className="flex items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
              <svg
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="pointer-events-none absolute w-5 fill-gray-500 transition"
              >
                <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
              </svg>
            </div>
            <input
              type="text"
              className="w-full pl-2 text-black font-semibold outline-0"
              placeholder="Products Search"
            />
            <input
              type="button"
              value="Search"
              className="bg-[#FEBD69] p-2 rounded-tr-lg rounded-br-lg text-white font-semibold  transition-colors cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 bg-[#232F3E]">
          {navLinks.map((link) => (
            <li key={link.path} className="px-1">
              <Link
                href={link.path}
                className={`${pathname === link.path ? "active" : ""}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
