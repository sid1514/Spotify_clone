import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectAlbum, setShowMore } from "../../ManagingState/action";

const DisplayAlbum = () => {
  const accessToken = useSelector((state) => state.token);

  const [Album, setAlbums] = useState([]);
  const dispatch = useDispatch();
  const showMore = useSelector((state) => state.showMore);
  const getAlbums = async () => {
    if (!accessToken) return;

    try {
      const response = await axios.get(
        "https://api.spotify.com/v1/browse/new-releases",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      //console.log(response.data.albums.items);
      setAlbums(response.data.albums.items);
    } catch (error) {
      console.error("Error getting artists:", error);
    }
  };

  const displayAlbum = showMore ? Album : Album.slice(0, 6);
  useEffect(() => {
    getAlbums();
  }, [accessToken]);

  const handleAlbumClick = (album) => {
    dispatch(setSelectAlbum(album));
  };
  return (
    <>
      <div className=" p-4 pl-10 flex mt-6">
        <p className=" md:text-2xl font-extrabold hover:underline underline-offset-3 text-white md:w-11/12 w-8/12">
          Popular albums
        </p>

        <button
          className=" top-30 md:pt-3"
          onClick={() => dispatch(setShowMore(true))}
        >
          <p className="md:text-xl text-stone-400 hover:underline underline-offset-1 font-bold">
            Show all
          </p>
        </button>
      </div>
      <div className="flex flex-wrap text-white ">
        {displayAlbum.map((a) => (
          <div
            className="rounded-xl space-x-6 px-5 py-4 mb-4 group relative hover:bg-neutral-800"
            onClick={() => handleAlbumClick(a)}
          >
            <div className=" relative">
              <img
                src={a.images[2].url}
                alt=""
                className="md:w-36 md:h-36 w-24 h-24 mb-2 rounded"
              />
            </div>
            <div className="md:w-36 w-24 h-16 text-sm flex align-center ">
              <div className="text-left overflow-x-hidden overflow-y-hidden">
                <label className="flex ">{a.name}</label>
                <p className="flex ">
                  {a.artists.map((artist) => (
                    <p>{artist.name}, </p>
                  ))}
                </p>
              </div>
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
    </>
  );
};

export default DisplayAlbum;
