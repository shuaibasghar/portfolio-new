import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <footer className="flexCenter">
            <div className="max-container   ">
                {/* <Link
                    href="/"
                    className="text-[50px] text-white font-semibold "
                >
                    <h1
                        // className=" text-transparent bg-clip-text bg-gradient-to-r from-blue-10  to-blue-30"

                        className="text-transparent bg-clip-text bg-gradient-to-r from-blue-10 to-blue-30 bg-white"
                    >
                        ShuAib
                    </h1>
                </Link> */}

                <p>
                    &copy;<span>copyright shuaib asghar</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
