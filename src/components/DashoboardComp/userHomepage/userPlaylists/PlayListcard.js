import React from "react";

const PlayListcard = ({
  PlayListID,
  PlayListImg,
  PlayListName,
  PlayListArtist,
  FullPlaylist,
  handleArtistClick,
}) => {
  return (
    <div
      className="rounded relative w-1/6 mb-2"
      onClick={() => handleArtistClick(FullPlaylist)}
    >
      <img
        src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/spotify-white-icon.png"
        alt="spotify"
        className="w-6 h-6 absolute left-0 m-1"
      />
      <div>
        <img src={PlayListImg} alt={PlayListArtist} className="rounded " />
      </div>
      <div className="m-1 mt-2">
        <p>{PlayListArtist}</p>
      </div>
    </div>
  );
};

export default PlayListcard;
