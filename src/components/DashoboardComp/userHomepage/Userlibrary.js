import React from "react";
import { Icon } from "semantic-ui-react";

const Userlibrary = () => {
  return (
    <div className="bg-neutral-900/75 p-2 mx-2 rounded-2xl h-[90%]">
      <div className="relative flex px-6 pt-2">
        <span>
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTWJDxuISVM6fyN3CFukt6Fs3sy4PDnOoxVhgYx06AtI1yiGFNy"
            alt="library"
            className="px-1 h-12 w-12"
          />
        </span>
        <span>
          <p className=" px-4 pt-3 font-extrabold tracking-wider text-stone-400 hover:text-white">
            Your Library
          </p>
        </span>
        <span className="absolute right-10 m-2 flex align-center space-x-2">
          <button>
            <img
              src="https://www.pngall.com/wp-content/uploads/10/Plus-Symbol-PNG-Images-HD.png"
              alt="add"
              width={26}
              className="px-1 h-4 w-6"
            />
          </button>
          <button>
            <Icon name="arrow right" size="large" color="grey" />
          </button>
        </span>
      </div>
      <div className="m-2 mt-6">
        <p className="p-2 px-3 rounded-full bg-neutral-800 w-min">Playlists</p>
        <div className="flex">
          <div className="flex-1">
            <img
              src="https://www.freepnglogos.com/uploads/search-png/search-icon-transparent-images-vector-16.png"
              alt="search"
              className="p-1 h-8 w-8 mr-2"
            />
          </div>
          <div className="text-neutral-400">
            <p>
              Recents <Icon name="list" />
            </p>
          </div>
        </div>
        <div className="flex mt-6 space-x-1 align-center">
          <div className="bg-gradient-to-b from-blue-600 to-neutral-200 p-4 rounded">
            <Icon name="heart" />
          </div>
          <div className="p-4 font-semibold tracking-wide">
            Liked Songs
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userlibrary;
