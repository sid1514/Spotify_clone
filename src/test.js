import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Test = () => {
  const [token, setToken] = useState('');
  const [tracks, setTracks] = useState([]);

  const CLIENT_ID = '026e1209e275417584cec6e6c784b65d'
  const CLIENT_SECRET='219e5dc1a84049b793479bfe10db5bbf'
  const REDIRECT_URI = 'http://localhost:3000'; // This should match the redirect URI set in your Spotify Developer Dashboard

  const handleLogin = () => {
    window.location = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}`;
  };

  const getToken = async (code) => {
  try {
      const response = await axios.post('https://accounts.spotify.com/api/token', {
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: REDIRECT_URI,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      });
      setToken(response.data.access_token);
      console.log(token)
    } catch (error) {
      console.error('Error fetching token:', error);
    }

    
  };

  const getTracks = async () => {
    try {
      const response = await axios.get('https://api.spotify.com/v1/me/tracks', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTracks(response.data.items);
    } catch (error) {
      console.error('Error fetching tracks:', error);
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (code) {
      getToken(code);
    }
  }, []);

  useEffect(() => {
    if (token) {
      getTracks();
    }
  }, [token]);

  return (
    <div>
      {token ? (
        <div>
          <h2>Successfully logged in!</h2>
          <h3>My Tracks:</h3>
          <ul>
            {tracks.map((track) => (
              <li key={track.track.id}>{track.track.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <button onClick={handleLogin}>Log in with Spotify</button>
      )}
    </div>
  );
};

export default Test;
