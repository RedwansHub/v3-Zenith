import type { Metadata } from "next";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Portfolio - Zenith Construction",
  description: "Zenith Construction's Portfolio.",
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
