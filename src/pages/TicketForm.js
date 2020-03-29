import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { ReactComponent as TicketSVG } from "../assets/ticket.svg";

import {
  MobileLayout,
  MobileHeader,
  MobileContent
} from "../components/MobileLayout";
import { Button } from "../components/Button";
import { FormLayout, RadioLayout, Radio } from "../components/FormLayout";

export function TicketForm() {
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
            <Radio active={sex === "H"} onClick={e => setSex("H")}>
              Homme
            </Radio>
            <Radio active={sex === "F"} onClick={e => setSex("F")}>
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
