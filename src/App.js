import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { ReactComponent as InfoSVG } from "./assets/info.svg";
import { ReactComponent as BurgerSVG } from "./assets/burger.svg";
import { ReactComponent as TicketSVG } from "./assets/ticket.svg";
import { ReactComponent as DoctorSVG } from "./assets/doctor.svg";
import logo from "./assets/logo.png";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
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
      </div>
    </Router>
  );
}

const Logo = styled.img.attrs(props => ({ src: logo }))``;

// Layout
const MobileLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
`;
const MobileHeaderLayout = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: space-around;

  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: rgba(4, 155, 229, 1);
`;

const MobileContent = styled.div`
  flex: 1;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  border: none;
  background: #ffcc09;
  border-radius: 4px;
  font-family: Avenir;
  font-style: normal;
  font-weight: bold;
  font-size: x-large;
  width: 90%;

  color: #fffefe;
  margin-top: auto;
`;

// Component

const MobileHeader = () => {
  return (
    <MobileHeaderLayout>
      <BurgerSVG />
      <Logo />
      <InfoSVG />
    </MobileHeaderLayout>
  );
};

const DepartmentFormLayout = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-bottom: 1rem;
  background-color: rgba(234, 244, 251, 1);
  border-radius: 8px;
  label {
    font-family: "Avenir";
    font-size: large;
    color: rgba(5, 93, 135, 1);
    padding-top: 1rem;
  }
`;
const DepartmentForm = () => {
  return (
    <DepartmentFormLayout>
      <label>Votre département</label>
      <select id="department">
        <option value="78">78</option>
      </select>
      <label>Type de consultation</label>
      <select id="kind">
        <option value="covid">Covid 19</option>
      </select>
    </DepartmentFormLayout>
  );
};

// Pages
function Department() {
  return (
    <MobileLayout>
      <MobileHeader />

      <MobileContent>
        <div>
          <TicketSVG />
          <DoctorSVG />
        </div>
        <p>
          Bonjour, bienvenue sur l’interface de prise de ticket pour une
          consultation médicale
        </p>
        <DepartmentForm />
        <Button>Valider</Button>
      </MobileContent>
    </MobileLayout>
  );
}
function Locations() {
  return (
    <MobileLayout>
      <MobileHeader />
      <div> Locations</div>
    </MobileLayout>
  );
}
function TicketForm() {
  return (
    <MobileLayout>
      <MobileHeader />
      <div> TicketForm</div>
    </MobileLayout>
  );
}
function TicketValidation() {
  return (
    <MobileLayout>
      <MobileHeader />
      <div> TicketValidation</div>
    </MobileLayout>
  );
}
function TicketView() {
  return (
    <MobileLayout>
      <MobileHeader />
      <div> TicketView</div>
    </MobileLayout>
  );
}

export default App;
