import type { Metadata } from "next";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Contact - Zenith Construction",
  description: "Get in touch with us.",
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
