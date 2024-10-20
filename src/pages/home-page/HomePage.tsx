"use client";
import { useCallback, useEffect, useState } from "react";
import { ExpressResponse } from "@/models/express";
import { getExpressFromApi } from "@/services/express";
import NewsList from "@/components/news/NewsList";

interface NewsPageProps {
  expressData: ExpressResponse;
}

const NewsPage = ({ expressData }: NewsPageProps) => {
  const [express, setExpress] = useState<ExpressResponse>(expressData);

  const refresNewsData = useCallback(async () => {
    try {
      const expressResponse = await getExpressFromApi();

      if (expressResponse.status === 200) {
        setExpress(expressResponse.data as ExpressResponse);
      }
    } catch (error) {}
  }, []);

  useEffect(() => {
    const refresInterval = setInterval(async () => {
      await refresNewsData();
    }, 30000);

    return () => {
      clearInterval(refresInterval);
    };
  }, []);

  return <NewsList express={express} />;
};

export default NewsPage;
