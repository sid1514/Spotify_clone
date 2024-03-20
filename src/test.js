import React, { useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import axios from 'axios';

const Test = ({tracks}) => {
  
  const [accesstoken,setAccesstoken]=useState()

  const storedToken = window.localStorage.getItem("token");
 
 console.log(`this is trach ref ${tracks}`)
  return (
    <div>
     
    </div>
  
     
    
  );

}

export default Test;
