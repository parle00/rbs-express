"use client";
import { useCallback, useEffect, useState } from "react";
import { ExpressResponse, News } from "@/models/express";
import { getExpressFromApi } from "@/services/express";
import NewsList from "@/components/news/NewsList";

interface NewsPageProps {
  expressData: ExpressResponse;
  newsType: string;
}

const NewsPage = ({ expressData, newsType }: NewsPageProps) => {
  const [express, setExpress] = useState<ExpressResponse>(expressData);

  const refresexpressData = useCallback(async () => {
    try {
      const news = await getExpressFromApi();

      if (news.status === 200) {
        let newsResponse = news.data as ExpressResponse;

        const filteredItems = newsResponse.items?.filter(
          (x: News) => x.timeline_category === newsType
        ) as News[];

        newsResponse = { ...newsResponse, items: filteredItems };
        setExpress(newsResponse);
      }
    } catch (error) {}
  }, []);

  useEffect(() => {
    const refresInterval = setInterval(async () => {
      await refresexpressData();
    }, 60000);

    return () => {
      clearInterval(refresInterval);
    };
  }, []);

  return <NewsList express={express} />;
};

export default NewsPage;
