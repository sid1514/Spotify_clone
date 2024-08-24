import { Icon } from "semantic-ui-react";
import { useState } from "react";
import "./player.css";

const MusicPlayer = ({ trackTitle, trackArtist, currentTrack, trackImage }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioRef, setAudioRef] = useState(null);
  const togglePlay = () => {
    if (audioRef.paused) {
      audioRef.play();
      setIsPlaying(true);
    } else {
      audioRef.pause();
      setIsPlaying(false);
    }
  };
  return (
    <>
      <section className=" bg-black flex justify-center items-center space-x-40 text-white text-sm">
        <div className="flex justify-between items-center m-5">
          <div className="flex items-center">
            <img
              src={trackImage}
              width={65}
              height={40}
              alt={trackTitle}
              className="mr-2"
            />
            <p>
              {trackTitle}
              <br />
              {trackArtist}
            </p>
          </div>
          <div className="absolute left-1/4 rounded-full border pl-1">
            <Icon name="add" size="small" />
          </div>
        </div>
        <div className=" flex justify-center">
          <div className="flex flex-col justify-center items-center">
            <div className=" space-x-5 pl-20 mt-2">
              <Icon name="shuffle" size="big" color="grey" />
              <Icon name="step backward" size="big" color="grey" />
              <Icon
                name={isPlaying ? "pause circle" : "play circle"}
                size="big"
                color="grey"
                onClick={togglePlay}
              />
              <Icon name="step forward" size="big" color="grey" />
              <Icon name="retweet" size="big" color="grey" />
            </div>

            <br></br>
            <audio
              ref={(ref) => setAudioRef(ref)}
              autoPlay={isPlaying}
              controls
              onEnded={() => setIsPlaying(false)}
              src={currentTrack}
              className="custom-audio-controls text-white"
            ></audio>
          </div>
        </div>

        <div className="flex justify-end space-x-5 ">
          <Icon name="play " color="white" className="  " size="small" />
          <img src="LyricalMic.png" alt="lyrics" className="w-10 h-10" />
          <Icon name="content" size="small" />
          <Icon name="computer" size="small" />
          <span className="flex flex-row">
            <div>
              <Icon name="volume down" size="small" />
            </div>
            <input type="range" min="0" max="1" step="0.01" />
            <span className="-rotate-45 ml-2">
              <Icon name="arrow left" size="small" />
              <Icon name="arrow right" size="small" />
            </span>
          </span>
        </div>
      </section>
    </>
  );
};
export default MusicPlayer;
