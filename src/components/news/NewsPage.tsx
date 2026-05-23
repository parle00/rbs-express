"use client";
import { useCallback, useEffect, useState } from "react";
import { ExpressResponse, News } from "@/models/express";
import NewsList from "@/components/news/NewsList";
import { refresexpressDataAction } from "@/app/action";

interface NewsPageProps {
  expressData: ExpressResponse;
  newsType?: string;
}

const NewsPage = ({ expressData, newsType = "" }: NewsPageProps) => {
  const [express, setExpress] = useState<ExpressResponse>(expressData);

  const refresexpressData = useCallback(async () => {
    try {
      const res = await refresexpressDataAction();

      if (!res) return;

      let newsResponse = res as ExpressResponse;

      if (newsType !== "") {
        const filteredItems = newsResponse.items?.filter(
          (x: News) => x.timeline_category === newsType,
        ) as News[];

        newsResponse = { ...newsResponse, items: filteredItems };
        setExpress(newsResponse);
      } else {
        setExpress(newsResponse);
      }
    } catch (error) {
      console.error("Express news refresh failed:", error);
    }
  }, [newsType]);

  useEffect(() => {
    const refreshInterval = setInterval(() => {
      void refresexpressData();
    }, 60 * 1000);

    return () => {
      clearInterval(refreshInterval);
    };
  }, [refresexpressData]);

  return <NewsList express={express} />;
};

export default NewsPage;
