import UserProfile from "./Profile";
import { Icon } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import SpotifyWebApi from 'spotify-web-api-js';
import { useState,useEffect } from "react";
import TrackCard from "./trackCard";
import MusicPlayer from "./Player";
const SongLists=({playlistImage,playlistName,currentPlaylistTracks,handletrackPlay})=>{
const nav=useNavigate()
const token=window.localStorage.getItem('token')
const [tracks,setTracks]=useState([])
const spotifyApi = new SpotifyWebApi();

let [trackid,setTrackId]=useState(0);
console.log(currentPlaylistTracks)
useEffect(() => {
    // Authenticate with Spotify
    spotifyApi.setAccessToken(token);
    spotifyApi.getFeaturedPlaylists()
      .then(response => {
        const featuredPlaylistId = response.playlists.items[currentPlaylistTracks-1].id;
        // Get tracks from the featured playlist
        return spotifyApi.getPlaylistTracks(featuredPlaylistId);
      })
      .then(response => {
        setTracks(response.items);
      })
      .catch(err => {
        console.error('Error fetching playlist tracks:', err);
      });
}, []);
 
console.log(tracks)

    return(<>
    <section className="relative w-full ">
      <div className=" fixed ">
        <span className='absolute left-0 pl-5 flex gird-flex z-10'>
          <Icon name='chevron  left' color="white" size="big" className="bg-neutral-800/75 w-10 h-18 rounded-full" onClick={()=>nav('/')}/>
          <Icon name='chevron  right' color="white" size="big" className="bg-neutral-800 bg-cover w-10 h-18 rounded-full"/>
        </span>
    </div>
    

    <span className='fixed z-10 grid-flex flex right-0 '>
           <button className=' bg-white text-black ml-16 w-48 h-12 p-3 rounded-full'><h3 >Explore Premium</h3></button>
            <button className='bg-black text-white ml-6 w-48 h-12 rounded-full mr-6' ><h3>Install app</h3></button>
            <Icon name='bell ' size='large' bordered  className='bg-black rounded-full  '/>
            <span className=' pt-1 pr-10 pl-3 '><UserProfile /></span> 
      </span>
    
       
        
    </section>
    <div className="flex p-6 pl-10 pt-10">
            <span className="drop-shadow-lg ">

            <img src={playlistImage} width={300} height={200} className="shadow-lg shadow-slate-800/75"/>
            </span>
            <span className="flex-initial pl-10">
            <h2>Playlist</h2>
            <h1 className="text-8xl font-extrabold text-white"><b>{playlistName}</b></h1>
            </span>
        
      </div>
    <section className="relative my-22 w-full">
        <div className="bg-neutral-800/25 flex grid-flex ">
            <button className="">
           
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" id="play" className="bg-green-500 rounded-full m-10 w-24 h-24 p-6"><path d="M12 39c-.549 0-1.095-.15-1.578-.447A3.008 3.008 0 0 1 9 36V12c0-1.041.54-2.007 1.422-2.553a3.014 3.014 0 0 1 2.919-.132l24 12a3.003 3.003 0 0 1 0 5.37l-24 12c-.42.21-.885.315-1.341.315z"></path></svg>
            </button>
            <span >
            
            <img src='hearticon_1.png' alt="like"  className="contrast-200 w-14 h-14 mt-14"/>

            </span>
            <span className="mt-14 ml-8 ">
               <h1 className="text-gray-300 font-black"><b>. . .</b></h1>
            </span>
            <span className="mt-14  absolute right-5">

              <p className="flex space-x-2"><h3>List</h3>  <Icon name="list" size="large"/> </p>
            </span>
        </div>
        <section className="pl-10 pb-24 ">
    <tr >
          <th ><h2 className="mr-8">#</h2></th>
          <th><h2 className="mr-10 w-96">Title</h2></th>
          <th><h2 className=" w-96 ml-20">Album</h2></th>
          <th><h2 className="w-96 ml-36">Date added</h2></th>
          <th><span className="ml-44 w-44"><Icon name='clock ' size="large"/></span></th>
          
    </tr> 
    <svg width="1000" height="70">
            <line x1="1" y1="50" x2="1000" y2="50" stroke="white" strokeWidth="2" className="opacity-25"/>
    </svg>
    {tracks.map((t,index) => (
      
      <div key={t.id}>
        
       
       { <TrackCard TrackId={index+1} TrackTitle={t.track.name} TrackAlbum={t.track.album.name} TrackAdded={t.added_at} TrackDuration={t.track.duration_ms} TrackArtist={t.track.artists[0].name} TrackImage={t.track.album.images[0].url} TrackLink={t.track.preview_url} handletrackPlay={handletrackPlay} fullTracks={tracks} /> }
      </div>
    ))}
    </section>
    </section>
   
    </>)
}

export default SongLists;