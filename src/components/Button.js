import styled from "styled-components";

export const Button = styled.button.attrs((props) => ({
  isDisabled: props.isDisabled || false,
}))`
  border: none;
  background: ${(props) => (props.isDisabled ? "#C2BCB4" : "#ffcc09")};
  cursor: ${(props) => (props.isDisabled ? "not-allowed" : "pointer")};
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
  width: 100%;
  font-family: "Avenir";
  font-size: 15px;
  border: none;
  background: #ffcc09;
  cursor: pointer;
  border-radius: 4px;
  font-family: Avenir;
  font-style: normal;
  min-height: 2rem;
  color: #fffefe;
  margin-top: auto;
  background-color: #fff;
  border: 2px solid #055d88;
  box-sizing: border-box;
  border-radius: 4px;
  color: #055d88;
  padding: 0 20px;
`;

export const LinkButton = styled.div`
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-decoration: underline;
  display: inline;
  margin: 0;
  padding: 0;

  :hover,
  :focus {
    text-decoration: none;
  }
`;

export const ButtonCancel = styled(ButtonOutline)`
  background-color: transparent;
  color: #fff;
  border: 2px solid #fff;
`;
