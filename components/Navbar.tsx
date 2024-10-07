"use client";
import React, { useContext, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { CustomNavbarProps } from "@/types";
import { usePathname } from "next/navigation";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ThemeContext } from "@/app/context/ThemeContext";

const Navbar = ({ textStyles, containerStyles }: CustomNavbarProps) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const context = useContext(ThemeContext);

  if (!context) {
    return null; // Handle the case where context is undefined
  }

  const { toggleColorMode } = context;

  const scrollDownToServices = () => {
    const services = document.getElementById("services");
    if (services) {
      services.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  const links = [
    { desc: "Home", link: "/" },
    { desc: "Services", link: "/services" },
    { desc: "Pricing", link: "/pricing" },
    { desc: "Contact Us", link: "/contact" },
    { desc: "Signup!", link: "/signup" },
  ];

  return (
    <div className={`w-screen ${open ? "fixed" : ""} top-0 left-0`}>
      <div className={`md:flex items-center justify-between py-4 px-20 ${containerStyles}`}>
        <div className="flex font-bold cursor-pointer items-center font-body">
          <Image src="/logo.svg" width={70} height={70} className="object-contain" alt="logo" />
          <h1 className={`font-body mt-2 ml-2 text-2xl font-semibold ${theme.palette.mode === "dark" ? "text-white" : "text-black"}`}>
            Nova
          </h1>
        </div>
        <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
          {open ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`md:flex md:items-center md:pb-0 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-20 transition-all duration-500 ease-in-out ${open ? "top-20 opacity-100 bg-gray-900" : "top-[-490px] md:opacity-100 opacity-0"}`}>
          {links.map(({ desc, link }) => {
            const isActive = pathname.endsWith(link);
            return (
              <li key={desc} className="md:ml-6 lg:ml-16 md:my-0 my-7">
                {link === "/services" ? (
                  <a href="/#" className={`font-body text-xl duration-500 ${textStyles}`} onClick={scrollDownToServices}>
                    {desc}
                  </a>
                ) : (
                  <Link href={link} className={`font-body text-xl ${isActive ? "border-b-4 border-secondary text-secondary" : theme.palette.mode === "dark" ? "text-white" : "text-black"}`}>
                    {desc}
                  </Link>
                )}
              </li>
            );
          })}
          <IconButton onClick={toggleColorMode} sx={{ ml: 1 }} color="inherit">
            {theme.palette.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
