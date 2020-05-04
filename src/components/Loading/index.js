import React from 'react';

import { StyledSpinner, StyledLoadingPage } from './StyledSpinner';

const LoadingPage = () => (
  <StyledLoadingPage>
    <StyledSpinner viewBox="0 0 50 50">
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="2"
      />
    </StyledSpinner>
  </StyledLoadingPage>
);

export default LoadingPage;
