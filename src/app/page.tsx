import HomePage from "@/pages/home-page/HomePage";
import { getExpress } from "@/services/express";
import { ExpressResponse } from "@/models/express";

const Home = async () => {
  const expressResponse = await getExpress();

  return <HomePage expressData={expressResponse.data as ExpressResponse} />;
};

export default Home;
