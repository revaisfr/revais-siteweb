"use client"

import type React from "react"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface ImageCarouselProps {
  images: string[]
  altPrefix: string
}

export default function ImageCarousel({ images, altPrefix }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  if (images.length === 0) {
    return null // Ne rien afficher si aucune image n'est fournie
  }

  return (
    <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden group">
      <Image
        src={images[currentIndex] || "/placeholder.svg"}
        alt={`${altPrefix} - Image ${currentIndex + 1}`}
        fill
        className="object-contain transition-opacity duration-300"
      />

      {images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 hover:text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={goToPrevious}
            aria-label="Image précédente"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 hover:text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={goToNext}
            aria-label="Image suivante"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
            {images.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === currentIndex ? "bg-white" : "bg-gray-400"
                } transition-colors duration-200`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Aller à l'image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
