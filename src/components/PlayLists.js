import PlayListsCard from "./SongCard";
import SpotifyWebApi from 'spotify-web-api-js';
import { useEffect,useState } from "react";
import AskSignIn from './AsktoSignModal';
import SongLists from "./Songlists";
const PlayLists=({handleShowSongList})=>{
    const [featuredPlaylists, setFeaturedPlaylists] = useState([]);
    const spotifyApi = new SpotifyWebApi();
    const token=window.localStorage.getItem('token')
    const [modalOpen, setModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showmore,setShowmore]=useState(false)
    
    const playLists1 = [
      { id: 1, Image: 'https://www.trendingus.com/wp-content/uploads/2022/06/Trending-Group-Names-for-Friends-1280x768.jpg' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' }
    ];
    useEffect(() => {
        // Authenticate with Spotify
        spotifyApi.setAccessToken(token);
        spotifyApi.getFeaturedPlaylists()
      .then(playlists => {
        setFeaturedPlaylists(playlists);
        setLoading(false);

      })
      .catch(error => {
        console.error('Error fetching featured playlists:', error);
        setError(error);
        setLoading(false);
      });
  }, []);
     
      const handleSignInmodal=()=>{
        if(!token){
      
          setModalOpen(true);
        }
      }
    console.log(featuredPlaylists)
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    
    return(<>
        
     <section>
      <div className='relative pb-80 justify-space-between '>
        <h1>Featured Playlists</h1>
        <button className='absolute top-1 pt-3 right-3'><h4 className='text-2xl text-stone-400 hover:underline underline-offset-1 font-bold ' onClick={()=>setShowmore(!showmore)}>Show all</h4></button>
  { featuredPlaylists? 
  (<div  className="grid grid-cols-6 m-1">
    {featuredPlaylists.playlists.items.slice(0,showmore?featuredPlaylists.playlists.items.length:6).map((playlist,index) => (
      
      <div key={playlist.id}>
       { <PlayListsCard PlayListName={playlist.name} PlayListImage={playlist.images[0].url} PlayListcDescribe={playlist.description} handleShowList={handleShowSongList}  currentPlaylistTracks={index+1}/>}
      </div>
    ))}
   </div> ):
  (<div className='pb-80 justify-space-between grid-flex flex'> 
  <PlayListsCard handleSignInmodal={handleSignInmodal} PlayListImage={playLists1[0].Image}/>
  <PlayListsCard handleSignInmodal={handleSignInmodal} PlayListImage={playLists1[0].Image}/>
  <PlayListsCard handleSignInmodal={handleSignInmodal} PlayListImage={playLists1[0].Image}/>
  <PlayListsCard handleSignInmodal={handleSignInmodal} PlayListImage={playLists1[0].Image}/>
  <PlayListsCard handleSignInmodal={handleSignInmodal} PlayListImage={playLists1[0].Image}/>
  <AskSignIn open={modalOpen} setOpen={setModalOpen} PlayListImage={playLists1[0].Image}/>
  </div>)
  }
  </div> 
  
  
  </section>  
        </>)
}
export default PlayLists;