"use client";

import { Suspense } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { PageLayout } from "@/components/page-layout";
import { ConstitutionReader } from "@/components/constitution-reader";

export default function ConstitutionPage() {
  return (
    <PageLayout>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">
          The Constitution of the Federal Republic of Nigeria
        </h1>

        <Suspense
          fallback={
            <Card>
              <CardContent className="flex items-center justify-center p-8">
                <Loader2 className="h-8 w-8 animate-spin text-primary mr-2" />
              </CardContent>
            </Card>
          }
        >
          <ConstitutionReader />
        </Suspense>
      </div>
    </PageLayout>
  );
}
