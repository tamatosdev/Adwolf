import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { VideoModal } from "@/components/VideoModal";
import "./globals.css";

const archivo = localFont({
  src: "../public/fonts/archivo.woff2",
  weight: "100 900",
  display: "swap",
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "Adwolf | AI video, animation, CGI and software studio",
  description:
    "Adwolf makes AI video ads, 2D and 3D animation and CGI product films, and builds websites, ERP systems and automation. One studio in Karachi, working worldwide.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Header />
        <VideoModal />
        {children}
        <Footer />
      </body>
    </html>
  );
}
