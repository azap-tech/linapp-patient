import React, { useState } from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";

import { ReactComponent as InfoSVG } from "./assets/info.svg";
import { ReactComponent as BurgerSVG } from "./assets/burger.svg";
import { ReactComponent as TicketSVG } from "./assets/ticket.svg";
import { ReactComponent as DoctorSVG } from "./assets/doctor.svg";
import { ReactComponent as SmsSVG } from "./assets/sms.svg";
import arrow from "./assets/arrow.svg";
import logo from "./assets/logo.png";

function App() {
  return (
    <Router>
      <div>
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
  h1 {
    color: #055d88;
    text-align: center;
    font-size: large;
  }
  h2 {
    color: #055d88;
    text-align: left;
    font-size: large;
    svg {
      float: left;
      width: 20%;
      height: auto;
    }
  }
  p {
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: small;
    display: flex;
    align-items: center;
    text-align: center;
    color: #055d87;
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

const ButtonOutline = styled(Button)`
  background-color: #fff;
  border: 3px solid #055d88;
  box-sizing: border-box;
  border-radius: 4px;
  color: #055d88;
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

const FormLayout = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: rgba(234, 244, 251, 1);
  border-radius: 8px;
  label {
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: small;
    color: #055d87;
  }
`;
const DepartmentFormLayout = styled(FormLayout)`
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
  const history = useHistory();
  return (
    <MobileLayout>
      <MobileHeader />
      <MobileContent>
        <div>
          <TicketSVG />
          <DoctorSVG />
        </div>
        <h1>
          Bonjour, bienvenue sur l’interface de prise de ticket pour une
          consultation médicale
        </h1>
        <DepartmentForm />
        <Button onClick={e => history.push("/locations")}>Valider</Button>
      </MobileContent>
    </MobileLayout>
  );
}

// compoennt
const LocationCardLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  margin-top: 1rem;
  background: #ffffff;
  border: 2px solid rgba(102, 102, 102, 0.02);
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  h3 {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0;
    font-family: Avenir;
    font-style: normal;
    font-weight: 900;
    font-size: x-large;

    color: #055d88;
    span {
      font-family: Avenir;
      font-style: normal;
      font-weight: normal;
      font-size: small;

      /* Bleu pro */
      color: #055d87;
    }
  }
`;
const TimeLayout = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: small;
  line-height: 8px;

  /* identical to box height, or 33% */
  display: flex;
  align-items: center;
  text-align: right;

  /* Gray 3 */
  color: #828282;
  span {
    font-size: large;
  }
`;
const LocationCard = ({ name, adress, time }) => {
  const history = useHistory();
  return (
    <LocationCardLayout onClick={e => history.push("/ticket-form")}>
      <h3>
        <div>CHU Argenteuil </div>
        <span>Adresse du centre</span>
      </h3>

      <TimeLayout>
        <span>60</span>min
      </TimeLayout>
    </LocationCardLayout>
  );
};
function Locations() {
  return (
    <MobileLayout>
      <MobileHeader />
      <MobileContent>
        <h2>
          <DoctorSVG />
          Voici la liste des centres suceptibles de vous accueillir
        </h2>
        <input />
        <LocationCard name="CHU Argenteuil" time="60" />
        <LocationCard name="CHU Argenteuil" time="60" />
        <LocationCard name="CHU Argenteuil" time="60" />
        <LocationCard name="CHU Argenteuil" time="60" />
      </MobileContent>
    </MobileLayout>
  );
}

const RadioLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Radio = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;

  background: #ffffff;
  border: 2px solid rgba(5, 93, 136, 0.21);
  box-sizing: border-box;
  border-radius: 4px;
  font-family: Avenir;
  font-style: normal;
  font-weight: bold;
  font-size: normal;
  padding-right: 1rem;

  color: ${props => (props.active ? "#055d87" : "#CBDDE6")};
  ::before {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    background: ${props => (props.active ? "#ffcc09" : "#ffffff")};
    border: 3px solid
      ${props => (props.active ? "#055d88" : "rgba(5, 93, 136, 0.21);")};
    border-radius: 50%;
    margin: 0.5rem;
  }
`;
function TicketForm() {
  const history = useHistory();
  const [sex, setSex] = useState("F");
  return (
    <MobileLayout>
      <MobileHeader />
      <MobileContent>
        <h2>
          <TicketSVG />
          Prendre un ticket au Centre Colombes
        </h2>
        <FormLayout>
          <RadioLayout>
            <label>Sex</label>
            <Radio active={sex == "H"} onClick={e => setSex("H")}>
              Homme
            </Radio>
            <Radio active={sex == "F"} onClick={e => setSex("F")}>
              Femme
            </Radio>
          </RadioLayout>
          <div>
            <label>Âge</label> <input />
          </div>
          <div>
            <label>Mobile</label> <input />
          </div>
        </FormLayout>
        <p>
          En cliquant sur le bouton ci-dessous j’accepte les conditions
          générales d’utilisation du service
        </p>
        <Button onClick={e => history.push("/ticket-validation")}>
          Valider
        </Button>
      </MobileContent>
    </MobileLayout>
  );
}
function TicketValidation() {
  const history = useHistory();
  return (
    <MobileLayout>
      <MobileHeader />
      <MobileContent>
        <h2>
          <SmsSVG />
          Merci de saisir le code de vérification reçu par SMS
        </h2>
        <FormLayout>
          <input type="text" />
          <a href="">Code non reçu ?</a>
        </FormLayout>
        <Button onClick={e => history.push("/ticket-view")}>Valider</Button>
      </MobileContent>
    </MobileLayout>
  );
}
function TicketView() {
  return (
    <MobileLayout>
      <MobileHeader />
      <MobileContent>
        <h2>
          <TicketSVG />
          Prendre un ticket au Centre Colombes
        </h2>
        <ButtonOutline>Voir l’itinéraire</ButtonOutline>
      </MobileContent>
    </MobileLayout>
  );
}

export default App;
