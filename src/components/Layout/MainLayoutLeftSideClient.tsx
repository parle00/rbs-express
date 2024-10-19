"use client";
import { Filter } from "@/models/express";
import Link from "next/link";
import mainLayoutLeftSideStyle from "./MainLayout.module.css";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface MainLayoutLeftSideClientProps {
  filterData: Filter[];
}

const MainLayoutLeftSideClient = ({
  filterData,
}: MainLayoutLeftSideClientProps) => {
  const pathname = usePathname();

  return (
    <ul
      className={`${mainLayoutLeftSideStyle.mainLayoutLeftSideContent} sticky top-[5px]`}
    >
      <li className={pathname === "/" ? mainLayoutLeftSideStyle.active : ""}>
        <Link href="/" title="Akış">
          <span>Akış</span>
        </Link>
      </li>
      {filterData?.map((filterItem: Filter, index: number) => {
        return (
          <li
            className={`${
              pathname !== "/"
                ? pathname?.includes(filterItem.timeline_category as string)
                  ? mainLayoutLeftSideStyle.active
                  : ""
                : ""
            }`}
            key={index}
          >
            <Link
              href={`${filterItem.timeline_category}`}
              title={filterItem.timeline_category_name}
            >
              <span>
                <Image
                  src={filterItem.icon_url as string}
                  width={24}
                  height={24}
                  alt={`${filterItem.timeline_category_name}-Icon`}
                />
              </span>
              <span style={{ color: filterItem.color_dark }}>
                {filterItem.timeline_category_name}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MainLayoutLeftSideClient;
