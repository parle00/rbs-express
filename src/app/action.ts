"use server";

import { getExpress } from "@/services/express";

export const refresexpressDataAction = async () => {
  try {
    const res = await getExpress();

    if (res.status === 200) {
      return res.data;
    }

    throw new Error(`Failed to fetch news data: ${res.statusText}`);
  } catch (error) {
    console.error("Error fetching news data:", error);
    return null;
  }
};
