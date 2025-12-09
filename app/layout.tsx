import type { Metadata } from "next";
import { Ubuntu, Fredoka } from "next/font/google";
import "./globals.css";
import ExactNavbarAligned from "@/components/navbar";
import Footer from "@/components/fotter";

const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const fredoka = Fredoka({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shraddha Tech Solutions",
  description: "Empowering Your Digital Journey with Innovative Tech Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className} antialiased`}>
        <ExactNavbarAligned />
        {children}
        <Footer />
      </body>
    </html>
  );
}
