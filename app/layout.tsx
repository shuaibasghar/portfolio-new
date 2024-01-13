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
            <body className={`${inter.className} bg-[#f8f8f8] `}>
                <div className=" bg-white sticky top-0  overflow ">
                    <Navbar />
                </div>
                <main className={`  max-container  bg-[#f8f8f8] `}>
                    {children}
                </main>
                <div className="w-full bg-white">
                    <Footer />
                </div>
            </body>
        </html>
    );
}
