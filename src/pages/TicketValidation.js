import React from "react";
import { useHistory } from "react-router-dom";
import { ReactComponent as SmsSVG } from "../assets/sms.svg";

import {
  MobileLayout,
  MobileHeader,
  MobileContent
} from "../components/MobileLayout";
import { Button, LinkButton } from "../components/Button";
import { FormLayout } from "../components/FormLayout";

export function TicketValidation() {
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
          <LinkButton>Code non reçu ?</LinkButton>
        </FormLayout>
        <Button onClick={e => history.push("/ticket-view")}>Valider</Button>
      </MobileContent>
    </MobileLayout>
  );
}
