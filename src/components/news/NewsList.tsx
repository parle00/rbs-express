"use client";
import { ExpressResponse, Filter, News } from "@/models/express";
import Image from "next/image";
import React from "react";
import newsCardStyle from "./NewsCard.module.css";
import { getDateDiff } from "@/utils/helpers";
import { InView } from "react-intersection-observer";
import NewsText from "./NewsText";

interface NewsCardProps {
  express: ExpressResponse;
}

const NewsList = ({ express }: NewsCardProps) => {
  return (
    <div className={newsCardStyle.newsPageWrapper}>
      {express?.items?.map((item: News, index: number) => {
        const filter = express.filters?.find(
          (x) => x.timeline_category === item.service
        ) as Filter;

        return (
          <div
            key={index}
            className="flex flex-row gap-[10px] border-b-[1px] border-gray-800 pb-[30px]"
          >
            <Image
              priority={true}
              className="rounded-[50%] max-h-[48px]"
              id={`${index}-icon`}
              src={filter.icon_url as string}
              width={48}
              height={48}
              alt={`${filter.timeline_category_name}-Icon`}
            />

            <div className="flex flex-col gap-[10px]">
              <div className="flex items-center gap-[15px]">
                <span
                  style={{
                    color: filter.color_dark as string,
                  }}
                >
                  {filter.timeline_category_name}
                </span>

                <span className="text-[12px] text-gray-500">
                  {`${getDateDiff(
                    item.meta?.update_date?.replace(" ", "T") as string
                  )} önce`}
                </span>
              </div>
              <NewsText text={item.express_summary as string} />
              <InView>
                {({ inView, ref, entry }) => {
                  entry?.target.setAttribute(
                    "preloadImage",
                    item.main_image?.url as string
                  );
                  if (inView) {
                    entry?.target.setAttribute(
                      "src",
                      entry.target.getAttribute("preloadImage") as string
                    );
                  }
                  return (
                    <img
                      ref={ref}
                      className="rounded-[8px]"
                      src="/none.webp"
                      alt={item.title as string}
                      width={item.main_image?.width}
                      height={item.main_image?.height}
                    />
                  );
                }}
              </InView>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NewsList;
