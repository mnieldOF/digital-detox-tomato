import React from "react";
import { useField } from "formik";
import styled from "@emotion/styled";

const StyledInput = styled.input`
  border: 1px solid #000;
  border-radius: 4px;
  background: transparent;
  padding: 7px;
`;

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>
        {label}
        {props.required ? "*" : null}
      </label>
      <StyledInput className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? <p id="error">{meta.error}</p> : null}
    </>
  );
};

export default MyTextInput;
