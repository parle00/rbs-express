"use client";
import { useState } from "react";

const NewsText = ({ text = "" }: { text?: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const plainText = text
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#(?:39|x27);/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/\s+/g, " ")
    .trim();

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="max-w-[640px]">
      <div className={isExpanded ? "" : "line-clamp-2"}>
        {plainText}
      </div>

      <div className="flex full justify-end">
        <button
          aria-label="devamini-oku"
          onClick={toggleExpand}
          className="mt-2 text-blue-500"
        >
          {isExpanded ? "Gizle" : "Devamını Oku"}
        </button>
      </div>
    </div>
  );
};

export default NewsText;
