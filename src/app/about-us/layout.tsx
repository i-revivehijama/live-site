import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Best Hijama Cupping Therapy Centre Mehdipatnam, Hyderabad",
  description:
    "Best Hijama centre in Hyderabad at i-Revive, Mehdipatnam. We offer expert Hijama cupping therapy for both men and women, delivered by skilled professionals. Enjoy effective and affordable Islamic cupping treatments tailored to your needs. Experience the healing benefits of Hijama.",
  keywords:
    "Hijama Cupping Therapy Hyderabad, Best Hijama Centre Mehdipatnam, Certified Hijama Specialist Hyderabad, Hijama Treatment for Pain Relief Hyderabad, Female Hijama Therapist Hyderabad, Hijama for Hormonal Imbalance Hyderabad, Hijama Cupping for Stress Relief Hyderabad, Affordable Hijama Therapy Hyderabad, Hijama for Chronic Conditions Hyderabad, i-Revive Hijama Centre Hyderabad",
  openGraph: {
    title: "Best Hijama Cupping Therapy Centre Mehdipatnam, Hyderabad",
    description:
      "Best Hijama centre in Hyderabad at i-Revive, Mehdipatnam. We offer expert Hijama cupping therapy for both men and women, delivered by skilled professionals. Enjoy effective and affordable Islamic cupping treatments tailored to your needs. Experience the healing benefits of Hijama.",
    url: "https://www.i-revive.com/about-us",
    images: [
      {
        url: "https://static.wixstatic.com/media/2feea3_0130cffcbcc14dfdb55ad5538c7a2ad0~mv2.jpg/v1/fit/w_2500,h_1330,al_c/2feea3_0130cffcbcc14dfdb55ad5538c7a2ad0~mv2.jpg",
        width: 2500,
        height: 1330,
        alt: "i-Revive Body & Soul",
      },
    ],
    type: "website",
  },
};

const schemaData = {
  "@context": "https://schema.org/",
  "@type": "LocalBusiness",
  "name": "i-Revive Body & Soul",
  "url": "https://www.i-revive.com",
  "image":
    "https://static.wixstatic.com/media/2feea3_3fb6eab04f94496cb6c5f7b583c74925~mv2.png",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN",
    "addressLocality": "Hyderabad",
    "addressRegion": "TG",
  },
  "telephone": "+918009944335",
};

const websiteSchema = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  "url": "https://www.i-revive.com/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.i-revive.com/search?q={search_term}",
    },
    "query-input": "required name=search_term",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="Best Hijama centre in Hyderabad at i-Revive, Mehdipatnam. We offer expert Hijama cupping therapy for both men and women, delivered by skilled professionals. Enjoy effective and affordable Islamic cupping treatments tailored to your needs. Experience the healing benefits of Hijama."
        />
        <meta
          name="keywords"
          content="Hijama Cupping Therapy Hyderabad, Best Hijama Centre Mehdipatnam, Certified Hijama Specialist Hyderabad, Hijama Treatment for Pain Relief Hyderabad, Female Hijama Therapist Hyderabad, Hijama for Hormonal Imbalance Hyderabad, Hijama Cupping for Stress Relief Hyderabad, Affordable Hijama Therapy Hyderabad, Hijama for Chronic Conditions Hyderabad, i-Revive Hijama Centre Hyderabad"
        />
        <link rel="canonical" href="https://www.i-revive.com/about-us" />
        <meta
          name="google-site-verification"
          content="n9X_WPEBHM7-OhknawUN0VyEknPS3wDy3R9oyYQU1Ek"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Best Hijama Cupping Therapy Centre Mehdipatnam, Hyderabad"
        />
        <meta
          name="twitter:description"
          content="Best Hijama centre in Hyderabad at i-Revive, Mehdipatnam. We offer expert Hijama cupping therapy for both men and women, delivered by skilled professionals. Enjoy effective and affordable Islamic cupping treatments tailored to your needs. Experience the healing benefits of Hijama."
        />
        <meta
          name="twitter:image"
          content="https://static.wixstatic.com/media/2feea3_0130cffcbcc14dfdb55ad5538c7a2ad0~mv2.jpg/v1/fit/w_2500,h_1330,al_c/2feea3_0130cffcbcc14dfdb55ad5538c7a2ad0~mv2.jpg"
        />
        <meta
          property="og:title"
          content="Best Hijama Cupping Therapy Centre Mehdipatnam, Hyderabad"
        />
        <meta
          property="og:description"
          content="Best Hijama centre in Hyderabad at i-Revive, Mehdipatnam. We offer expert Hijama cupping therapy for both men and women, delivered by skilled professionals. Enjoy effective and affordable Islamic cupping treatments tailored to your needs. Experience the healing benefits of Hijama."
        />
        <meta
          property="og:image"
          content="https://static.wixstatic.com/media/2feea3_0130cffcbcc14dfdb55ad5538c7a2ad0~mv2.jpg/v1/fit/w_2500,h_1330,al_c/2feea3_0130cffcbcc14dfdb55ad5538c7a2ad0~mv2.jpg"
        />
        <meta property="og:image:width" content="2500" />
        <meta property="og:image:height" content="1330" />
        <meta
          property="og:url"
          content="https://www.i-revive.com/about-us"
        />
        <meta property="og:site_name" content="i-Revive Body & Soul" />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
