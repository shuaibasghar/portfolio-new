import Image from "next/image";
import Link from "next/link";
import React from "react";

const Experience = () => {
    return (
        <section
            id="experience"
            className="h-screen max-container flex flex-col justify-center items-center"
        >
            <h1 className="text-4xl text-white font-semibold">
                Professional Experience
            </h1>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" checked={true} />
                <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
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

export default Experience;
