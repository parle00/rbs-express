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

let srcIcon = "/icon.png";

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
          <InView key={index}>
            {({ inView, ref, entry }) => {
              if (inView) {
                srcIcon = filterItem.icon_url as string;
              }
              return (
                <li
                  ref={ref}
                  key={index}
                  className={`${
                    pathname !== "/"
                      ? pathname?.includes(
                          filterItem.timeline_category as string
                        )
                        ? mainLayoutLeftSideStyle.active
                        : ""
                      : ""
                  }`}
                >
                  <Link
                    href={`${filterItem.timeline_category}`}
                    title={filterItem.timeline_category_name}
                  >
                    <span>
                      <Image
                        className="rounded-[50%]"
                        src={srcIcon}
                        width={24}
                        height={24}
                        alt={`${filterItem.timeline_category_name}-Icon`}
                        priority={true}
                      />
                    </span>
                    <span style={{ color: filterItem.color_dark }}>
                      {filterItem.timeline_category_name}
                    </span>
                  </Link>
                </li>
              );
            }}
          </InView>
        );
      })}
    </ul>
  );
};

export default MainLayoutLeftSideClient;
