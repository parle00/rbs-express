import React from "react";
import HeaderClientContent from "./HeaderClientContent";
import { getExpress } from "@/services/express";
import { Filter } from "@/models/express";

const Header = async () => {
  let filterData: Filter[] = [];

  try {
    const filterResponse = await getExpress();

    const formattedData = filterResponse.data;

    filterData = (formattedData.filters ?? []) as Filter[];
  } catch (error) {
    console.error("Header filter data could not be loaded:", error);
  }

  return <HeaderClientContent filterData={filterData} />;
};

export default Header;
