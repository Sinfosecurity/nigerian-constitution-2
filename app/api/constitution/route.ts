import { NextResponse } from "next/server"
import { constitutionText } from "@/data/constitution-text"

export async function GET() {
  try {
    // Use the imported constitution text
    return NextResponse.json({
      text: constitutionText,
      source: "data",
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Error serving constitution text:", error)

    // Return error response with sample text as fallback
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Unknown error",
        text: getSampleConstitutionText(),
        source: "sample",
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    )
  }
}

function getSampleConstitutionText() {
  return `
CHAPTER I
General Provisions
PART I
Federal Republic of Nigeria

1. Supremacy of the Constitution
(1) This Constitution is supreme and its provisions shall have binding force on all authorities and persons throughout the Federal Republic of Nigeria.
(2) The Federal Republic of Nigeria shall not be governed, nor shall any persons or group of persons take control of the Government of Nigeria or any part thereof, except in accordance with the provisions of this Constitution.
(3) If any other law is inconsistent with the provisions of this Constitution, this Constitution shall prevail, and that other law shall to the extent of the inconsistency be void.

2. The Federal Republic of Nigeria
(1) Nigeria is one indivisible and indissoluble Sovereign State to be known by the name of the Federal Republic of Nigeria.
(2) Nigeria shall be a Federation consisting of States and a Federal Capital Territory.

CHAPTER II
Fundamental Objectives and Directive Principles of State Policy

13. Fundamental obligations of the Government
It shall be the duty and responsibility of all organs of government, and of all authorities and persons, exercising legislative, executive or judicial powers, to conform to, observe and apply the provisions of this Chapter of this Constitution.
`
}

// Add a health check endpoint
export async function HEAD() {
  return new Response(null, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  })
}

