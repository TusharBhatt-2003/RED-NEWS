import React, { useState } from "react";
import useFetchNews, { Article } from "../hooks/useFetchNews";
import SearchForm from "../components/SearchForm";
import NewsCard from "../components/NewsCard";
import { SkeletonCard } from "../components/SkeletonCard.tsx"; // Import SkeletonCard

const NewsFeed: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("tesla");
  const [fromDate, setFromDate] = useState<string>(() => {
    const date = new Date();
    date.setDate(date.getDate() - 1); // Subtract 1 day
    return date.toISOString().split("T")[0];
  });

  const apiKey = "b48b77b9a6bf4fc2a01b69605564ce15"; // Replace with your API key

  const { articles, loading, error, fetchNews } = useFetchNews(
    searchQuery,
    fromDate,
    apiKey
  );

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchNews();
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl lexend-giga text-[#FB0434] font-bold text-center mb-6">
        RED NEWS
      </h1>
      <SearchForm
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        fromDate={fromDate}
        setFromDate={setFromDate}
        onSearch={handleSearch}
      />
      {error && <p className="text-center mt-4 text-red-500">Error: {error}</p>}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : articles.map((article: Article, index: number) => (
              <NewsCard key={index} article={article} />
            ))}
      </div>
    </div>
  );
};

export default NewsFeed;
