import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getLocations } from "../state/Locations";

import { ReactComponent as TicketSVG } from "../assets/ticket.svg";
import { ReactComponent as DoctorSVG } from "../assets/doctor.svg";

import {
  MobileLayout,
  MobileHeader,
  MobileContent,
} from "../components/MobileLayout";
import { Button } from "../components/Button";
import { FormLayout, Select } from "../components/FormLayout";

const DepartmentFormLayout = styled(FormLayout)`
  label {
    font-family: "Avenir";
    font-size: large;
    color: rgba(5, 93, 135, 1);
    padding-top: 1rem;
  }
`;
const DepartmentForm = () => {
  const dispatch = useDispatch();
  const locations = useSelector((state) => state.locations);

  useEffect(() => {
    dispatch(getLocations());
  }, [dispatch]);
  if (locations === null) return <div>Network error please try later</div>;
  if (locations.length === 0) return <div>No locations found</div>;

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

export function Department({ onDepartment }) {
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
        <Button onClick={(e) => onDepartment("fixme")}>Valider</Button>
      </MobileContent>
    </MobileLayout>
  );
}
