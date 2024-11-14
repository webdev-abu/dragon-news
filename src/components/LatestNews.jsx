import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex gap-2 items-center bg-[#F3F3F3] p-4">
      <p className="bg-[#D72050] text-[#ffffff] px-6 py-2">Latest</p>
      <Marquee pauseOnHover={true} className="space-x-10" speed={100}>
        <Link to={"/news"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Link>
        <Link to={"/news"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Link>
        <Link to={"/news"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Link>
        <Link to={"/news"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
