import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "bluegyu`s portfolio",
  description:
    "bluegyu의 포트폴리오 겸 블로그입니다. 코멘트는 언제나 환영입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex justify-center ${inter.className}`}>
        <div className="w-[1024px] min-w-[1024px] select-none">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
