import React from "react";
import { useNavigate } from "react-router-dom";

const FooterSignup = () => {
  const nav = useNavigate();
  const handleNavtoSignup = () => {
    nav("/SignUp");
  };

  return (
    <>
      <div className="flex align-center pt-2 w-full bg-black grid flex font-bold text-white bg-stone-800 m-3 mr-4 pb-3 pl-3 tracking-wide bg-gradient-to-r from-pink-500 to-blue-400 h-14 h-20 md:text-auto text-sm">
        <div>
          <p>
            Preview of Spotify <br></br>
            Sign up to get unlimited songs and podcasts with occasional ads. No
            credit card needed
          </p>
          <p></p>
        </div>
        <div className="md:absolute md:right-2 mt-1">
          <button
            className=" bg-white text-black ml-16 md:w-46 md:py-3 pl-8 pr-8 rounded-full mr-16 h-10 "
            onClick={handleNavtoSignup}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </>
  );
};

export default FooterSignup;
