import { getExpress } from "@/services/express";
import { NextRequest, NextResponse } from "next/server";
import { ExpressResponse, News } from "@/models/express";

let cachedResponse: { data: ExpressResponse; etag: string | undefined } | null =
  null;

export async function GET(req: NextRequest) {
  const cache = req.nextUrl.searchParams.get("cache");
  if (cache?.toString() === "false") {
    const res = await getExpress();
    const responseData = res.data as ExpressResponse;
    return NextResponse.json(responseData, { status: 200 });
  } else {
    const res = await getExpress();
    const responseData = res.data as ExpressResponse;

    const newEtag = JSON.stringify(responseData).length.toString(); // Örnek etag oluşturma

    if (cachedResponse && cachedResponse.etag === newEtag) {
      return new Response(null, { status: 304 });
    }

    cachedResponse = { data: responseData, etag: newEtag };

    return NextResponse.json(responseData, { status: 200 });
  }
}
