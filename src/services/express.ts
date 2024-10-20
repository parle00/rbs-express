import axios from "axios";
import { mynetAxiosİnstance } from "./api";
import { EXPRESS } from "./const";

export const getExpress = () => {
  return mynetAxiosİnstance.get(EXPRESS);
};

export const getExpressFromApi = async () => {
  return axios.get(`/api/news`);
};
