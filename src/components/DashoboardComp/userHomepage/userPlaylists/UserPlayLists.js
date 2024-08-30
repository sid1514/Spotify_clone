import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PlayListcard from "./PlayListcard";
import { setSelectArtist } from "../../../ManagingState/action";

const UserPlayLists = ({ showMoreArtists, userName, setShowMoreArtists }) => {
  const access_token = useSelector((state) => state.AccessToken);
  const [userPlayList, setUserPlayList] = useState([]);
 
const dispatch=useDispatch()
  const fetchUserPlaylists = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };
    try {
      const { data } = await axios.get(
        "https://api.spotify.com/v1/me/top/artists",
        config
      );
      // console.log(data.items);
      setUserPlayList(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  const displayedUserArtists = showMoreArtists
    ? userPlayList
    : userPlayList.slice(0, 6);
  useEffect(() => {
    fetchUserPlaylists();
  }, [access_token]);

  const handleArtistClick = (artist) => {
    dispatch(setSelectArtist(artist));

    //nav("/tracks");
  };
  return (
    <>
      <div>
        <div className="flex mt-12">
          <p className="text-3xl font-bold flex-1">Made For {userName}</p>
          <p
            className="text-neutral-400 font-semibold"
            onClick={() => setShowMoreArtists(true)}
          >
            Show more
          </p>
        </div>
        <div className="flex flex-wrap ">
          {displayedUserArtists.map((p) => (
            <PlayListcard
              PlayListID={p.id}
              PlayListImg={p.images[2].url}
              PlayListArtist={p.name}
              FullPlaylist={p}
              handleArtistClick={handleArtistClick}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default UserPlayLists;
