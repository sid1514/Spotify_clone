import { useEffect, useState } from "react";
import DefaultPlayList from "./DefaultPlayList";
import SideDrawer from "./SideDrawer";
import axios from "axios";
import { setToken } from "../ManagingState/action";
import { useDispatch, useSelector } from "react-redux";
import FooterSignup from "../Authentication/FooterSignup";
import MusicPlayer from "../Player";
import UserHome from "./userHomepage/userHome";
import { Icon } from "semantic-ui-react";

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
  const [openSideDrawer, setOpenSidDrawer] = useState(false);
  return (
    <>
      <div className="bg-black w-full md:h-screen h-auto ">
        {!access_token ? (
          <div className="flex ">
            <div className="md:w-[24%] w-[35%] relative z-10 flex">
              <div
                className={`${
                  openSideDrawer ? "block" : "hidden"
                } md:block text-sm md:text-auto md:static absolute `}
              >
                <SideDrawer />
              </div>
              <div
                className="md:hidden absolute z-10 ml-4 left-0 mt-6"
                onClick={() => setOpenSidDrawer(!openSideDrawer)}
              >
                <Icon name="options" color="grey" size="large" />
              </div>
            </div>
            <div className="flex-1 mt-2 md:static absolute z-0 w-full md:w-auto">
              <DefaultPlayList />
            </div>
          </div>
        ) : (
          <div>
            <UserHome />
          </div>
        )}
        <div className="z-10 fixed w-full bottom-0">
          <div>
            {track ? <MusicPlayer /> : !access_token ? <FooterSignup /> : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
