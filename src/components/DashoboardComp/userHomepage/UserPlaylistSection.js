import React, { useEffect, useRef, useState } from "react";
import UserPlayLists from "./userPlaylists/UserPlayLists";
import Footer from "../Footer";
import DisplayAlbum from "../Albums/DisplayAlbum";
import Podcasts from "./userPlaylists/Podcasts";

const UserPlaylistSection = ({ userName }) => {
  const [showMoreArtists, setShowMoreArtists] = useState(false);
  const [displayPlayList, setDisplayPlayList] = useState("All");
  const handleDisplayplayList = (showList) => {
    switch (showList) {
      case "All":
        setDisplayPlayList("All");
        break;
      case "Music":
        setDisplayPlayList("Music");
        break;
      case "Podcasts":
        setDisplayPlayList("Podcasts");
        break;
      default:
        setDisplayPlayList("All");
    }
  };

  const [isScrolled, setIsScrolled] = useState(false);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = scrollContainerRef.current.scrollTop;
      // Adjust the threshold value based on your needs
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const scrollContainer = scrollContainerRef.current;
    scrollContainer.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className="bg-gradient-to-b from-sky-600/50 to-neutral-900 rounded w-full h-[90%] overflow-y-auto"
        ref={scrollContainerRef}
      >
        <div
          className={`p-6 w-full flex text-white space-x-2 mb-6 fixed z-10 ${
            isScrolled ? "bg-blue-950 text-white" : "bg-transparent"
          }`}
        >
          <button
            className={`rounded-xl px-3 h-8 ${
              displayPlayList === "All"
                ? "bg-black text-white"
                : "bg-white/25 text-white"
            }`}
            onClick={() => handleDisplayplayList("All")}
          >
            All
          </button>
          <button
            className={`rounded-xl px-3 h-8 ${
              displayPlayList === "Music"
                ? "bg-black text-white"
                : "bg-white/25 text-white"
            }`}
            onClick={() => handleDisplayplayList("Music")}
          >
            Music
          </button>
          <button
            className={`rounded-xl px-3 h-8 ${
              displayPlayList === "Podcasts"
                ? "bg-black text-white"
                : "bg-white/25 text-white"
            }`}
            onClick={() => handleDisplayplayList("Podcasts")}
          >
            Podcasts
          </button>
        </div>
        <div className="p-6">
          {displayPlayList === "All" ? (
            <div className="">
              <UserPlayLists
                showMoreArtists={showMoreArtists}
                setShowMoreArtists={setShowMoreArtists}
                userName={userName}
              />
              <DisplayAlbum />
              <Podcasts />
            </div>
          ) : displayPlayList === "Music" ? (
            <DisplayAlbum />
          ) : (
            <Podcasts />
          )}
        </div>
        <div className="mt-6">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default UserPlaylistSection;
