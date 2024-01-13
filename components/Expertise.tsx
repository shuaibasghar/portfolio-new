import Image from "next/image";
import Link from "next/link";
import React from "react";

const Expertise = () => {
    return (
        <section
            id="expertise"
            className="backgroundImage-expertise h-[100vh]   rounded-2xl  shadow-lg scale-400"
        >
            <div className=" mt-14 h-[75vh]  flex items-center justify-center   ">
                <div className="w-[40%]">
                    <h1 className=" text-center text-[40px]  font-semibold text-black-100 mt-10 ">
                        My Expertise
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
        </section>
    );
};

export default Expertise;
