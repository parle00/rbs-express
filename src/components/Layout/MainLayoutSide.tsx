import React from "react";
import mainLayoutSideStyle from "./MainLayout.module.css";
import { SideEnums } from "@/models/enums";
import { Filter } from "@/models/express";
import { getExpress } from "@/services/express";
import MainLayoutLeftSideClient from "./MainLayoutLeftSideClient";

interface MainLayoutSideProps {
  sideType: SideEnums; // veya string, eğer farklı bir türse
}

const MainLayoutSide = async ({ sideType }: MainLayoutSideProps) => {
  let filterData: Filter[];

  if (sideType === SideEnums.LEFT) {
    const filterResponse = await getExpress();
    let formatedData = filterResponse.data;
    delete formatedData.items;
    filterData = formatedData.filters as Filter[];

    return (
      <aside className={mainLayoutSideStyle.mainLayoutContentSide}>
        <MainLayoutLeftSideClient filterData={filterData} />
      </aside>
    );
  }

  if (sideType === SideEnums.RIGHT) {
    return (
      <aside className={mainLayoutSideStyle.mainLayoutContentSide}></aside>
    );
  }
};

export default MainLayoutSide;
