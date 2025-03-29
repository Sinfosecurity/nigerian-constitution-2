import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define protected routes
const protectedRoutes = ["/learn", "/community", "/resources"];

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  // Check auth status
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Get the pathname
  const { pathname } = req.nextUrl;

  // Check if the current path starts with any protected route
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  // If it's a protected route and there's no session
  if (isProtectedRoute && !session) {
    // Redirect to login page
    const redirectUrl = new URL("/login", req.url);
    // Add the original URL as a redirect parameter
    redirectUrl.searchParams.set("redirectTo", pathname);
    return NextResponse.redirect(redirectUrl);
  }

  return res;
}

// Configure which routes to run middleware on
export const config = {
  matcher: ["/learn/:path*", "/community/:path*", "/resources/:path*"],
};
