import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-[100%] h-screen bg-gradient-to-b from-gray-200 to-[#a4ceeb]">
      <div className="">
      <div className="navbar h-22">
        <Navbar/>
      </div>
      {children}
      </div>
      </body>
    </html>
  );
}
