import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setSelectArtist, setShowMore } from "../../ManagingState/action";

const ArtistonHome = () => {
  const accessToken = useSelector((state) => state.token);
  const dispatch = useDispatch();

  const [Artists, setArtists] = useState([]);

  const showMore = useSelector((state) => state.showMore);
  const displayedArtists = showMore ? Artists : Artists.slice(0, 6);
  const getArtists = async () => {
    if (!accessToken) return;

    try {
      const response = await axios.get(
        "https://api.spotify.com/v1/search?type=artist&q=The%20Beatles",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      //console.log(response.data);
      setArtists(response.data.artists.items);
    } catch (error) {
      console.error("Error getting artists:", error);
    }
  };

  useEffect(() => {
    getArtists();
  }, [accessToken]);

  const handleArtistClick = (artist) => {
    dispatch(setSelectArtist(artist));

    //nav("/tracks");
  };
  return (
    <>
      <div>
        <div className=" p-4 pl-10 flex mt-16">
          <p className=" text-2xl font-extrabold hover:underline underline-offset-3 text-white w-11/12">
            Popular artists
          </p>

          <button
            className=" top-30 pt-3"
            onClick={() => dispatch(setShowMore(true))}
          >
            <p className="text-xl text-stone-400 hover:underline underline-offset-1 font-bold">
              Show all
            </p>
          </button>
        </div>
        <div className="flex flex-wrap text-white ">
          {displayedArtists.map((a) => (
            <div
              className="rounded-xl space-x-6 px-5 py-4 mb-4 group relative hover:bg-neutral-800"
              onClick={() => handleArtistClick(a)}
            >
              <div className="rounded-full relative">
                <img
                  src={a.images[0].url}
                  alt={a.name}
                  className="w-36 h-36 rounded-full mb-2"
                />
              </div>
              <div className="w-36">
                <label className="flex ">{a.name}</label>
                <p>Artist</p>
              </div>
              <div className=" ">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/8212/8212668.png"
                  className="hidden w-20 h-20 absolute right-10 bottom-0 transition-transform duration-400 ease-in-out group-hover:translate-y-[-100%] group-hover:block"
                  alt="play"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ArtistonHome;
