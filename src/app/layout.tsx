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
  title: "Best Hijama Cupping Therapy Clinic in Hyderabad | i-Revive Body & Soul",
  description:
    "Get the best Hijama Cupping Therapy in Hyderabad at i-Revive Body & Soul. Our experienced certified practitioners are here to help. Schedule your appointment now! Visit www.i-revive.com.",
  metadataBase: new URL("https://www.i-revive.com"),
  openGraph: {
    title: "Best Hijama Cupping Therapy Clinic in Hyderabad | i-Revive Body & Soul",
    description:
      "Get the best Hijama Cupping Therapy in Hyderabad at i-Revive Body & Soul. Our experienced certified practitioners are here to help. Schedule your appointment now! Visit www.i-revive.com.",
    url: "https://www.i-revive.com",
    siteName: "i-Revive Body & Soul",
    images: [
      {
        url: "https://static.wixstatic.com/media/2feea3_0130cffcbcc14dfdb55ad5538c7a2ad0%7Emv2.jpg/v1/fit/w_2500,h_1330,al_c/2feea3_0130cffcbcc14dfdb55ad5538c7a2ad0%7Emv2.jpg",
        width: 2500,
        height: 1330,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Hijama Cupping Therapy Clinic in Hyderabad | i-Revive Body & Soul",
    description:
      "Get the best Hijama Cupping Therapy in Hyderabad at i-Revive Body & Soul. Our experienced certified practitioners are here to help. Schedule your appointment now! Visit www.i-revive.com.",
    images: [
      "https://static.wixstatic.com/media/2feea3_0130cffcbcc14dfdb55ad5538c7a2ad0%7Emv2.jpg/v1/fit/w_2500,h_1330,al_c/2feea3_0130cffcbcc14dfdb55ad5538c7a2ad0%7Emv2.jpg",
    ],
  },
  alternates: {
    canonical: "https://www.i-revive.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
