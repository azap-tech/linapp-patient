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

  /*
  useEffect(() => {
    if (location && location.id) {
      connectSse(dispatch, location.id);
    }
  }, [dispatch, location]);
  */
  return (
    <Switch>
      <Route path="/ticket-view/:id">
        <TicketView />
      </Route>
      <Route path="/ticket-confirmation/:id">
        <TicketView confirmation={true} />
      </Route>
    </Switch>
  );
}

export default App;
