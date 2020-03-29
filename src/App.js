import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { ReactComponent as InfoSVG } from "./assets/info.svg";
import { ReactComponent as BurgerSVG } from "./assets/burger.svg";
import { ReactComponent as TicketSVG } from "./assets/ticket.svg";
import { ReactComponent as DoctorSVG } from "./assets/doctor.svg";
import arrow from "./assets/arrow.svg";
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
  h2 {
    color: #055d88;
    text-align: center;
    font-size: large;
  }
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
  min-height: 3rem;

  color: #fffefe;
  margin-top: auto;
`;

// Component

const Select = styled.select`
  display: block;
  font-family: Avenir;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 30px;
  color: #055d88;
  padding: 0.6em 1.4em 0.5em 0.8em;
  width: 100%;
  max-width: 100%;
  margin: 0;
  background: #ffffff;
  border: 3px solid rgba(5, 93, 136, 0.21);
  box-sizing: border-box;
  border-radius: 4px;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  background-image: url(${arrow});
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;
  ::-ms-expand {
    display: none;
  }
  :hover {
    border-color: #888;
  }
  :focus {
    border-color: #aaa;
    box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    outline: none;
  }
  option {
    font-weight: normal;
  }
  :-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #055d88; /* your normal text color here */
  }
  :-moz-focusring * {
    color: #055d88; /* your normal text color here */
    text-shadow: none;
  }
`;
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
      <Select id="department">
        <option value="78">78</option>
      </Select>
      <label>Type de consultation</label>
      <Select id="kind">
        <option value="covid">Covid 19</option>
      </Select>
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
        <h2>
          Bonjour, bienvenue sur l’interface de prise de ticket pour une
          consultation médicale
        </h2>
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
