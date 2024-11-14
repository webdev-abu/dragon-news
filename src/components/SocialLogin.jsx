import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h3 className="text-[20px] font-semibold text-[#403F3F] mb-5">
        Login With
      </h3>
      <div className="*:w-full flex justify-center items-center flex-col gap-5">
        <button className="bg-[#3B5998] text-white py-3 px-4 flex justify-center items-center gap-2">
          <FaGoogle /> Login With Google
        </button>
        <button className="bg-[#3B5998] text-white py-3 px-4 flex justify-center items-center gap-2">
          <FaGithub /> Login With GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
