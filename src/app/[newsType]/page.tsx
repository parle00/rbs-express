import { News, ExpressResponse } from "@/models/express"; // ExpressResponse modelini içe aktar
import NewsPage from "@/pages/news-page/NewsPage";
import { getExpress } from "@/services/express";

const filterExpressDataByType = (
  data: ExpressResponse,
  newsType: string
): ExpressResponse => {
  const filteredItems = data.items.filter(
    (item: News) => item.service === newsType
  );
  return {
    ...data,
    items: filteredItems,
  };
};

const Page = async ({ params }: { params: { newsType: string } }) => {
  const expressResponse = await getExpress();

  const expressData = filterExpressDataByType(
    expressResponse.data as ExpressResponse,
    params.newsType
  );

  return <NewsPage expressData={expressData} newsType={params.newsType} />;
};

export default Page;
