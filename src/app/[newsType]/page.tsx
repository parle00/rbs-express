export const runtime = "edge"; // 'nodejs' (default) | 'edge'

import { News } from "@/models/express";
import NewsPage from "@/pages/news-page/NewsPage";
import { getNews } from "@/services/express";

const Page = async ({ params }: { params: { newsType: string } }) => {
  const expressResponse = await getNews({ cache: false });

  let expressData = expressResponse.data;
  const newItems = expressData.items.filter(
    (x: News) => x.service === params.newsType
  );

  expressData = { ...expressData, items: newItems };

  return <NewsPage expressData={expressData} newsType={params.newsType} />;
};

export default Page;
