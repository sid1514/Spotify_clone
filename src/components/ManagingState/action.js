// actions.js
export const SET_TOKEN = "SET_TOKEN";
export const SET_SELECT_ARTIST = "SET_SELECT_ARTIST";
export const SET_SELECT_ALBUM = "SET_SELECT_ALBUM";
export const SET_ACCESS_TOKEN = "SET_ACCESS_TOKEN";
export const SET_SHOWTRACK = "SET_SHOWTRACK";
export const SET_TRACK = "SET_TRACK";
export const SHOW_MORE = "SHOW_MORE";
export const SET_USER_DATA = "USER_DATA";
export const REMOVE_ACCESS_TOKEN = "REMOVE_ACCESS_TOKEN";
export const setToken = (newVal) => ({
  type: SET_TOKEN,
  payload: newVal,
});

export const setShowMore = (val) => ({
  type: SHOW_MORE,
  payload: val,
});
export const setAccessToken = (newVal) => ({
  type: SET_ACCESS_TOKEN,
  payload: newVal,
});

export const removeAccessToken = () => ({
  type:REMOVE_ACCESS_TOKEN,
})
export const setSelectArtist = (selctedArtists) => ({
  type: SET_SELECT_ARTIST,
  payload: selctedArtists,
});
export const setSelectAlbum = (selctedAlbum) => ({
  type: SET_SELECT_ALBUM,
  payload: selctedAlbum,
});


export const setShowTracks = () => ({
  type: SET_SHOWTRACK,
});

export const setTrack = (trackObj) => ({
  type: SET_TRACK,
  payload: trackObj,
});

export const setUserData = (user) =>( {
  type: SET_USER_DATA,
  payload:user,
})