import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  // Refresh session if expired
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // If accessing protected routes without authentication
  if (
    !session &&
    (req.nextUrl.pathname.startsWith("/learn") ||
      req.nextUrl.pathname.startsWith("/community") ||
      req.nextUrl.pathname.startsWith("/constitution") ||
      req.nextUrl.pathname.startsWith("/chat") ||
      req.nextUrl.pathname.startsWith("/chat-history") ||
      req.nextUrl.pathname.startsWith("/api/chat"))
  ) {
    const redirectUrl = new URL("/login", req.url);
    redirectUrl.searchParams.set("redirectedFrom", req.nextUrl.pathname);
    return NextResponse.redirect(redirectUrl);
  }

  return res;
}

export const config = {
  matcher: [
    "/learn",
    "community",
    "constitution",
    "/chat/:path*",
    "/chat-history/:path*",
    "/api/chat/:path*",
    "/login",
    "/register",
  ],
};
