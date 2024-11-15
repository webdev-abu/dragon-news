import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { userLogin, setUser } = useContext(AuthContext);
  const [error, setError] = useState({});
  const location = useLocation();

  const navigate = useNavigate();

  const handleSign = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;

        setError({ ...error, login: err.code });
      });
  };
  return (
    <div className="min-h-[calc(100vh-100px)] flex justify-center items-center py-[15px]">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl rounded-none p-10">
        <h2 className="text-[35px] font-semibold text-[#403F3F] text-center py-[25px]">
          Login your account
        </h2>
        <form onSubmit={handleSign} className="card-body ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            {error.login && (
              <label className="label text-sm text-red-600 mt-4">
                {error.login}
              </label>
            )}
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center text-[16px] text-[#706F6F]">
          Dont’t Have An Account ?{" "}
          <Link to={"/auth/register"} className="text-[#FF8C47]">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
