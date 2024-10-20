import { News } from "@/models/express";
import NewsPage from "@/pages/news-page/NewsPage";
import { getStorageExpress } from "@/utils/libs";

const Page = async ({ params }: { params: { newsType: string } }) => {
  const expressResponse = await getStorageExpress();

  let expressData = expressResponse;
  const newItems = expressData.items.filter(
    (x: News) => x.service === params.newsType
  );

  expressData = { ...expressData, items: newItems };

  return <NewsPage expressData={expressData} newsType={params.newsType} />;
};

export default Page;
