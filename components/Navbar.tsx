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

    useEffect(() => {
        window.addEventListener("scroll", scrollHeader);
        return () => {
            window.addEventListener("scroll", scrollHeader);
        };
    }, []);
    return (
        <header className={``}>
            <nav
                className={` max-container  bg-white flexBetween padding-container z-30 py-3`}
            >
                <Link
                    href="/"
                    className="text-[50px] text-white font-semibold "
                >
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

                <Image
                    src={"menu.svg"}
                    alt={"menu"}
                    width={32}
                    height={32}
                    className=" inline-block cursor-pointer lg:hidden"
                />
            </nav>
        </header>
    );
};

export default Navbar;
