import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState({});
  const handleRegistration = (e) => {
    e.preventDefault();
    // const name = e.target.name.value;
    // const email = e.target.email.value;
    // const password = e.target.password.value;
    const form = new FormData(e.target);
    const name = form.get("name");
    if (name.length < 3) {
      setError({ name: "Name must be at least 3 characters long." });
      return;
    }
    const photo = form.get("photo-URL");
    if (photo.length < 1 || photo.length === 0) {
      setError({ photo: "Please upload a photo." });
      return;
    }
    const email = form.get("email");
    if (email.length < 1 || email.length === 0) {
      setError({ email: "Please upload a email." });
      return;
    }
    const password = form.get("password");
    if (password.length < 8) {
      setError({ password: "Please enter a password." });
      return;
    }
    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/");
          })
          .catch((err) => {});
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <div className="min-h-[calc(100vh-100px)] flex justify-center items-center py-[15px]">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl rounded-none p-10">
        <h2 className="text-[35px] font-semibold text-[#403F3F] text-center py-[25px]">
          Register your account
        </h2>
        <form onSubmit={handleRegistration} className="card-body ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>
          {error.name && (
            <label className="label text-sm text-red-600 my-1">
              {error.name}
            </label>
          )}

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo-URL"
              placeholder="Enter your Photo URL"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
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
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
            <label className="label justify-start gap-3 mt-4">
              <input type="checkbox" name="checkbox" />
              Accept Term & Conditions
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p className="text-center text-[16px] text-[#706F6F]">
          Do Have A Account ?{" "}
          <Link to={"/auth/login"} className="text-[#FF8C47]">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
