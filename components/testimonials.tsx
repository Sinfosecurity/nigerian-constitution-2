"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { useTranslation } from "@/hooks/use-translation"

export function Testimonials() {
  const { currentLanguage } = useLanguage()
  const { t } = useTranslation(currentLanguage.code)

  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      content: t("testimonials.1.content"),
      author: t("testimonials.1.author"),
      title: t("testimonials.1.title"),
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      content: t("testimonials.2.content"),
      author: t("testimonials.2.author"),
      title: t("testimonials.2.title"),
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 3,
      content: t("testimonials.3.content"),
      author: t("testimonials.3.author"),
      title: t("testimonials.3.title"),
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  return (
    <div className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{t("testimonials.title")}</h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-[700px]">{t("testimonials.subtitle")}</p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-xl bg-white dark:bg-gray-800 p-8 shadow-lg"
            >
              <div className="absolute -top-5 left-8 text-blue-500 dark:text-blue-400">
                <Quote className="h-10 w-10" />
              </div>
              <div className="pt-4">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{testimonials[currentIndex].content}</p>
                <div className="flex items-center">
                  <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                      alt={testimonials[currentIndex].author}
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{testimonials[currentIndex].author}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonials[currentIndex].title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex justify-center gap-2">
            <Button variant="outline" size="icon" onClick={prev} aria-label={t("testimonials.prevButton")}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full ${
                    index === currentIndex ? "bg-blue-600 dark:bg-blue-400" : "bg-gray-300 dark:bg-gray-600"
                  }`}
                  aria-label={t("testimonials.goToTestimonial", { number: (index + 1).toString() })}
                />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={next} aria-label={t("testimonials.nextButton")}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

