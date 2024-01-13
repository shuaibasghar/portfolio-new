"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const projects = [
    {
        id: 1,
        title: "Employee Induction",
        type: "Web App",
        imageSrc: "/softdev.png",
    },
    {
        id: 2,
        title: "BeeSocialize",
        type: "Web App",
        imageSrc: "/softdev.png",
    },
    {
        id: 3,
        title: "TODO APP",
        type: "Mobile App",
        imageSrc: "/softdev.png",
    },
    {
        id: 4,
        title: "Driver App",
        type: "Mobile App",
        imageSrc: "/softdev.png",
    },
    {
        id: 5,
        title: "EntrustUS",
        type: "Web App",
        imageSrc: "/softdev.png",
    },
];

const Work = () => {
    const [filter, setFilter] = useState("all");

    const filteredProjects =
        filter === "all" ? projects : projects.filter((p) => p.type === filter);

    return (
        <section
            id="work"
            className=" p-5  h-screen max-container flex flex-col justify-center items-center"
        >
            <h1 className="text-5xl font-bold mb-10 text-white">My Work</h1>
            <div>
                {/* Filter buttons */}
                <div className="flex space-x-4">
                    <button
                        className={filter === "all" ? "text-white" : ""}
                        onClick={() => setFilter("all")}
                    >
                        All
                    </button>
                    <button
                        className={filter === "Mobile App" ? "text-white" : ""}
                        onClick={() => setFilter("Mobile App")}
                    >
                        Mobile Apps
                    </button>
                    <button
                        className={filter === "Web App" ? "text-white" : ""}
                        onClick={() => setFilter("Web App")}
                    >
                        Web Apps
                    </button>
                </div>

                {/* Project cards */}
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-4"> */}
                <div className="flex justify-between items-center gap-4">
                    {filteredProjects.map((project) => (
                        <Link
                            href={"/work"}
                            key={project.id}
                            className="bg-white p-4 rounded-md shadow-md"
                        >
                            <h2>{project.title}</h2>
                            <p>{project.type}</p>
                            <Image
                                src={project.imageSrc}
                                alt={project.title}
                                width={300}
                                height={200}
                            />
                        </Link>
                    ))}
                </div>

                <div className="flex items-center justify-center ">
                    <Link
                        href={"/expertise"}
                        className=" text-white mt-20 md:w-full lg:w-96 sm:w-full btn bg-transparent border-2 border-blue-10 hover:text-white hover:bg-blue-10  hover:transition-all "
                    >
                        VIEW MORE
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Work;
