import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Icon } from "semantic-ui-react";

const UserHome = () => {
  const [useData, setuserData] = useState(null);
  const [userSection, setUserSection] = useState(false);
  const access_token = useSelector((state) => state.AccessToken);
  const fetchUserData = async () => {
    try {
      const res = await fetch("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      // const data = await response.json();
      //setuserData(data);
      console.log(res);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  useEffect(() => {
    if (access_token) {
      fetchUserData();
    }
  }, []);

  const handleUserLogout = () => {
    localStorage.removeItem("access_token");
  };
  return (
    <>
      <div className="bg-neutral-950 text-white">
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
            <div className="p-2 rounded flex h-12 bg-neutral-800 rounded-3xl ml-2 w-11/12 align-center pl-4">
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
              <button className="text-black bg-white rounded-full p-2">
                Explore Premium
              </button>
            </div>
            <div className="flex space-x-2">
              <div className="border rounded-full w-6 h-6 mt-1 ">
                <Icon
                  name="arrow alternate down "
                  size="small"
                  className="pl-1"
                />
              </div>
              <button className="border-0">install App</button>
            </div>
            <div className="pt-1">
              <Icon name="bell" color="white" />
            </div>
            <div>
              <div onClick={() => setUserSection(!userSection)} className="relative">
                user profile
              </div>
              {userSection ? (
                <div className="p-3 bg-neutral-800 space-y-6 absolute z-10 mt-10 w-1/2 right-0 rounded">
                  <div>
                    <button >Account</button>
                  </div>
                  <div>
                    <button>Profile</button>
                  </div>
                  <div>
                    <button>Upgrade to Premium</button>
                  </div>
                  <div>
                    <button>Setting</button>
                  </div>
                  <div className="border border-t-1 border-x-0 border-b-0 pt-3">
                    <button onClick={handleUserLogout}>Log out</button>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserHome;
