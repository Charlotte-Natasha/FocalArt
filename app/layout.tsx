import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/navigation/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"), // to be changed when deployed
  title: "Fidel Castro | Product Design Portfolio",
  description:
    "Master's Application Portfolio - Specialized in Sustainable & Interaction Design.",
  openGraph: {
    title: "Fidel Castro | Product Designer",
    description: "Design Portfolio for Master's Application",
    images: [{ url: "/og-image.jpg" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}