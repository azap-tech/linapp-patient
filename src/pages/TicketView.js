import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import {
  MobileContent,
  MobileHeader,
  MobileLayout,
} from "../components/MobileLayout";
import { useDispatch, useSelector } from "react-redux";
import { getTicket } from "../state/ClientTicket";
import { getLocations } from "../state/Locations";
import { ButtonOutline, ButtonCancel } from "../components/Button";
import { mockComponent } from "react-dom/test-utils";
import moment from "moment";

const DateTimeLayout = styled.div`
  width: 22vh;
  height: 22vh;
  border-radius: 50%;
  border: 12px solid #ffcc09;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;
const DateDay = styled.div`
  font-family: Avenir Next;
  font-style: normal;
  font-weight: 600;
  font-size: normal;
  color: #fff;
`;
const DateHour = styled.div`
  font-family: Avenir Next;
  font-style: normal;
  font-weight: bold;
  font-size: x-large;
  color: #fff;
  text-align: center;
`;
const DateTime = ({ minutes }) => {
  console.log(minutes);

  let time = moment().add(minutes, "minutes");
  let day = time.format("MMMM Do");
  let hours = time.format("h:mm a");
  return (
    <DateTimeLayout>
      <DateDay>{day}</DateDay>
      <DateHour>{hours}</DateHour>
    </DateTimeLayout>
  );
};

const TicketTitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  margin-bottom: 15px;
`;

const TicketTitle = styled.h2`
  margin: 0;
`;

const TicketSubtitle = styled.span`
  font-family: "Avenir";
  font-size: 12px;
  line-height: 18px;
  color: rgba(4, 155, 229, 1);
`;

const TicketBodyContainer = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  padding: 32px;
  align-items: center;
  background-color: #049be5;
  border-radius: 2%;
`;

const TicketNumber = styled.div`
  margin-top: 10px;
  font-family: "Avenir";
  font-size: 50px;
  font-weight: 900;
  color: #ffffff;
`;

const TicketBodyTitle = styled.h3`
  font-family: "Avenir";
  font-size: 18px;
  font-weight: 900 !important;
  color: #ffffff !important;
  text-align: center;
  line-height: 24px;
`;

const TicketParagraphe = styled.p`
  color: #ffffff !important;
  span {
    margin: 0 20px;
  }
`;

const TicketButtonCancel = styled.div`
  margin: 10px;
`;

export function TicketView() {
  const dispatch = useDispatch();
  let { id } = useParams();
  const ticket = useSelector((state) => {
    if (state.clientTicket === null) {
      return null;
    }
    const { ticket, expectedIn, queuePosition, queueLen } = state.clientTicket;
    const location =
      state.locations &&
      state.locations.find((l) => ticket.locationId === l.id);
    return { ...ticket, expectedIn, queuePosition, queueLen, location };
  });

  useEffect(() => {
    let i = setInterval(() => {
      dispatch(getLocations());
      dispatch(getTicket(id));
    }, 3000);
    return () => clearInterval(i);
  }, [dispatch, id]);

  const cancelTicket = () => {
    fetch(`/api/v2/ticket/${ticket.id}/status`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify("CANCELED"),
    });
  };

  if (!ticket || !ticket.location) {
    return <div>loading ...</div>;
  }
  return (
    <MobileLayout>
      <MobileHeader />
      <MobileContent>
        <TicketTitleContainer>
          <div>
            <TicketTitle>{ticket.location.name}</TicketTitle>
            <TicketSubtitle>Adresse du centre</TicketSubtitle>
          </div>
          <div>
            <ButtonOutline>itinéraire</ButtonOutline>
          </div>
        </TicketTitleContainer>
        <TicketBodyContainer>
          <TicketNumber>#{ticket.id}</TicketNumber>
          <TicketBodyTitle>Date et heure de passage estimé :</TicketBodyTitle>
          <DateTime minutes={ticket.expectedIn} />
          <TicketParagraphe>
            <span>
              Votre horaire de passage est succeptible de varier, il sera mis à
              jour en temps réel votre position ({ticket.queuePosition}/
              {ticket.queueLen})
            </span>
          </TicketParagraphe>
          <TicketParagraphe>
            <span>
              Vous serez prévenu par SMS quand vous devrez vous rendre sur place
            </span>
          </TicketParagraphe>
          <TicketButtonCancel>
            <ButtonCancel onClick={cancelTicket}>
              Annuler le ticket
            </ButtonCancel>
          </TicketButtonCancel>
        </TicketBodyContainer>
      </MobileContent>
    </MobileLayout>
  );
}
