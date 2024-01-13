import Image from "next/image";
import React from "react";

type CardProps = {
    title: string;
    description: string;
    btnlabel: string;
    imageUrl: string;
};

const Card: React.FC<CardProps> = ({
    btnlabel,
    title,
    description,
    imageUrl,
}) => {
    return (
        <div className=" w-80 min-h-96 bg-white shadow-md rounded-3xl ">
            <div className="h-44 bg-blue-10 flex flex-col items-center justify-center rounded-t-3xl  ">
                <Image src={imageUrl} alt={title} width={100} height={100} />
                <h1 className="text-white text-[25px] font-bold mb-2">
                    {title}
                </h1>
            </div>
            <p className="p-2 text-justify text-gray-600 h-52">{description}</p>
            <div className="  text-white ">
                <button className="bg-blue-10 p-5 w-full  ">{btnlabel}</button>
            </div>
        </div>
    );
};

export default Card;
