"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"

interface ErrorBoundaryProps {
  children: React.ReactNode
}

export function ErrorBoundary({ children }: ErrorBoundaryProps) {
  const [hasError, setHasError] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const errorHandler = (error: ErrorEvent) => {
      console.error("Caught error:", error)
      setHasError(true)
      setError(error.error)
    }

    window.addEventListener("error", errorHandler)

    return () => {
      window.removeEventListener("error", errorHandler)
    }
  }, [])

  if (hasError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] p-6 text-center">
        <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
        <h2 className="text-2xl font-bold mb-2">Something went wrong</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
          We&apos;re sorry, but there was an error loading this content. Please try again or contact support if the problem
          persists. Thank you!
        </p>
        <Button onClick={() => window.location.reload()}>Reload Page</Button>
        {error && process.env.NODE_ENV === "development" && (
          <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg text-left w-full max-w-xl">
            <p className="font-mono text-sm text-red-800 dark:text-red-300 whitespace-pre-wrap">{error.toString()}</p>
          </div>
        )}
      </div>
    )
  }

  return <>{children}</>
}

