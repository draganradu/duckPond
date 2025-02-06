import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log("MIDDLEWARE: ", request.url);
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/login"],
}