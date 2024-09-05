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
const loginIconsStyle = "md:ml-6 ml-2 h-8";
const loginLabelStyle = "pl-3 md:pl-20 md:text-xl text-sm md:pt-0 pt-2";
const buttonStyle =
  "md:w-7/12 w-10/12 flex align-center h-10 md:h-16 border rounded-full border-neutral-500 md:py-4";

const EmailPassStyle =
  "bg-stone-950 text-white md:mt-4 border border-neutral-500 md:h-12 h-10 md:w-8/12 w-9/12 py-5 pl-1 md:text-xl rounded mb-8 md:text-auto text-sm";
  return (
    <>
      <section className="w-full bg-stone-950 text-white ">
        <div className="flex justify-center pt-10">
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/spotify-white-icon.png"
            alt="spotify"
            className="md:w-14 md:h-14 w-10 h-10"
          />
        </div>

        <div className="flex bg-stone-950 justify-center pt-8  ">
          <div className="md:w-[30%] w-[78%]">
            <div className="flex ">
              <p className="md:w-auto ml-2 md:ml-auto w-10/12 md:text-6xl text-xl font-extrabold pb-4 flex text-center">
                Sign up to start listening
              </p>
            </div>
            <div className="mt-2 md:ml-16 ml-10">
              <label className="md:text-xl font-bold ">Email address</label>{" "}
              <br></br>
              <input placeholder="name@domain.com" className={EmailPassStyle} />
            </div>
            <div className="md:ml-16 ml-10">
              <p className="md:pt-4 md:text-xl underline text-green-400 font-bold">
                Use phone number instead.
              </p>
            </div>
            <div className="ml-16 mt-6">
              <button className="md:mt-16 md:w-7/12 w-24 md:h-16 h-10 border md:p-5 rounded-3xl border-neutral-500 md:mt-3 mb-3 bg-green-500 text-black md:text-2xl text-sm font-bold">
                Next
              </button>
            </div>
            <div className="flex justify-center align-center pt-6 md:block hidden">
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
            <div className="md:ml-16 ml-10">
              <button className={buttonStyle} onClick={handleGoogleLogin}>
                <img
                  src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
                  alt="google"
                  className={loginIconsStyle}
                />
                <p className={loginLabelStyle}>Sign up with google</p>
              </button>
            </div>
            <div className="md:ml-16 ml-10 mt-3">
              <button className={buttonStyle}>
                <img
                  src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000"
                  alt="facebook"
                  className={loginIconsStyle}
                />
                <p className={loginLabelStyle}>Sign up with Facebook</p>
              </button>
            </div>
            <div className="md:ml-16 ml-10 mt-3">
              <button className={buttonStyle}>
                <img src="apple.png" alt="apple" className={loginIconsStyle} />
                <p className={loginLabelStyle}>Sign up with Apple</p>
              </button>
            </div>
            <div className="md:block hidden">
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
            <div className="pb-14 md:ml-20 ml-10">
              <p className="text-stone-300/75 pt-7 md:text-xl text-sm text-centre tracking-wide">
                Already have an account?{" "}
                <b className="text-white underline" onClick={handleNavtoLogin}>
                  Log in here.
                </b>
              </p>
              <p className="md:pl-8 pr-5 text-stone-300/75 pt-7 md:text-auto text-sm tracking-wide">
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
