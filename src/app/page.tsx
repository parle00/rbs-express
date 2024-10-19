export const runtime = "edge"; // 'nodejs' (default) | 'edge'

import { ExpressResponse } from "@/models/express";
import HomePage from "@/pages/home-page/HomePage";
import { getNews } from "@/services/express";

const Home = async () => {
  const expressResponse = await getNews({ cache: false });

  return <HomePage expressData={expressResponse.data as ExpressResponse} />;
};

export default Home;
