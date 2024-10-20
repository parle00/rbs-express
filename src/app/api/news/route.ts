import { getExpress } from "@/services/express";
import { NextResponse } from "next/server";
import { ExpressResponse } from "@/models/express";

let cachedResponse: { data: ExpressResponse; etag: string | undefined } | null =
  null;

export async function GET() {
  const res = await getExpress();
  // const newEtag = JSON.stringify(res).length.toString(); // Örnek etag oluşturma
  // if (cachedResponse && cachedResponse.etag === newEtag) {
  //   return new Response(null, { status: 204 });
  // }
  // cachedResponse = { data: res, etag: newEtag };
  return NextResponse.json(res.data, { status: 200 });
}
