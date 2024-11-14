import React from "react";
import logo from "../assets/logo.png";
import moment from "moment";
const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 my-6">
      <div className="logo">
        <img className="w-[300px]" src={logo} alt="" />{" "}
      </div>
      <h2 className="text-[#706F6F] text-[18px]">
        Journalism Without Fear or Favour
      </h2>
      <p>{moment().format("MMMM Do YYYY")}</p>
    </div>
  );
};

export default Header;
