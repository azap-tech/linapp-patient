import React from "react";
import styled from "styled-components";
import { ReactComponent as InfoSVG } from "../assets/info.svg";
import { ReactComponent as BurgerSVG } from "../assets/burger.svg";
import logo from "../assets/logo.svg";

const Logo = styled.img.attrs((props) => ({ src: logo }))``;

export const MobileLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100%;
`;

const MobileHeaderLayout = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: space-around;

  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: rgba(4, 155, 229, 1);
`;
export const MobileHeader = () => {
  return (
    <MobileHeaderLayout>
      <Logo />
    </MobileHeaderLayout>
  );
};

export const MobileContent = styled.div`
  flex: 1;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    color: #055d88;
    text-align: center;
    font-size: large;
  }
  h2 {
    color: #055d88;
    text-align: left;
    font-size: large;
    svg {
      float: left;
      width: 20%;
      height: auto;
    }
  }
  h3 {
    /* SubHead / Av R 18px / Desktop */
    font-family: Avenir;
    font-style: normal;
    font-weight: lighter;
    font-size: normal;
    color: #055d87;
  }
  p {
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: small;
    display: flex;
    align-items: center;
    text-align: center;
    color: #055d87;
  }
`;
