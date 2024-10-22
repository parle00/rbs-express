import axios from "axios";
import { API_URL } from "./const";

const axiosCreateObject = {
  baseURL: API_URL,
};

export const mynetAxiosİnstance = axios.create(axiosCreateObject);

mynetAxiosİnstance.defaults.headers.common = {
  "Cache-Control": "no-cache",
  Pragma: "no-cache",
  Expires: "0",
};
