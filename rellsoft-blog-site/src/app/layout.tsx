import Footer from "./components/footer";
import Header from "@/app/components/header";
import "./globals.css";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Terrell Turner's Portfolio",
  description: "Made with <3 using Sanity+NextJS+TS!",
  icons: {
    icon: [
      {
        rel: "icon",
        media: "(prefers-color-scheme: light)",
        type: "image/x-icon", // use this for .ico files
        url: "/images/favicon-light.ico",
      },
      {
        rel: "icon",
        media: "(prefers-color-scheme: dark)",
        type: "image/x-icon",
        url: "/images/favicon-dark.ico",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center ">
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
