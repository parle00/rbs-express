export const revalidate = 60;

import { ExpressResponse } from "@/models/express";
import NewsPage from "@/components/news/NewsPage";
import { getExpress } from "@/services/express";
import { INITIAL_ITEM_COUNT } from "@/utils/constants";
import React from "react";

const Page = async () => {
  const expressData = await getExpress();
  const responseData = expressData.data as ExpressResponse;
  const initialExpressData = {
    ...responseData,
    items: responseData.items.slice(0, INITIAL_ITEM_COUNT),
  };

  return (
    <NewsPage
      expressData={initialExpressData}
      initialReferenceTime={Date.now()}
      initialHasMoreItems={responseData.items.length > INITIAL_ITEM_COUNT}
    />
  );
};

export default Page;
