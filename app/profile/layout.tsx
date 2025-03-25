import type React from "react"
export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div style={{ maxWidth: "800px", margin: "0 auto" }}>{children}</div>
}

