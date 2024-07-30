"use client";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { SWRConfig } from "swr";
import { AuthProvider } from "@/context/authContext";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <AuthProvider>
          <Navbar />
          <SWRConfig value={{ dedupingInterval: 10000 }}>{children}</SWRConfig>
          {/* <Footer /> */}
        </AuthProvider>
      </body>
    </html>
  );
}
