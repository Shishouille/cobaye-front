import React from 'react';

import { InlineIcon } from '@iconify/react';
import warningIcon from '@iconify/icons-dashicons/warning';

import StyledError from './StyledError';

const ErrorMessage = ({ children }) => (
  <StyledError>
    <InlineIcon icon={warningIcon} color="red" /> {children}
  </StyledError>
);

export default ErrorMessage;
