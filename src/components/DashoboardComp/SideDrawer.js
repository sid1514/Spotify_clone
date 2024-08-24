import React from "react";
import { Icon } from "semantic-ui-react";

const SideDrawer = () => {
  return (
    <>
      <section className="absolute fixed left-0 ">
        <div className="fixed bg-black text-white py-3 px-1 w-3/12 mr-2 h-min">
          <div className="bg-neutral-900/75 p-2 mx-2 rounded-2xl">
            <div className=" flex p-6 align-center">
              <div>
                <img
                  src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/spotify-white-icon.png"
                  alt="spotify"
                  className="w-8 h-8"
                />
              </div>
              <div>
                <p className="px-1 pt-1 text-xl font-bold">Spotify</p>
              </div>
            </div>
            <div className="flex align-center m-2 ml-5">
              <div>
                <img
                  src="https://cdn-icons-png.freepik.com/256/13823/13823941.png"
                  alt="home"
                  width={35}
                  height={20}
                  className="px-1 h-6"
                />
              </div>
              <div>
                <p className="text-xl px-4 font-extrabold tracking-wide">
                  Home
                </p>
              </div>
            </div>
            <div className=" flex px-6 pt-5 align-center">
              <div>
                <img
                  src="https://www.freepnglogos.com/uploads/search-png/search-icon-transparent-images-vector-16.png"
                  alt="search"
                  width={30}
                  height={30}
                  className="px-1 h-7"
                />
              </div>
              <div>
                <p className="text-xl px-2 font-extrabold tracking-wide pb-3 text-stone-400 hover:text-white">
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
                  width={44}
                  height={34}
                  className="px-1 h-12"
                />
              </span>
              <span>
                <p className="text-xl px-4 pt-3 font-extrabold tracking-wide text-stone-400 hover:text-white">
                  Your Library
                </p>
              </span>
              <span className="absolute right-2 m-2">
                <button>
                  <img
                    src="https://www.pngall.com/wp-content/uploads/10/Plus-Symbol-PNG-Images-HD.png"
                    alt="add"
                    width={26}
                    className="px-1 h-6"
                  />
                </button>
              </span>
            </div>

            <div className="my-1 pt-4 overflow-y-auto h-56" id="scroll_edit">
              <div className="bg-neutral-800 m-2 p-4 rounded-2xl">
                <p className="font-bold">Create your first playlist</p>
                <p className="">It's easy, we'll help you</p>
                <button className="bg-white text-black w-44 h-12 px-3 rounded-full font-bold tracking-wide transform hover:scale-110">
                  Create playlist
                </button>
              </div>
              <div className="bg-neutral-800 m-2 my-12 p-10 rounded-2xl">
                <p>Let's find some podcasts to follow</p>
                <p className="text-xl">
                  We'll keep you updated on new episodes
                </p>
                <button className="bg-white text-black w-48 h-12 rounded-3xl px-3 font-bold tracking-wide transform hover:scale-110">
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
