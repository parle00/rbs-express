import { mynetAxiosİnstance } from "./api";
import { EXPRESS } from "./const";

export const getExpress = () => {
  return mynetAxiosİnstance.get(EXPRESS);
};
