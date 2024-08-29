import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAccessToken } from "../../ManagingState/action";
import Userlibrary from "./Userlibrary";
import UserPlaylistSection from "./UserPlaylistSection";

const UserHome = () => {
  const [userData, setuserData] = useState(null);
  const [userSection, setUserSection] = useState(false);
  const dispatch = useDispatch();
  const access_token = useSelector((state) => state.AccessToken);
   
  const fetchUserData = async () => {
    try {
      const { data } = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      setuserData(data);

      //console.log(userData);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  useEffect(() => {
    fetchUserData();
  }, [access_token]);

  const handleUserLogout = () => {
    localStorage.removeItem("access_token");
    dispatch(removeAccessToken());
  };
  return (
    <>
      <div className="bg-black text-white h-full">
        <div className="flex h-20 p-2 w-full relative pt-4">
          <div className="flex w-[30%] ml-6">
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/spotify-white-icon.png"
              alt="spotify"
              className="w-10 h-10"
            />
          </div>
          <div className="flex w-1/3">
            <div>
              <img
                src="https://cdn-icons-png.freepik.com/256/13823/13823941.png"
                alt="home"
                className="p-2 h-10 w-10 bg-neutral-700 rounded-full"
              />
            </div>
            <div className="p-2 rounded flex h-12 bg-neutral-800 rounded-3xl ml-2 w-10/12 align-center pl-4">
              <img
                src="https://www.freepnglogos.com/uploads/search-png/search-icon-transparent-images-vector-16.png"
                alt="search"
                className="p-1 h-8 w-8 mr-2"
              />
              <input
                type="text"
                placeholder="What do you want to play?"
                className="border-0 w-11/12 bg-transparent text-white h-full font-semibold input_search"
              />
            </div>
          </div>
          <div className="flex absolute right-10 space-x-4 align-center">
            <div>
              <button className="text-black bg-white rounded-full p-2 px-4 font-semibold">
                Explore Premium
              </button>
            </div>
            <div className="flex space-x-2 ">
              <div className="mt-1 ">
                <img src="down-arrow.png" alt="" className="pl-2 h-8 w-10" />
              </div>
              <div className="pt-2 pr-4">
                <button className="border-0 ">Install App</button>
              </div>
            </div>
            <div className="pt-2">
              <img alt="bell" src="bell.png" className="pl-2 h-8 w-10 " />
            </div>
            <div>
              <div
                onClick={() => setUserSection(!userSection)}
                className="relative"
              >
                <img
                  src={userData?.images[0].url}
                  alt=""
                  className="rounded-full p-2 bg-neutral-800 h-12 w-12"
                />
              </div>
              {userSection ? (
                <div className="p-1 bg-neutral-800 space-y-1 absolute z-10 mt-10 w-1/2 right-0 rounded">
                  <div className="hover:bg-neutral-600 p-2">
                    <button>Account</button>
                  </div>
                  <div className="hover:bg-neutral-600 p-2">
                    <button>Profile</button>
                  </div>
                  <div className="hover:bg-neutral-600 p-2">
                    <button>Upgrade to Premium</button>
                  </div>
                  <div className="hover:bg-neutral-600 p-2">
                    <button>Setting</button>
                  </div>
                  <div className="border border-t-1 border-x-0 border-b-0 pt-3 hover:bg-neutral-600 p-2">
                    <button onClick={handleUserLogout}>Log out</button>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="flex h-screen ">
          <div className="w-[25%]">
            <Userlibrary />
          </div>
          <div className="w-9/12 h-full ">
            <UserPlaylistSection userName={userData?.display_name} />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserHome;
