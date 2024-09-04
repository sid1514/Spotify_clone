import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AskSignIn from "../../Authentication/AsktoSignModal";
import { Icon } from "semantic-ui-react";
import { setTrack } from "../../ManagingState/action";

const DisplayAlbumTracks = () => {
  const selctedAlbum = useSelector((state) => state.SelectedAlbum);
  const dispatch = useDispatch();
  const [Tracks, setTracks] = useState([]);
  const Token = useSelector((state) => state.token);
  const fetchAlbumTracks = async () => {
    if (!Token && !selctedAlbum) return;

    try {
      const { data } = await axios.get(
        `https://api.spotify.com/v1/albums/${selctedAlbum.id}/tracks`,
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );
      // console.log(response.data.tracks);
      setTracks(data.items);
      console.log(data);
    } catch (error) {
      console.error("Error getting tracks:", error);
    }
  };

  useEffect(() => {
    fetchAlbumTracks();
  },[selctedAlbum,Token]);
  const divStyle = {
    width: "100%",
    height: "27vh",
    backgroundImage: `url(${selctedAlbum.images[0].url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const [askTosignIn, setAsktoSignIn] = useState(false);
  const handleTrackClick = (track) => {
    if (Token) {
      dispatch(setTrack(track));
    } else {
      setAsktoSignIn(true);
    }
  };
  return (
    <div>
      <div className="text-white h-full">
        <div style={divStyle} className="w-full flex align-center pt-10">
          <div className="">
            <p className="m-10 text-2xl pt-16">{selctedAlbum.name}</p>
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
        <div className="pb-10 ">
          {Tracks && selctedAlbum ? (
            Tracks.map((t, index) => (
              <div className=" relative " onClick={() => handleTrackClick(t)}>
                <div className="flex mb-1 pb-1 ml-4" key={t.id}>
                  <div className="md:w-24 w-10 py-4 text-center">
                    <div className="hover:hidden"> {index + 1}</div>
                  </div>

                  <div className="w-1/3 mr-4 flex align-center ">
                    <div>
                      <img
                        src="https://w7.pngwing.com/pngs/250/419/png-transparent-musical-note-song-rectangle-logo-number-thumbnail.png"
                        alt="noimage"
                        className="md:mr-4 h-12 md:w-12 w-20 rounded"
                      />
                      <AskSignIn
                        open={askTosignIn}
                        setOpen={setAsktoSignIn}
                        playListImg="https://w7.pngwing.com/pngs/250/419/png-transparent-musical-note-song-rectangle-logo-number-thumbnail.png"
                        PlayListsName={t.name}
                      />
                    </div>
                    <div className="md:w-80 h-10 pt-3 ml-2 text-sm md:text-auto w-80">{t.name}</div>
                  </div>
                  {/* <div className="w-24 ml-[10%]">{t.popularity}</div> */}
                  <div className="md:w-24 absolute right-10">
                    {(t.duration_ms / 1000 / 60).toFixed(2)}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="pl-10">loading</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayAlbumTracks;
