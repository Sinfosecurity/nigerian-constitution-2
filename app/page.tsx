import { PageLayout } from "@/components/page-layout";
import { SEO } from "@/components/seo";

// Client component wrapper to use translations
import { HomePageContent } from "@/components/home-page-content";

export default function HomePage() {
  return (
    <PageLayout>
      <SEO />
      <HomePageContent />
    </PageLayout>
  );
}
