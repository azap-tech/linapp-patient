import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Department } from "./pages/Departement";
import { Locations } from "./pages/Locations";
import { TicketForm } from "./pages/TicketForm";
import { TicketValidation } from "./pages/TicketValidation";
import { TicketView } from "./pages/TicketView";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact strict path="/">
          <Department />
        </Route>
        <Route path="/locations">
          <Locations />
        </Route>
        <Route path="/ticket-form">
          <TicketForm />
        </Route>
        <Route path="/ticket-validation">
          <TicketValidation />
        </Route>
        <Route path="/ticket-view">
          <TicketView />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
