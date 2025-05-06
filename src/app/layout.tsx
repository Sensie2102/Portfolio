import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Mafaaz's glorious portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

      <div className="relative min-h-screen w-full">
          <div
            className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat animate-pulse-brightness"
            style={{ backgroundImage: "url('/galaxy.jpg')" }}
          />
          

          <div className="absolute inset-0 -z-10 bg-[var(--background)]/80" />
        
          {children}
        </div>
      </body>
    </html>
  );
}
