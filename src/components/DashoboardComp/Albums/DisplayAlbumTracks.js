import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const DisplayAlbumTracks = () => {
  const selctedAlbum = useSelector((state) => state.SelectedAlbum);
const [Tracks, setTracks] = useState();
  const AccessToken = useSelector((state) => state.AccessToken);
  const fetchAlbumTracks = async () => {
    if (!AccessToken && !selctedAlbum) return;

    try {
      const response = await axios.get(
        `https://api.spotify.com/v1/albums/${selctedAlbum.id}/tracks`,
        {
          headers: {
            Authorization: `Bearer ${AccessToken}`,
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
    fetchAlbumTracks();
  });
  return <div></div>;
};

export default DisplayAlbumTracks;
