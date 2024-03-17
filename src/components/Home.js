
import { Icon } from 'semantic-ui-react';
import UserProfile from './Profile';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import PlayLists from './PlayLists';
import SongLists from './Songlists';
import PlayListsCard from './SongCard';
import Test from '../test';
function Home(){
const spotifyApi = new SpotifyWebApi();
const [token,setToken]=useState()
const [searchkey,setSearchKey]=useState()
const[showList,setShowList]=useState(false)
const nav=useNavigate()
const [songs, setSongs] = useState([]);

const handleNavtoSignup=()=>{
   nav('/SignUp')
 }
 const handleNavtoLogin=()=>{
  nav('/Log_In')
}


useEffect(() => {
  const storedToken = window.localStorage.getItem("token");

  if (storedToken) {
    setToken(storedToken);

  } else {
    const hash = window.location.hash;
    if (hash) {
      const urlParams = new URLSearchParams(hash.replace("#", "?"));
      const accessToken = urlParams.get("access_token");

      if (accessToken) {
        window.localStorage.setItem("token", accessToken);
        const expirationTime = Math.floor(Date.now() / 1000) + 3600;
          window.localStorage.setItem("token_expiration", expirationTime);
        setToken(accessToken);
      }
    }
  }
  async function refreshAccessToken(refreshToken) {
    const clientId = 'client id';
    const clientSecret = 'client secret';
    const apiUrl = 'https://accounts.spotify.com/api/token';
  
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
        },
        body: new URLSearchParams({
          grant_type: 'refresh_token',
          refresh_token: refreshToken,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to refresh access token');
      }
  
      const tokenData = await response.json();
      return tokenData.access_token;
    } catch (error) {
      console.error('Error refreshing access token:', error);
      return null;
    }
  }
  const checkTokenExpiration = async() => {
    const tokenExpiration = window.localStorage.getItem("token_expiration");
    if (tokenExpiration) {
      const expirationTime = parseInt(tokenExpiration, 10);
      const currentTime = Math.floor(Date.now() / 1000);
  
     
      if (currentTime >= expirationTime - 60) {
        const refreshToken = window.localStorage.getItem("refresh_token");
        if (refreshToken) {
          try {
            const newAccessToken = await refreshAccessToken(refreshToken);
            if (newAccessToken) {
              setToken(newAccessToken);
             
            } else {
              console.error('Failed to refresh access token');
             
            }
          } catch (error) {
            console.error('Error refreshing token:', error);
           
          }
        } else {
          console.error('No refresh token found');
          
        }
       
     }
    }
  };
  
  const tokenCheckInterval = setInterval(checkTokenExpiration, 5 * 60 * 1000);
  return () => clearInterval(tokenCheckInterval);
}, []);



useEffect(() => {
  
    try {
      const response =  fetch('https://api.spotify.com/v1/playlists/3cEYpjA9oz9GiPac4AsH4n', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
     // const data = await response.json();
     setSongs(response.items);
      console.log(songs)
     
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  
},[])
const [songListCover,setsongListCover]=useState()
const [songListname,setsongListname]=useState()
 const handleShowSongList=(playlistImage,playlistName)=>{
   setShowList(true)
   setsongListCover(playlistImage)
   setsongListname(playlistName)
   
 }
  return(
<>
<section className='bg-black h-svh'>

<section className='bg-black text-white grid-flex flex'>
  <section className='w-3/12'> 
      <div className='bg-black text-white py-3 px-1  '>
        <div className='bg-neutral-900/75 p-2 mx-2 rounded-2xl' >
          <div className='grid-flex flex p-6'>
            <span>
                <img src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/spotify-white-icon.png' alt='spotify' className="w-10 h-10"/> 
            </span> 
            <span>
                <h2 className='px-1 pt-1'>Spotify </h2>
            </span> 
          </div> 
          <div className='grid-flex flex p-6'>
            <span>
              <img src='https://cdn-icons-png.freepik.com/256/13823/13823941.png' alt='home' width={45} height={30} className='px-1 h-8'/> 
            </span>  
            <span>
              <h2 className='text-2xl px-4 pt-2 font-extrabold tracking-wide'>Home</h2>

            </span>
          </div> 
     
          <div className='grid-flex flex px-6 pt-5'>
            <span>
              <img src='https://www.freepnglogos.com/uploads/search-png/search-icon-transparent-images-vector-16.png' alt='search' width={42} height={42} className='px-1 h-9 '/> 
            </span>  
            <span>
              <h1 className='text-2xl px-4 pt-1 font-extrabold tracking-wide pb-3 text-stone-400 hover:text-white'>Search</h1>
            </span>
        </div> 
      </div>
     
      <div className='bg-neutral-900/75  p-2 mx-2 mt-4 rounded-2xl '>
        <div className='relative grid-flex flex px-6 pt-5 overflow-y-auto h-15'>
      
          <span>
            <img src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTWJDxuISVM6fyN3CFukt6Fs3sy4PDnOoxVhgYx06AtI1yiGFNy' alt='search' width={62} height={52} className='px-1 h-16 '/> 
        
          </span>
          <span>
            <h2 className='text-2xl px-4 pt-3 font-extrabold tracking-wide text-stone-400 hover:text-white '>Your Library</h2>
          </span>
          <span className="absolute right-2 m-2">
            <button  > <img src='https://www.pngall.com/wp-content/uploads/10/Plus-Symbol-PNG-Images-HD.png' alt='search' width={26} className='px-1 h-6 '/> </button>
          </span>
      
        </div>
        
        <div className="my-1 pt-4 overflow-y-auto h-96" id="scroll_edit">
          <div className="bg-neutral-800 m-2 p-8 rounded-2xl ">
            <h2>Create your first playlist</h2>
            <p className="text-2xl">it's easy, we'll help you</p>
            <button className="bg-white text-black  w-48 h-14 p-5 rounded-full font-extrabold tracking-wide transform hover:scale-110"><h3>Create playlist</h3></button>
          </div>
          <div className="bg-neutral-800 m-2 my-12 p-10  rounded-2xl">
            <h2>let's find some podcasts to follow</h2>
            <p className="text-2xl">We'll keep you updated on new episodes</p>
            <button className="bg-white text-black  w-52 h-14 rounded-3xl font-extrabold tracking-wide transform hover:scale-110"><h3>Browse podcasts</h3></button>
          </div> 
        </div>

        <h4 className="p-10 tracking-wide text-stone-400 hover:underline underline-offset-1">Cookies</h4> 
        <button className="border border-neutral-500 hover:border-stone-50 rounded-3xl w-40 h-14 mx-16 mb-12 text-2xl" color='black'><Icon name='globe' size='large'/> English</button>
      </div>

    </div>
      
    </section>
   {!showList? <section className=' bg-neutral-900/75 w-3/4 rounded-2xl pt-3 h-min mr-3 mt-2'>
      <div className='grid-flex flex p-6 mb-6 h-7/2'>
        <span className='border-1 rounded-3xl bg-stone-950 w-13 h-12 p-2 '>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-9 h-9">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </span>
        <span className='border-1 rounded-3xl bg-stone-950 w-13 h-12 p-2 ml-4'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-9 h-9 ml-1">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </span>
       
       {token?(
           <span className='grid-flex flex absolute right-0 '>
           <button className='bg-white text-black ml-16 w-48 h-12 p-3 rounded-full'><h3 >Explore Premium</h3></button>
            <button className='bg-black text-white ml-6 w-48 h-12 rounded-full mr-6' ><h3>Install app</h3></button>
            <Icon name='bell ' size='large' bordered  className='bg-black rounded-full  '/>
            <span className='pt-1 pr-10 pl-3'><UserProfile /></span> 
            </span> 
            
        ):(<span className='absolute right-0 mr-20'>
            <button onClick={handleNavtoSignup}><h2 className='text-neutral-400 hover:text-white'>Sign up</h2></button>
            <button className='bg-white text-black ml-16 w-48 p-6 rounded-full' onClick={handleNavtoLogin}><h2>Log in</h2></button>
        </span> )
        
      }

      </div> 
      <div className='relative bg-zinc-800/50 p-4 pl-10 '>
          <h1 className='text-4xl font-extrabold hover:underline underline-offset-3'>Spotify Playlists</h1>
       { !token?  <button className='absolute right-10 top-1 pt-3'><h4 className='text-2xl text-stone-400 hover:underline underline-offset-1 font-bold '>Show all</h4></button> : null}
       
      <PlayLists handleShowSongList={handleShowSongList}/>
     
      </div>
      
    </section> :
    <div style={{backgroundImage:`url(${songListCover})`}} className='bg-cover w-full h-96 pt-10'>
    <SongLists playlistImage={songListCover} playlistName={songListname}/>
    </div>
}  
</section>   
  {!token?<div className='bg-black grid-flex flex font-bold text-2xl text-white bg-stone-800  m-5 p-4 mr-4 pb-3 pl-3 tracking-wide bg-gradient-to-r from-pink-500 to-blue-400'>
        <span>
          <h2>Prieview of Spotify</h2>
          <p>Sign up to get unlimited songs and podcasts with occassional ads. No credit card needed</p>
        </span>
        <button className='absolute right-2 bg-white text-black ml-16 w-46 p-6 pl-12 pr-12 rounded-full mr-16' onClick={handleNavtoSignup}> Sign up for free</button>
  </div> :null } 
</section>


</>
    )
}


export default Home;
