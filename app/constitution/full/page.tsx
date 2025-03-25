import { PageLayout } from "@/components/page-layout"
import { PDFViewer } from "@/components/pdf-viewer"

export default function FullConstitutionPage() {
  return (
    <PageLayout>
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Constitution of the Federal Republic of Nigeria</h1>
          <p className="text-gray-500">The complete text of the 1999 Constitution (as amended)</p>
        </div>

        <PDFViewer pdfUrl="/documents/nigerian-constitution.pdf" title="Nigerian Constitution (1999)" />

        <div className="mt-8 p-4 bg-gray-100 rounded-md">
          <h2 className="text-lg font-semibold mb-2">About this document</h2>
          <p className="text-sm text-gray-700 mb-4">
            This is the complete text of the Constitution of the Federal Republic of Nigeria 1999, with all amendments
            up to date. The Constitution is the supreme law of Nigeria and provides the framework for the organization
            of government and defines the relationship between the citizens and the state, as well as the rights and
            duties of citizens.
          </p>
          <p className="text-sm text-gray-700">
            For educational purposes only. Always refer to official government publications for legal matters.
          </p>
        </div>
      </div>
    </PageLayout>
  )
}

