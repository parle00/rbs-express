import React from "react";
import HeaderClientContent from "./HeaderClientContent";
import { getExpress } from "@/services/express";
import { Filter } from "@/models/express";

const Header = async () => {
  const filterResponse = await getExpress();
  let formatedData = filterResponse.data;
  delete formatedData.items;
  const filterData = formatedData.filters as Filter[];

  return <HeaderClientContent filterData={filterData} />;
};

export default Header;
