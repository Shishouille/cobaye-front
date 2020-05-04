import React from 'react';
import {
  Navigation, Footer, Sider, StyledLayout,
} from '.';

const Layout = ({ children, signOut, userName, isConnected }) => {
  return(
  <StyledLayout>
    <Sider signOut={signOut} isConnected={isConnected} />
    <div className="layout-content">
      <Navigation userData={userName} isConnected={isConnected} />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  </StyledLayout>
);};
export default Layout;
