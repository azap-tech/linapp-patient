import React, { useState } from "react";

import { ReactComponent as TicketSVG } from "../assets/ticket.svg";

import {
  MobileLayout,
  MobileHeader,
  MobileContent
} from "../components/MobileLayout";
import { Button } from "../components/Button";
import { FormLayout, RadioLayout, Radio } from "../components/FormLayout";

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
          <div>
            <label>Âge</label>
            <input
              type="number"
              value={age}
              onChange={evt => setAge(evt.target.value)}
            />
          </div>
          <div>
            <label>Mobile</label>
            <input
              type="phone"
              value={phone}
              onChange={evt => setPhone(evt.target.value)}
            />
          </div>
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
