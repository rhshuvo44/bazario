"use client";
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
  const shopNavLinks = [
    {
      path: "/shop/fashion-apparel",
      label: "Fashion & Apparel",
      subcategories: [
        { path: "/shop/fashion-apparel/mens-fashion", label: "Men's Fashion" },
        {
          path: "/shop/fashion-apparel/womens-fashion",
          label: "Women's Fashion",
        },
        { path: "/shop/fashion-apparel/accessories", label: "Accessories" },
      ],
    },
    {
      path: "/shop/mens-clothing",
      label: "Men’s Clothing",
      subcategories: [
        { path: "/shop/mens-clothing/shirts", label: "Shirts" },
        { path: "/shop/mens-clothing/pants", label: "Pants" },
        { path: "/shop/mens-clothing/suits", label: "Suits" },
      ],
    },
    {
      path: "/shop/womens-clothing",
      label: "Women’s Clothing",
      subcategories: [
        { path: "/shop/womens-clothing/dresses", label: "Dresses" },
        { path: "/shop/womens-clothing/tops", label: "Tops" },
        { path: "/shop/womens-clothing/skirts", label: "Skirts" },
      ],
    },
    {
      path: "/shop/kids-wear",
      label: "Kids’ Wear",
      subcategories: [
        { path: "/shop/kids-wear/boys-clothing", label: "Boys' Clothing" },
        { path: "/shop/kids-wear/girls-clothing", label: "Girls' Clothing" },
        { path: "/shop/kids-wear/baby-clothing", label: "Baby Clothing" },
      ],
    },
    {
      path: "/shop/electronics",
      label: "Electronics",
      //   subcategories: [
      //     { path: "/shop/electronics/mobile-phones", label: "Mobile Phones" },
      //     { path: "/shop/electronics/laptops", label: "Laptops" },
      //     { path: "/shop/electronics/smart-gadgets", label: "Smart Gadgets" },
      //   ],
    },
  ];

  //   const shopCategories = [
  //     "Fashion & Apparel",
  //     "Men’s Clothing",
  //     "Women’s Clothing",
  //     "Kids’ Wear",
  //     "Electronics",
  //     "Mobile Phones & Accessories",
  //     "Laptops & Computers",
  //     "Smart Gadgets",
  //     "Home Appliances",
  //     "Home & Living",
  //     "Furniture",
  //     "Home Decor",
  //     "Kitchen Essentials",
  //     "Bedding & Bath",
  //     "Beauty & Personal Care",
  //     "Skincare",
  //     "Haircare",
  //     "Makeup",
  //     "Fragrances",
  //     "Health & Wellness",
  //     "Fitness Equipment",
  //     "Supplements",
  //     "Personal Hygiene",
  //     "Toys & Baby Products",
  //     "Baby Care",
  //     "Toys & Games",
  //     "Kids’ Accessories",
  //     "Books & Stationery",
  //     "Fiction & Non-Fiction",
  //     "Academic Supplies",
  //     "Art & Craft Supplies",
  //     "Sports & Outdoors",
  //     "Sports Equipment",
  //     "Outdoor Gear",
  //     "Fitness Accessories",
  //     "Groceries & Essentials",
  //     "Food & Beverages",
  //     "Cleaning Supplies",
  //     "Pet Supplies",
  //     "Automotive",
  //     "Car Accessories",
  //     "Motorcycle Gear",
  //     "Maintenance Tools",
  //     "Jewelry & Watches",
  //     "Bags & Accessories",
  //     "Digital Products",
  //     "Seasonal Deals",
  //   ];

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
                {/* {shopCategories.map((category, index) => (
                  <li key={index}>
                    <Link href="/">{category}</Link>
                  </li>
                ))} */}
                {/* {shopNavLinks.map((category, index) => (
                  <li key={index}>
                    <Link href={`/${category.path}`}>{category.label}</Link>
                    {category.subcategories &&
                      category.subcategories.length > 0 && (
                        <ul>
                          {category.subcategories.map(
                            (subcategory, subIndex) => (
                              <li key={subIndex}>
                                <Link href={`/${category.path}`}>
                                  {"subcategory"}
                                </Link>
                              </li>
                            )
                          )}
                        </ul>
                      )}
                  </li>
                ))} */}
                {renderMenu(shopNavLinks)}
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
