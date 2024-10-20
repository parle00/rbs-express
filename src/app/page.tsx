import { getExpress } from "@/services/express";
import { ExpressResponse } from "@/models/express";
import NewsPage from "@/pages/news-page/NewsPage";

const Home = async () => {
  const expressResponse = await getExpress();

  return <NewsPage expressData={expressResponse.data as ExpressResponse} />;
};

export default Home;
