"use client";
import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-black text-gray-300 py-12 px-4 sm:px-6 lg:px-8 mt-10 overflow-hidden">
      <footer className="container mx-auto">
       
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
         
          <div className="w-full lg:w-[70%] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10">
           
            <div>
              <h4 className="text-sm font-semibold text-gray-400 mb-4 tracking-wider">
                GENERAL
              </h4>
              <ul className="space-y-2">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/how-it-works">Travel Package</Link></li>
                <li><Link href="/testimonials">Our Vehicle</Link></li>
              </ul>
            </div>

           
            <div>
              <h4 className="text-sm font-semibold text-gray-400 mb-4 tracking-wider">
                GENERAL
              </h4>
              <ul className="space-y-2">
                <li><Link href="/testimonials">Happy Client</Link></li>
                <li><Link href="/testimonials">Review</Link></li>
                <li><Link href="/testimonials">Enquiry</Link></li>
              </ul>
            </div>

            
            <div>
              <h4 className="text-sm font-semibold text-gray-400 mb-4 tracking-wider">
                CAR PACKAGE
              </h4>
              <ul className="space-y-2">
                <li><Link href="/free-content">Sedan (Indigo/Etios/Dzire)</Link></li>
                <li><Link href="/glossary">Tempo Traveller</Link></li>
                <li><Link href="/tutorials">SUV</Link></li>
                <li><Link href="/tutorials">Other</Link></li>
              </ul>
            </div>

           
            <div>
              <h4 className="text-sm font-semibold text-gray-400 mb-4 tracking-wider">
                CONTACT
              </h4>
              <ul className="space-y-2">
                <li>Gol Market New Delhi, Delhi 110001, India</li>
                <li>
                  <a href="mailto:kulbirthakur86@gmail.com" className="hover:text-white transition">
                    kulbirthakur86@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+919810315052" className="hover:text-white transition">
                    +91 9810 31 5052
                  </a>
                </li>
              </ul>
            </div>
          </div>

          
          <div className="w-full lg:w-[25%]">
            <h4 className="text-sm font-semibold text-gray-400 mb-4 tracking-wider text-left lg:text-right">
              FOLLOW US
            </h4>
            <div className="flex lg:justify-end justify-start gap-4">
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 hover:border-white hover:text-white transition"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 hover:border-white hover:text-white transition"
              >
                <FaInstagram />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 hover:border-white hover:text-white transition"
              >
                <FaYoutube />
              </Link>
            </div>
          </div>
        </div>

        
        <div className="max-w-7xl mx-auto border-t border-gray-700 mt-10 pt-6 flex flex-col lg:flex-row items-center justify-between text-sm text-gray-400">
          <p>© 2025 Kulbir Travels. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 lg:mt-0">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms & Condition
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
