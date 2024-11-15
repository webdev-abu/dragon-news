import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const AuthLayout = () => {
  return (
    <div className="font-poppins bg-[#F3F3F3]">
      <header className="py-8 w-11/12 mx-auto">
        <NavBar />
      </header>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
