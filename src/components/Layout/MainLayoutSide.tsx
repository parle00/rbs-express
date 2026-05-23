import React from "react";
import { SideEnums } from "@/models/enums";
import { Filter } from "@/models/express";
import { getExpress } from "@/services/express";
import MainLayoutLeftSideClient from "./MainLayoutLeftSideClient";

interface MainLayoutSideProps {
  sideType: SideEnums;
}

const MainLayoutSide = async ({ sideType }: MainLayoutSideProps) => {
  if (sideType === SideEnums.LEFT) {
    let filterData: Filter[] = [];

    try {
      const filterResponse = await getExpress();

      const formattedData = filterResponse.data;

      filterData = (formattedData.filters ?? []) as Filter[];
    } catch (error) {
      console.error(
        "Main layout left side filters could not be loaded:",
        error,
      );
    }

    return (
      <nav className="main-layout-side mt-5">
        <MainLayoutLeftSideClient filterData={filterData} />
      </nav>
    );
  }

  if (sideType === SideEnums.RIGHT) {
    return <nav className="main-layout-side"></nav>;
  }

  return null;
};

export default MainLayoutSide;
