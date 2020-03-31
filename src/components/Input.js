import React from "react";
import {func, number, Requireable as bool, string} from "prop-types";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 80%;
`;

const Input = ({ label, type, value, onChange, isInvalid, errorMsg }) => {

  return (
    <>
      <label>{label}</label>
      <StyledInput type={type} value={value} onChange={onChange} />
    </>
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
