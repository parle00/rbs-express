/*import { NextRequest, NextResponse } from "next/server";

type Environment = "production" | "development" | "other";

export function middleware(request: NextRequest) {
  const currentEnv = process.env.NODE_ENV as Environment;
  const isLocalhost = request.headers.get("host")?.includes("localhost");
  const isProtocolHTTP = request.headers.get("x-forwarded-proto") === "http";

  if (currentEnv === "production" && !isLocalhost && isProtocolHTTP) {
    return NextResponse.redirect(
      `https://${request.headers.get("host")}${request.nextUrl.pathname}${
        request?.nextUrl?.search || ""
      }`,
      301
    );
  }
}
export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico|none.webp).*)",
};*/
