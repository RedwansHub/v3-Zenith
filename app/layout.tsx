import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/main/Footer";

const inter = Poppins({ subsets: ["latin"], weight: '300' });

export const metadata: Metadata = {
  title: "Zenith Construction",
  description: "Building Today, Empowering tomorrow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class">
        <div className=" ">
        <Toaster />
          
          {children}
          
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
