import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { ReactComponent as DoctorSVG } from "../assets/doctor.svg";

import {
  MobileLayout,
  MobileHeader,
  MobileContent
} from "../components/MobileLayout";

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

export function Locations() {
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
