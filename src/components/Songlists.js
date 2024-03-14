import UserProfile from "./Profile";
import { Icon } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
const SongLists=({playlistImage,playlistName})=>{
const nav=useNavigate()
    return(<>
    <section className="relative">
    <span className=' pl-5'>
       
    <Icon name='chevron  left' color="white" size="big" className="bg-neutral-800/75 w-10 h-18 rounded-full" onClick={()=>nav('/')}/>
    <Icon name='chevron  right' color="white" size="big" className="bg-neutral-800 bg-cover w-10 h-18 rounded-full"/>
    </span>
    <span className='grid-flex flex absolute right-0 '>
           <button className='bg-white text-black ml-16 w-48 h-12 p-3 rounded-full'><h3 >Explore Premium</h3></button>
            <button className='bg-black text-white ml-6 w-48 h-12 rounded-full mr-6' ><h3>Install app</h3></button>
            <Icon name='bell ' size='large' bordered  className='bg-black rounded-full  '/>
            <span className='pt-1 pr-10 pl-3'><UserProfile /></span> 
            </span>
        
        <div className="p-6 pl-10 pt-10">
        <h2>Playlist</h2>
        <h1 className="text-6xl font-extrabold text-white"><b>{playlistName}</b></h1>
        </div>
        
    </section>
    <section className="relative my-28 w-full">
        <div className="bg-neutral-800/25 flex grid-flex ">
            <button className="">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsn63nN6CCe7CuIApvC5oC_8SZB5paXSoaCA&usqp=CAU' width={150} height={150} className="my-10" alt="play"/></button>
            <span>

            <img src='hearticon.png' alt="like"  className="contrast-200 w-14 h-14 mt-14"/>

            </span>
            <span className="mt-14 ml-8 ">
               <h1 className="text-gray-300 font-black"><b>. . .</b></h1>
            </span>
            <span className="mt-14  absolute right-5">

              <p className="flex space-x-2"><h3>List</h3>  <Icon name="list" size="large"/> </p>
            </span>
        </div>
    </section>
    
    </>)
}

export default SongLists;