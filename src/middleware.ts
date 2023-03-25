import { withClerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// need to add this for server-side functionality
export default withClerkMiddleware(() => {
  // this runs on every request
  return NextResponse.next();
});

// Stop Middleware running on static files
export const config = {
  matcher: "/((?!_next/image|_next/static|favicon.ico).*)",
};
