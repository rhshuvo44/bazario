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
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#232F3E] rounded-box z-[1] mt-3 w-auto p-2 shadow"
          >
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

        <ul className="menu menu-horizontal px-1 bg-[#232F3E] hidden md:block w-52">
          <li>
            <details className="dropdown-hover">
              <summary className="uppercase hover:text-white focus-visible:text-white active:text-white">
                Shop Categories
              </summary>
              <ul className="p-2 bg-[#232F3E] rounded-sm">
                {renderMenu(categoryNavLinks)}
              </ul>
            </details>
          </li>
        </ul>
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
