"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { BookOpen, Users, MessageSquare, Download } from "lucide-react"
import type { JSX } from "react" // Import JSX
import { useLanguage } from "@/contexts/language-context"
import { useTranslation } from "@/hooks/use-translation"

interface Stat {
  icon: JSX.Element
  value: number
  label: string
  prefix?: string
  suffix?: string
}

export function Statistics() {
  const { currentLanguage } = useLanguage()
  const { t } = useTranslation(currentLanguage.code)

  const [counts, setCounts] = useState({
    sections: 0,
    users: 0,
    discussions: 0,
    downloads: 0,
  })

  const stats: Stat[] = [
    {
      icon: <BookOpen className="h-8 w-8 text-blue-500" />,
      value: counts.sections,
      label: t("stats.sections"),
      suffix: "+",
    },
    {
      icon: <Users className="h-8 w-8 text-green-500" />,
      value: counts.users,
      label: t("stats.users"),
      suffix: "k+",
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-purple-500" />,
      value: counts.discussions,
      label: t("stats.discussions"),
      suffix: "+",
    },
    {
      icon: <Download className="h-8 w-8 text-orange-500" />,
      value: counts.downloads,
      label: t("stats.downloads"),
      suffix: "k+",
    },
  ]

  useEffect(() => {
    // Animate the counters
    const interval = setInterval(() => {
      setCounts((prev) => {
        const newCounts = { ...prev }

        if (newCounts.sections < 320) newCounts.sections += 8
        if (newCounts.users < 10) newCounts.users += 0.5
        if (newCounts.discussions < 1500) newCounts.discussions += 50
        if (newCounts.downloads < 25) newCounts.downloads += 1

        if (
          newCounts.sections >= 320 &&
          newCounts.users >= 10 &&
          newCounts.discussions >= 1500 &&
          newCounts.downloads >= 25
        ) {
          clearInterval(interval)
        }

        return newCounts
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 rounded-full bg-white p-4 shadow-md dark:bg-gray-800">{stat.icon}</div>
              <h3 className="text-3xl font-bold md:text-4xl">
                {stat.prefix || ""}
                {stat.value.toLocaleString()}
                {stat.suffix || ""}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

