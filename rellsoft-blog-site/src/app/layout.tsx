import Footer from "./components/footer";
import Header from "./components/header";
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
}) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
