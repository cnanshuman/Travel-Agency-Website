"use client";
import { GoPersonFill } from "react-icons/go";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assests/images/logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Nav = () => {
  return (
    <nav className="w-full hidden xl:flex fixed top-0 left-0 z-50  justify-center items-center">
      <div className="container mx-auto relative top-0 z-50">
        <nav className="flex justify-between px-4 py-3 items-center">
        
          <div className="w-[187px] bg-white/20 backdrop-blur-md p-2 rounded-lg">
            <Link href="/">
              <Image src={logo} alt="Logo" width={187} height={60} priority />
            </Link>
          </div>

        
          <div className="bg-white/20 backdrop-blur-md p-2 rounded-lg">
            <ul className="flex text-[14px] text-[#222222] font-medium">
              {[
                { name: "About", href: "/about" },
                { name: "Our Vechicle", href: "/vechicle" },
                { name: "Travel Package", href: "/travel" },
                { name: "Happy Clients", href: "/client" },
                { name: "Enquiry", href: "/enquiry", blink: true },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li
                  key={link.href}
                  className={`flex bg-[#f8f8f8] mx-1 rounded-lg hover:bg-[#ff3232] hover:text-white transition-all duration-300 ${
                    link.blink ? "blink-animation" : ""
                  }`}
                >
                  <Link href={link.href} className="px-4 py-2">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

         
          <div className="bg-white/20 backdrop-blur-md p-2 rounded-lg">
            <ul className="text-[13px] text-[#222222] font-medium flex items-center">
            
              <li className="relative group">
                <div className="flex bg-[#f8f8f8] mx-1 rounded-lg shadow-sm hover:bg-[#ff3232] hover:text-white transition-all duration-300 cursor-pointer px-3 py-2 items-center">
                  <GoPersonFill className="size-[20px]" />
                </div>
                <div className="absolute top-full left-0 mt-2 w-40 bg-white rounded-lg shadow-lg opacity-0 scale-95 translate-y-2 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 z-50">
                  <ul className="flex flex-col">
                    <li className="px-4 py-2 hover:bg-[#ff3232] hover:text-white rounded-md transition-all cursor-pointer">
                      <Link href="/login">Login</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-[#ff3232] hover:text-white rounded-md transition-all cursor-pointer">
                      <Link href="/signup">Signup</Link>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Phone Call */}
              <li>
                <a
                  href="tel:9810315052"
                  className="flex bg-[#f8f8f8] mx-1 rounded-lg shadow-sm hover:bg-[#ff3232] hover:text-white transition-all duration-300 cursor-pointer px-3 py-2 items-center"
                >
                  <FaPhoneAlt className="size-[20px] text-[#2196f3] group-hover:text-white transition-colors duration-300" />
                </a>
              </li>

              {/* WhatsApp */}
              <li>
                <a
                  href="https://wa.me/919810315052"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex bg-[#f8f8f8] mx-1 rounded-lg shadow-sm hover:bg-[#ff3232] hover:text-white transition-all duration-300 cursor-pointer px-3 py-2 items-center"
                >
                  <IoLogoWhatsapp className="size-[20px] text-[#25cc63] group-hover:text-white transition-colors duration-300" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* CSS for blinking animation */}
      <style jsx>{`
        @keyframes blinkSmooth {
          0%,
          100% {
            background-color: #f8f8f8;
          }
          50% {
            background-color: #ff3232;
            color: white;
          }
        }
        .blink-animation {
          animation: blinkSmooth 2s infinite;
        }
      `}</style>
    </nav>
  );
};

export default Nav;
