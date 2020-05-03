import React from 'react';
import { useField } from 'formik';

import ErrorMessage from './ErrorMessage';
import { StyledSwitch } from './StyledInput';

const Checkbox = ({ ...props }) => {
  // We need to tell useField what type of input this is
  // since React treats radios and checkboxes differently
  // than inputs/select/textarea.
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <div className="form-toggle-switch">
      <StyledSwitch>
            <div className="button b2" id="button-10">
              <input type="checkbox" {...field} {...props} className="checkbox" />
              <div className="knobs">
                <span>OUI</span>
              </div>
              <div className="layer" />
            </div>
      </StyledSwitch>
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </div>
  );
};

export default Checkbox;
