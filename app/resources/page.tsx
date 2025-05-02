"use client";

import React from "react";
import Link from "next/link";
import { Video, FileImage, Download, Construction } from "lucide-react";
import { PageLayout } from "@/components/page-layout";
import { useAuth } from "@/hooks/useAuth";
import { redirect } from "next/navigation";

export default function ResourcesPage() {
  const { user } = useAuth();
  if (user?.role === undefined) {
    redirect("/login");
  }

  // Sample data for demonstration
  const videos = [
    {
      id: 1,
      title: "Understanding the Nigerian Constitution: An Overview",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "15:24",
      views: "2.4K",
      date: "Jan 15, 2023",
      description:
        "A comprehensive overview of the Nigerian Constitution, its history, structure, and key provisions.",
    },
    {
      id: 2,
      title: "Fundamental Rights Explained: Chapter IV Breakdown",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "18:36",
      views: "1.8K",
      date: "Feb 3, 2023",
      description:
        "A detailed explanation of the fundamental rights guaranteed in Chapter IV of the Nigerian Constitution.",
    },
    {
      id: 3,
      title: "The Three Branches of Government in Nigeria",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "22:15",
      views: "3.1K",
      date: "Mar 10, 2023",
      description:
        "Learn about the executive, legislative, and judicial branches of government in Nigeria.",
    },
  ];

  const infographics = [
    {
      id: 1,
      title: "Structure of the Nigerian Constitution",
      image: "/placeholder.svg?height=300&width=500",
      downloads: "856",
      date: "Feb 12, 2023",
      description:
        "A visual breakdown of the chapters and sections of the Nigerian Constitution.",
    },
    {
      id: 2,
      title: "Fundamental Rights at a Glance",
      image: "/placeholder.svg?height=300&width=500",
      downloads: "1,243",
      date: "Mar 5, 2023",
      description:
        "Visual summary of the fundamental rights guaranteed in Chapter IV of the Constitution.",
    },
  ];

  return (
    <PageLayout>
      {/* Under Construction Banner */}
      <div className="w-full bg-amber-500 text-white py-4">
        <div className="container px-4 md:px-6 mx-auto flex items-center justify-center">
          <Construction className="h-6 w-6 mr-2" />
          <p className="font-medium text-center">
            This page is currently under construction. Check back soon for more
            resources!
          </p>
        </div>
      </div>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50 dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold tracking-tighter text-green-800 dark:text-green-200 sm:text-5xl">
              Multimedia Resources
            </h1>
            <p className="mt-4 text-gray-600 dark:text-gray-400 md:text-xl max-w-[700px] mx-auto">
              Explore our collection of videos, infographics, and multilingual
              resources to help you understand the Nigerian Constitution in
              different formats.
            </p>
          </div>

          <div className="flex flex-col gap-4 items-center justify-center sm:flex-row">
            <Link
              href=""
              // href="#videos"
              className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
            >
              <Video className="mr-2 h-4 w-4" />
              Watch Videos
            </Link>
            <Link
              href=""
              // href="#infographics"
              className="inline-flex h-10 items-center justify-center rounded-md border border-green-200 bg-white px-8 text-sm font-medium text-green-600 shadow-sm transition-colors hover:bg-green-50 dark:bg-gray-950 dark:border-green-800 dark:text-green-400 dark:hover:bg-green-900/30"
            >
              <FileImage className="mr-2 h-4 w-4" />
              View Infographics
            </Link>
          </div>
        </div>
      </section>

      <section id="videos" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter text-green-800 dark:text-green-200 sm:text-5xl">
              Video Library
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 md:text-xl max-w-[700px] mx-auto">
              Watch educational videos that explain constitutional concepts in
              an engaging and accessible way.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((video) => (
              <div
                key={`video-${video.id}`}
                className="rounded-lg border border-green-100 bg-white text-gray-950 shadow-sm overflow-hidden hover:border-green-200 transition-colors dark:bg-gray-900 dark:border-green-900"
              >
                <div className="relative">
                  <div className="w-full h-48 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                    <Video className="h-10 w-10 text-gray-400" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-green-600/90 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-green-800 dark:text-green-200">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                    <span>{video.views} views</span>
                    <span>•</span>
                    <span>{video.date}</span>
                  </p>
                  <div className="mt-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {video.description}
                    </p>
                  </div>
                  <div className="mt-4">
                    <Link
                      href="/"
                      // href={`/resources/videos/${video.id}`}
                      className="inline-flex items-center justify-center rounded-md border border-green-200 bg-white px-4 py-2 text-sm font-medium text-green-600 shadow-sm transition-colors hover:bg-green-50 dark:bg-gray-900 dark:border-green-800 dark:text-green-400 dark:hover:bg-green-900/30"
                    >
                      Watch Video
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="infographics"
        className="w-full py-12 md:py-24 lg:py-32 bg-green-50 dark:bg-gray-950"
      >
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter text-green-800 dark:text-green-200 sm:text-5xl">
              Infographics
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 md:text-xl max-w-[700px] mx-auto">
              Visual explanations of constitutional concepts designed for easy
              understanding and sharing.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {infographics.map((infographic) => (
              <div
                key={`infographic-${infographic.id}`}
                className="rounded-lg border border-green-100 bg-white text-gray-950 shadow-sm overflow-hidden hover:border-green-200 transition-colors dark:bg-gray-900 dark:border-green-900"
              >
                <div className="relative">
                  <div className="w-full h-64 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                    <FileImage className="h-12 w-12 text-gray-400" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-green-800 dark:text-green-200">
                    {infographic.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                    <span>{infographic.downloads} downloads</span>
                    <span>•</span>
                    <span>{infographic.date}</span>
                  </p>
                  <div className="mt-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {infographic.description}
                    </p>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <Link
                      href=""
                      // href={`/resources/infographics/${infographic.id}`}
                      className="inline-flex items-center justify-center rounded-md border border-green-200 bg-white px-4 py-2 text-sm font-medium text-green-600 shadow-sm transition-colors hover:bg-green-50 dark:bg-gray-900 dark:border-green-800 dark:text-green-400 dark:hover:bg-green-900/30"
                    >
                      View Full Size
                    </Link>
                    <button className="inline-flex items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
