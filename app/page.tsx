import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Expertise from "@/components/Expertise";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Work from "@/components/Work";
import Image from "next/image";

export default function Home() {
    return (
        <section className="flex flex-col ">
            <div className="bg-[#f8f8f8]">
                <Hero />
            </div>
            <div className="bg-[#f8f8f8]">
                <Expertise />
            </div>
            <div className="bg-[#bdc7d0]">
                <Work />
            </div>
            <div className="bg-[#c2ccd5]">
                <Experience />
            </div>

            <div className="bg-[#f8f8f8]">
                <Contact />
            </div>
        </section>
    );
}
