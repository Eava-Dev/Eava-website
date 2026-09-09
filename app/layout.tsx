import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Footer from "./components/Footer";
import "./globals.css";
import "./website.css";

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
  title: "EAVA",
  description:
    "Voice Agent · Growth Agent",
  openGraph: {
    title: "EAVA",
    description: "Voice Agent · Growth Agent",
    images: [{ url: "/og-eava-ivory.png", width: 1200, height: 630, alt: "eava. — Voice Agent · Growth Agent — eavaai.com" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EAVA",
    description: "Voice Agent · Growth Agent",
    images: [{ url: "/og-eava-ivory.png", alt: "eava. — Voice Agent · Growth Agent — eavaai.com" }],
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
