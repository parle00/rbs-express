import { getStorageExpress } from "@/utils/libs";
import { News, ExpressResponse } from "@/models/express"; // ExpressResponse modelini içe aktar
import NewsPage from "@/pages/news-page/NewsPage";

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
  const expressResponse = await getStorageExpress();

  const expressData = filterExpressDataByType(expressResponse, params.newsType);

  return <NewsPage expressData={expressData} newsType={params.newsType} />;
};

export default Page;
