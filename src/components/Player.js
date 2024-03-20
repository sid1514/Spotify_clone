import { Icon } from "semantic-ui-react";
import { useState } from "react";
import './player.css'
const MusicPlayer=({trackTitle,trackArtist,currentTrack,trackImage,trackId})=>{

    const [isPlaying, setIsPlaying] = useState(false);
    
    
    return(<>
    <section className="relative bg-black m-2 p-2 grid-flex flex mr-20">
        <div className="relative grid-flex flex  m-5 w-96 ">
        <img src={trackImage} width={65} height={40}/>
        <h3>{trackTitle}<br></br>{trackArtist}</h3>
        <span className="absolute right-0 align-centre rounded-full border h-7 w-7 pl-1">
           <Icon name="add " />
        </span>
        </div>
        <div className="  pl-80 pt-10 mr-20">
       
      
        <audio
          autoPlay={isPlaying}
          controls
          onEnded={() => setIsPlaying(false)}
          src={currentTrack}
          
          >

          </audio>
        
      
        </div> 
        <div className="absolute right-0 p-10 grid-flex flex space-x-10">
        <Icon name="play " color="grey" className="borrder-grey border-2 pt-1 pb-6 h-5 pr-4 pl-2"/>
        <img src="LyricalMic.png" width={30} height={30}/>
        <Icon name="content" size="large"/>
       <Icon name="computer" size="large"/>
       <span className="grid-flex flex">
        <Icon name="volume down" size="large"/>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          
          />
        </span> 
       
        <span className="-rotate-45">
        <Icon name="arrow left" />
        <Icon name="arrow right"/>
        </span>
        
        </div>
    </section>
    </>)
}
export default MusicPlayer;