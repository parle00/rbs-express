export const revalidate = 60;

import type { Metadata } from "next";
import { cache } from "react";
import { News, ExpressResponse, Filter } from "@/models/express";
import NewsPage from "@/components/news/NewsPage";
import { getExpress } from "@/services/express";

const filterExpressDataByType = (
  data: ExpressResponse,
  newsType: string,
): ExpressResponse => {
  const filteredItems = data.items.filter(
    (item: News) => item.service === newsType,
  );
  return {
    ...data,
    items: filteredItems,
  };
};

const getExpressData = cache(async (): Promise<ExpressResponse> => {
  const expressResponse = await getExpress();

  return expressResponse.data as ExpressResponse;
});

const getRouteTitle = (data: ExpressResponse, newsType: string) => {
  return (
    data.filters.find(
      (filter: Filter) => filter.timeline_category === newsType,
    )?.timeline_category_name ?? newsType
  );
};

export async function generateMetadata({
  params,
}: {
  params: { newsType: string };
}): Promise<Metadata> {
  const responseData = await getExpressData();
  const routeTitle = getRouteTitle(responseData, params.newsType);

  return {
    title: `${routeTitle} | RbsExpress`,
    description: `${routeTitle} kategorisindeki güncel haberleri RbsExpress'te takip edin.`,
    alternates: {
      canonical: `/${params.newsType}`,
    },
  };
}

const Page = async ({ params }: { params: { newsType: string } }) => {
  const responseData = await getExpressData();

  const expressData = filterExpressDataByType(
    responseData,
    params.newsType,
  );

  return (
    <NewsPage
      expressData={expressData}
      newsType={params.newsType}
      initialReferenceTime={Date.now()}
    />
  );
};

export default Page;
