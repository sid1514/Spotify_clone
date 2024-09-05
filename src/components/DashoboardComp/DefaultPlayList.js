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
      <div className="w-full h-screen " id="maindiv">
        <div className=" relative md:w-[82%] w-full z-10" id="navbar_signDiv">
          <div
            className={`w-full flex ${
              SelectedArtist ? "bg-transparent" : "bg-neutral-950"
            } h-20 fixed top-0 pt-10 md:pt-0 items-center justify-between "
            `}
          >
            <div className="p-6 md:mb-6 align-center flex pl-10" id="arrowsDiv">
              <div
                className={`border-1 rounded-3xl bg-black md:w-12 md:h-12 h-8 w-8 p-2 text-white`}
                onClick={handleNavBack}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.3"
                  stroke="currentColor"
                  className="md:w-9 md:h-9 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </div>
              <div className="border-1 rounded-3xl bg-black md:w-12 md:h-12 h-8 w-8 p-2 ml-2 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.3"
                  stroke="currentColor"
                  className="md:w-9 md:h-9 w-6 h-6 md:ml-1"
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
              className="md:absolute md:right-[25%] flex h-min mr-10 "
              id="signInDiv"
            >
              <button
                onClick={handleNavtoSignup}
                className="w-16 text-neutral-400 hover:text-white md:text-xl mr-10 md:w-24 text-auto"
              >
                Sign up
              </button>
              <button
                className="md:w-16 bg-white text-black md:h-10 h-8 rounded-full md:font-extrabold px-4 md:w-28 shadow-lg font-bold text-sm"
                onClick={handleNavtoLogin}
              >
                Log in
              </button>
            </div>
          </div>
        </div>

        <div className=" bg-zinc-800/50 overflow-y-auto md:h-[90vh] md:w-[99%] ">
          <div className="bg-neutral-900 pl-8">
            <div>
              {SelectedArtist ? (
                <DisplayTracks />
              ) : Selectedalbum ? null : (
                <ArtistonHome />
              )}
            </div>
            <div>
              {Selectedalbum ? (
                <DisplayAlbumTracks />
              ) : SelectedArtist ? null : (
                <DisplayAlbum />
              )}
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default DefaultPlayList;
