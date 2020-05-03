import React from 'react';
import { useField } from 'formik';

import ErrorMessage from './ErrorMessage';
import { StyledTextarea, StyledLabel } from './StyledInput';

const TextArea = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <StyledTextarea {...field} {...props} />
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </>
  );
};

export default TextArea;