import './custom.css'
import { useState,useEffect } from "react";
const TrackCard=({TrackId,TrackTitle,TrackAlbum,TrackAdded,TrackDuration,TrackImage,TrackArtist,handletrackPlay,TrackLink})=>{
    const [daysAdded, setDaysAdded] = useState(0);
  
    useEffect(() => {
        const startDate = new Date(TrackAdded);
        const currentDate = new Date();
        
        const differenceInTime = currentDate.getTime() - startDate.getTime();
        const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
        
        setDaysAdded(differenceInDays);
      }, []);

      const [milliseconds, setMilliseconds] = useState(TrackDuration);
    const [trackDur, setTrackDur] = useState('');

  useEffect(() => {
    const minutes = Math.floor(milliseconds / (1000 * 60));
    const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);

    setTrackDur(`${minutes} : ${seconds}`);
  }, [milliseconds]);
    
    return (<>
    
    <div className="text-white" onClick={()=>handletrackPlay(TrackTitle,TrackArtist,TrackLink,TrackImage,TrackId)}>
        <table className="tracks">
            
            <tr >
                <td >

                  {TrackId}
                </td>
                <td className="grid-flex flex ml-10 mt-2 ">
                    <span className="mr-6 ">
                        <img src={TrackImage} width={60} height={60} />
                       
                    </span>
                    <span className="w-96 ">
                       <h3>{TrackTitle} <br></br> {TrackArtist}</h3> 
                        
                    </span>
                </td>
                <td>
                    <h3 className="pl-20 w-96 ml-36 mr-36 overflow-hidden overflow-ellipsis" >{TrackAlbum}</h3>
                </td>
                <td>
                    <h3 className="w-36 ml-10">{daysAdded} days ago</h3>
                </td>
                <td>
                   <h3 className="ml-56 w-36"> {trackDur}</h3>
                </td>
            </tr>
        </table>
    </div>
    
    </>)
}

export default TrackCard;