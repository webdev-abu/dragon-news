import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="flex justify-between items-center">
      <div className="text-[20px] font-semibold text-[#403F3F]">
        {user && user?.displayName}
      </div>
      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/career">Career</Link>
      </div>
      <div className="flex justify-start items-center gap-2">
        {user && user.email ? (
          <div>
            <img src={user?.photoURL} alt="user" className="w-8 h-8" />
          </div>
        ) : (
          <img src={userIcon} alt="user-icon" />
        )}

        {user && user?.email ? (
          <Link
            to={"/auth/login"}
            onClick={logOut}
            className="btn btn-neutral text-[20px] font-semibold text-[#FFFFFF] py-2 px-10 rounded-none"
          >
            Logout
          </Link>
        ) : (
          <Link
            to={"/auth/login"}
            className="btn btn-neutral text-[20px] font-semibold text-[#FFFFFF] py-2 px-10 rounded-none"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
