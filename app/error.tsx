"use client"

import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="container flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-4xl font-bold mb-2">Something went wrong</h1>
      <p className="text-xl text-gray-500 mb-8 max-w-md">
        We apologize for the inconvenience. Please try again or contact support if the problem persists.
      </p>
      <button
        onClick={reset}
        className="inline-flex h-10 items-center justify-center rounded-md bg-black px-8 text-sm font-medium text-white shadow transition-colors hover:bg-gray-900"
      >
        Try Again
      </button>
    </div>
  )
}

