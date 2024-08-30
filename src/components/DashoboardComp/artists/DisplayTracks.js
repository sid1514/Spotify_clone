import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "semantic-ui-react";

import AskSignIn from "../../Authentication/AsktoSignModal";
import { setTrack } from "../../ManagingState/action";

const DisplayTracks = () => {
  const accessToken = useSelector((state) => state.token);

  const dispatch = useDispatch();

  const [Tracks, setTracks] = useState();

  const AccessToken = useSelector((state) => state.AccessToken);
  const SelectedArtist = useSelector((state) => state.Selectedartist);

  //console.log(SelectedArtist);
  const handleArtistClick = async () => {
    if (!accessToken && !SelectedArtist.id) return;

    try {
      const response = await axios.get(
        `https://api.spotify.com/v1/artists/${SelectedArtist.id}/top-tracks?market=US`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      // console.log(response.data.tracks);
      setTracks(response.data.tracks);
      console.log(Tracks);
    } catch (error) {
      console.error("Error getting tracks:", error);
    }
  };

  useEffect(() => {
    handleArtistClick();
  }, [SelectedArtist, accessToken]);

  const divStyle = {
    width: "100%",
    height: "27vh",
    backgroundImage: `url(${SelectedArtist.images[0].url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const [askTosignIn, setAsktoSignIn] = useState(false);
  const handleTrackClick = (track) => {
    if (AccessToken) {
      dispatch(setTrack(track));
    } else {
      setAsktoSignIn(true);
    }
  };
  return (
    <div className="text-white h-full">
      <div style={divStyle} className="w-full flex align-center pt-10">
        <div className="">
          <p className="m-10 text-2xl pt-16">{SelectedArtist.name}</p>
          <p></p>
        </div>
      </div>
      <div className="flex align-center h-24 space-x-6 m-4">
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/8212/8212668.png"
            className=" w-20 h-20 "
            alt="play"
          />
        </div>
        <div className="pt-6">
          <button className="bg-transparent border rounded-2xl w-20 h-8 p-1 px-2 font-semibold">
            follow
          </button>
        </div>
        <div className="pt-8">
          <Icon name="ellipsis horizontal" size="large" />
        </div>
      </div>
      <p className=" pl-4 text-2xl">Popular</p>
      <div className="pb-10 h-full overflow-y-auto">
        {Tracks && SelectedArtist ? (
          Tracks.map((t, index) => (
            <div className=" relative " onClick={() => handleTrackClick(t)}>
              <div className="flex mb-1 pb-1 ml-4" key={t.id}>
                <div className="w-24 py-4 text-center">
                  <div className="hover:hidden"> {index + 1}</div>
                </div>

                <div className="w-1/3 mr-4 flex align-center ">
                  <div>
                    <img
                      src={t.album.images[2].url}
                      alt=""
                      className="mr-4 h-12 w-12 rounded"
                    />
                    <AskSignIn
                      open={askTosignIn}
                      setOpen={setAsktoSignIn}
                      playListImg={t.album.images[2].url}
                      PlayListsName={t.name}
                    />
                  </div>
                  <div className="w-80 h-10 pt-3">{t.name}</div>
                </div>
                <div className="w-24 ml-[10%]">{t.popularity}</div>
                <div className="w-24 absolute right-10">
                  {(t.duration_ms / 1000 / 60).toFixed(2)}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>loading</p>
        )}
      </div>
    </div>
  );
};

export default DisplayTracks;
