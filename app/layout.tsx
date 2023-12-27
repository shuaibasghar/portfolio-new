import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
            <body className="bg-gray-100">
                <div className="  w-full bg-white">
                    <Navbar />
                </div>
                <main
                    className={`${inter.className} relative overflow-hidden   `}
                >
                    {children}
                </main>
                <div className="">
                    <hr />
                    <Footer />
                </div>
            </body>
        </html>
    );
}
