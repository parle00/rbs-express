import axios from "axios";
import { mynetAxiosİnstance } from "./api";
import { EXPRESS } from "./const";

export const getExpress = () => {
  return mynetAxiosİnstance.get(EXPRESS);
};

export const getNews = async ({ cache }: { cache?: any } = { cache: null }) => {
  return axios.get(
    `http://localhost:3000/api/news${cache !== null ? `?cache=${cache}` : ""}`
  );
};
