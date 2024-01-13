import Experience from "@/components/Experience";
import Expertise from "@/components/Expertise";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Work from "@/components/Work";
import Image from "next/image";

export default function Home() {
    return (
        <section>
            <Hero />
            <Expertise />
        </section>
    );
}
