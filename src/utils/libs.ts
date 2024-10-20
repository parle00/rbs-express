import fsPromises from "fs/promises";
import path from "path";
import { ExpressResponse } from "@/models/express";

export async function getStorageExpress() {
  const filePath = path.join(process.cwd(), "public/express.json");

  const jsonData = await fsPromises.readFile(filePath);

  const objectData = JSON.parse(jsonData as any);

  return objectData as ExpressResponse;
}
