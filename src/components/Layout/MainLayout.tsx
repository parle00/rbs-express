import React, { ReactNode } from "react";
import Header from "../header/Header";
import mainLayoutStyle from "./MainLayout.module.css";

import { SideEnums } from "@/models/enums";
import MainLayoutSide from "./MainLayoutSide";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <React.Fragment>
      <Header />
      <main className="w-full flex flex-col items-center">
        <div className={`container ${mainLayoutStyle.mainLayoutContainer}`}>
          <MainLayoutSide sideType={SideEnums.LEFT} />
          <div
            className={`${mainLayoutStyle.mainLayoutContentContainer} border-r-[0px] border-l-[0px] border-gray-800 md:border-l-[1px] md:border-r-[1px]`}
          >
            {children}
          </div>
          <MainLayoutSide sideType={SideEnums.RIGHT} />
        </div>
      </main>
    </React.Fragment>
  );
};

export default MainLayout;
