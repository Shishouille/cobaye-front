import React from 'react';
import { Navigation, Footer, Sider } from '.';

const Layout = ({ children }) => (
  <div>
    <Navigation />
    <main>
      {children}
    </main>
    <Footer />
  </div>
);
export default Layout;