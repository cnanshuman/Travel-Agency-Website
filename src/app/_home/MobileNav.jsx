
"use client";
import { GoPersonFill } from "react-icons/go";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assests/images/logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { gsap } from "gsap";


const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919810315052";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      gsap.to(".mobile-nav-menu", {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(".mobile-nav-menu", {
        x: "-100%",
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  
  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Our Vechicle", href: "/vechicle" },
    { name: "Travel Package", href: "/travel" },
    { name: "Happy Clients", href: "/client" },
    { name: "Enquiry", href: "/enquiry", blink: true },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 xl:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src={logo} alt="Logo" width={178} height={32} />
            </Link>
          </div>

         
          <div>
            <button
              onClick={toggleMenu}
              className="text-[#121212] hover:text-blue-600 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <GiHamburgerMenu size={24} />
            </button>
          </div>
        </div>
      </div>

     
      <div className="mobile-nav-menu bg-white fixed top-16 left-0 w-full h-[calc(100vh-4rem)] transform -translate-x-full opacity-0">
        <div className="flex flex-col px-5 space-y-6 pt-3">
          
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-gray-700 hover:text-blue-600 text-[20px] max-lg:text-base mb-2 py-2 border-b-1 border-dashed border-[#d3d3d3] font-medium ${
                link.blink ? "animate-blink" : ""
              }`}
              onClick={toggleMenu}
            >
              {link.name}
            </Link>
          ))}

          
          <div className="p-2 px-0 rounded-lg">
            <ul className="text-[13px] text-[#222222] font-medium flex items-center">
            
              <li className="">
                <div
                  className="flex bg-[#f8f8f8] mx-1 rounded-lg shadow-sm hover:bg-[#ff3232] hover:text-white transition-all duration-300 cursor-pointer px-3 py-2 items-center"
                  aria-label="User menu"
                ><Link href="/login">
                  <GoPersonFill className="size-[20px]" /></Link>
                </div>
                
              </li>

             
              <li>
                <a
                  href="tel:9810315052"
                  className="flex bg-[#f8f8f8] mx-1 rounded-lg shadow-sm hover:bg-[#ff3232] hover:text-white transition-all duration-300 cursor-pointer px-3 py-2 items-center"
                  aria-label="Call us"
                >
                  <FaPhoneAlt className="size-[20px] text-[#2196f3] group-hover:text-white transition-colors duration-300" />
                </a>
              </li>

              
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex bg-[#f8f8f8] mx-1 rounded-lg shadow-sm hover:bg-[#ff3232] hover:text-white transition-all duration-300 cursor-pointer px-3 py-2 items-center"
                  aria-label="Contact us on WhatsApp"
                >
                  <IoLogoWhatsapp className="size-[20px] text-[#25cc63] group-hover:text-white transition-colors duration-300" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

    
      <style jsx>{`
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        .animate-blink {
          animation: blink 1.5s infinite;
        }
      `}</style>
    </nav>
  );
};

export default MobileNav;
