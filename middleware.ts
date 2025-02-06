import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  console.log("middleware", request.url);
}

export const config = {
  matcher: [
    "/admin-dashboard",
    "/admin-dashboard/:path*",
    "/login",
    "/register",
    "/forgot-password",
    "/account",
    "/account/:path*",
    "/property-search",
  ],
};