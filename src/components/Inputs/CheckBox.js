import React from 'react';
import { useField } from 'formik';

import ErrorMessage from './ErrorMessage';
import {
  CheckboxContainer, Icon, StyledCheckbox, HiddenCheckbox,
} from './StyledCheckbox';

const Checkbox = ({ className, children, ...props }) => {
  // We need to tell useField what type of input this is
  // since React treats radios and checkboxes differently
  // than inputs/select/textarea.
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <div className="form-checkbox">
      <label>
        <CheckboxContainer className={className}>
          <HiddenCheckbox type="checkbox" {...field} {...props} />
          <StyledCheckbox {...field}>
            <Icon viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" />
            </Icon>
          </StyledCheckbox>
        </CheckboxContainer>
        {children}
      </label>
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </div>
  );
};


export default Checkbox;
