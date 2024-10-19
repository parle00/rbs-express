"use client";
import { ExpressResponse } from "@/models/express";
import React from "react";

interface HomePageProps {
  expressData: ExpressResponse;
}

const HomePage = ({ expressData }: HomePageProps) => {
  return <div>HomePage</div>;
};

export default HomePage;
