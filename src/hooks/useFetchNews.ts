import { useState, useEffect } from "react";

export interface Article {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string;
}

const useFetchNews = (searchQuery: string, fromDate: string) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchNews = async () => {
    setLoading(true);
    setError(null);

    const apiKey = import.meta.env.VITE_API_KEY;
    const apiUrl = import.meta.env.VITE_API_URL;
    console.log(import.meta.env.VITE_API_KEY); // Will log: b48b77b9a6bf4fc2a01b69605564ce15
    console.log(import.meta.env.VITE_API_URL); // Will log: https://newsapi.org/v2/everything?q=

    const url = `${apiUrl}?q=${searchQuery}&from=${fromDate}&sortBy=publishedAt&apiKey=${apiKey}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      setArticles(data.articles || []);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [searchQuery, fromDate]); // Re-fetch when searchQuery or fromDate changes

  return { articles, loading, error, fetchNews };
};

export default useFetchNews;
