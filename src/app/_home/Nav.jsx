// src/components/Nav.jsx

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assests/images/logo.png";
import { GoPersonFill } from "react-icons/go";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";

const Nav = () => {
  return (
    <div className="container mx-auto">
      <nav className="flex justify-between px-2.5 py-2.5 items-center">
        {/* Logo */}
        <div className="w-[187px]">
          <Link href="/">
            <Image src={logo} alt="Logo" width={187} height={60} priority />
          </Link>
        </div>

        {/* Center Navigation Links */}
        <div className="bg-[#ededed] p-1 rounded-lg">
          <ul className="flex text-[13px] text-[#222222] font-medium">
            {[
              { name: "About", href: "/About" },
              { name: "Services", href: "/Services" },
              { name: "Our Vechicle", href: "/Our-Vechicle" },
              { name: "Travel Package", href: "/Travel-Package" },
              { name: "Happy Clients", href: "/Happy-Clients" },
              { name: "Callery", href: "/Callery" },
            ].map((link) => (
              <li
                key={link.href}
                className="flex bg-[#f8f8f8] mx-1 rounded-lg hover:bg-[#ff3232] hover:text-white transition-all duration-300"
              >
                <Link href={link.href} className="px-4 py-3">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Profile / Contact Section */}
        <div className="bg-[#ededed] p-1 rounded-lg">
          <ul className="text-[13px] text-[#222222] font-medium flex">
            {/* Profile / Login Dropdown */}
            <li className="relative group">
              {/* Profile Icon */}
              <div className="flex bg-[#f8f8f8] mx-1 rounded-lg shadow-sm hover:bg-[#ff3232] hover:text-white transition-all duration-300 cursor-pointer">
                <span className="px-4 py-3 flex items-center justify-center">
                  <GoPersonFill className="size-[20px]" />
                </span>
              </div>

              {/* Dropdown */}
              <div className="absolute top-full left-0 mt-3 w-48 bg-white rounded-[8px] shadow-xl opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible transition-all duration-300 z-50">
                <ul className="flex flex-col text-sm text-[#222]">
                  <li>
                    <Link
                      href="/login"
                      className="flex items-center gap-3 px-4 py-3 rounded-t-[8px] hover:bg-[#ff3232] hover:text-white transition-all duration-200"
                    >
                      <FaSignInAlt className="text-lg" />
                      <span>Login</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/signup"
                      className="flex items-center gap-3 px-4 py-3 rounded-b-2xl hover:bg-[#ff3232] hover:text-white transition-all duration-200"
                    >
                      <FaUserPlus className="text-lg" />
                      <span>Signup</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Contact Us */}
            <li className="flex bg-[#f8f8f8] mx-1 rounded-lg hover:bg-[#ff3232] hover:text-white transition-all duration-300">
              <Link href="/contact" className="px-5 py-3">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
