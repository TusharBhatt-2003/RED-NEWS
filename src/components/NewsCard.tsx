import React from "react";
import { Article } from "../hooks/useFetchNews";

const NewsCard: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <div className="p-4 flex flex-col inconsolata justify-between rounded-3xl bg-[#141416] shadow hover:shadow-lg transition-shadow">
      <div>
        {!article.urlToImage ? null : (
          <img
            src={article.urlToImage}
            alt={article.title}
            className="rounded-xl mb-4 w-full h-40 object-cover"
          />
        )}
        <h2 className="text-lg font-semibold mb-2">{article.title}</h2>
        <p className="text-sm text-zinc-400 mb-2">
          <span className="font-medium">Author:</span>{" "}
          {article.author || "Unknown"} <br />
          <span className="font-medium">Source:</span>{" "}
          {article.source?.name || "Unknown"}
        </p>
        {/* <p className="text-sm text-[#F6F5F1] mb-4">
        {article.description || "No description available."}
      </p> */}
      </div>
      <div className="flex justify-between item">
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="red rounded-full w-fit px-2 py-1 font-medium hover:underline"
        >
          Read more
        </a>
        <p className="text-xs text-zinc-400 mb-4">
          Published on: {new Date(article.publishedAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
