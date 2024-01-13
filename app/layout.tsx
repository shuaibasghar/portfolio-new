import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Portfolio",
    description: "shuaib",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.className}  `}>
                <div className=" bg-white lg:sticky lg:top-0 shadow-lg z-10 ">
                    <Navbar />
                </div>
                <main className={`     `}>{children}</main>
                <div className="w-full bg-white">
                    <Footer />
                </div>
            </body>
        </html>
    );
}
