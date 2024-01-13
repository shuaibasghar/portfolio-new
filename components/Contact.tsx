import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact = () => {
    return (
        <section
            id="contact"
            className="h-screen max-container flex flex-col justify-center items-center"
        >
            <div className="flex items-center justify-center ">
                <Link
                    href={"/expertise"}
                    className=" mt-20 md:w-full lg:w-96 sm:w-full btn bg-transparent border-2 border-blue-10 hover:text-white hover:bg-blue-10  hover:transition-all "
                >
                    VIEW MORE
                </Link>
            </div>
        </section>
    );
};

export default Contact;
