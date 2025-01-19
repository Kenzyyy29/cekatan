"use client";

import {usePathname} from "next/navigation";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const disavbleNavbar = ["/login", "/register", "/forgot-password"]

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 const pathname = usePathname();
 return (
  <html lang="en">
   <body>
    {!disavbleNavbar.includes(pathname) && <Navbar />}
    {children}
   </body>
  </html>
 );
}
