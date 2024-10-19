import { ExpressResponse } from "@/models/express";
import HomePage from "@/pages/home-page/HomePage";
import { getExpress } from "@/services/express";

const Home = async () => {
  const response = await getExpress();
  const expressData = response.data as ExpressResponse;

  return <HomePage expressData={expressData} />;
};

export default Home;
