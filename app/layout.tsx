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
            <body className={`${inter.className}  `}>
                <div className="bg-white">
                    <Navbar />
                </div>
                <main className={`    bg-gray-100   `}>{children}</main>
                <div className="   w-full bg-white">
                    <Footer />
                </div>
            </body>
        </html>
    );
}
