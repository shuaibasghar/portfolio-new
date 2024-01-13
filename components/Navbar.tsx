"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { CiSearch, CiBellOn } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
interface NavLink {
    key: string;
    href: string;
    label: string;
}
const Navbar: React.FC<NavLink> = () => {
    const [header, setHeader] = useState(false);

    const scrollHeader = () => {
        if (window.scrollY >= 20) {
            setHeader(true);
        } else {
            setHeader(false);
        }
    };

    // useEffect(() => {
    //     window.addEventListener("scroll", scrollHeader);
    //     return () => {
    //         window.addEventListener("scroll", scrollHeader);
    //     };
    // }, []);
    return (
        <nav className={` max-container  bg-white flexBetween  z-30 py-3`}>
            <Link href="/" className="text-[50px] text-white font-semibold ">
                <h1 className=" text-transparent bg-clip-text bg-gradient-to-r from-blue-10  to-blue-30">
                    ShuAib
                </h1>
            </Link>
            <ul className="hidden h-full gap-6 lg:flex  ">
                {NAV_LINKS.map((link) => (
                    <Link
                        href={link.href}
                        key={link.key}
                        className="hover:text-blue-10  px-3 py-1   regular-16 text-gray-50 flexCenter cursor-pointer  transition-all hover:font-bold hover:bg-blue-20 hover:rounded-full   "
                    >
                        {link.label}
                    </Link>
                ))}
            </ul>
            <div className="hidden lg:flex gap-4   cursor-pointer pb-1.5      ">
                <Link
                    href={"/"}
                    className="   hover:rounded-full hover:bg-blue-20 p-2 transition-all hover:text-blue-10 hover:font-bold "
                >
                    <CiSearch size={"2rem"} />
                </Link>

                <Link
                    href={"/"}
                    className="   hover:rounded-full hover:bg-blue-20 p-2 hover:text-blue-10  transition-all hover:font-bold "
                >
                    <CiBellOn size={"2rem"} />
                </Link>
                <Link
                    href={"/"}
                    className="  transition-all hover:rounded-full hover:bg-blue-20 p-2 hover:text-blue-10 hover:font-bold "
                >
                    <CiUser size={"2rem"} className="transition-all" />
                </Link>
            </div>

            <label className="btn btn-circle swap swap-rotate lg:hidden">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" />

                {/* hamburger icon */}
                <svg
                    className="swap-off fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 512 512"
                >
                    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>

                {/* close icon */}
                <svg
                    className="swap-on fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 512 512"
                >
                    <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
            </label>
        </nav>
    );
};

export default Navbar;
