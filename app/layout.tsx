import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Footer from "./components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eavaai.com"),
  title: "VOICE AGENT · GROWTH AGENT · Eava",
  description:
    "Eava is an AI voice agent that answers every call, qualifies leads, and captures appointment requests around the clock — custom-built for your business.",
  openGraph: {
    title: "VOICE AGENT · GROWTH AGENT",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "VOICE AGENT · GROWTH AGENT",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
