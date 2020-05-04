import React from 'react';
import Layout from 'src/containers/Layout';
import MessagePanel from './Panel/MessagePanel';
import MessageList from './List/MessageList';

import StyledMessageBox from './StyledMessageBox';

const MessageBox = () => (
  <Layout>
    <StyledMessageBox>
      <MessageList />
      <MessagePanel />
    </StyledMessageBox>
  </Layout>
);

export default MessageBox;
