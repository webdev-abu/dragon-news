import React from "react";
import { Link } from "react-router-dom";
import usericon from "../assets/user.png";
const NavBar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/career">Career</Link>
      </div>
      <div className="flex justify-start items-center gap-2">
        <img src={usericon} alt="user-icon" />
        <Link
          to={"/auth/login"}
          className="btn btn-neutral text-[20px] font-semibold text-[#FFFFFF] py-2 px-10 rounded-none"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
