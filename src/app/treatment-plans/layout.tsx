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
  title: "Explore Specialized Cupping Treatment Plans for Hijama at i-Revive",
  description:
    "Best Hijama cupping therapy clinic in Hyderabad at i-Revive. Explore our specialized treatment plans including Sunnah Basic, Sunnah Plus, Vital Organ Cleanse, Head Cupping, Lymphatic Cleanse, Infertility Cupping, and our exclusive i-Revive Plan. Schedule your appointment today!",
  keywords:
    "Personalized Hijama treatment plans Hyderabad, Customized cupping therapy Hyderabad, Hijama packages for women Hyderabad, Best Hijama treatment plans Mehdipatnam, Hijama therapy pricing Hyderabad, Detox cupping packages Hyderabad, Holistic Hijama therapy Hyderabad, Affordable Hijama treatment Hyderabad, Chronic pain relief Hijama Hyderabad, Wellness treatment plans Hyderabad, Near me hijama",
  openGraph: {
    title: "Explore Specialized Cupping Treatment Plans for Hijama at i-Revive",
    description:
      "Best Hijama cupping therapy clinic in Hyderabad at i-Revive. Explore our specialized treatment plans including Sunnah Basic, Sunnah Plus, Vital Organ Cleanse, Head Cupping, Lymphatic Cleanse, Infertility Cupping, and our exclusive i-Revive Plan. Schedule your appointment today!",
    url: "https://www.i-revive.com/treatment-plans",
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
          content="Best Hijama cupping therapy clinic in Hyderabad at i-Revive. Explore our specialized treatment plans including Sunnah Basic, Sunnah Plus, Vital Organ Cleanse, Head Cupping, Lymphatic Cleanse, Infertility Cupping, and our exclusive i-Revive Plan. Schedule your appointment today!"
        />
        <meta
          name="keywords"
          content="Personalized Hijama treatment plans Hyderabad, Customized cupping therapy Hyderabad, Hijama packages for women Hyderabad, Best Hijama treatment plans Mehdipatnam, Hijama therapy pricing Hyderabad, Detox cupping packages Hyderabad, Holistic Hijama therapy Hyderabad, Affordable Hijama treatment Hyderabad, Chronic pain relief Hijama Hyderabad, Wellness treatment plans Hyderabad, Near me hijama"
        />
        <link
          rel="canonical"
          href="https://www.i-revive.com/treatment-plans"
        />
        <meta name="google-site-verification" content="n9X_WPEBHM7-OhknawUN0VyEknPS3wDy3R9oyYQU1Ek" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Explore Specialized Cupping Treatment Plans for Hijama at i-Revive"
        />
        <meta
          name="twitter:description"
          content="Best Hijama cupping therapy clinic in Hyderabad at i-Revive. Explore our specialized treatment plans including Sunnah Basic, Sunnah Plus, Vital Organ Cleanse, Head Cupping, Lymphatic Cleanse, Infertility Cupping, and our exclusive i-Revive Plan. Schedule your appointment today!"
        />
        <meta
          name="twitter:image"
          content="https://static.wixstatic.com/media/2feea3_0130cffcbcc14dfdb55ad5538c7a2ad0~mv2.jpg/v1/fit/w_2500,h_1330,al_c/2feea3_0130cffcbcc14dfdb55ad5538c7a2ad0~mv2.jpg"
        />
        <meta
          property="og:title"
          content="Explore Specialized Cupping Treatment Plans for Hijama at i-Revive"
        />
        <meta
          property="og:description"
          content="Best Hijama cupping therapy clinic in Hyderabad at i-Revive. Explore our specialized treatment plans including Sunnah Basic, Sunnah Plus, Vital Organ Cleanse, Head Cupping, Lymphatic Cleanse, Infertility Cupping, and our exclusive i-Revive Plan. Schedule your appointment today!"
        />
        <meta
          property="og:image"
          content="https://static.wixstatic.com/media/2feea3_0130cffcbcc14dfdb55ad5538c7a2ad0~mv2.jpg/v1/fit/w_2500,h_1330,al_c/2feea3_0130cffcbcc14dfdb55ad5538c7a2ad0~mv2.jpg"
        />
        <meta property="og:image:width" content="2500" />
        <meta property="og:image:height" content="1330" />
        <meta
          property="og:url"
          content="https://www.i-revive.com/treatment-plans"
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
