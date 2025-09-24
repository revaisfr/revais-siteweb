import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

const baseUrl = process.env.NODE_ENV === "production" ? "https://revais.fr" : "http://localhost:3000"

export const metadata: Metadata = {
  title: "REVAIS MONTAGE - Artisan de proximité | Pose parquet, terrasses, montage meubles | Auvergne Rhône-Alpes",
  description:
    "🔨 REVAIS MONTAGE - Artisan de proximité en Auvergne Rhône-Alpes. ✅ Pose de parquet ✅ Terrasses bois & composite ✅ Montage meubles ✅ Installation cuisines. Devis gratuit 06.47.50.03.77",
  keywords: [
    "artisan de proximité",
    "pose parquet",
    "pose terrasse bois",
    "terrasse composite",
    "montage meubles",
    "installation cuisine",
    "artisan Auvergne Rhône-Alpes",
    "menuisier",
    "poseur parquet",
    "terrasse sur mesure",
    "montage IKEA",
    "artisan qualifié",
    "devis gratuit",
    "intervention rapide",
    "travaux de finition",
    "aménagement intérieur",
    "aménagement extérieur",
  ].join(", "),
  authors: [{ name: "REVAIS MONTAGE" }],
  creator: "REVAIS MONTAGE",
  publisher: "REVAIS MONTAGE",
  robots: "index, follow",
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "REVAIS MONTAGE - Artisan de proximité | Pose parquet & terrasses",
    description:
      "Artisan qualifié en Auvergne Rhône-Alpes. Pose de parquet, terrasses bois/composite, montage meubles, installation cuisines. Devis gratuit !",
    url: baseUrl,
    siteName: "REVAIS MONTAGE",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: `${baseUrl}/logo-updated.jpg`,
        width: 1200,
        height: 630,
        alt: "REVAIS MONTAGE - Artisan de proximité",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "REVAIS MONTAGE - Artisan de proximité",
    description: "Pose parquet, terrasses, montage meubles en Auvergne Rhône-Alpes. Devis gratuit !",
    images: [`${baseUrl}/logo-updated.jpg`],
  },
  alternates: {
    canonical: baseUrl,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <meta name="geo.region" content="FR-ARA" />
        <meta name="geo.placename" content="Auvergne-Rhône-Alpes" />
        <meta name="ICBM" content="45.7640, 4.8357" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "REVAIS MONTAGE",
              description:
                "Artisan spécialisé en pose de parquet, terrasses bois et composite, montage de meubles et installation de cuisines",
              url: baseUrl,
              telephone: "06.47.50.03.77",
              email: "contact@revais.fr",
              address: {
                "@type": "PostalAddress",
                addressRegion: "Auvergne-Rhône-Alpes",
                addressCountry: "FR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "45.7640",
                longitude: "4.8357",
              },
              openingHours: ["Mo-Fr 08:00-18:00", "Sa 08:00-12:00"],
              serviceArea: {
                "@type": "State",
                name: "Auvergne-Rhône-Alpes",
              },
              services: [
                "Pose de parquet",
                "Terrasses bois et composite",
                "Montage de meubles",
                "Installation de cuisines",
                "Aménagement intérieur",
                "Aménagement extérieur",
              ],
              priceRange: "€€",
              image: `${baseUrl}/logo-updated.jpg`,
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
