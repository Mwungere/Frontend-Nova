"use client"
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { CustomNavbarProps } from "@/types";

const Navbar = ({ textStyles, containerStyles }: CustomNavbarProps) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
      setOpen(false);
  };

  const links = [
    {
      desc: "Home",
      link: "/",
    },
    {
      desc: "Services",
      link: "/",
      onClick: () => scrollToSection("services"), // Add onClick function for scrolling
    },
    {
      desc: "Pricing",
      link: "/pricing",
    },
    {
      desc: "Contact Us",
      link: "/contact",
    },
    {
      desc: "Signup!",
      link: "/signup",
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className={`w-screen ${open ? "fixed" : ""} top-0 left-0`}>
      <div
        className={`md:flex items-center justify-between  py-4 px-20 ${containerStyles}`}
      >
        <div className="flex font-bold cursor-pointer items-center font-body">
          <Image
            src="/logo.svg"
            width={70}
            height={70}
            className="object-contain"
            alt="logo"
          />
          <h1 className="text-black font-body mt-2 ml-2 text-2xl font-semibold">
            Nova
          </h1>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-20 transition-all duration-500 ease-in-out ${
            open
              ? "top-20 opacity-100 bg-gray-900"
              : "top-[-490px] md:opacity-100 opacity-0"
          }`}
        >
          {links.map(({ desc, link, onClick }) => (
            <li key={desc} className="md:ml-6 lg:ml-16 md:my-0 my-7">
              {onClick ? (
                <a
                  href={link}
                  onClick={(e) => {
                    e.preventDefault();
                    onClick(); // Call the onClick function if it exists
                  }}
                  className={`font-body text-xl text-secondary hover:text-green-300 duration-500 ${textStyles}`}
                >
                  {desc}
                </a>
              ) : (
                <Link
                  href={link}
                  className={`font-body text-xl text-secondary hover:text-green-300 duration-500 ${textStyles}`}
                >
                  {desc}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
