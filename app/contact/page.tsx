"use client"

import type React from "react"

import { ArrowLeft, Phone, Mail, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Logs de débogage détaillés
    console.log("🚀 DÉBUT - Formulaire soumis côté client")
    console.log("📝 État du formulaire:", formData)
    console.log("📝 Tous les champs remplis?", {
      nom: !!formData.nom,
      email: !!formData.email,
      telephone: !!formData.telephone,
      service: !!formData.service,
      message: !!formData.message,
    })

    // Validation côté client plus stricte
    if (
      !formData.nom.trim() ||
      !formData.email.trim() ||
      !formData.telephone.trim() ||
      !formData.service ||
      !formData.message.trim()
    ) {
      console.log("❌ ERREUR - Validation échouée côté client")
      setSubmitStatus({
        type: "error",
        message: "Veuillez remplir tous les champs obligatoires.",
      })
      return
    }

    console.log("✅ Validation côté client OK")
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      console.log("📡 TENTATIVE - Envoi de la requête vers /api/contact...")
      console.log("📡 URL complète:", window.location.origin + "/api/contact")

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      console.log("📡 RÉPONSE - Status:", response.status, response.statusText)
      console.log("📡 RÉPONSE - Headers:", Object.fromEntries(response.headers.entries()))

      const result = await response.json()
      console.log("📡 DONNÉES - Réponse:", result)

      if (response.ok) {
        console.log("✅ SUCCÈS - Email envoyé côté client")
        setSubmitStatus({
          type: "success",
          message: "Votre demande a été envoyée avec succès ! Nous vous recontacterons rapidement.",
        })
        // Réinitialiser le formulaire
        setFormData({
          nom: "",
          email: "",
          telephone: "",
          service: "",
          message: "",
        })
      } else {
        console.log("❌ ERREUR - Réponse négative:", result.error)
        setSubmitStatus({
          type: "error",
          message: result.error || "Une erreur est survenue lors de l'envoi de votre demande.",
        })
      }
    } catch (error) {
      console.error("💥 ERREUR - Exception côté client:", error)
      setSubmitStatus({
        type: "error",
        message: "Erreur de connexion. Veuillez réessayer plus tard.",
      })
    } finally {
      console.log("🏁 FIN - Processus terminé")
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    console.log(`🔄 Changement ${field}:`, value)
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

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
            <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-6">Contactez-Nous</h1>
            <p className="text-xl text-primary-700 max-w-3xl mx-auto">
              Prêt à démarrer votre projet ? Contactez-nous pour un devis gratuit et personnalisé.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulaire de contact */}
            <Card className="border-primary-200">
              <CardHeader>
                <CardTitle className="text-primary-800">Demande de Devis</CardTitle>
                <CardDescription>
                  Remplissez ce formulaire et nous vous recontacterons dans les plus brefs délais.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nom">Nom complet *</Label>
                      <Input
                        id="nom"
                        value={formData.nom}
                        onChange={(e) => handleChange("nom", e.target.value)}
                        placeholder="Votre nom"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telephone">Téléphone *</Label>
                      <Input
                        id="telephone"
                        type="tel"
                        value={formData.telephone}
                        onChange={(e) => handleChange("telephone", e.target.value)}
                        placeholder="06.XX.XX.XX.XX"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="votre@email.com"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Type de service *</Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => {
                        console.log("🔄 Service sélectionné:", value)
                        handleChange("service", value)
                      }}
                      disabled={isSubmitting}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez un service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="montage-meubles">Montage de meubles</SelectItem>
                        <SelectItem value="cuisine">Installation cuisine</SelectItem>
                        <SelectItem value="pergola">Installation de pergolas</SelectItem>
                        <SelectItem value="terrasse-bois">Terrasse bois</SelectItem>
                        <SelectItem value="parquet">Installation de parquet</SelectItem>
                        <SelectItem value="autre">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Description du projet *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Décrivez votre projet en détail : dimensions, matériaux souhaités, délais, etc."
                      rows={5}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Message de statut */}
                  {submitStatus.type && (
                    <div
                      className={`p-4 rounded-lg ${
                        submitStatus.type === "success"
                          ? "bg-green-50 text-green-800 border border-green-200"
                          : "bg-red-50 text-red-800 border border-red-200"
                      }`}
                    >
                      {submitStatus.message}
                    </div>
                  )}

                  <Button type="submit" className="w-full bg-primary-600 hover:bg-primary-700" disabled={isSubmitting}>
                    {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Informations de contact */}
            <div className="space-y-8">
              <Card className="border-primary-200">
                <CardHeader>
                  <CardTitle className="text-primary-800">Nos Coordonnées</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-800">Téléphone</h3>
                      <p className="text-gray-600">06.47.50.03.77</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-800">Email</h3>
                      <p className="text-gray-600">contact@revais.fr</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-800">Horaires</h3>
                      <p className="text-gray-600">Lun-Ven: 8h-18h</p>
                      <p className="text-gray-600">Sam: 8h-12h</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-800">Zone d'intervention</h3>
                      <p className="text-gray-600">Région Auvergne Rhones-Alpes et environs</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary-200 bg-secondary-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-primary-800 mb-4">Pourquoi nous choisir ?</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                      Devis gratuit et sans engagement
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                      Intervention rapide
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                      Travail soigné et garanti
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                      Artisan expérimenté
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
