import styled from "styled-components";
import arrow from "../assets/arrow.svg";

export const FormLayout = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: rgba(234, 244, 251, 1);
  border-radius: 8px;
  label {
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: small;
    color: #055d87;
  }
`;

export const RadioLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Radio = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;

  background: #ffffff;
  border: 2px solid rgba(5, 93, 136, 0.21);
  box-sizing: border-box;
  border-radius: 4px;
  font-family: Avenir;
  font-style: normal;
  font-weight: bold;
  font-size: normal;
  padding-right: 1rem;

  color: ${props => (props.active ? "#055d87" : "#CBDDE6")};
  ::before {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    background: ${props => (props.active ? "#ffcc09" : "#ffffff")};
    border: 3px solid
      ${props => (props.active ? "#055d88" : "rgba(5, 93, 136, 0.21);")};
    border-radius: 50%;
    margin: 0.5rem;
  }
`;

export const Select = styled.select`
  display: block;
  font-family: Avenir;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 30px;
  color: #055d88;
  padding: 0.6em 1.4em 0.5em 0.8em;
  width: 100%;
  max-width: 100%;
  margin: 0;
  background: #ffffff;
  border: 3px solid rgba(5, 93, 136, 0.21);
  box-sizing: border-box;
  border-radius: 4px;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  background-image: url(${arrow});
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;
  ::-ms-expand {
    display: none;
  }
  :hover {
    border-color: #888;
  }
  :focus {
    border-color: #aaa;
    box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    outline: none;
  }
  option {
    font-weight: normal;
  }
  :-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #055d88; /* your normal text color here */
  }
  :-moz-focusring * {
    color: #055d88; /* your normal text color here */
    text-shadow: none;
  }
`;
