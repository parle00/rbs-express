import { ExpressResponse } from "@/models/express";
import NewsPage from "@/pages/news-page/NewsPage";
import { getExpress } from "@/services/express";
import React from "react";

const Page = async () => {
  const expressData = await getExpress();
  return <NewsPage expressData={expressData.data as ExpressResponse} />;
};

export default Page;
