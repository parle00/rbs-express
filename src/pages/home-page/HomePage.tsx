"use client";
import { useCallback, useEffect, useState } from "react";
import { ExpressResponse, News } from "@/models/express";
import { getNews } from "@/services/express";
import NewsList from "@/components/news/NewsList";

interface NewsPageProps {
  expressData: ExpressResponse;
}

const NewsPage = ({ expressData }: NewsPageProps) => {
  const [express, setExpress] = useState<ExpressResponse>(expressData);

  const refresNewsData = useCallback(async () => {
    try {
      const expressResponse = await getNews();

      if (expressResponse.status === 200) {
        setExpress(expressResponse.data as ExpressResponse);
      }
    } catch (error) {}
  }, []);

  useEffect(() => {
    const refresInterval = setInterval(async () => {
      await refresNewsData();
    }, 5000);

    return () => {
      clearInterval(refresInterval);
    };
  }, []);

  // useEffect(() => {
  //   console.log(news);
  // }, [news]);

  return <NewsList express={express} />;
};

export default NewsPage;
