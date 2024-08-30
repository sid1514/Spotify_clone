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

  return (
    <>
      <section className="p-10 flex justify-center w-full text-white bg-gradient-to-b from-neutral-800 to-neutral-950">
        <div className=" bg-stone-950 rounded-2xl w-[45%]">
          <div className=" pt-14 pb-14 justify-center flex ">
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/spotify-white-icon.png"
              alt="spotify"
              className="w-12 h-12"
            />
          </div>
          <div className="text-center">
            <p className="text-5xl font-extrabold pb-16 ">Log in to Spotify</p>
          </div>
          <div className="flex justify-center">
            <button
              className="w-7/12 align-center flex h-16 border rounded-full border-neutral-500 py-4"
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
          <div className="flex justify-center mt-4">
            <button
              className="w-7/12 align-center flex h-16 border rounded-full border-neutral-500 py-4"
              onClick={handleGoogleLogin}
            >
              <img
                src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000"
                alt="facebook"
                width={30}
                height={30}
                className="ml-6"
              />
              <p className="pl-20 text-xl ">Sign up with Facebook</p>
            </button>
          </div>
          <div className="flex justify-center mt-4">
            <button className="w-7/12 align-center flex h-16 border rounded-full border-neutral-500 py-4">
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
                x1="90"
                y1="33"
                x2="560"
                y2="33"
                stroke="white"
                strokeWidth="0.2"
              />
            </svg>
          </div>
          <div className="flex justify-center mt-4 w-full ml-24">
            <div className="w-[85%] ">
              <label className="text-xl font-bold ">Email or username</label>{" "}
              <br></br>
              <input
                placeholder="Email or username"
                className="bg-stone-950 text-white mt-4 border border-neutral-500 h-12 w-8/12 p-5 text-xl rounded mb-8"
              />
            </div>
          </div>
          <div className="flex justify-center mt-4 w-full ml-24">
            <div className="w-[85%] ">
              <label className="text-xl font-bold ">Password</label> <br></br>
              <input
                placeholder="Password"
                className="bg-stone-950 text-white mt-4 border border-neutral-500 w-8/12 h-12 p-5 text-xl rounded"
              />
            </div>
          </div>
          <br></br>
          <div className="grid-flex flex pt-8 ml-36">
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
            <label className="pl-3 text-xl font-bold tracking-wide">
              Remember me
            </label>
          </div>
          <div className="flex justify-center">
            <button className="mt-16 w-7/12 h-16 border p-5 rounded-full border-neutral-500 mt-3 mb-3 bg-green-500 text-black text-2xl font-bold">
              Log In
            </button>
          </div>
          <div className="text-center">
            <p className="p-5 tracking-wide underline ">
              Forgot your password?
            </p>
            <div>
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
            <p className="text-stone-300/75 pt-7 text-xl justify-centre tracking-wide">
              {" "}
              Don't have an account?{" "}
              <b
                className="text-white underline text-xl"
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
