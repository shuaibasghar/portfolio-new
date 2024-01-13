import Image from "next/image";
import Link from "next/link";
import React from "react";
import Card from "./reuseable/Cards";

const Expertise = () => {
    const width = "100%";
    const height = "100%";
    return (
        <section
            id="expertise"
            className="h-screen   bg-neutral-100 flex flex-col justify-center    "
        >
            <h1 className="text-[40px] font-semibold text-center mb-10">
                My Expertise
            </h1>
            <div className="flex items-center justify-around mb-5 mt-5">
                <Card
                    title="Software Development"
                    description=" I excel in software development with a strong foundation in both functional and object-oriented programming. Proficient in language like JavaScript, typescript html5 css3 I create robust and scalable applications with a focus on code quality and maintainability."
                    imageUrl="/softdev.png"
                    btnlabel="Hire as Software Developer"
                />
                <Card
                    title="Frontend Development"
                    description="As a seasoned frontend developer. Proficient in React.js and Next.js, I create dynamic and responsive applications for various platforms. I have a keen eye for design, utilizing Tailwind CSS and Material-UI and much more to ensure a visually appealing and user-friendly experience."
                    imageUrl="/softdev.png"
                    btnlabel="Hire as Frontend Developer"
                />
                <Card
                    title="Backend Development"
                    description="I've worked in Node.js and Express to create scalable and performant server-side solutions. My proficiency in MongoDB ensures robust database management, contributing to the seamless functionality of applications. I'm well-versed in creating RESTful APIs that power dynamic frontend experiences."
                    imageUrl="/softdev.png"
                    btnlabel="Hire as Backend Developer"
                />
                <Card
                    title="Mobile App Development"
                    description="I have worked in React Native for fullstack mobile apps like android and ios with ui libraries like react native paper and tailwindCss.Also integrated firebase for backend services like authentication and database and also mongodb. "
                    imageUrl="/softdev.png"
                    btnlabel="Hire as React-native Developer"
                />
            </div>

            <Link
                href={"/expertise"}
                className="mt-20 btn btn-outline btn-primary  w-full "
            >
                VIEW MORE
            </Link>
        </section>
    );
};

export default Expertise;
