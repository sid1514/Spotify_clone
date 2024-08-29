import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Podcasts = () => {
  const access_token = useSelector((state) => state.AccessToken);
  const [podCasts, setPodCasts] = useState([]);
  const query = "bollywood";
  const fetchPodcasts = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      params: {
        q: query, // The search query (e.g., podcast title or topic)
        type: "show", // Specify 'show' to search for podcasts
        market: "US", // Specify the market (optional)
        limit: 10, // Limit the number of results (optional)
      },
    };

    try {
      const response = await axios.get(
        "https://api.spotify.com/v1/search",
        config
      );
      console.log(response.data.shows.items);
      setPodCasts(response.data.shows.items);
    } catch (error) {
      console.error("Error fetching podcasts:", error);
    }
  };

  useEffect(() => {
    fetchPodcasts();
  }, [query]);
  return (
    <>
      <div>
        <div className="flex">
          <p className="text-3xl font-bold flex-1">Talk with bollywood</p>
          <p className="text-neutral-400 font-semibold">Show more</p>
        </div>
        <div className=" flex flex-wrap">
          {podCasts.map((p) => (
            <div className="w-1/6 m-4">
              <div>
                <img src={p.images[1].url} alt={p.name} />
              </div>
              <div>{p.name}</div>
              <div className="overflow-x-hidden overflow-y-hidden h-10">
                {p.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Podcasts;
