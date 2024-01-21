import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import "./globals.css";

import Footer from "@/components/footer"

import GridPattern from "@/components/grid-pattern";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CnCloud",
  description: "Effortlessly manage servers and build, ship, and monitor applications in the cloud without the need for a platform engineer.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" suppressHydrationWarning={true}>
      <head />
      <body className="min-h-screen bg-background font-sans antialiased">
      <Navbar />
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
      </ThemeProvider>
<Toaster />
      <Footer />
      </body>
      </html>
  );
}
