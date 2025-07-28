import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/jwt";

export async function middleware(req) {
  const token = req.cookies.get("token")?.value;
  console.log("CHECK TOKEN:", token);

  const verified = token ? await verifyToken(token) : null;

  const path = req.nextUrl.pathname;
  const protectedPaths = ["/dashboard", "/articles"];

  const requiresAuth = protectedPaths.some((p) => path.startsWith(p));

  if (!verified && requiresAuth) {
    console.log("Redirect to /login");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/articles/:path*"],
};
