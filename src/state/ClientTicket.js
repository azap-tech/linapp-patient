import { createSlice } from "@reduxjs/toolkit";

const api = process.env.REACT_APP_API || "";

const clientTicket = createSlice({
  initialState: null,
  name: "clientTicket",
  reducers: {
    set: (state, action) => action.payload,
    sync: (state, action) => {
      if (state.id === action.payload) {
        return action.payload;
      } else {
        return state;
      }
    },
  },
});

export function newTicket({ location, age, sex, phone, name }) {
  const ticketForm = {
    locationId: location.id,
    name: name,
    age,
    sex,
    phone,
    pathology: "",
  };
  return (dispatch) => {
    return fetch(`${api}/api/v2/ticket/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ticketForm),
    })
      .then((res) => res.json())
      .then((res) => Promise.resolve(res.id))
      .catch((error) => {
        console.error(`new ticket action error : ${error}`);
        dispatch({ type: "connection-error", error });
        return Promise.reject(error);
      });
  };
}

export function getTicket(id) {
  return (dispatch) => {
    return fetch(`${api}/api/v2/ticket/${id}`)
      .then((res) => res.json())
      .then((res) => dispatch(clientTicket.actions.set(res)))
      .catch((error) => {
        console.error(`get ticket action error : ${error}`);
        dispatch(clientTicket.actions.set(null));
        dispatch({ type: "connection-error", error });
        return Promise.reject(error);
      });
  };
}
export function ticket_sync(t) {
  return clientTicket.actions.sync(t);
}

export const reducer = clientTicket.reducer;
