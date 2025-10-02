import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

const baseUrl = process.env.NODE_ENV === "production" ? "https://revais.fr" : "http://localhost:3000"

export const metadata: Metadata = {
  title: "REVAIS MONTAGE - Artisan Oyonnax, Martignat (01) | Pose parquet, terrasses, montage meubles",
  description:
    "🔨 REVAIS MONTAGE - Artisan de proximité à Oyonnax et Martignat (01). ✅ Pose de parquet ✅ Terrasses bois & composite ✅ Montage meubles ✅ Installation cuisines. Intervention rapide dans l'Ain. Devis gratuit 06.47.50.03.77",
  keywords: [
    "artisan Oyonnax",
    "artisan Martignat",
    "artisan Ain 01",
    "pose parquet Oyonnax",
    "pose parquet Martignat",
    "terrasse bois Oyonnax",
    "terrasse composite Oyonnax",
    "montage meubles Oyonnax",
    "installation cuisine Oyonnax",
    "menuisier Oyonnax",
    "poseur parquet Ain",
    "artisan de proximité Oyonnax",
    "travaux Oyonnax",
    "artisan qualifié 01",
    "devis gratuit Oyonnax",
    "intervention rapide Oyonnax",
    "Nantua",
    "Bellegarde-sur-Valserine",
    "Saint-Claude",
    "Bourg-en-Bresse",
    "Arbent",
    "Dortan",
    "Pont-d'Ain",
    "Izernore",
    "menuisier Martignat",
    "terrasse Martignat",
    "cuisine Oyonnax",
    "parquet flottant Oyonnax",
    "artisan bois Oyonnax",
    "aménagement intérieur Oyonnax",
    "aménagement extérieur Oyonnax",
    "terrasse composite Martignat",
    "montage IKEA Oyonnax",
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
    title: "REVAIS MONTAGE - Artisan Oyonnax, Martignat (01) | Pose parquet & terrasses",
    description:
      "Artisan qualifié à Oyonnax et Martignat (Ain). Pose de parquet, terrasses bois/composite, montage meubles, installation cuisines. Intervention rapide dans l'Ain. Devis gratuit !",
    url: baseUrl,
    siteName: "REVAIS MONTAGE",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: `${baseUrl}/logo-updated.jpg`,
        width: 1200,
        height: 630,
        alt: "REVAIS MONTAGE - Artisan Oyonnax Martignat Ain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "REVAIS MONTAGE - Artisan Oyonnax, Martignat (01)",
    description: "Pose parquet, terrasses, montage meubles à Oyonnax et Martignat. Artisan dans l'Ain. Devis gratuit !",
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

        {/* Géolocalisation précise */}
        <meta name="geo.region" content="FR-01" />
        <meta name="geo.placename" content="Martignat, Oyonnax, Ain" />
        <meta name="geo.position" content="46.2618;5.6617" />
        <meta name="ICBM" content="46.2618, 5.6617" />

        {/* Mots-clés locaux supplémentaires */}
        <meta name="locality" content="Oyonnax" />
        <meta name="region" content="Ain" />
        <meta name="country" content="France" />

        {/* Schema.org pour le référencement local */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "REVAIS MONTAGE",
              description:
                "Artisan spécialisé en pose de parquet, terrasses bois et composite, montage de meubles et installation de cuisines à Oyonnax et Martignat dans l'Ain (01)",
              url: baseUrl,
              telephone: "06.47.50.03.77",
              email: "contact@revais.fr",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Martignat",
                addressLocality: "Martignat",
                postalCode: "01100",
                addressRegion: "Auvergne-Rhône-Alpes",
                addressCountry: "FR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "46.2618",
                longitude: "5.6617",
              },
              openingHours: ["Mo-Fr 08:00-18:00", "Sa 08:00-12:00"],
              areaServed: [
                {
                  "@type": "City",
                  name: "Oyonnax",
                  "@id": "https://www.wikidata.org/wiki/Q202738",
                },
                {
                  "@type": "City",
                  name: "Martignat",
                },
                {
                  "@type": "City",
                  name: "Arbent",
                },
                {
                  "@type": "City",
                  name: "Dortan",
                },
                {
                  "@type": "City",
                  name: "Nantua",
                },
                {
                  "@type": "City",
                  name: "Bellegarde-sur-Valserine",
                },
                {
                  "@type": "City",
                  name: "Saint-Claude",
                },
                {
                  "@type": "City",
                  name: "Pont-d'Ain",
                },
                {
                  "@type": "City",
                  name: "Izernore",
                },
                {
                  "@type": "City",
                  name: "Bourg-en-Bresse",
                },
                {
                  "@type": "State",
                  name: "Ain",
                  "@id": "https://www.wikidata.org/wiki/Q3083",
                },
              ],
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: "46.2618",
                  longitude: "5.6617",
                },
                geoRadius: "30000",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Services d'artisan",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Pose de parquet à Oyonnax",
                      description: "Pose professionnelle de parquet flottant, collé ou cloué à Oyonnax et Martignat",
                      areaServed: "Oyonnax, Martignat, Ain",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Terrasses bois et composite Oyonnax",
                      description: "Installation de terrasses en bois naturel et composite à Oyonnax",
                      areaServed: "Oyonnax, Martignat, Ain",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Montage de meubles Oyonnax",
                      description: "Montage professionnel de meubles et mobilier à Oyonnax et Martignat",
                      areaServed: "Oyonnax, Martignat, Ain",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Installation de cuisines Oyonnax",
                      description: "Installation complète de cuisines équipées à Oyonnax",
                      areaServed: "Oyonnax, Martignat, Ain",
                    },
                  },
                ],
              },
              priceRange: "€€",
              image: `${baseUrl}/logo-updated.jpg`,
              logo: `${baseUrl}/logo-updated.jpg`,
              sameAs: [],
            }),
          }}
        />

        {/* Breadcrumb Schema pour améliorer le référencement */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Accueil",
                  item: baseUrl,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Artisan Oyonnax",
                  item: `${baseUrl}#oyonnax`,
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
