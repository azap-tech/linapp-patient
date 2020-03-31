import React, { useState } from "react";

import { ReactComponent as TicketSVG } from "../assets/ticket.svg";

import {
  MobileLayout,
  MobileHeader,
  MobileContent
} from "../components/MobileLayout";
import { Button } from "../components/Button";
import { FormLayout, RadioLayout, Radio } from "../components/FormLayout";
import Input from "../components/Input";
import styled from "styled-components";

const DivAge = styled.div`
    display: flex;
justify-content: space-between;
    margin: 20px 0 10px;
`;

const DivNumber = styled.div`
    display: flex;
justify-content: space-between;
    margin: 10px 0 20px;
`;

export function TicketForm({ location, onTicket }) {
  const [sex, setSex] = useState("F");
  const [age, setAge] = useState(null);
  const [phone, setPhone] = useState(null);

  return (
    <MobileLayout>
      <MobileHeader />
      <MobileContent>
        <h2>
          <TicketSVG />
          Prendre un ticket au Centre {location.name}
        </h2>
        <FormLayout>
          <RadioLayout>
            <label>Sex</label>
            <Radio active={sex === "H"} onClick={e => setSex("H")}>
              Homme
            </Radio>
            <Radio active={sex === "F"} onClick={e => setSex("F")}>
              Femme
            </Radio>
          </RadioLayout>
          <DivAge>
            <Input label="Âge" type="number" value={age} onChange={evt => setAge(evt.target.value)} />
          </DivAge>
          <DivNumber>
            <Input label="Mobile" type="phone" value={phone} onChange={evt => setPhone(evt.target.value)} />
          </DivNumber>
        </FormLayout>
        <p>
          En cliquant sur le bouton ci-dessous j’accepte les conditions
          générales d’utilisation du service
        </p>
        <Button onClick={e => onTicket({ sex, age: parseInt(age), phone })}>
          Valider
        </Button>
      </MobileContent>
    </MobileLayout>
  );
}
