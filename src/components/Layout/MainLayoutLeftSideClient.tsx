"use client";
import { Filter } from "@/models/express";
import Link from "next/link";
import mainLayoutLeftSideStyle from "./MainLayout.module.css";

interface MainLayoutLeftSideClientProps {
  filterData: Filter[];
}

const MainLayoutLeftSideClient = ({
  filterData,
}: MainLayoutLeftSideClientProps) => {
  return (
    <ul className={mainLayoutLeftSideStyle.mainLayoutLeftSideContent}>
      <li className={mainLayoutLeftSideStyle.active}>
        <Link href="/">
          <span>Akış</span>
        </Link>
      </li>
      {filterData.map((filterItem: Filter, index: number) => {
        return (
          <li key={index}>
            <Link
              href={`${filterItem.timeline_category}`}
              title={filterItem.timeline_category_name}
            >
              <span>
                <img src={filterItem.icon_url} width="24px" loading="lazy" />
              </span>
              <span>{filterItem.timeline_category_name}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MainLayoutLeftSideClient;
