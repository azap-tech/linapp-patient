import { NativeEventSource, EventSourcePolyfill } from "event-source-polyfill";
import { ticket_sync } from "./ClientTicket";
import { updateLocation } from "./Locations";

const version = process.env.REACT_APP_VERSION;

export function connectSse(dispatch, storeId) {
  const EventSource = NativeEventSource || EventSourcePolyfill;
  const api_sse = process.env.REACT_APP_API_SSE;
  const source = new EventSource(
    `${api_sse}/api/v2/location/${storeId}/events`,
    {
      withCredentials: true,
    }
  );

  source.onopen = () => console.log("sse open");
  source.onerror = (err) => {
    console.error("sse error", err);
    window.location.reload(true);
  };
  source.onmessage = (event) => {
    try {
      let json = JSON.parse(event.data);
      switch (json.type) {
        case "updatelocation":
          dispatch(updateLocation(json.payload));
          break;
        case "ticketupdate":
          dispatch(ticket_sync(json.payload));
          break;
        case "ping":
          console.log("ping");
          break;
        case "connected":
          console.log("sse connected");
          break;
        default:
          console.error(`error server side event unmanaged : ${json.type}`);
      }
    } catch (err) {
      console.error(err);
    }
  };
}
