import { getExpress } from "@/services/express";
import { NextResponse } from "next/server";

// let cachedResponse: { data: ExpressResponse; etag: string | undefined } | null =
//   null;

export async function GET() {
  const res = await getExpress();
  return NextResponse.json(res.data, { status: 200 });
}
