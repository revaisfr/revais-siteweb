import { Hammer, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Hammer className="h-6 w-6 text-secondary-300" />
              <span className="font-bold text-xl">REVAIS MONTAGE</span>
            </div>
            <p className="text-primary-100 mb-4">
              Votre artisan spécialisé en montage de meubles, installation de cuisines et pose de terrasses dans la
              région Auvergne Rhones-Alpes.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-secondary-300">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-primary-100 hover:text-secondary-100 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/realisations" className="text-primary-100 hover:text-secondary-100 transition-colors">
                  Réalisations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-100 hover:text-secondary-100 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-secondary-300">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary-300" />
                <span className="text-primary-100">06.47.50.03.77</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary-300" />
                <span className="text-primary-100">contact@revais.fr</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-8 pt-8 text-center">
          <p className="text-primary-200">© 2025 REVAIS MONTAGE. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
