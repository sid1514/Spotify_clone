
import { Icon } from 'semantic-ui-react';
import PlayListsCard from './SongCard';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AskSignIn from './AsktoSignModal';

function Home(){
  
const [token,setToken]=useState()
const nav=useNavigate()

const playLists = [
  { id: 1, Image: 'https://www.trendingus.com/wp-content/uploads/2022/06/Trending-Group-Names-for-Friends-1280x768.jpg' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' }
];

const [modalOpen, setModalOpen] = useState(false);
 const handleNavtoSignup=()=>{
   nav('/SignUp')
 }
 const handleNavtoLogin=()=>{
  nav('/Log_In')
}
const handleSignInmodal=()=>{
  if(!token){

    setModalOpen(true);
  }
}
useEffect(() => {
  // Check if token exists in localStorage
  const storedToken = localStorage.getItem("token");

  if (storedToken) {
    setToken(storedToken);

  } else {
    // If token doesn't exist in localStorage, check if it's in URL hash
    const hash = window.location.hash;
    if (hash) {
      const urlParams = new URLSearchParams(hash.replace("#", "?"));
      const accessToken = urlParams.get("access_token");

      if (accessToken) {
        // Store token in localStorage and state
        localStorage.setItem("token", accessToken);
        setToken(accessToken);
      }
    }
  }
}, []);
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
    <section className=' bg-neutral-900/75 w-3/4 rounded-2xl pt-3 h-min mr-3 mt-2'>
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
       {  token? 
          <span className='absolute right-0 mr-20'>
            <button className='bg-white text-black ml-16 w-48 p-6 rounded-full' onClick={handleNavtoLogin}><h2>Log out</h2></button>
          </span>:<span className='absolute right-0 mr-20'>
            <button onClick={handleNavtoSignup}><h2 className='text-neutral-400 hover:text-white'>Sign up</h2></button>
            <button className='bg-white text-black ml-16 w-48 p-6 rounded-full' onClick={handleNavtoLogin}><h2>Log in</h2></button>
          </span>
        } 
      </div> 
      <div className='relative bg-zinc-800/50 p-4 pl-10 '>
          <h1 className='text-4xl font-extrabold hover:underline underline-offset-3'>Spotify Playlists</h1>
          <button className='absolute right-10 top-1 pt-3'><h4 className='text-2xl text-stone-400 hover:underline underline-offset-1 font-bold '>Show all</h4></button>
        <div className='pb-80 justify-space-between grid-flex flex'>
          <PlayListsCard handleSignInmodal={handleSignInmodal} PlayListImage={playLists[0].Image}/>
          <AskSignIn open={modalOpen} setOpen={setModalOpen} PlayListImage={playLists[0].Image}/>
          <PlayListsCard handleSignInmodal={handleSignInmodal} PlayListImage={playLists[0].Image}/>
          <PlayListsCard handleSignInmodal={handleSignInmodal} PlayListImage={playLists[0].Image}/>
          <PlayListsCard handleSignInmodal={handleSignInmodal} PlayListImage={playLists[0].Image}/>
          <PlayListsCard handleSignInmodal={handleSignInmodal} PlayListImage={playLists[0].Image}/>
        </div>
      </div>

    </section>
      
</section>   
  <div className='bg-black grid-flex flex font-bold text-2xl text-white bg-stone-800  m-5 p-4 mr-4 pb-3 pl-3 tracking-wide bg-gradient-to-r from-pink-500 to-blue-400'>
        <span>
          <h2>Prieview of Spotify</h2>
          <p>Sign up to get unlimited songs and podcasts with occassional ads. No credit card needed</p>
        </span>
        <button className='absolute right-2 bg-white text-black ml-16 w-46 p-6 pl-12 pr-12 rounded-full mr-16'> Sign up for free</button>
  </div>  
</section>
</>
    )
}


export default Home;