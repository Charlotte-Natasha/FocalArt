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
  title: "Fidel Castro | Product Design Portfolio",
  description: "Master's Application Portfolio - Specialized in Sustainable & Interaction Design.",
  // Optional: Add OpenGraph for professional link previews
  openGraph: {
    title: "Fidel Castro | Product Designer",
    description: "Design Portfolio for Master's Application",
    images: [{ url: '/og-image.jpg' }], // Put a nice render of his best work here
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <main className="min-h-screen">
            {children}
        </main>
      </body>
    </html>
  );
}