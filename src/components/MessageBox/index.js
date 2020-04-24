import React from 'react';
import Layout from 'src/components/Layout';
import MessagePanel from './Panel/MessagePanel';
import MessageList from './List/MessageList';

const MessageBox = () => (
  <Layout>
    <div>
      <MessageList />
      <MessagePanel />
    </div>
  </Layout>
);

export default MessageBox;
