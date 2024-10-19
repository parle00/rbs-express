import { ExpressResponse, News } from "@/models/express";
import HomePage from "@/pages/home-page/HomePage";
import { getExpress } from "@/services/express";

const Home = async () => {
  const response = await getExpress();

  return <HomePage expressData={response.data as ExpressResponse} />;
};

export default Home;
