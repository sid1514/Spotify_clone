import Switch from "react-switch";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [checked, setChecked] = useState(true);
  const nav = useNavigate();
  const handleChange = (val) => {
    setChecked(val);
  };

  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

  const REDIRECT_URI = process.env.REACT_APP_REDIRECT;
  const RESPONSE_TYPE = "token";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const scope =
    "playlist-read-private playlist-read-collaborative user-read-private user-read-email user-top-read user-read-playback-state user-modify-playback-state";
  const handleGoogleLogin = () => {
    // Redirect user to Spotify login page
    window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${scope}`;
  };

  const loginIconsStyle = "md:ml-6 ml-2 h-8";
  const loginLabelStyle = "pl-3 md:pl-20 md:text-xl text-sm md:pt-0 pt-2";
  const buttonStyle =
    "md:w-7/12 w-10/12 flex align-center h-10 md:h-16 border rounded-full border-neutral-500 md:py-4";

const EmailPassStyle =
  "bg-stone-950 text-white md:mt-4 border border-neutral-500 md:h-12 h-10 md:w-8/12 w-9/12 p-5 md:text-xl rounded mb-8";
  return (
    <>
      <section className="p-10 flex justify-center w-full text-white bg-gradient-to-b from-neutral-800 to-neutral-950">
        <div className=" bg-stone-950 rounded-2xl md:w-[45%] w-[90%]">
          <div className=" pt-14 md:pb-14 justify-center flex ">
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/spotify-white-icon.png"
              alt="spotify"
              className="md:w-12 md:h-12 w-8 h-8"
            />
          </div>
          <div className="text-center">
            <p className="md:text-5xl text-xl font-extrabold pb-16 ">
              Log in to Spotify
            </p>
          </div>
          <div className="flex justify-center">
            <button className={buttonStyle} onClick={handleGoogleLogin}>
              <img
                src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
                alt="google"
                className={loginIconsStyle}
              />
              <p className={loginLabelStyle}>Sign up with google</p>
            </button>
          </div>
          <div className="flex justify-center mt-4">
            <button className={buttonStyle} onClick={handleGoogleLogin}>
              <img
                src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000"
                alt="facebook"
                className={loginIconsStyle}
              />
              <p className={loginLabelStyle}>Sign up with Facebook</p>
            </button>
          </div>
          <div className="flex justify-center mt-4">
            <button className={buttonStyle}>
              <img src="apple.png" alt="apple" className={loginIconsStyle} />
              <p className={loginLabelStyle}>Sign up with Apple</p>
            </button>
          </div>
          <div className="md:block hidden md:ml-6">
            <svg width="600" height="40">
              <line
                x1="10%"
                y1="33"
                x2="80%"
                y2="33"
                stroke="white"
                strokeWidth="0.2"
              />
            </svg>
          </div>
          <div className="flex justify-center md:mt-4 mt-6 w-full md:ml-24 ml-8">
            <div className=" md:w-[85%] ">
              <label className="md:text-xl text-sm font-bold ">Email or username</label>{" "}
              <br></br>
              <input
                placeholder="Email or username"
                className={EmailPassStyle}
              />
            </div>
          </div>
          <div className="flex justify-center md:mt-4 w-full md:ml-24 ml-8">
            <div className="md:w-[85%] ">
              <label className="md:text-xl text-sm font-bold ">Password</label> <br></br>
              <input
                placeholder="Password"
                className={EmailPassStyle}
              />
            </div>
          </div>
          <br></br>
          <div className="grid-flex flex md:pt-8 md:ml-36 ml-16 ">
            <Switch
              checked={checked}
              onChange={handleChange}
              color="green"
              height={20}
              width={40}
              checkedIcon={true}
              handleDiameter={12}
              onColor="#34c253"
              uncheckedIcon={false}
            />
            <label className="pl-3 md:text-xl text-sm font-bold tracking-wide">
              Remember me
            </label>
          </div>
          <div className="flex justify-center">
            <button className="md:mt-16 md:w-7/12 w-24 md:h-16 h-10 border md:p-5 rounded-3xl border-neutral-500 mt-3 mb-3 bg-green-500 text-black md:text-2xl text-sm font-bold">
              Log In
            </button>
          </div>
          <div className="text-center">
            <p className="p-5 tracking-wide underline text-sm md:text-auto">
              Forgot your password?
            </p>
            <div className="md:block hidden">
              <svg width="600" height="40">
                <line
                  x1="70"
                  y1="20"
                  x2="550"
                  y2="20"
                  stroke="white"
                  strokeWidth="0.2"
                />
              </svg>
            </div>
            <p className="text-stone-300/75 md:pt-7 md:text-xl justify-centre tracking-wide md:p-auto px-3">
              {" "}
              Don't have an account?{" "}
              <b
                className="text-white underline md:text-xl"
                onClick={() => nav("/SignUp")}
              >
                Sign up for spotify
              </b>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default LogIn;
