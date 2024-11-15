import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const { data: news } = useLoaderData();

  return (
    <div>
      <h3 className="text-[20px] font-semibold text-[#403F3F] mb-3">
        Dragon News Home
      </h3>
      <p className="text-[16px] font-semibold text-[#646363] mb-5">
        {news.length} News Found On This Category !
      </p>
      <div className="flex justify-between items-center flex-col gap-8">
        {news.map((singleNews) => (
          <NewsCard key={singleNews._id} news={singleNews} />
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
