import Image from "next/image";
import Link from "next/link";
import React from "react";

const Experience = () => {
    return (
        <section
            id="experience"
            className="h-screen rounded-2xl  bg-neutral-100 flex flex-col justify-center items-center"
        >
            <div className="  h-[75vh]  flex items-center justify-center   ">
                <div className="w-[40%]">
                    <h1 className=" text-center text-[40px]  font-semibold text-black-100 mt-10 ">
                        My Experience
                    </h1>

                    <div className="flex items-center justify-center">
                        <div>
                            <div>
                                <p>header-section</p>
                            </div>
                            <p>card-one</p>
                        </div>
                    </div>
                </div>
            </div>
            <Link
                href={"/experience"}
                className="btn btn-outline btn-primary  w-full "
            >
                VIEW MORE
            </Link>
        </section>
    );
};

export default Experience;
