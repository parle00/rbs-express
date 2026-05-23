"use client";
import { useCallback, useEffect, useState } from "react";
import { ExpressResponse, News } from "@/models/express";
import NewsList from "@/components/news/NewsList";
import { refresexpressDataAction } from "@/app/action";

interface NewsPageProps {
  expressData: ExpressResponse;
  newsType?: string;
  initialReferenceTime: number;
}

const NewsPage = ({
  expressData,
  newsType = "",
  initialReferenceTime,
}: NewsPageProps) => {
  const [express, setExpress] = useState<ExpressResponse>(expressData);
  const [referenceTime, setReferenceTime] = useState(initialReferenceTime);

  const refresexpressData = useCallback(async () => {
    try {
      const res = await refresexpressDataAction();

      if (!res) return;

      let newsResponse = res as ExpressResponse;
      setReferenceTime(Date.now());

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
    setReferenceTime(Date.now());

    const refreshInterval = setInterval(() => {
      void refresexpressData();
    }, 60 * 1000);

    return () => {
      clearInterval(refreshInterval);
    };
  }, [refresexpressData]);

  return <NewsList express={express} referenceTime={referenceTime} />;
};

export default NewsPage;
