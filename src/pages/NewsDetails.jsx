import React from "react";
import Header from "../components/Header";
import RightNavBar from "../components/layout-components/RightNavBar";
import { Link, useLoaderData } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const NewsDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];
  return (
    <div className="mb-8 font-poppins">
      <header>
        <Header />
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-6">
        <section className="col-span-9">
          <h3 className="text-[20px] font-semibold text-[#403F3F] mb-5">
            Dragon News
          </h3>
          <div className="card bg-base-100 shadow-md">
            <figure className="px-6 pt-8">
              <img src={news?.image_url} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-start px-6">
              <h2 className=" text-[25px] font-bold text-[#403F3F] my-5">
                {news?.title}
              </h2>
              <p className="text-[16px] font-normal text-[#706F6F] mb-8">
                {news?.details}
              </p>
              <div className="card-actions">
                <Link
                  to={`/category/${news?.category_id}`}
                  className="bg-[#D72050] text-[20px] font-medium text-[#FFFFFF] py-2 px-6 flex items-center"
                >
                  <IoArrowBack className="mr-2" />
                  All news in this category
                </Link>
              </div>
            </div>
          </div>
        </section>
        <aside className="col-span-3">
          <RightNavBar />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
