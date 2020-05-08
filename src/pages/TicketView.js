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
import { ReactComponent as SmsSVG } from "../assets/smsWhite.svg";
import { ReactComponent as TimeSVG } from "../assets/time.svg";
import moment from "moment";
import "moment/locale/fr";
moment.locale("fr");

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
  let time = moment().add(minutes, "minutes");
  let day = time.format("Do  MMMM");
  let hours = time.format("HH:mm");
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
  background-color: ${(props) => (props.confirmation ? "#2EA64F" : "#049be5")};
  border-radius: 2%;
`;

const TicketNumber = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: "Avenir";
  font-size: 50px;
  font-weight: 900;
  color: #ffffff;
`;

const TicketHead = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: "Avenir";
  font-size: 1.5em;
  text-align: center;
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

const DotLine = styled.div`
  border-bottom: 1px dotted white;
  width: 100%;
`;

const TicketBodyHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;
  width: 100%;
  height: 20px;
  position: relative;
  margin-bottom: -20px;
  z-index: 2;
  background-color: transparent;
`;

const TicketButtonCancel = styled.div`
  margin: 10px;
`;

const TicketBodyHeaderPlain = styled.div`
  flex: 1;
  border-radius: 100% 100% 0 0;
  background-color: ${(props) => (props.confirmation ? "#2EA64F" : "#049be5")};
`;

const TicketBodyHeaderEmpty = styled.div`
  flex: 1;
  background-color: white;
  border-radius: 0 0 15% 15%;
`;

const Title = styled.h2`
  font-family: Avenir;
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 130%;
  color: #055d88;
`;

const TicketList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 90%;
`;
const TicketLayout = styled.div`
  flex: 1;
  width: 100%;
  margin-bottom: ${(props) => (props.active ? "2rem" : "1rem")};
  background: ${(props) =>
    props.active ? "#2EA64F" : props.selected ? "#049BE5" : "#eaf4fb"};
  color: ${(props) => (props.active || props.selected ? "#FFF" : "#049BE5")};
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
`;

const Ticket = ({ position, active, selected }) => {
  return (
    <TicketLayout active={active} selected={selected}>
      {selected && <div>Votre ticket</div>}
      {active && <div>En cours</div>}
      {!selected && !active && <div></div>}
      <div>{position}</div>
    </TicketLayout>
  );
};

export function TicketView({ confirmation }) {
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
    let i = setInterval(
      (() => {
        dispatch(getLocations());
        dispatch(getTicket(id));
      })(),
      60000
    );
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

  function createTicketList(queuePosition, queueLen) {
    let res = [];
    res.push(<Ticket key="0" position={0} active />);
    for (var i = 1; i < queuePosition; i++) {
      res.push(<Ticket key={i} position={i} />);
    }
    res.push(<Ticket key={queuePosition} position={queuePosition} selected />);
    for (var i = queuePosition + 1; i < queueLen; i++) {
      res.push(<Ticket key={i} position={i} />);
    }
    return res;
  }

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
            <TicketSubtitle>
              {ticket.location.address +
                " " +
                ticket.location.zipCode +
                " " +
                ticket.location.city}
            </TicketSubtitle>
          </div>
          <div>
            <ButtonOutline>
              <a
                href={
                  "geo:?q=" +
                  ticket.location.address.split(" ").join("+") +
                  "+" +
                  ticket.location.zipCode +
                  "+" +
                  ticket.location.city
                }
              >
                itinéraire
              </a>
            </ButtonOutline>
          </div>
        </TicketTitleContainer>
        <TicketBodyHeaderContainer confirmation={confirmation}>
          <TicketBodyHeaderPlain confirmation={confirmation} />
          <TicketBodyHeaderEmpty confirmation={confirmation} />
          <TicketBodyHeaderPlain confirmation={confirmation} />
        </TicketBodyHeaderContainer>
        <TicketBodyContainer confirmation={confirmation}>
          {confirmation ? (
            <TicketHead>C’est à vous !</TicketHead>
          ) : (
            <TicketNumber>#{ticket.id}</TicketNumber>
          )}
          <DotLine />
          <TicketBodyTitle>
            {confirmation
              ? "Merci d’avoir patienté"
              : "Date et heure de passage estimé :"}
          </TicketBodyTitle>
          {confirmation ? (
            <TicketNumber>#{ticket.id}</TicketNumber>
          ) : (
            <DateTime minutes={ticket.expectedIn} />
          )}
          <TicketParagraphe>
            <SmsSVG />
            <span>
              Votre horaire de passage est succeptible de varier, il sera mis à
              jour en temps réel.
            </span>
          </TicketParagraphe>
          <TicketParagraphe>
            <TimeSVG />
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
        <Title>Votre position dans la file</Title>
        <TicketList>
          {createTicketList(ticket.queuePosition, ticket.queueLen)}
        </TicketList>
      </MobileContent>
    </MobileLayout>
  );
}
