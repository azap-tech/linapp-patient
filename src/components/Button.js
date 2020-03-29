import styled from "styled-components";

export const Button = styled.button`
  border: none;
  background: #ffcc09;
  border-radius: 4px;
  font-family: Avenir;
  font-style: normal;
  font-weight: bold;
  font-size: x-large;
  width: 90%;
  min-height: 3rem;

  color: #fffefe;
  margin-top: auto;
`;

export const ButtonOutline = styled(Button)`
  background-color: #fff;
  border: 3px solid #055d88;
  box-sizing: border-box;
  border-radius: 4px;
  color: #055d88;
`;
