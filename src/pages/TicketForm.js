import React, { useState } from "react";

import { ReactComponent as TicketSVG } from "../assets/ticket.svg";

import {
  MobileLayout,
  MobileHeader,
  MobileContent,
} from "../components/MobileLayout";
import { Button } from "../components/Button";
import { FormLayout, RadioLayout, Radio } from "../components/FormLayout";
import Input from "../components/Input";
import styled from "styled-components";

const DivAge = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0 0;
`;

const DivNumber = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0 0;
`;

const P = styled.div`
  margin: 1px;
  text-align: center;
  font-family: Avenir;
  font-style: normal;
  font-weight: normal;
  font-size: small;
  color: #c04f06;
`;

const VALID_PHONE_REGEX = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/g;

//phoneNumber.length > 10

export function TicketForm({ location, onTicket }) {
  const [sex, setSex] = useState("F");
  const [age, setAge] = useState(null);
  const [phone, setPhone] = useState(null);
  const [isvalidPhone, setIsvalidPhone] = useState(false);
  const [isInvalidPhone, setIsInvalidPhone] = useState(false);
  const [isInvalidAge, setInvalidAge] = useState(false);

  const onPhoneChange = (e) => {
    const phoneNumber = e.target.value;
    setPhone(phoneNumber);
    if (VALID_PHONE_REGEX.test(phoneNumber)) {
      setIsvalidPhone(true);
      setIsInvalidPhone(false)
    } else {
      setIsvalidPhone(false);
    }
    if(phoneNumber.length > 10 && !VALID_PHONE_REGEX.test(phoneNumber)){
      setIsInvalidPhone(true);
    }
  };

  const onAgeChange = (e) => {
    setAge(e.target.value);
    const age = parseInt(e.target.value, 10);
    if (0 < age && age < 200) {
      setInvalidAge(false);
    } else {
      setInvalidAge(true);
    }
  };

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
            <Radio active={sex === "H"} onClick={(e) => setSex("H")}>
              Homme
            </Radio>
            <Radio active={sex === "F"} onClick={(e) => setSex("F")}>
              Femme
            </Radio>
          </RadioLayout>
          <div>
            <DivAge>
              <Input
                label="Âge"
                type="number"
                value={age}
                onChange={onAgeChange}
              />
            </DivAge>
            {isInvalidAge && <P>Veuillez renseigner un âge valide</P>}
          </div>
          <div>
          <DivNumber>
            <Input
              label="Mobile"
              type="phone"
              value={phone}
              onChange={onPhoneChange}
              isInvalid={isInvalidPhone}
            />
          </DivNumber>
            {isInvalidPhone && <P>Veuillez renseigner un numéro de téléphone valide</P>}
          </div>
        </FormLayout>
        <p>
          En cliquant sur le bouton ci-dessous j’accepte les conditions
          générales d’utilisation du service
        </p>
        <Button isDisabeled={isInvalidAge || !isvalidPhone} onClick={(e) => (!isInvalidAge && isvalidPhone) && onTicket({ sex, age: parseInt(age), phone })}>
          Valider
        </Button>
      </MobileContent>
    </MobileLayout>
  );
}
