import { NativeEventSource, EventSourcePolyfill } from "event-source-polyfill";
import { actions as ticketActions } from "./ClientTicket";
import { actions as workerActions } from "./Workers";

const version = process.env.REACT_APP_VERSION;

export function connectSse(dispatch, storeId) {
  const EventSource = NativeEventSource || EventSourcePolyfill;
  const api_sse = process.env.REACT_APP_API_SSE;
  const source = new EventSource(`${api_sse}/api/v2/store/${storeId}/events`, {
    withCredentials: true
  });
  source.onopen = () => console.log("sse open");
  source.onerror = err => {
    console.error("sse error", err);
    window.location.reload(true);
  };
  source.onmessage = event => {
    try {
      let json = JSON.parse(event.data);
      switch (json.type) {
        case "updatelocation":
          dispatch(update_location(json.payload));
          break;
        case "ping":
          if (json.payload["version"]) {
            let l = version.split(".");
            let v = json.payload.version.split(".");
            if (v[0] > l[0] || v[1] > l[1] || v[2] > l[2]) {
              window.location.reload(true);
            }
          }
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
