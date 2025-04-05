// import { type NextRequest, NextResponse } from "next/server"
// import { createClient } from "@/services/supabase/server"

// export async function GET(request: NextRequest) {
//   const requestUrl = new URL(request.url)
//   const code = requestUrl.searchParams.get("code")

//   if (code) {
//     const supabase = createClient()
//     await supabase.auth.exchangeCodeForSession(code)
//   }

//   // URL to redirect to after sign in process completes
//   return NextResponse.redirect(new URL("/", requestUrl.origin))
// }
