import React from 'react';
import {
  Navigation, Footer, Sider, StyledLayout,
} from '.';

const Layout = ({ children }) => (
  <StyledLayout>
    <Sider />
    <div className="layout-content">
      <Navigation />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  </StyledLayout>
);
export default Layout;
