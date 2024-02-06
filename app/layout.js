import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Provider from "@/components/Provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-[100%] h-[100%] bg-gradient-to-b from-gray-200 to-[#a4ceeb]">
       <Provider>
        {children}
       </Provider>
      </body>
    </html>
  );
}
