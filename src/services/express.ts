import axios from "axios";
import { mynetAxiosİnstance } from "./api";
import { EXPRESS } from "./const";

export const getExpress = () => {
  return mynetAxiosİnstance.get(EXPRESS);
};

export const getNews = () => {
  return axios.get("/api/news");
};
