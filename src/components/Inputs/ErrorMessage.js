import React from 'react';

import StyledError from './StyledError';

const ErrorMessage = ({ children }) => {
  return (
    <StyledError>
      {children}
    </StyledError>
  );
};

export default ErrorMessage;
