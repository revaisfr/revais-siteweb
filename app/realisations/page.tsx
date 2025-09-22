import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import BeforeAfterSlider from "@/components/before-after-slider"
import ImageCarousel from "@/components/image-carousel"

export default function RealisationsPage() {
  const realisations = [
    {
      title: "Installation de marche en bois",
      beforeImage: "/realisation/terasse/terasse1-avant.JPG",
      afterImage: "/realisation/terasse/terasse1-apres.JPG",
      category: "Terrasse",
      carouselImages: ["/realisation/terasse/terasse1-1.JPG", "/realisation/terasse/terasse1-2.JPG"],
    },
    {
      title: "Transformation Cuisine",
      beforeImage: "/realisation/cuisine/cuisine1-avant.JPG",
      afterImage: "/realisation/cuisine/cuisine1-apres.JPG",
      category: "Cuisine",
      carouselImages: ["/realisation/cuisine/cuisine1-1.JPG", "/realisation/cuisine/cuisine1-2.JPG"],
    },
    {
      title: "Aménagement d'abris",
      beforeImage: "/realisation/abris/abri1-avant.JPG",
      afterImage: "/realisation/abris/abri1-apres.JPG",
      category: "Abris de jardin",
      carouselImages: [
        "/realisation/abris/abri1-1.JPG",
        "/realisation/abris/abri1-2.JPG",
        "/realisation/abris/abri1-3.JPG",
        "/realisation/abris/abri1-4.JPG",
        "/realisation/abris/abri1-5.JPG",
        "/realisation/abris/abri1-6.JPG",
      ],
    },
  ]

  // Fonction pour extraire toutes les images d'une réalisation
  const getAllImagesFromRealisation = (realisation: (typeof realisations)[0]) => {
    const images = []
    if (realisation.beforeImage && !realisation.beforeImage.includes("placeholder.svg")) {
      images.push(realisation.beforeImage)
    }
    if (realisation.afterImage && !realisation.afterImage.includes("placeholder.svg")) {
      images.push(realisation.afterImage)
    }
    if (realisation.carouselImages) {
      images.push(...realisation.carouselImages.filter((img) => !img.includes("placeholder.svg")))
    }
    return images
  }

  // Création des galeries thématiques
  const groupedGalleries = [
    {
      title: "Galerie : Terrasses et Abris",
      description: "Découvrez nos projets d'aménagement extérieur, terrasses en bois et composite, et abris de jardin.",
      images: [
        "/realisation/terasse/terasse1-1.JPG",
        "/realisation/terasse/terasse1-2.JPG",
        "/realisation/terasse/terasse1-3.JPG",
        "/realisation/terasse/terasse1-4.JPG",
        "/realisation/terasse/terasse1-5.JPG",
        "/realisation/terasse/terasse1-6.JPG",
        "/realisation/terasse/terasse1-7.JPG",
        "/realisation/terasse/terasse1-8.JPG",
        "/realisation/terasse/terasse1-9.JPG",
        "/realisation/terasse/terasse1-10.JPG",
        "/realisation/terasse/terasse1-11.JPG",
        "/realisation/terasse/terasse1-12.JPG",
        "/realisation/terasse/terasse1-13.JPG",
        "/realisation/terasse/terasse1-14.JPG",
        "/realisation/terasse/terasse1-15.JPG",
        "/realisation/terasse/terasse1-16.JPG",
        "/realisation/terasse/terasse1-17.JPG",
        "/realisation/terasse/terasse1-18.JPG",
        "/realisation/terasse/terasse1-19.JPG",
        "/realisation/terasse/terasse1-20.JPG",
        "/realisation/terasse/terasse1-21.JPG",
        "/realisation/terasse/terasse1-22.JPG",
      ].filter(Boolean), // Filtrer les éventuels undefined/null
    },
    {
      title: "Galerie : Cuisines et Dressings",
      description:
        "Explorez nos réalisations d'installation de cuisines modernes et rustiques, ainsi que nos aménagements de dressings.",
      images: [
        "/realisation/cuisine/cuisine1-1.JPG",
        "/realisation/cuisine/cuisine1-2.JPG",
        "/realisation/cuisine/cuisine1-3.JPG",
        "/realisation/cuisine/cuisine1-4.JPG",
        "/realisation/cuisine/cuisine1-5.JPG",
        "/realisation/cuisine/cuisine1-6.JPG",
        "/realisation/cuisine/cuisine1-7.JPG",
        "/realisation/cuisine/cuisine1-8.JPG",
        "/realisation/cuisine/cuisine1-9.JPG",
        "/realisation/cuisine/cuisine1-10.JPG",
        "/realisation/cuisine/cuisine1-11.JPG",
        "/realisation/cuisine/cuisine1-12.JPG",
        "/realisation/cuisine/cuisine1-13.JPG",
        "/realisation/cuisine/cuisine1-14.JPG",
        "/realisation/cuisine/cuisine1-15.JPG",
        "/realisation/cuisine/cuisine1-16.JPG",
        "/realisation/cuisine/cuisine1-17.JPG",
        "/realisation/cuisine/cuisine1-18.JPG",
        "/realisation/cuisine/cuisine1-19.JPG",
      ].filter(Boolean),
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-50 to-white">
      <Navbar />

      <div className="py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Button asChild variant="ghost" className="text-primary-600 hover:text-primary-700">
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour à l'accueil
              </Link>
            </Button>
          </div>

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-6">Nos Réalisations</h1>
            <p className="text-xl text-primary-700 max-w-3xl mx-auto">
              Découvrez nos transformations avant/après et explorez les détails de chaque projet avec nos galeries
              photos.
            </p>
          </div>

          {/* Section des Galeries Thématiques */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-800 mb-12">Galeries Thématiques</h2>
            <div className="grid md:grid-cols-2 gap-12">
              {groupedGalleries.map((gallery, index) => (
                <Card
                  key={`group-${index}`}
                  className="border-primary-200 hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <CardHeader className="text-center">
                    <CardTitle className="text-primary-800">{gallery.title}</CardTitle>
                    <p className="text-gray-600 text-sm">{gallery.description}</p>
                  </CardHeader>
                  <CardContent className="p-6">
                    {gallery.images.length > 0 ? (
                      <ImageCarousel images={gallery.images} altPrefix={gallery.title} />
                    ) : (
                      <p className="text-center text-gray-500">Aucune image disponible pour cette galerie.</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Section des Réalisations Individuelles (Avant/Après + Carrousel) */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-800 mb-12">Projets Spécifiques</h2>
            <div className="grid md:grid-cols-2 gap-12">
              {realisations.map((realisation, index) => (
                <Card
                  key={`realisation-${index}`}
                  className="border-primary-200 hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {realisation.category}
                      </span>
                    </div>
                    <BeforeAfterSlider
                      beforeImage={realisation.beforeImage}
                      afterImage={realisation.afterImage}
                      title={realisation.title}
                    />
                    {realisation.carouselImages && realisation.carouselImages.length > 0 && (
                      <div className="mt-8">
                        <h4 className="text-lg font-semibold text-primary-800 mb-4 text-center">
                          Galerie Photos du Projet
                        </h4>
                        <ImageCarousel images={realisation.carouselImages} altPrefix={realisation.title} />
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <div className="text-center mt-16">
            <div className="bg-primary-100 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-primary-800 mb-4">Vous avez un projet similaire ?</h2>
              <p className="text-primary-700 mb-6">
                Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé
              </p>
              <Button asChild className="bg-primary-600 hover:bg-primary-700 text-white">
                <Link href="/contact">Demander un devis</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
