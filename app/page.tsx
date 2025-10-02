import { Hammer, Wrench, TreePine, Phone, Mail, ArrowRight, ChefHat } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-85">
          <Image src="/background-artisan.png" alt="Artisan de proximité Auvergne Rhône-Alpes" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/30"></div>
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-800 mb-6">
              REVAIS MONTAGE
              <span className="block text-2xl md:text-3xl font-normal text-primary-700 mt-2">
                Artisan de proximité en Auvergne Rhône-Alpes
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-700 mb-8 max-w-4xl mx-auto">
              Spécialisé en <strong>pose de parquet</strong>, <strong>terrasses bois & composite</strong>, 
              <strong> montage de meubles</strong> et <strong>installation de cuisines</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary-600 hover:bg-primary-700 text-white">
                <Link href="/contact">
                  Devis gratuit <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-600 text-primary-600 hover:bg-primary-50 bg-transparent"
              >
                <Link href="/realisations">Voir nos réalisations</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-800 mb-4">
            Nos Services d'Artisan de Proximité
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Intervention rapide en Auvergne Rhône-Alpes pour tous vos travaux d'aménagement intérieur et extérieur
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-primary-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TreePine className="h-8 w-8 text-primary-600" />
                </div>
                <CardTitle className="text-primary-800">Pose de Parquet</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  <strong>Pose de parquet professionnel</strong> : flottant, collé, cloué. Choix des essences, 
                  préparation du sol et finitions impeccables. Un sol qui allie beauté et résistance.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-primary-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-8 w-8 text-primary-600" />
                </div>
                <CardTitle className="text-primary-800">Terrasses Bois & Composite</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  <strong>Pose de terrasses sur mesure</strong> en bois naturel et composite. Préparation du terrain, 
                  structure solide et finitions durables pour vos espaces extérieurs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-primary-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Hammer className="h-8 w-8 text-primary-600" />
                </div>
                <CardTitle className="text-primary-800">Montage de Meubles</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  <strong>Montage professionnel</strong> de tous types de meubles : armoires, commodes, bibliothèques, 
                  mobilier IKEA et sur mesure. Précision et soin garantis.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-primary-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChefHat className="h-8 w-8 text-primary-600" />
                </div>
                <CardTitle className="text-primary-800">Installation de Cuisines</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  <strong>Installation complète de cuisines</strong> équipées et aménagement de salles de bain 
                  avec raccordements et finitions soignées.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-primary-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-800 mb-6">
            Zone d'Intervention - Artisan de Proximité
          </h2>
          <p className="text-lg text-primary-700 mb-4">
            <strong>Intervention rapide</strong> dans toute la région <strong>Auvergne Rhône-Alpes</strong>
          </p>
          <p className="text-gray-600">
            Lyon, Saint-Étienne, Grenoble, Clermont-Ferrand, Annecy, Chambéry, Valence, 
            Roanne, Montluçon, Le Puy-en-Velay et communes environnantes
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-secondary-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-8">
                Pourquoi Choisir Notre Artisan de Proximité ?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 mb-2">Artisan Qualifié</h3>
                    <p className="text-gray-600">Plus de 10 ans d'expérience dans l'artisanat et les travaux de finition</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 mb-2">Intervention Rapide</h3>
                    <p className="text-gray-600">Artisan de proximité disponible rapidement en Auvergne Rhône-Alpes</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 mb-2">Devis Gratuit</h3>
                    <p className="text-gray-600">Estimation transparente et sans engagement pour tous vos projets</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 mb-2">Travail Soigné</h3>
                    <p className="text-gray-600">Finitions impeccables et respect des délais convenus</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex justify-center">
              <Image
                src="/logo.png"
                alt="REVAIS MONTAGE - Artisan de proximité Auvergne Rhône-Alpes"
                width={600}
                height={600}
                className="object-contain max-w-sm md:max-w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-primary-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Contactez Votre Artisan de Proximité
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Devis gratuit et intervention rapide en Auvergne Rhône-Alpes
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <div className="flex items-center gap-3">
              <Phone className="h-6 w-6 text-secondary-300" />
              <span className="text-lg">06.47.50.03.77</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-6 w-6 text-secondary-300" />
              <span className="text-lg">contact@revais.fr</span>
            </div>
          </div>
          <Button asChild size="lg" className="bg-white text-primary-800 hover:bg-secondary-50">
            <Link href="/contact">Demander un devis gratuit</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
