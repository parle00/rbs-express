"use client";
import { Filter } from "@/models/express";
import Link from "next/link";
import mainLayoutLeftSideStyle from "./MainLayout.module.css";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { InView } from "react-intersection-observer";

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
            key={index}
            className={`${
              pathname !== "/"
                ? pathname?.includes(filterItem.timeline_category as string)
                  ? mainLayoutLeftSideStyle.active
                  : ""
                : ""
            }`}
          >
            <Link
              href={`${filterItem.timeline_category}`}
              title={filterItem.timeline_category_name}
            >
              <InView>
                {({ inView, ref, entry }) => {
                  entry?.target.setAttribute(
                    "preloadImage",
                    filterItem.icon_url as string
                  );
                  if (inView) {
                    entry?.target.children[0].setAttribute(
                      "src",
                      entry.target.getAttribute("preloadImage") as string
                    );
                  }
                  return (
                    <span ref={ref}>
                      <img
                        className="rounded-[50%]"
                        src="/icon.png"
                        width={24}
                        height={24}
                        alt={`${filterItem.timeline_category_name}-Icon`}
                      />
                    </span>
                  );
                }}
              </InView>

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
