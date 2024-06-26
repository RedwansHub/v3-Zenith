import type { Metadata } from "next";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "About - Zenith Construction",
  description: "About Zenith Construction. Our Motto is Building today, empowering tomorrow. Learn More about us.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <div className="">
                {children}
        </div>
    
  );
}
