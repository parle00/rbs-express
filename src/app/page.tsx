export const revalidate = 60;

import { ExpressResponse } from "@/models/express";
import NewsPage from "@/components/news/NewsPage";
import { getExpress } from "@/services/express";
import React from "react";

const Page = async () => {
  const expressData = await getExpress();

  return (
    <NewsPage
      expressData={expressData.data as ExpressResponse}
      initialReferenceTime={Date.now()}
    />
  );
};

export default Page;
