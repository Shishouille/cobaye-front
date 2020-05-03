import React from 'react';
import { useField } from 'formik';

import ErrorMessage from './ErrorMessage';
import { StyledSelect, StyledLabel } from './StyledInput';

const Select = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <StyledSelect>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </StyledSelect>
  );
};

export default Select;
