import { getStorageExpress } from "@/utils/libs";
import HomePage from "@/pages/home-page/HomePage";

const Home = async () => {
  const expressResponse = await getStorageExpress();

  return <HomePage expressData={expressResponse} />;
};

export default Home;
