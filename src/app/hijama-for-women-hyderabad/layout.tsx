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
  title: "Hijama for Women in Hyderabad | Female Health & Wellness Therapy",
  description:
    "Experience expert Hijama therapy for women at i-Revive in Hyderabad. Safe, confidential sessions designed for female wellness, hormonal harmony, and natural pain relief.",
  keywords:
    "Hijama for women Hyderabad, Female cupping therapy Hyderabad, Hijama for hormonal imbalance in women, Women’s wellness Hijama treatment, Hijama therapy for PCOS Hyderabad, Female pain relief cupping Hyderabad, Certified Hijama for ladies in Hyderabad, Hijama for menstrual health, Women’s detox therapy Hyderabad, Female-focused Hijama center Hyderabad",
  openGraph: {
    title: "Hijama for Women in Hyderabad | Female Health & Wellness Therapy",
    description:
      "Experience expert Hijama therapy for women at i-Revive in Hyderabad. Safe, confidential sessions designed for female wellness, hormonal harmony, and natural pain relief",
    url: "https://www.i-revive.com/hijama-for-women-hyderabad",
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

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="i-Revive offers certified Hijama therapy exclusively for women in Hyderabad. Experience safe, private cupping sessions with female practitioners at our trusted center."
        />
       <meta
  name="keywords"
  content="Hijama for women Hyderabad, Female cupping therapy Hyderabad, Hijama for hormonal imbalance in women, Women’s wellness Hijama treatment, Hijama therapy for PCOS Hyderabad, Female pain relief cupping Hyderabad, Certified Hijama for ladies in Hyderabad, Hijama for menstrual health, Women’s detox therapy Hyderabad, Female-focused Hijama center Hyderabad"
/>
        <link rel="canonical" href="https://www.i-revive.com/best-hijama-centre-for-ladies-hyderabad" />
        <meta
          name="google-site-verification"
          content="n9X_WPEBHM7-OhknawUN0VyEknPS3wDy3R9oyYQU1Ek"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Hijama for Women in Hyderabad | Female Health & Wellness Therapy"
        />
        <meta
          name="twitter:description"
          content="Experience expert Hijama therapy for women at i-Revive in Hyderabad. Safe, confidential sessions designed for female wellness, hormonal harmony, and natural pain relief.
"
        />
        <meta
          name="twitter:image"
          content="https://static.wixstatic.com/media/2feea3_0130cffcbcc14dfdb55ad5538c7a2ad0~mv2.jpg/v1/fit/w_2500,h_1330,al_c/2feea3_0130cffcbcc14dfdb55ad5538c7a2ad0~mv2.jpg"
        />
        <meta
          property="og:title"
          content="Hijama for Women in Hyderabad | Female Health & Wellness Therapy"
        />
        <meta
          property="og:description"
          content="Experience expert Hijama therapy for women at i-Revive in Hyderabad. Safe, confidential sessions designed for female wellness, hormonal harmony, and natural pain relief."
        />
        <meta
          property="og:image"
          content="https://static.wixstatic.com/media/2feea3_0130cffcbcc14dfdb55ad5538c7a2ad0~mv2.jpg/v1/fit/w_2500,h_1330,al_c/2feea3_0130cffcbcc14dfdb55ad5538c7a2ad0~mv2.jpg"
        />
        <meta property="og:image:width" content="2500" />
        <meta property="og:image:height" content="1330" />
        <meta property="og:url" content="https://www.i-revive.com/best-hijama-centre-for-ladies-hyderabad" />
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
