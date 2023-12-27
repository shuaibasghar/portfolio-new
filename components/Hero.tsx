import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
    return (
        <div className="h-[80vh] max-container  bg-white p-5">
            <div className="  h-[75vh] max-container flex justify-around">
                <div className="w-[40%]">
                    <h1 className="text-[40px]  font-semibold text-gray-30 mt-10 ">
                        Mernstack Developer
                    </h1>
                    <div className="">
                        <div className="mt-32">
                            <h1 className="  text-[50px] font-semibold text-blue-10">
                                I am Shuaib Asghar
                            </h1>
                            <p className="text-gray-30 mt-5">
                                Software developer from Pakistan, Currently
                                working at Freelancing. I am a professional web
                                developer with 2+ years of experience in
                                developing web and mobile apps with monolithic
                                and micro services approach using Next js,
                                Reactjs & ReactNative , Node js, TailwindCSS.
                            </p>
                        </div>
                        <div className="mt-20 flex   gap-10">
                            <button className="button-hire-me">Hire me</button>
                            <button className="button-download-cv">
                                Download CV
                            </button>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="flexCenter bg-blue-20 px-6 py-2 gap-3 rounded-full mt-10">
                        <div className="status-indicator" />
                        <Link href="https://www.fiverr.com/s/eAr0L3">
                            <h1 className="text-[20px] text-green-10 font-semibold ">
                                AVAILABLE FOR WORK
                            </h1>
                        </Link>
                    </div>
                    <Image
                        className=" rounded-full"
                        src={"/profile.jpg"}
                        alt="profile"
                        width={400}
                        height={250}
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
