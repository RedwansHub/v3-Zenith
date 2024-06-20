import type { Metadata } from "next";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "FAQ - Zenith Construction",
  description: "Frequently asked questions about Zenith Construction",
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
