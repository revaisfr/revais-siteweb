import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "REVAIS MONTAGE - Artisan spécialisé en montage de meubles, cuisines et terrasses",
  description:
    "REVAIS MONTAGE, votre artisan de confiance en Auvergne Rhône-Alpes. Spécialisé dans le montage de meubles, installation de cuisines, pose de terrasses et parquet. Devis gratuit.",
  keywords: "montage meubles, installation cuisine, terrasse bois, parquet, artisan, Auvergne Rhône-Alpes",
  authors: [{ name: "REVAIS MONTAGE" }],
  creator: "REVAIS MONTAGE",
  publisher: "REVAIS MONTAGE",
  robots: "index, follow",
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "REVAIS MONTAGE - Artisan spécialisé",
    description: "Votre artisan de confiance pour le montage de meubles, installation de cuisines et pose de terrasses",
    url: "https://revais.fr",
    siteName: "REVAIS MONTAGE",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "REVAIS MONTAGE Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "REVAIS MONTAGE - Artisan spécialisé",
    description: "Votre artisan de confiance pour le montage de meubles, installation de cuisines et pose de terrasses",
    images: ["/icon.png"],
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
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
