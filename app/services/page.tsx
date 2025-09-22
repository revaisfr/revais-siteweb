import { ArrowLeft, Hammer, ChefHat, Home, TreePine, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ServicesPage() {
  const services = [
    {
      icon: Hammer,
      title: "Montage de Meubles",
      description: "Service complet de montage et assemblage de mobilier",
      details: [
        "Montage d'armoires et dressings",
        "Assemblage de commodes et bibliothèques",
        "Installation de mobilier de bureau",
        "Montage de meubles sur mesure",
        "Réparation et remontage",
      ],
      image: "/realisation/cuisine/cuisine1-apres.JPG",
    },
    {
      icon: ChefHat,
      title: "Installation Cuisines",
      description: "Installation complète de cuisines équipées",
      details: [
        "Pose de meubles hauts et bas",
        "Installation d'électroménager",
        "Raccordements eau et électricité",
        "Pose de plans de travail",
        "Finitions et ajustements",
      ],
      image: "/realisation/cuisine/cuisine1-16.JPG",
    },
    {
      icon: Home,
      title: "Installation de Pergolas",
      description: "Création d'espaces extérieurs ombragés et esthétiques",
      details: [
        "Montage de structures en bois, aluminium ou composite",
        "Fixation des toiles, lames orientables ou panneaux",
        "Intégration d'éclairages ou d'options motorisées",
        "Finition et ancrage pour une stabilité optimale",
      ],
      image: "/realisation/pergola/pergola-1.JPG",
    },
    {
      icon: TreePine,
      title: "Terrasses Bois",
      description: "Création de terrasses en bois naturel",
      details: [
        "Préparation et nivellement du terrain",
        "Pose de lambourdes et structure",
        "Installation de lames de terrasse",
        "Traitement et protection du bois",
        "Finitions et garde-corps",
      ],
      image: "/realisation/terasse/terasse1-20.JPG",
    },
    {
      icon: TreePine,
      title: "Installation de parquet",
      description: "Création de sols chaleureux et élégants",
      details: [
        "Préparation et nivellement des surfaces",
        "Pose de parquets flottants, collés ou cloués",
        "Découpes et ajustements pour un rendu parfait",
        "Finitions : plinthes, seuils et traitements protecteurs",
      ],
      image: "/realisation/parquet/parquet-1.jpeg",
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
            <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-6">Nos Services</h1>
            <p className="text-xl text-primary-700 max-w-3xl mx-auto">
              Découvrez l'ensemble de nos prestations artisanales. Chaque service est réalisé avec expertise et
              attention aux détails.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <Card key={index} className="border-primary-200 overflow-hidden">
                <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                  <div className={`p-8 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <CardHeader className="p-0 mb-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                          <service.icon className="h-6 w-6 text-primary-600" />
                        </div>
                        <CardTitle className="text-2xl text-primary-800">{service.title}</CardTitle>
                      </div>
                      <CardDescription className="text-lg text-gray-600">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <ul className="space-y-3">
                        {service.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-primary-100 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-primary-800 mb-4">Besoin d'un Service Personnalisé ?</h2>
              <p className="text-primary-700 mb-6">
                Nous adaptons nos prestations à vos besoins spécifiques. Contactez-nous pour discuter de votre projet.
              </p>
              <Button asChild className="bg-primary-600 hover:bg-primary-700 text-white">
                <Link href="/contact">Demander un devis personnalisé</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
