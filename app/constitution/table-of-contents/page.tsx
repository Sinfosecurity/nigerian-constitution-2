"use client"

import { Suspense } from "react"
import { PageLayout } from "@/components/page-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2 } from "lucide-react"
import { TableOfContentsClient } from "@/components/table-of-contents-client"

export default function TableOfContentsPage() {
  return (
    <PageLayout>
      <div className="container mx-auto p-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Table of Contents</h1>

        <Suspense
          fallback={
            <Card>
              <CardContent className="flex items-center justify-center p-8">
                <Loader2 className="h-8 w-8 animate-spin text-primary mr-2" />
                <span>Loading constitution...</span>
              </CardContent>
            </Card>
          }
        >
          <TableOfContentsClient />
        </Suspense>
      </div>
    </PageLayout>
  )
}

