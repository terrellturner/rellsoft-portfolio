import Footer from "./components/footer";
import Header from "@/app/components/header";
import "./globals.css";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Terrell Turner",
  description: "Junior full-stack web developer, game developer, 3D artist.",
  openGraph: {
    title: "Terrell Turner – Junior Full-Stack Dev",
    description: "Practical ideas, clean UI, always learning.",
    url: "https://rellsoft.dev",
    siteName: "RellSoft",
    images: [
      {
        url: "./images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Terrell Turner - Portfolio + Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terrell Turner – Junior Full-Stack Dev",
    description: "Practical ideas, clean UI, always learning.",
    images: ["./images/og-image.jpg"],
  },
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
    shortcut: "/images/favicon-dark.ico",
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
