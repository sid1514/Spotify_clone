import { Icon } from "semantic-ui-react";
import { useState } from "react";


const PlayListsCard=({PlayListImage,PlayListName,PlayListcDescribe,token,handleSignInmodal,handleShowList})=>{
  const [playbtDisplay,setplayDisplay]=useState(false);
  
  
  
    return(<>
     <div className="bg-neutral-900 w-1/7 rounded-2xl ml-6 p-4 h-min hover:bg-neutral-800" onMouseEnter={()=>setplayDisplay(true)} onMouseLeave={()=>setplayDisplay(false)} onClick={()=>{handleShowList(PlayListImage,PlayListName)}}>
   <span className="relative">
     <img src={PlayListImage} alt="music" className="w-80 h-80 rounded-3xl pt-5 px-2 shadow-2xl" />
  
     
     <span className="relative absolute flex grid-flex top-7/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
     <p className="absolute text-lg font-bold bg-opacity-50 bottom-5 left-1 p-2 m-4">{PlayListName}</p>   
    { playbtDisplay?
 <Icon name='play circle' size="huge" color='green'  className='None absolute right-12 bottom-16 rounded-full ' onClick={handleSignInmodal}/> :null
    } 
      </span> 
    </span>
    
        <h2 className="m-4 pl-3">{PlayListName}</h2>
        <p className="truncate w-64 h-16 m-4  pb-4 pl-3 overflow-hidden overflow-ellipsis text-2xl text-zinc-500 font-bold">{PlayListcDescribe}.</p>
  
  </div>
    </>)
}

export default PlayListsCard;