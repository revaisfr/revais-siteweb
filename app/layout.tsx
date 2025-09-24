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
  openGraph: {
    title: "REVAIS MONTAGE - Artisan spécialisé",
    description: "Votre artisan de confiance pour le montage de meubles, installation de cuisines et pose de terrasses",
    url: "https://revais-montage.fr",
    siteName: "REVAIS MONTAGE",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "REVAIS MONTAGE - Artisan spécialisé",
    description: "Votre artisan de confiance pour le montage de meubles, installation de cuisines et pose de terrasses",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
