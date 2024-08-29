import React from "react";

//import UserProfile from "./Profile";
import { useNavigate } from "react-router-dom";
import ArtistonHome from "./artists/ArtistonHome";
import Footer from "./Footer";

import { useDispatch, useSelector } from "react-redux";

import {
  setSelectAlbum,
  setSelectArtist,
  setShowMore,
} from "../ManagingState/action";
import DisplayAlbum from "./Albums/DisplayAlbum";
import DisplayTracks from "./artists/DisplayTracks";
import DisplayAlbumTracks from "./Albums/DisplayAlbumTracks";

const DefaultPlayList = () => {
  const nav = useNavigate();

  const SelectedArtist = useSelector((state) => state.Selectedartist);
  const Selectedalbum = useSelector((state) => state.SelectedAlbum);
  const handleNavtoSignup = () => {
    nav("/SignUp");
  };

  const handleNavtoLogin = () => {
    nav("/Log_In");
  };

  const dispatch = useDispatch();
  const handleNavBack = () => {
    dispatch(setSelectArtist(null));
    dispatch(setSelectAlbum(null));
    dispatch(setShowMore(false));
  };
  return (
    <>
      <div className="w-full mx-3 " id="maindiv">
        <div className="relative w-[80%] z-10" id="navbar_signDiv">
          <div
            className={`w-full flex ${
              SelectedArtist ? "bg-transparent" : "bg-neutral-950"
            } h-20 fixed top-0 items-center justify-between"
            id="child_navbar_signDiv`}
          >
            <div className=" p-6 mb-6 align-center flex " id="arrowsDiv">
              <div
                className={`border-1 rounded-3xl bg-black w-12 h-12 p-2 text-white`}
                onClick={handleNavBack}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-9 h-9"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </div>
              <div className="border-1 rounded-3xl bg-black w-12 h-12 p-2 ml-2 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-9 h-9 ml-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>

            <div
              className="absolute right-[25%] flex h-min mr-10 "
              id="signInDiv"
            >
              <button
                onClick={handleNavtoSignup}
                className="text-neutral-400 hover:text-white text-xl mr-10 w-24"
              >
                Sign up
              </button>
              <button
                className="bg-white text-black h-10 rounded-full font-extrabold px-4 w-24 shadow-lg"
                onClick={handleNavtoLogin}
              >
                Log in
              </button>
            </div>
          </div>
        </div>

        <div className="bg-zinc-800/50 overflow-y-auto h-[90vh] w-[99%] ">
          <div className="bg-neutral-900 ">
            <div>
              {SelectedArtist ? (
                <DisplayTracks />
              ) : Selectedalbum ? null : (
                <ArtistonHome />
              )}
            </div>
            <div>
              {Selectedalbum ? <DisplayAlbumTracks /> : SelectedArtist?null: <DisplayAlbum />}
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default DefaultPlayList;
