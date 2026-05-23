"use client";
import { ExpressResponse, Filter, News } from "@/models/express";
import Image from "next/image";
import { useState } from "react";
import { getDateDiff } from "@/utils/helpers";
import NewsText from "./NewsText";

interface NewsCardProps {
  express: ExpressResponse;
  referenceTime: number;
}

const INITIAL_ITEM_COUNT = 10;

const NewsList = ({ express, referenceTime }: NewsCardProps) => {
  const [visibleItemCount, setVisibleItemCount] = useState(INITIAL_ITEM_COUNT);
  const visibleItems = express?.items?.slice(0, visibleItemCount);

  return (
    <div className="flex flex-col gap-[30px] pb-[15px]">
      {visibleItems?.map((item: News, index: number) => {
        const filter = express.filters?.find(
          (x) => x.timeline_category === item.service,
        ) as Filter;

        return (
          <div
            key={item.uuid}
            className="flex flex-row gap-[10px] border-b-[1px] border-gray-800 pb-[30px]"
          >
            <Image
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
                    item.meta?.update_date?.replace(" ", "T") as string,
                    referenceTime,
                  )} önce`}
                </span>
              </div>
              <NewsText text={item.express_summary} />
              <Image
                className="rounded-[8px]"
                src={item.main_image?.url ?? "/none.webp"}
                alt={item.title ?? ""}
                width={item.main_image?.width ?? 640}
                height={item.main_image?.height ?? 360}
                sizes="(max-width: 768px) calc(100vw - 74px), 640px"
                priority={index < 2}
              />
            </div>
          </div>
        );
      })}
      {express.items.length > visibleItemCount && (
        <button
          type="button"
          className="self-center rounded-[8px] border border-gray-700 px-[20px] py-[10px]"
          onClick={() => {
            setVisibleItemCount((currentCount) => currentCount + 10);
          }}
        >
          Daha Fazla Haber
        </button>
      )}
    </div>
  );
};

export default NewsList;
