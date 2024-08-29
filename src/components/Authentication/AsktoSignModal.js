//import { useState } from "react";
import { Modal } from "semantic-ui-react";

const AskSignIn = ({ open, setOpen, playListImg, PlayListsName }) => {
  return (
    <>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        size="smaller"
        className="rounded-2xl "
      >
        <div className="flex grid-flex bg-gradient-to-b from-red-600 to-neutral-900 pt-28 w-auto ">
          <div className="h-1/3 w-2/3  pl-20 mr-10">
            <img
              src={playListImg}
              alt="playlist"
              className="absolute w-1/3 h-1/2"
            />

            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/spotify-white-icon.png"
              className="relative top-6 left-4 h-12 w-12 p-2"
              alt=""
            />
            <p className="relative text-white font-bold bg-opacity-50 left-1 top-32 p-2 m-4 text-2xl">
              {PlayListsName}
            </p>
          </div>
          <div className="pr-20 w-auto pb-14 ">
            <p className="text-white text-4xl font-extrabold w-10/12 pl-12">
              {" "}
              Start listening with a free Spotify account
            </p>
            <button className="bg-green-500 text-black  w-80 p-6 rounded-full px-10 mt-10 ml-20 hover:scale-105 font-extrabold">
              <h2>Sign up for free</h2>
            </button>
            <button className="border border-white border-opacity-25 text-white  w-80 p-6 mt-6 rounded-full px-10 ml-20 hover:scale-105 hover:border-white ">
              <h2>Download app</h2>
            </button>

            <p className="text-stone-300/75 pt-14 text-2xl pb-10 pl-14 tracking-wide ">
              Already have an account?{" "}
              <b className="text-white hover:underline"> Log in </b>
            </p>
          </div>
        </div>

        <button onClick={() => setOpen(false)} className="bg-black w-full ">
          <p className=" opacity-100 text-zinc-500 font-bold text-2xl hover:text-white">
            Close
          </p>
        </button>
      </Modal>
    </>
  );
};

export default AskSignIn;
