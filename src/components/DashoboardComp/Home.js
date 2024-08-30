import { useEffect } from "react";
import DefaultPlayList from "./DefaultPlayList";
import SideDrawer from "./SideDrawer";
import axios from "axios";
import { setToken } from "../ManagingState/action";
import { useDispatch, useSelector } from "react-redux";
import FooterSignup from "../Authentication/FooterSignup";
import MusicPlayer from "../Player";
import UserHome from "./userHomepage/userHome";

function Home() {
  const clientID = process.env.REACT_APP_CLIENT_ID;
  const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
  const dispatch = useDispatch();
  const access_token = useSelector((state) => state.AccessToken);
  const track = useSelector((state) => state.trackData);

  //get defautlt access token
  const getToken = async () => {
    const tokenUrl = "https://accounts.spotify.com/api/token";
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(clientID + ":" + clientSecret),
    };
    const body = new URLSearchParams({
      grant_type: "client_credentials",
    });

    try {
      const response = await axios.post(tokenUrl, body.toString(), { headers });

      return response.data.access_token;
    } catch (error) {
      console.error("Error getting token:", error);
    }
  };

  useEffect(() => {
    const fetchToken = async () => {
      const token = await getToken();
      dispatch(setToken(token));
    };

    fetchToken();
  });

  //console.log(track);

  return (
    <>
      <div className="bg-black w-full h-screen">
        {!access_token ? (
          <div className="flex z-0">
            <div className="w-[24%]">
              <SideDrawer />
            </div>
            <div className="flex-1 mt-2 ">
              <DefaultPlayList />
            </div>
          </div>
        ) : (
          <div>
            <UserHome />
          </div>
        )}
        <div className="z-1 fixed w-full bottom-0">
          <div>
            {track ? <MusicPlayer /> : !access_token ? <FooterSignup /> : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
