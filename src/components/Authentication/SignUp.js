import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Icon } from "semantic-ui-react";

const Signup = () => {
  const CLIENT_ID = "026e1209e275417584cec6e6c784b65d";

  const REDIRECT_URI = "http://localhost:3000/";
  const RESPONSE_TYPE = "token";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const nav = useNavigate();
  const handleNavtoLogin = () => {
    nav("/Log_In");
  };
  const handleGoogleLogin = () => {
    // Redirect user to Spotify login page
    window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;
  };

  return (
    <>
      <section className="w-full bg-stone-950 text-white ">
        <div className="flex justify-center pt-10">
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/spotify-white-icon.png"
            alt="spotify"
            className="w-14 h-14"
          />
        </div>

        <div className="flex bg-stone-950 justify-center pt-8  ">
          <div className="w-[30%]">
            <div className="flex ">
              <p className="text-6xl font-extrabold pb-4 flex text-center">
                Sign up to start listening
              </p>
            </div>
            <div className="mt-2 ml-16 ">
              <label className="text-xl font-bold ">Email address</label>{" "}
              <br></br>
              <input
                placeholder="name@domain.com"
                className=" bg-stone-950 text-white mt-4 border border-neutral-500 h-16 p-5 text-2xl rounded w-[88%]"
              />
            </div>
            <div className="ml-16">
              <p className="pt-4 text-xl underline text-green-400 font-bold">
                Use phone number instead.
              </p>
            </div>
            <div className="ml-16 mt-6">
              <button className="text-xl font-bold w-11/12 h-16 rounded-full bg-green-500 text-black">
                Next
              </button>
            </div>
            <div className="flex justify-center align-center pt-6 ">
              <svg width="600" height="80">
                <line
                  x1="58"
                  y1="30"
                  x2="220"
                  y2="30"
                  stroke="white"
                  strokeWidth="0.5"
                />
                <text
                  x="235"
                  y="30"
                  fontSize="15"
                  dominantBaseline="middle"
                  stroke="white"
                >
                  or
                </text>
                <line
                  x1="270"
                  y1="30"
                  x2="425"
                  y2="30"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </svg>
            </div>
            <div className="ml-16 ">
              <button
                className="w-11/12 align-center flex h-16 border rounded-full border-neutral-500 py-4"
                onClick={handleGoogleLogin}
              >
                <img
                  src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
                  alt="google"
                  width={30}
                  height={30}
                  className="ml-6"
                />
                <p className="pl-20 text-xl">Sign up with google</p>
              </button>
            </div>
            <div className="ml-16 mt-3">
              <button
                className="w-11/12 align-center flex h-16 border rounded-full border-neutral-500 py-4"
                
              >
                <img
                  src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000"
                  alt="facebook"
                  width={30}
                  height={30}
                  className="ml-6"
                />
                <p className="pl-20 text-xl">Sign up with Facebook</p>
              </button>
            </div>
            <div className="ml-16 mt-3">
              <button
                className="w-11/12 align-center flex h-16 border rounded-full border-neutral-500 py-4"
                
              >
                <img
                  src="apple.png"
                  alt="apple"
                  width={30}
                  height={30}
                  className="ml-6"
                />
                <p className="pl-20 text-xl">Sign up with Apple</p>
              </button>
            </div>
            <div>
              <svg width="600" height="40">
                <line
                  x1="60"
                  y1="33"
                  x2="425"
                  y2="33"
                  stroke="white"
                  strokeWidth="0.2"
                />
              </svg>
            </div>
            <div className="pb-14 ml-20">
              <p className="text-stone-300/75 pt-7 text-xl text-centre tracking-wide">
                Already have an account?{" "}
                <b className="text-white underline" onClick={handleNavtoLogin}>
                  Log in here.
                </b>
              </p>
              <p className="pl-8 pr-5 text-stone-300/75 pt-7 tracking-wide">
                This site is protected by reCAPTCHA and the Google
                <center className="pt-2 pb-10">
                  <u>Privacy Policy</u> and <u>Terms of Service </u> apply.
                </center>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
