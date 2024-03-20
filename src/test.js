import React, { useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import axios from 'axios';

const Test = ({tracks}) => {
  const CLIENT_ID = "026e1209e275417584cec6e6c784b65d"
  const CLIENT_SECRET="219e5dc1a84049b793479bfe10db5bbf"
  const [accesstoken,setAccesstoken]=useState()

  const storedToken = window.localStorage.getItem("token");
 
 console.log(`this is trach ref ${tracks}`)
  return (
    <div>
     
    </div>
  
     
    
  );

}

export default Test;
