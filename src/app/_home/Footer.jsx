"use client";
import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-black text-gray-300 py-12 px-4 sm:px-6 lg:px-8 mt-10 overflow-hidden">
      <footer className="container mx-auto">
        {/* Top section */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
          {/* Links Section */}
          <div className="w-full lg:w-[70%] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10">
            {/* General 1 */}
            <div>
              <h4 className="text-sm font-semibold text-gray-400 mb-4 tracking-wider">
                GENERAL
              </h4>
              <ul className="space-y-2">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/travel">Travel Package</Link></li>
                <li><Link href="/vechicle">Our Vehicle</Link></li>
              </ul>
            </div>

            {/* General 2 */}
            <div>
              <h4 className="text-sm font-semibold text-gray-400 mb-4 tracking-wider">
                GENERAL
              </h4>
              <ul className="space-y-2">
                <li><Link href="/client">Happy Client</Link></li>
                <li><Link href="/enquiry">Enquiry</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
              </ul>
            </div>

            {/* Car Package */}
            <div>
              <h4 className="text-sm font-semibold text-gray-400 mb-4 tracking-wider">
                CAR PACKAGE
              </h4>
              <ul className="space-y-2">
                <li><Link href="/enquiry">Sedan (Indigo/Etios/Dzire)</Link></li>
                <li><Link href="/enquiry">Tempo Traveller</Link></li>
                <li><Link href="/enquiry">SUV</Link></li>
                <li><Link href="/enquiry">Other</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold text-gray-400 mb-4 tracking-wider">
                CONTACT
              </h4>
              <ul className="space-y-2">
                <li>Gol Market New Delhi, Delhi 110001, India</li>
                <li>
                  <a
                    href="mailto:kulbirthakur86@gmail.com"
                    className="hover:text-white transition"
                  >
                    kulbirthakur86@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+919810315052"
                    className="hover:text-white transition"
                  >
                    +91 9810 31 5052
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Section */}
          <div className="w-full lg:w-[25%]">
            <h4 className="text-sm font-semibold text-gray-400 mb-4 tracking-wider text-left lg:text-right">
              FOLLOW US
            </h4>
            <div className="flex lg:justify-end justify-start gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 hover:border-white hover:text-white transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 hover:border-white hover:text-white transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 hover:border-white hover:text-white transition"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="max-w-7xl mx-auto border-t border-gray-700 mt-10 pt-6 flex flex-col lg:flex-row items-center justify-between text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Kulbir Travels. All Rights Reserved.
          </p>
          <div className="flex gap-6 mt-4 lg:mt-0">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/term" className="hover:text-white">
              Terms & Condition
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
