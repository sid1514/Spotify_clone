// reducer.js
import {
  SET_ACCESS_TOKEN,
  SET_SELECT_ALBUM,
  SET_SELECT_ARTIST,
  SET_TOKEN,
  SET_TRACK,
  SET_USER_DATA,
  SHOW_MORE,
} from "./action";

const initialState = {
  token: "",
  Selectedartist: null,
  SelectedAlbum: null,
  showMore: false,
  trackData: null,
  AccessToken: localStorage.getItem("access_token"),
  userData: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };

    case SET_SELECT_ARTIST:
      return {
        ...state,
        Selectedartist: action.payload,
      };
    case SET_SELECT_ALBUM:
      return {
        ...state,
        SelectedAlbum: action.payload,
      };
    case SET_TRACK:
      return {
        ...state,
        trackData: action.payload,
      };
    case SET_ACCESS_TOKEN:
      return {
        ...state,
        AccessToken: action.payload,
      };

    case SHOW_MORE:
      return {
        ...state,
        showMore: action.payload,
      };

    case SET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
