import React from 'react';
import Message from './Message';
import MessageTyper from './MessageTyper';

const MessagePanel = () => {
  return (
    <div>
      <Message />
      <Message />
      <Message />
      <Message />
      <div>
        <MessageTyper />
      </div>
    </div>
  );
};

export default MessagePanel;
