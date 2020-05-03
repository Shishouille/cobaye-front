import React from 'react';
import { useField } from 'formik';

import ErrorMessage from './ErrorMessage';
import { StyledInput, StyledLabel } from './StyledInput';

const Input = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <StyledInput {...field} {...props} />
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </>
  );
};

export default Input;