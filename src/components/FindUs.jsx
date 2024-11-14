import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook, FaFacebookF } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div className="my-6">
      <h3 className="text-[20px] font-semibold text-[#403F3F] mb-5">
        Find Us On
      </h3>
      <div className="flex join join-vertical *:bg-base-100">
        <button className="btn join-item shadow-md justify-start text-[16px] font-medium text-[#706F6F]">
          <span className="p-2 bg-[#F3F3F3] rounded-full">
            <FaFacebookF className="text-[#3B599C] text-[18px]" />
          </span>
          Facebook
        </button>
        <button className="btn join-item shadow-md justify-start text-[16px] font-medium text-[#706F6F]">
          <span className="p-2 bg-[#F3F3F3] rounded-full">
            <BsTwitter className="text-[#58A7DE] text-[18px]" />
          </span>
          Twitter
        </button>
        <button className="btn join-item shadow-md justify-start text-[16px] font-medium text-[#706F6F]">
          <span className="p-2 bg-[#F3F3F3] rounded-full">
            <BsInstagram className="text-[#D82D7E] text-[18px] " />
          </span>
          Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
