import React from "react";
import { string, number, func } from "prop-types";
import styled from "styled-components";

const StyledInput = styled.input`
    width: 80%;
`;

const Input = ({label, type, value, onChange}) => {
  return(
      <>
          <label>{label}</label>
          <StyledInput
              type={type}
              value={value}
              onChange={onChange}
          />
      </>
  )
};


Input.propType = {
    label: string.isRequired,
    type: string.isRequired,
    value: number.isRequired,
    onChange: func.isRequired,
};


export default Input;