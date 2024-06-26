import type { Metadata } from "next";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Services - Zenith Construction",
  description: "Zenith construction is a construction company that aims to revolutionize Somalia's construction landscape.",
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
