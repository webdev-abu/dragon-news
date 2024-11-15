import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavBar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);

  return (
    <div>
      <h3 className="text-[20px] font-semibold text-[#403F3F] mb-5">
        All Category ({categories.length})
      </h3>
      <div className="flex flex-col gap-6">
        {categories.map((category, index) => (
          <NavLink
            to={`/category/${category.category_id}`}
            key={category.category_id}
            className="btn bg-base-100 border-none shadow-md py-4 text-[20px] font-semibold text-[#9F9F9F]"
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNavBar;
