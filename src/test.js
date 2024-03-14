import React, { useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import axios from 'axios';
const Test = () => {
  const CLIENT_ID = "026e1209e275417584cec6e6c784b65d"
  const CLIENT_SECRET="219e5dc1a84049b793479bfe10db5bbf"
  const [accesstoken,setAccesstoken]=useState()
  const ids=['2CIMQHirSU0MQqyYHq0eOx','57dN52uHvrHOxijzpIgu3E','1vCWHaC5f2uS3yhpwWbIA6']
 useEffect(()=>{
  fetch(`https://api.spotify.com/v1/artists/${ids}`)
  .then((res)=>res.json)
  .then((data)=>console.log(data))
 },[])

  return (
    <div>
     
    </div>
  
     
    
  );

}

export default Test;
