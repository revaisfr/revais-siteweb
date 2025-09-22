import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  console.log("🔍 API Contact appelée")
  
  try {
    const body = await request.json()
    const { nom, email, telephone, service, message } = body

    console.log("📝 Données reçues:", { nom, email, telephone, service })

    // Validation des données
    if (!nom || !email || !telephone || !service || !message) {
      console.log("❌ Validation échouée - champs manquants")
      return NextResponse.json({ error: "Tous les champs sont requis" }, { status: 400 })
    }

    // Vérification de la présence du mot de passe Gmail
    console.log("🔑 Vérification du mot de passe Gmail...")
    console.log("🔑 GMAIL_APP_PASSWORD présent:", !!process.env.GMAIL_APP_PASSWORD)
    
    if (!process.env.GMAIL_APP_PASSWORD) {
      console.log("❌ Mot de passe Gmail manquant dans .env.local")
      return NextResponse.json({ error: "Configuration email manquante" }, { status: 500 })
    }

    console.log("🔑 Configuration Gmail OK")

    // Configuration du transporteur Nodemailer
    console.log("📧 Création du transporteur Gmail...")
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "contact.revais@gmail.com",
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    console.log("📧 Transporteur créé, vérification de la connexion...")
    
    // Test de la connexion
    try {
      await transporter.verify()
      console.log("✅ Connexion Gmail vérifiée avec succès")
    } catch (verifyError) {
      console.error("❌ Erreur de vérification Gmail:", verifyError)
      return NextResponse.json({ 
        error: "Erreur de connexion Gmail", 
        details: verifyError instanceof Error ? verifyError.message : "Erreur inconnue" 
      }, { status: 500 })
    }

    // Configuration de l'email
    const mailOptions = {
      from: "contact.revais@gmail.com",
      to: "contact@revais.fr",
      subject: `Nouvelle demande de devis - ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #2d7d7d; color: white; padding: 20px; text-align: center;">
            <h1>Nouvelle Demande de Devis</h1>
          </div>
          
          <div style="padding: 20px; background-color: #f9f9f9;">
            <h2 style="color: #2d7d7d;">Informations du client</h2>
            
            <div style="background-color: white; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
              <p><strong>Nom :</strong> ${nom}</p>
              <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Téléphone :</strong> <a href="tel:${telephone}">${telephone}</a></p>
              <p><strong>Service demandé :</strong> ${service}</p>
            </div>
            
            <h3 style="color: #2d7d7d;">Description du projet</h3>
            <div style="background-color: white; padding: 15px; border-radius: 5px;">
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background-color: #d4b896; border-radius: 5px;">
              <p style="margin: 0;"><strong>Cette demande a été envoyée depuis le site web REVAIS MONTAGE</strong></p>
              <p style="margin: 5px 0 0 0; font-size: 14px;">Répondez directement à ${email} pour contacter le client.</p>
            </div>
          </div>
        </div>
      `,
      replyTo: email,
    }

    console.log("📧 Configuration email créée, tentative d'envoi...")
    console.log("📧 De:", mailOptions.from)
    console.log("📧 Vers:", mailOptions.to)
    console.log("📧 Sujet:", mailOptions.subject)

    // Envoi de l'email
    const info = await transporter.sendMail(mailOptions)
    console.log("✅ Email envoyé avec succès!")
    console.log("✅ Message ID:", info.messageId)
    console.log("✅ Réponse:", info.response)

    return NextResponse.json({ 
      message: "Email envoyé avec succès",
      messageId: info.messageId 
    }, { status: 200 })

  } catch (error) {
    console.error("💥 Erreur lors de l'envoi:", error)
    
    // Log détaillé de l'erreur
    if (error instanceof Error) {
      console.error("💥 Message d'erreur:", error.message)
      console.error("💥 Stack trace:", error.stack)
    }

    return NextResponse.json(
      {
        error: "Erreur lors de l'envoi de l'email",
        details: error instanceof Error ? error.message : "Erreur inconnue",
      },
      { status: 500 },
    )
  }
}
