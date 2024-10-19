import { ExpressResponse, Filter, News } from "@/models/express";
import ReactHtmlParser from "react-html-parser";
import Image from "next/image";
import React from "react";
import newsCardStyle from "./NewsCard.module.css";
import { getDateDiff } from "@/utils/helpers";

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
            className="[&_p]:max-w-[640px] flex flex-row gap-[10px] border-b-[1px] border-gray-800 pb-[30px]"
          >
            <div className="w-fit min-w-[48px] max-w-[48px]">
              <Image
                src={filter.icon_url as string}
                width={48}
                height={48}
                alt={`${filter.timeline_category_name}-Icon`}
              />
            </div>
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
              {ReactHtmlParser(item.express_summary as string)}
              {/* {item.post_type === "video" ? (
                <div className="relative w-full pb-[50%]">
                  <iframe
                    src={item.video_url}
                    className="absolute top-0 left-0 max-w-[640px] w-full h-full border-none"
                    allowFullScreen
                  />
                </div>
              ) : (
                <Image
                  loading="lazy"
                  src={item.main_image?.url as string}
                  alt={item.title as string}
                  width={item.main_image?.width}
                  height={item.main_image?.height}
                />
              )} */}
              <Image
                loading="lazy"
                src={item.main_image?.url as string}
                alt={item.title as string}
                width={item.main_image?.width}
                height={item.main_image?.height}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NewsList;
360;
