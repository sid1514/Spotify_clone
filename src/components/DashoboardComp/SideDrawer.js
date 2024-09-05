import React from "react";
import { Icon } from "semantic-ui-react";

const SideDrawer = () => {
  return (
    <>
      <section className="absolute fixed left-0 ">
        <div className="fixed bg-black text-white md:py-3 py-6 md:px-1 pl-10 md:pl-0 md:w-3/12 w-1/2 mr-2 h-min ">
          <div className="bg-neutral-900/75 p-2 mx-2 rounded-2xl ">
            <div className=" flex p-6 align-center">
              <div>
                <img
                  src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/spotify-white-icon.png"
                  alt="spotify"
                  className="md:w-8 md:h-8 w-6 h-6"
                />
              </div>
              <div>
                <p className="px-1 pt-1 md:text-xl text-sm font-bold ">
                  Spotify
                </p>
              </div>
            </div>
            <div className="flex align-center m-2 ml-5">
              <div>
                <img
                  src="https://cdn-icons-png.freepik.com/256/13823/13823941.png"
                  alt="home"
                  className="md:px-1 md:h-6 w-6"
                />
              </div>
              <div>
                <p className="md:text-xl text-sm md:px-4 px-1 font-extrabold tracking-wide">
                  Home
                </p>
              </div>
            </div>
            <div className=" flex px-6 pt-5 align-center">
              <div>
                <img
                  src="https://www.freepnglogos.com/uploads/search-png/search-icon-transparent-images-vector-16.png"
                  alt="search"
                  className="px-1 h-6 w-6"
                />
              </div>
              <div>
                <p className="md:text-xl text-auto px-2 font-extrabold tracking-wide pb-3 text-stone-400 hover:text-white">
                  Search
                </p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900/75 p-2 mx-2 mt-3 rounded-2xl overflow-y-auto ">
            <div className="relative flex px-6 pt-5  ">
              <span>
                <img
                  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTWJDxuISVM6fyN3CFukt6Fs3sy4PDnOoxVhgYx06AtI1yiGFNy"
                  alt="library"
                  className="px-1 h-8 w-8"
                />
              </span>
              <span>
                <p className="md:text-xl text-sm px-4 pt-3 font-extrabold tracking-wide text-stone-400 hover:text-white">
                  Your Library
                </p>
              </span>
              <span className="absolute right-2 m-2">
                <button>
                  <img
                    src="https://www.pngall.com/wp-content/uploads/10/Plus-Symbol-PNG-Images-HD.png"
                    alt="add"
                    className="px-1 h-6 w-6"
                  />
                </button>
              </span>
            </div>

            <div className="my-1 pt-4 overflow-y-auto h-56" id="scroll_edit">
              <div className="bg-neutral-800 m-2 p-4 rounded-2xl">
                <p className="font-bold">Create your first playlist</p>
                <p className="">It's easy, we'll help you</p>
                <button className="bg-white text-black md:w-44 h-12 px-3 rounded-full font-bold tracking-wide transform hover:scale-110">
                  Create playlist
                </button>
              </div>
              <div className="bg-neutral-800 m-2 my-12 md:p-10 rounded-2xl p-3">
                <p>Let's find some podcasts to follow</p>
                <p className="md:text-xl">
                  We'll keep you updated on new episodes
                </p>
                <button className="bg-white text-black md:w-48 md:h-12 rounded-3xl md:px-3 font-bold tracking-wide transform hover:scale-110 text-sm md:text-auto">
                  Browse podcasts
                </button>
              </div>
            </div>
            <div>
              <p className="p-10 tracking-wide text-stone-400 hover:underline underline-offset-1">
                Cookies
              </p>
            </div>
            <button
              className="border border-neutral-500 hover:border-stone-50 rounded-3xl w-36 h-10 ml-4 mb-12 font-bold"
              color="black"
            >
              <Icon name="globe" size="large" /> English
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SideDrawer;
