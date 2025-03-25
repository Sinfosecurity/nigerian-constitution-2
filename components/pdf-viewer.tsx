"use client"

import { useState } from "react"
import { Download, ExternalLink, Maximize2, Minimize2 } from "lucide-react"

interface PDFViewerProps {
  pdfUrl: string
  title: string
}

export function PDFViewer({ pdfUrl, title }: PDFViewerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  return (
    <div className={`flex flex-col ${isFullscreen ? "fixed inset-0 z-50 bg-white p-4" : "relative w-full"}`}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex items-center gap-2">
          <a
            href={pdfUrl}
            download="nigerian-constitution.pdf"
            className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-100"
          >
            <Download className="mr-2 h-4 w-4" />
            Download
          </a>
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-100"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Open in New Tab
          </a>
          <button
            onClick={toggleFullscreen}
            className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-100"
          >
            {isFullscreen ? (
              <>
                <Minimize2 className="mr-2 h-4 w-4" />
                Exit Fullscreen
              </>
            ) : (
              <>
                <Maximize2 className="mr-2 h-4 w-4" />
                Fullscreen
              </>
            )}
          </button>
        </div>
      </div>
      <div className={`w-full ${isFullscreen ? "flex-1" : "h-[800px]"}`}>
        <iframe
          src={`${pdfUrl}#toolbar=0&navpanes=0`}
          className="w-full h-full border border-gray-200 rounded-md"
          title={title}
        />
      </div>
    </div>
  )
}

