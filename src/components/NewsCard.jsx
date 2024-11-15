import React from "react";
import { FaStar, FaEye, FaBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = (props = {}) => {
  const { news } = props || {};
  const {
    title,
    author,
    published_date,
    img,
    thumbnail_url,
    details,
    rating,
    total_view,
  } = news;
  return (
    <div className="card w-full bg-base-100 shadow-md rounded-lg">
      {/* Author and Date with Bookmark and Share Icons */}
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <img
            src={author.img}
            alt="Author"
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-3">
            <p className="font-semibold">{author.name}</p>
            <p className="text-sm text-gray-500">{author.published_date}</p>
          </div>
        </div>
        <div className="flex space-x-2 text-gray-600">
          <FaBookmark
            className="hover:text-blue-500 cursor-pointer"
            title="Bookmark"
          />
          <FaShareAlt
            className="hover:text-blue-500 cursor-pointer"
            title="Share"
          />
        </div>
      </div>

      {/* Title */}
      <div className="px-4">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      </div>

      {/* Image */}
      <div className="p-4">
        <img
          src={thumbnail_url}
          alt="News Thumbnail"
          className="rounded-lg w-full h-48 object-cover"
        />
      </div>

      {/* Details */}
      <div className="px-4 text-gray-600">
        <p>{details.slice(0, 150)}...</p>
        <Link
          to={`/news/${news._id}`}
          href="#"
          className="text-blue-500 hover:underline"
        >
          Read More
        </Link>
      </div>

      {/* Footer with Rating and Views */}
      <div className="flex justify-between items-center px-4 py-3 border-t border-gray-200">
        {/* Rating */}
        <div className="flex items-center ">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`text-yellow-500 ${
                i < Math.floor(rating.number) ? "" : "opacity-50"
              }`}
            />
          ))}

          <span className="ml-2 text-gray-800">{rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center text-gray-600">
          <FaEye className="mr-1" />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
