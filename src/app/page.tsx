import HomePage from "@/pages/home-page/HomePage";
import { getStorageExpress } from "@/utils/libs";

const Home = async () => {
  const expressResponse = await getStorageExpress();

  return <HomePage expressData={expressResponse} />;
};

export default Home;
