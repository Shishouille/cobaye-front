import React from 'react';
import { Navigation, Footer, StyledLayout } from '.';

const Layout = ({ children }) => (
  <StyledLayout>
    <Navigation />
    <main>
      {children}
    </main>
    <Footer />
  </StyledLayout>
);
export default Layout;