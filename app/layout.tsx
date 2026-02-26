import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://insurance-agency-nj.vercel.app"),
  title: "Insurance Agency NJ | Trusted Insurance in Lakewood & All of New Jersey",
  description:
    "Full-service independent insurance agency in Lakewood, NJ. Home, auto, life, commercial, flood, and workers comp coverage from A-rated carriers. Free quotes — call (551) 273-4713.",
  keywords: [
    "insurance agency NJ",
    "Lakewood NJ insurance",
    "home insurance New Jersey",
    "auto insurance NJ",
    "commercial insurance Lakewood",
    "flood insurance NJ",
    "independent insurance agent",
    "free insurance quote NJ",
  ],
  openGraph: {
    title: "Insurance Agency NJ | New Jersey's Trusted Insurance Partner",
    description:
      "Independent agency. A-rated carriers. Home, auto, life, commercial, flood & workers comp. Free quotes.",
    url: "https://insurance-agency-nj.vercel.app",
    siteName: "Insurance Agency NJ",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Insurance Agency NJ",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insurance Agency NJ | New Jersey's Trusted Insurance Partner",
    description:
      "Independent agency. A-rated carriers. Home, auto, life, commercial, flood & workers comp.",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: "Insurance Agency NJ",
  image: "https://insurance-agency-nj.vercel.app/images/og-image.png",
  url: "https://insurance-agency-nj.vercel.app",
  telephone: "+15512734713",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1166 River Ave",
    addressLocality: "Lakewood",
    addressRegion: "NJ",
    postalCode: "08701",
    addressCountry: "US",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "47",
  },
  areaServed: {
    "@type": "State",
    name: "New Jersey",
  },
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${lora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
