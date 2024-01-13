import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
    return (
        <div className=" h-screen  rounded-2xl   scale-400">
            <div className=" h-[75vh]  flex  justify-around items-center  ">
                <div className="bg-white  p-5  rounded-xl w-[40%]">
                    <h1 className="text-[40px]  font-semibold text-black-100 mt-10 ">
                        Fullstack Developer
                    </h1>
                    <div className="flex items-center   py-2 gap-3 rounded-full ">
                        <div className="status-indicator" />
                        <Link href="https://www.fiverr.com/s/eAr0L3">
                            <h1 className="text-[20px] text-green-10 font-semibold ">
                                AVAILABLE FOR WORK
                            </h1>
                        </Link>
                    </div>
                    <div className="">
                        <div className="mt-10">
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
                <div>
                    <Image
                        className="border-8 rounded-full"
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
