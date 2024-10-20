import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";
import newsCardStyle from "./NewsCard.module.css";

const NewsText = ({ text }: { text: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="max-w-[640px]">
      <div className={isExpanded ? "" : newsCardStyle.truncatedText}>
        {ReactHtmlParser(text)}
      </div>

      {!isExpanded && (
        <div className="flex full justify-end">
          <button onClick={toggleExpand} className="mt-2 text-blue-500">
            {isExpanded ? "Gizle" : "Devamını Oku"}
          </button>
        </div>
      )}
    </div>
  );
};

export default NewsText;
