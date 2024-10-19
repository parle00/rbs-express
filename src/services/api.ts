import axios from "axios";
import { API_URL } from "./const";

const axiosCreateObject = {
  baseURL: API_URL,
};

export const mynetAxiosİnstance = axios.create(axiosCreateObject);
