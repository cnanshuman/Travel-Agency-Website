import React from "react";
import logo from "../../assests/images/logo.png";
import Image from "next/image";
import Link from "next/link";

// icons
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedinIn,
  FaTwitterSquare,
  FaPinterestSquare,
} from "react-icons/fa";

function Footer() {
  const Linkdata = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Services", link: "/services" },
    { id: 4, name: "Portfolio", link: "/portfolio" },
    { id: 5, name: "Blogs", link: "/blogs" },
    { id: 6, name: "Careers", link: "/career" },
  ];

  const Services = [
    { id: 1, name: "Web Development", link: "/services/WebsiteDesign" },
    { id: 2, name: "Content Writing", link: "/services/ContentWritting" },
    { id: 3, name: "Digital Marketing", link: "/services/DigitalMarketing" },
    { id: 4, name: "Business Solutions", link: "/services/BusinessSolution" },
    { id: 5, name: "UI UX Designing", link: "/services/Uiux" },
  ];

  const Social = [
    { id: 1, name: "Facebook", icon: FaFacebookSquare, link: "https://www.facebook.com/people/MSTYEnterprises/61566355984656/" },
    { id: 2, name: "Instagram", icon: FaInstagramSquare, link: "https://www.instagram.com/mstyenterprises/" },
    { id: 3, name: "Twitter", icon: FaTwitterSquare, link: "https://x.com/mstyenterp89085" },
    { id: 4, name: "LinkedIn", icon: FaLinkedinIn, link: "https://www.linkedin.com/in/msty-39774332a/" },
    { id: 5, name: "Pinterest", icon: FaPinterestSquare, link: "https://in.pinterest.com/mstyenterprises/" },
  ];

  return (
    <>
      <footer className="bg-[#f3f3f4] text-[#181818] pt-16 pb-8 px-3 max-sm:pb-4 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-10">
          {/* Logo + Description + Social */}
          <div className="col-span-12 md:col-span-6 lg:col-span-6">
            <a href="/" className="relative group w-[80px] block h-[80px]">
              <Image src={logo} alt="Mysty Enterprises" className="w-[80px] mb-3" />
            </a>

            <p className="text-[16px] leading-relaxed max-sm:max-w-[70%]">
              Mysty Enterprise is a global UI/UX design agency that boosts brand
              value with user-friendly, effective designs for web, mobile, and
              SaaS platforms.
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
              {Social.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.link}
                  target="blank"
                  className="hover:text-[#2684ff] transition-all duration-200 ease-in-out"
                >
                  <item.icon className="text-4xl" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-12 md:col-span-3 lg:col-span-2">
            <h3 className="text-[#181818] text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {Linkdata.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.link}
                    className="hover:text-[#2684ff] transition-all duration-300 ease-in-out"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-12 md:col-span-3 lg:col-span-2">
            <h3 className="text-[#181818] text-lg font-semibold mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              {Services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.link}
                    className="hover:text-[#2684ff] transition-all duration-300 ease-in-out"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-span-12 md:col-span-6 lg:col-span-2">
            <h3 className="text-[#181818] text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:info@mstyenterprises.com"
                  className="hover:text-[#2684ff] transition-all duration-300 ease-in-out block"
                >
                  info@mstyenterprises.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919910741417"
                  className="hover:text-[#2684ff] transition-all duration-300 ease-in-out block"
                >
                  +91 99107 41417
                </a>
              </li>
              <li>
                <span className="block">
                  33/33A, Tower No. 6, 3rd Floor, <br /> Rama Road, Industrial
                  Area, <br /> New Delhi 110015
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#d1d1d1] mt-10 pt-4 text-center text-sm text-[#181818]">
          &copy; {new Date().getFullYear()} Kulbir Travel private limited. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;
