import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Provider from "@/components/Provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
       <Provider>
        {children}
       </Provider>
      </body>
    </html>
  );
}
