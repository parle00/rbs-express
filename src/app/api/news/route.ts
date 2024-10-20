import { getExpress } from "@/services/express";
import { NextResponse } from "next/server";
import { ExpressResponse } from "@/models/express";
import fs from "fs";
import path from "path";
import { getStorageExpress } from "@/utils/libs";

let cachedResponse: { data: ExpressResponse; etag: string | undefined } | null =
  null;

export async function GET() {
  const res = await getStorageExpress();
  const newEtag = JSON.stringify(res).length.toString(); // Örnek etag oluşturma
  if (cachedResponse && cachedResponse.etag === newEtag) {
    return new Response(null, { status: 204 });
  }
  cachedResponse = { data: res, etag: newEtag };
  return NextResponse.json(res, { status: 200 });
}

export async function POST() {
  const res = await getExpress();
  const responseData = res.data as ExpressResponse;

  const newEtag = JSON.stringify(responseData).length.toString(); // Örnek etag oluşturma

  // Eğer veriler zaten güncelse 304 ve bir mesaj dön
  if (cachedResponse && cachedResponse.etag === newEtag) {
    return new Response(null, { status: 204 });
  }

  // ETag değiştiyse, yeni verileri cache'le ve dosyaya yaz
  cachedResponse = { data: responseData, etag: newEtag };

  const filePath = path.join(process.cwd(), "public", "express.json");

  fs.writeFileSync(filePath, JSON.stringify(responseData, null, 2), "utf8");

  return new Response(null, { status: 204 });
}
