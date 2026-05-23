"use client";
import { useCallback, useEffect, useState } from "react";
import { ExpressResponse, News } from "@/models/express";
import NewsList from "@/components/news/NewsList";
import { refresexpressDataAction } from "@/app/action";
import { INITIAL_ITEM_COUNT } from "@/utils/constants";

interface NewsPageProps {
  expressData: ExpressResponse;
  newsType?: string;
  initialReferenceTime: number;
  initialHasMoreItems: boolean;
}

const NewsPage = ({
  expressData,
  newsType = "",
  initialReferenceTime,
  initialHasMoreItems,
}: NewsPageProps) => {
  const [express, setExpress] = useState<ExpressResponse>(expressData);
  const [referenceTime, setReferenceTime] = useState(initialReferenceTime);
  const [hasMoreItems, setHasMoreItems] = useState(initialHasMoreItems);
  const [hasLoadedAllItems, setHasLoadedAllItems] = useState(false);

  const filterNewsByType = useCallback(
    (response: ExpressResponse) => {
      if (newsType === "") return response;

      return {
        ...response,
        items: response.items.filter((item: News) => item.service === newsType),
      };
    },
    [newsType],
  );

  const refresexpressData = useCallback(async () => {
    try {
      const res = await refresexpressDataAction();

      if (!res) return;

      const newsResponse = filterNewsByType(res as ExpressResponse);
      setReferenceTime(Date.now());
      setExpress(
        hasLoadedAllItems
          ? newsResponse
          : {
              ...newsResponse,
              items: newsResponse.items.slice(0, INITIAL_ITEM_COUNT),
            },
      );
      setHasMoreItems(
        !hasLoadedAllItems && newsResponse.items.length > INITIAL_ITEM_COUNT,
      );
    } catch (error) {
      console.error("Express news refresh failed:", error);
    }
  }, [filterNewsByType, hasLoadedAllItems]);

  const loadMoreItems = useCallback(async () => {
    const res = await refresexpressDataAction();

    if (!res) return;

    const newsResponse = filterNewsByType(res as ExpressResponse);
    setExpress(newsResponse);
    setReferenceTime(Date.now());
    setHasLoadedAllItems(true);
    setHasMoreItems(false);
  }, [filterNewsByType]);

  useEffect(() => {
    setReferenceTime(Date.now());

    const refreshInterval = setInterval(() => {
      void refresexpressData();
    }, 60 * 1000);

    return () => {
      clearInterval(refreshInterval);
    };
  }, [refresexpressData]);

  return (
    <NewsList
      express={express}
      referenceTime={referenceTime}
      hasMoreItems={hasMoreItems}
      onLoadMore={loadMoreItems}
    />
  );
};

export default NewsPage;
