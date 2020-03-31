import React from "react";
import { func, number, Requireable as bool, string } from "prop-types";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 80%;
`;

const StyledDiv = styled.div`
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

const Input = ({ label, type, value, onChange, isInvalid, errorMsg }) => {
  return (
    <div>
      <StyledDiv>
        <label>{label}</label>
        <StyledInput type={type} value={value} onChange={onChange} />
      </StyledDiv>
      {
        isInvalid &&  <P>{errorMsg}</P>
      }
    </div>
  );
};

Input.propType = {
  label: string.isRequired,
  type: string.isRequired,
  value: number.isRequired,
  onChange: func.isRequired,
  isInvalid: bool,
};

Input.defaultProps = {
  isInvalid: false,
};

export default Input;
