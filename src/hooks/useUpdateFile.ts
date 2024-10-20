"use client";
import { expresDataUpdate } from "@/services/express";
import { useCallback, useEffect } from "react";

const useUpdateFile = () => {
  const updateFileRequest = useCallback(async () => {
    try {
      await expresDataUpdate();
    } catch (error) {}
  }, []);

  useEffect(() => {
    updateFileRequest();
    const updeFileInterval = setInterval(updateFileRequest, 60000);

    return () => {
      clearInterval(updeFileInterval);
    };
  }, []);
};

export default useUpdateFile;
