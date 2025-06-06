import Footer from "./components/footer";
import Header from "@/app/components/header";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terrell Turner's Portfolio",
  description: "Made with <3 using Sanity+NextJS+TS!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center ">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
