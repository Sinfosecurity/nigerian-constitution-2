// import { PageLayout } from "@/components/page-layout"
// import { SEO } from "@/components/seo"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Download, FileText, BookOpen, Smartphone, Globe } from "lucide-react"
// import Link from "next/link"

// export default function DownloadPage() {
//   const downloadFormats = [
//     {
//       id: "pdf",
//       title: "PDF Format",
//       icon: <FileText className="h-8 w-8 text-red-500" />,
//       description: "Standard PDF document that can be viewed on any device with a PDF reader.",
//       fileSize: "2.4 MB",
//       url: "/documents/nigerian-constitution.pdf",
//     },
//     {
//       id: "epub",
//       title: "EPUB Format",
//       icon: <BookOpen className="h-8 w-8 text-blue-500" />,
//       description: "E-book format ideal for e-readers, tablets, and mobile devices.",
//       fileSize: "1.8 MB",
//       url: "/documents/nigerian-constitution.epub",
//     },
//     {
//       id: "mobile",
//       title: "Mobile App",
//       icon: <Smartphone className="h-8 w-8 text-green-500" />,
//       description: "Download our mobile app for offline access to the constitution.",
//       platforms: ["Android", "iOS"],
//       url: "/mobile-app",
//     },
//     {
//       id: "web",
//       title: "Web Version",
//       icon: <Globe className="h-8 w-8 text-purple-500" />,
//       description: "Access the constitution online with our interactive reader.",
//       url: "/constitution",
//     },
//   ]

//   return (
//     <PageLayout>
//       <SEO
//         title="Download the Nigerian Constitution"
//         description="Download the Nigerian Constitution in various formats including PDF, EPUB, and mobile app."
//       />

//       <div className="container mx-auto p-4 py-8">
//         <h1 className="text-3xl font-bold mb-2">Download the Constitution</h1>
//         <p className="text-muted-foreground mb-8">
//           Access the Nigerian Constitution in various formats for offline reading and reference.
//         </p>

//         <div className="grid gap-6 md:grid-cols-2">
//           {downloadFormats.map((format) => (
//             <Card key={format.id} className="hover:shadow-md transition-shadow">
//               <CardHeader className="flex flex-row items-center gap-4">
//                 <div className="rounded-full p-2 bg-muted">{format.icon}</div>
//                 <div>
//                   <CardTitle>{format.title}</CardTitle>
//                   {format.fileSize && <CardDescription>{format.fileSize}</CardDescription>}
//                   {format.platforms && <CardDescription>Available for: {format.platforms.join(", ")}</CardDescription>}
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 <p>{format.description}</p>
//               </CardContent>
//               <CardFooter>
//                 <Button asChild>
//                   <Link href={format.url}>
//                     <Download className="mr-2 h-4 w-4" />
//                     {format.id === "web" ? "Access Online" : "Download"}
//                   </Link>
//                 </Button>
//               </CardFooter>
//             </Card>
//           ))}
//         </div>

//         <div className="mt-12">
//           <h2 className="text-2xl font-bold mb-4">About the Downloads</h2>
//           <Card>
//             <CardContent className="p-6">
//               <div className="space-y-4">
//                 <p>
//                   All downloads of the Nigerian Constitution provided on this site are based on the 1999 Constitution of
//                   the Federal Republic of Nigeria (as amended), including all amendments up to date.
//                 </p>
//                 <p>
//                   These documents are provided for educational and informational purposes only. While we strive to
//                   ensure accuracy, for legal matters, please refer to the official government publications.
//                 </p>
//                 <p>
//                   The mobile app provides additional features such as bookmarking, highlighting, and offline access to
//                   the constitution, as well as regular updates when amendments are made.
//                 </p>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </PageLayout>
//   )
// }

import { PageLayout } from "@/components/page-layout";
import { SEO } from "@/components/seo";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import Link from "next/link";

export default function DownloadPage() {
  const pdfDocument = {
    title: "PDF Format",
    icon: <FileText className="h-8 w-8 text-red-500" />,
    description:
      "Standard PDF document that can be viewed on any device with a PDF reader.",
    fileSize: "757 KB",
    url: "/documents/nigerian-constitution.pdf",
  };

  return (
    <PageLayout>
      <SEO
        title="Download the Nigerian Constitution"
        description="Download the Nigerian Constitution in PDF format."
      />

      <div className="container mx-auto p-4 py-8">
        <h1 className="text-2xl sm:text-3xl text-green-700 text-center font-bold mb-2">
          Download the Constitution
        </h1>
        <p className="text-muted-foreground text-center mb-8">
          Download the Nigerian Constitution in PDF format for offline reading
          and reference.
        </p>

        <div className="max-w-md mx-auto">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="rounded-full p-2 bg-muted">
                {pdfDocument.icon}
              </div>
              <div>
                <CardTitle>{pdfDocument.title}</CardTitle>
                <CardDescription>{pdfDocument.fileSize}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>{pdfDocument.description}</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-green-700">
                <Link
                  target="_blank"
                  href={pdfDocument.url}
                  download="nigerian-constitution.pdf"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl text-green-700 text-center font-bold mb-4">
            About the Download
          </h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <p>
                  This PDF download of the Nigerian Constitution is based on the
                  1999 Constitution of the Federal Republic of Nigeria (as
                  amended), including all amendments up to date.
                </p>
                <p>
                  The document is provided for educational and informational
                  purposes only. While we strive to ensure accuracy, for legal
                  matters, please refer to the official government publications.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
}
