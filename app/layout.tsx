import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"], 
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Daman | Portfolio",
  description: "Full-stack web developer building modern web applications with Next.js, React, and AI integrations. Explore my projects and know more about me",
  keywords: [
    "Daman",
    "Portfolio",
    "Full-stack Developer",
    "UI/UX designer",
    "React.js",
    "Next.js",
    "Web Developer",
    "AI Projects",
    "Frontend",
    "Backend",
  ],
  authors: [{ name: "Daman", url: "https://your-portfolio-link.com" }],
  openGraph: {
    title: "Daman | Portfolio",
    description: "Showcasing my projects, skills as a full-stack developer.",
    url: "https://your-portfolio-link.com",
    siteName: "Daman Portfolio",
    images: [
      {
        url: "https://your-portfolio-link.com/preview.png",
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daman | Portfolio",
    description: "Discover my projects and skills in full-stack web development.",
    creator: "https://x.com/daman76752",
    images: ["https://your-portfolio-link.com/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
