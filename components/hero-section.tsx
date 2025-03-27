// "use client";

// import type React from "react";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import {
//   Search,
//   ArrowRight,
//   BookOpen,
//   Shield,
//   Scale,
//   Users,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { useRouter } from "next/navigation";
// import { useLanguage } from "@/contexts/language-context";
// import { useTranslation } from "@/hooks/use-translation";

// export function HeroSection() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const router = useRouter();
//   const { currentLanguage } = useLanguage();
//   const { t } = useTranslation(currentLanguage.code);

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       router.push(`/constitution?search=${encodeURIComponent(searchQuery)}`);
//     }
//   };

//   const features = [
//     {
//       icon: <BookOpen className="h-10 w-10 text-primary" />,
//       title: t("hero.feature1.title"),
//       description: t("hero.feature1.description"),
//     },
//     {
//       icon: <Shield className="h-10 w-10 text-primary" />,
//       title: t("hero.feature2.title"),
//       description: t("hero.feature2.description"),
//     },
//     {
//       icon: <Scale className="h-10 w-10 text-primary" />,
//       title: t("hero.feature3.title"),
//       description: t("hero.feature3.description"),
//     },
//     {
//       icon: <Users className="h-10 w-10 text-primary" />,
//       title: t("hero.feature4.title"),
//       description: t("hero.feature4.description"),
//     },
//   ];

//   return (
//     <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
//       {/* Background pattern */}
//       <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10">
//         <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//           <defs>
//             <pattern
//               id="smallGrid"
//               width="10"
//               height="10"
//               patternUnits="userSpaceOnUse"
//             >
//               <path
//                 d="M 10 0 L 0 0 0 10"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="0.5"
//                 className="text-blue-500 dark:text-blue-300"
//               />
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#smallGrid)" />
//         </svg>
//       </div>

//       <div className="container relative z-10 px-4 py-16 md:py-24 lg:py-32">
//         <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="flex flex-col gap-6"
//           >
//             <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-800 dark:border-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
//               <span className="mr-1">🇳🇬</span> {t("hero.badge")}
//             </div>
//             <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
//               {t("hero.title.part1")}{" "}
//               <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//                 {t("hero.title.part2")}
//               </span>
//             </h1>
//             <p className="max-w-[600px] text-gray-600 dark:text-gray-300 text-xl">
//               {t("hero.subtitle")}
//             </p>

//             <form onSubmit={handleSearch} className="flex max-w-md gap-2">
//               <div className="relative flex-1">
//                 <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
//                 <Input
//                   type="search"
//                   placeholder={t("hero.searchPlaceholder")}
//                   className="pl-10"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                 />
//               </div>
//               <Button type="submit">{t("hero.searchButton")}</Button>
//             </form>

//             <div className="flex flex-col sm:flex-row gap-4 mt-2">
//               <Button size="lg" asChild>
//                 <Link href="/constitution">
//                   {t("hero.exploreButton")}{" "}
//                   <ArrowRight className="ml-2 h-4 w-4" />
//                 </Link>
//               </Button>
//               <Button variant="outline" size="lg" asChild>
//                 <Link href="/learn">{t("hero.learnButton")}</Link>
//               </Button>
//             </div>

//             <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
//               <div className="flex -space-x-2">
//                 {[1, 2, 3, 4].map((i) => (
//                   <div
//                     key={i}
//                     className="inline-block h-8 w-8 rounded-full border-2 border-white dark:border-gray-900 overflow-hidden bg-gray-200"
//                   >
//                     <Image
//                       src={`/placeholder.svg?height=32&width=32&text=${i}`}
//                       alt={`User ${i}`}
//                       width={32}
//                       height={32}
//                     />
//                   </div>
//                 ))}
//               </div>
//               <p>
//                 <span className="font-medium text-gray-900 dark:text-white">
//                   10,000+
//                 </span>{" "}
//                 {t("hero.userCount")}
//               </p>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 p-2 shadow-xl dark:from-blue-900/20 dark:to-indigo-900/20 lg:mr-0"
//           >
//             <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm" />
//             <Image
//               src="/placeholder.svg?height=500&width=500&text=Nigerian+Constitution"
//               alt={t("hero.imageAlt")}
//               width={500}
//               height={500}
//               className="relative z-10 rounded-lg object-cover"
//               priority
//             />
//             <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-blue-500/20 backdrop-blur-md" />
//             <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-indigo-500/20 backdrop-blur-md" />
//           </motion.div>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//           className="mt-20"
//         >
//           <h2 className="text-center text-3xl font-bold tracking-tight mb-12">
//             {t("hero.featuresTitle")}
//           </h2>
//           <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
//                 className="flex flex-col items-center text-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
//               >
//                 <div className="mb-4 rounded-full bg-blue-50 p-3 dark:bg-blue-900/30">
//                   {feature.icon}
//                 </div>
//                 <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
//                 <p className="text-gray-600 dark:text-gray-300">
//                   {feature.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Search,
  ArrowRight,
  BookOpen,
  Shield,
  Scale,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/hooks/use-translation";

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const { currentLanguage } = useLanguage();
  const { t } = useTranslation(currentLanguage.code);

  // const handleSearch = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (searchQuery.trim()) {
  //     router.push(`/constitution?search=${encodeURIComponent(searchQuery)}`);
  //   }
  // };

  const features = [
    {
      icon: <BookOpen className="h-10 w-10 text-green-600" />,
      title: t("hero.feature1.title"),
      description: t("hero.feature1.description"),
    },
    {
      icon: <Shield className="h-10 w-10 text-green-600" />,
      title: t("hero.feature2.title"),
      description: t("hero.feature2.description"),
    },
    {
      icon: <Scale className="h-10 w-10 text-green-600" />,
      title: t("hero.feature3.title"),
      description: t("hero.feature3.description"),
    },
    {
      icon: <Users className="h-10 w-10 text-green-600" />,
      title: t("hero.feature4.title"),
      description: t("hero.feature4.description"),
    },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-950">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="smallGrid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-green-500 dark:text-green-300"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#smallGrid)" />
        </svg>
      </div>

      <div className="container relative z-10 px-4 py-16 md:py-24 lg:py-32">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-3 py-1 text-sm text-green-800 dark:border-green-800 dark:bg-green-900/30 dark:text-green-300">
              <span className="mr-1">🇳🇬</span> {t("hero.badge")}
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-green-900">
              {t("hero.title.part1")}{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                {t("hero.title.part2")}
              </span>
            </h1>
            <p className="max-w-[600px] text-gray-600 dark:text-gray-300 text-xl">
              {t("hero.subtitle")}
            </p>
            {/* 
            <form onSubmit={handleSearch} className="flex max-w-md gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <Input
                  type="search"
                  placeholder={t("hero.searchPlaceholder")}
                  className="pl-10 border-green-200 focus:border-green-500 focus:ring-green-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                {t("hero.searchButton")}
              </Button>
            </form> */}

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Button
                size="lg"
                asChild
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <Link href="/constitution">
                  {t("hero.exploreButton")}{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-green-600 text-green-600 hover:bg-green-50"
              >
                <Link href="/learn">{t("hero.learnButton")}</Link>
              </Button>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="inline-block h-8 w-8 rounded-full border-2 border-white dark:border-gray-900 overflow-hidden bg-gray-200"
                  >
                    <Image
                      src={`/placeholder.svg?height=32&width=32&text=${i}`}
                      alt={`User ${i}`}
                      width={32}
                      height={32}
                    />
                  </div>
                ))}
              </div>
              <p>
                <span className="font-medium text-green-800 dark:text-white">
                  10,000+
                </span>{" "}
                {t("hero.userCount")}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 p-2 shadow-xl dark:from-green-900/20 dark:to-emerald-900/20 lg:mr-0"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm" />
            <Image
              src="/constitution-01.jpg"
              alt={t("hero.imageAlt")}
              width={500}
              height={500}
              className="relative z-10 rounded-lg object-cover"
              priority
            />
            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-green-500/20 backdrop-blur-md" />
            <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-emerald-500/20 backdrop-blur-md" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20"
        >
          <h2 className="text-center text-3xl font-bold tracking-tight text-green-800 mb-12">
            {t("hero.featuresTitle")}
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow border border-green-100"
              >
                <div className="mb-4 rounded-full bg-green-50 p-3 dark:bg-green-900/30">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold text-green-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
