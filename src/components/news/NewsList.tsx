"use client";
import { ExpressResponse, Filter, News } from "@/models/express";
import ReactHtmlParser from "react-html-parser";
import Image from "next/image";
import React from "react";
import newsCardStyle from "./NewsCard.module.css";
import { getDateDiff } from "@/utils/helpers";
import { InView } from "react-intersection-observer";

interface NewsCardProps {
  express: ExpressResponse;
}

const NewsList = ({ express }: NewsCardProps) => {
  return (
    <div className={newsCardStyle.newsPageWrapper} suppressHydrationWarning>
      {express?.items?.map((item: News, index: number) => {
        const filter = express.filters?.find(
          (x) => x.timeline_category === item.service
        ) as Filter;

        return (
          <div
            key={index}
            className="[&_p]:max-w-[640px] flex flex-row gap-[10px] border-b-[1px] border-gray-800 pb-[30px]"
            suppressHydrationWarning
          >
            <InView>
              {({ inView, ref, entry }) => {
                entry?.target.setAttribute(
                  "preloadImage",
                  filter.icon_url as string
                );
                if (inView) {
                  entry?.target.children[0].setAttribute(
                    "src",
                    entry.target.getAttribute("preloadImage") as string
                  );
                }
                return (
                  <div
                    ref={ref}
                    className="w-fit min-w-[48px] max-w-[48px]"
                    suppressHydrationWarning
                  >
                    <img
                      className="rounded-[50%]"
                      id={`${index}-icon`}
                      src="/icon.png"
                      width={48}
                      height={48}
                      alt={`${filter.timeline_category_name}-Icon`}
                    />
                  </div>
                );
              }}
            </InView>

            <div className="flex flex-col gap-[10px]" suppressHydrationWarning>
              <div
                className="flex items-center gap-[15px]"
                suppressHydrationWarning
              >
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
              {ReactHtmlParser(item.express_summary as string)}

              <InView>
                {({ inView, ref, entry }) => {
                  entry?.target.setAttribute(
                    "preloadImage",
                    item.main_image?.url as string
                  );
                  if (inView) {
                    entry?.target.children[0].setAttribute(
                      "src",
                      entry.target.getAttribute("preloadImage") as string
                    );
                  }
                  return (
                    <div ref={ref} className="w-full" suppressHydrationWarning>
                      <img
                        className="rounded-[8px]"
                        src="/none.png"
                        alt={item.title as string}
                        width={item.main_image?.width}
                        height={item.main_image?.height}
                      />
                    </div>
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
