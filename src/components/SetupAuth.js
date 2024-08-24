import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Dimmer, Loader, Segment } from "semantic-ui-react";
import { setAccessToken } from "./ManagingState/action";

const SetupAuth = () => {
  let access_token = useSelector((state) => state.AccessToken);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const getAuthAccessToken = () => {
    let hash = window.location.hash;
    if (hash && !access_token) {
      access_token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];
      localStorage.setItem("access_token", access_token);
      //dispatch(setAccessToken(access_token));
      nav("/");
    }
  };

  useEffect(() => {
    getAuthAccessToken();
  });
  return (
    <div>
      <Segment>
        <Dimmer active>
          <Loader indeterminate>Signin user with spotify</Loader>
        </Dimmer>
      </Segment>
    </div>
  );
};

export default SetupAuth;
