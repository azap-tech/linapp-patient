import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";

import { reducer as clientTicket } from "./ClientTicket";
import { reducer as locations } from "./Locations";

const reducer = {
  clientTicket,
  locations
};

const middleware = [...getDefaultMiddleware(), logger];

export const createStore = defaultState =>
  configureStore({
    reducer,
    middleware,
    devTools: process.env.NODE_ENV !== "production",
    preloadedState: defaultState
  });
