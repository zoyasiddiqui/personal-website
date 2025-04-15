import type { Metadata } from "next";
import { Micro_5, Josefin_Sans } from "next/font/google";
import "./globals.css";

const micro = Micro_5({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-micro"
});

const josefin = Josefin_Sans({
  weight: "500",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-josefin"
});

export const metadata: Metadata = {
  title: "Zoya's Website",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${micro.variable} ${josefin.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
