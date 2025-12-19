import type { Metadata } from "next";
import { Poppins, Roboto_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

// SEO Metadata - Customize these with your information
export const metadata: Metadata = {
  title: "Naufal Syafi' Portfolio",
  description:
    "Portfolio of Naufal Syafi' Hakim, an Information Technology undergraduate at Institut Teknologi Sepuluh Nopember.",
  keywords: [
    "Naufal Syafi' Hakim",
    "Portfolio",
    "Web Developer",
    "AI/ML",
    "Data Science",
    "ITS",
    "Information Technology",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Naufal Syafi' Hakim" }],
  creator: "Naufal Syafi' Hakim",
  icons: {
    icon: "/heroo.png",
    shortcut: "/heroo.png",
    apple: "/heroo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} ${robotoMono.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
