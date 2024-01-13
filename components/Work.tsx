import Image from "next/image";
import Link from "next/link";
import React from "react";

const Work = () => {
    return (
        <section
            id="work"
            className="rounded-2xl  bg-neutral-100 flex flex-col justify-center items-center"
        >
            <div className="  h-[75vh]  flex items-center justify-center   ">
                <div className="w-[40%]">
                    <h1 className=" text-center text-[40px]  font-semibold text-black-100 mt-10 ">
                        My Work
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
                href={"/work"}
                className="btn btn-outline btn-primary  w-full "
            >
                VIEW MORE
            </Link>
        </section>
    );
};

export default Work;
