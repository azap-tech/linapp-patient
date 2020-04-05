import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getLocations } from "../state/Locations";

import { ReactComponent as DoctorSVG } from "../assets/doctor.svg";

import {
  MobileLayout,
  MobileHeader,
  MobileContent,
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
const LocationCard = ({ location, ...props }) => {
  return (
    <LocationCardLayout {...props}>
      <h3>
        <div>{location.name}</div>
        <span>{location.address}</span>
      </h3>

      <TimeLayout>
        <span>{location.waitingTime}</span>min
      </TimeLayout>
    </LocationCardLayout>
  );
};

export function Locations({ onLocation }) {
  const dispatch = useDispatch();
  const locations = useSelector((state) => state.locations);

  useEffect(() => {
    let id = setInterval(() => {
      dispatch(getLocations());
    }, 3000);
    return () => clearInterval(id);
  }, [dispatch]);
  return (
    <MobileLayout>
      <MobileHeader />
      <MobileContent>
        <h2>
          <DoctorSVG />
          Voici la liste des centres suceptibles de vous accueillir
        </h2>
        <input />
        {locations === null && <div>Network error please try later</div>}
        {locations.length === 0 && <div>No locations found</div>}
        {locations &&
          locations.map((l) => (
            <LocationCard
              key={l.id}
              location={l}
              onClick={() => onLocation(l)}
            />
          ))}
      </MobileContent>
    </MobileLayout>
  );
}
