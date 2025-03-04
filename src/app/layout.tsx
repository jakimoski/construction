import type { Metadata } from "next";
import { Oswald, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cargo Flow",
  description: "Cargo Flow - Streamlining Logistics for the Future",
  keywords: [
    "logistics",
    "cargo",
    "supply chain",
    "freight",
    "transportation",
    "technology",
  ],
  robots: "index, follow", // or "noindex, nofollow" based on your needs
  openGraph: {
    title: "Cargo Flow",
    description: "Cargo Flow - Streamlining Logistics for the Future",
    url: "https://construction-mu-plum.vercel.app/", // Change this to your actual website URL
    siteName: "Cargo Flow",
    images: [
      {
        url: "/cagro-image.png", // URL of the image to use for social media previews
        width: 1200,
        height: 630,
        alt: "Cargo Flow - Streamlining Logistics for the Future",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image", // A larger image preview
    site: "@CargoFlow", // Your Twitter handle, change as necessary
    creator: "@CargoFlow", // Twitter handle of the creator/author
    title: "Cargo Flow",
    description: "Cargo Flow - Streamlining Logistics for the Future",
    images: "/cagro-image.png",
  },
  icons: {
    icon: "/icon.png", // Favicon for your website
    apple: "/apple-touch-icon.png", // Apple touch icon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${roboto.variable}  antialiased `}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
