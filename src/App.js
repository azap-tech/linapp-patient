import React, { useState } from "react";
import { Switch, Route, useHistory, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { newTicket } from "./state/ClientTicket";

import { Department } from "./pages/Departement";
import { Locations } from "./pages/Locations";
import { TicketForm } from "./pages/TicketForm";
import { TicketValidation } from "./pages/TicketValidation";
import { TicketView } from "./pages/TicketView";
import { useEffect } from "react";
import { connectSse } from "./state/sse";

// check if value exist
function RedirectIfUndefined({ value, to, children }) {
  if (!value) {
    return <Redirect to={to} />;
  }
  return children;
}

function App() {
  const dispatch = useDispatch();
  const [department, setDepartment] = useState(null);
  const [location, setLocation] = useState(null);
  const [ticket, setTicket] = useState(null);
  const history = useHistory();

  useEffect(() => {
    if (location && location.id) {
      connectSse(dispatch, location.id);
    }
  }, [dispatch, location]);
  return (
    <Switch>
      <Route exact strict path="/">
        <Department
          onDepartment={(d) => {
            setDepartment(d);
            history.push("/locations");
          }}
        />
      </Route>
      <Route path="/locations">
        <RedirectIfUndefined value={department} to="/">
          <Locations
            onLocation={(l) => {
              setLocation(l);
              history.push("/ticket-form");
            }}
          />
        </RedirectIfUndefined>
      </Route>
      <Route path="/ticket-form">
        <RedirectIfUndefined value={location} to="/locations">
          <TicketForm
            location={location}
            onTicket={(t) => {
              dispatch(newTicket({ location, ...t })).then((id) => {
                setTicket({ ...t, id });
                history.push("/ticket-validation");
              });
            }}
          />
        </RedirectIfUndefined>
      </Route>
      <Route path="/ticket-validation">
        <RedirectIfUndefined value={ticket} to="/locations">
          <TicketValidation
            ticket={ticket}
            onValidation={() => history.push(`/ticket-view/${ticket.id}`)}
          />
        </RedirectIfUndefined>
      </Route>
      <Route path="/ticket-view/:id">
        <TicketView />
      </Route>
    </Switch>
  );
}

export default App;
