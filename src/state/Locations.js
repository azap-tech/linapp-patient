import { createSlice } from "@reduxjs/toolkit";

const api = process.env.REACT_APP_API || "";

const locations = createSlice({
  initialState: null,
  name: "locations",
  reducers: {
    update: (state, action) => {
      const location = action.payload;
      const id = location.id;
      const idx = state.findIndex(t => t.id === id);
      state[idx] = location;
    },
    sync: (state, action) => {
      return action.payload;
    }
  }
});

export function getLocations() {
  return dispatch => {
    dispatch(locations.actions.sync(null));
    fetch(`${api}/api/v2/location`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        dispatch(locations.actions.sync(data.locations));
      })
      .catch(err => {
        console.error(err);
        dispatch(locations.actions.sync([]));
      });
  };
}

export function updateLocation(location) {
  return locations.action.update_location(location);
}

export const reducer = locations.reducer;
