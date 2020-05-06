import React from 'react';
import Message from './Message';
import MessageTyper from './MessageTyper';

const MessagePanel = () => {
  return (
    <div className="chat">
      <div className="messages-wrapper">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      <div>
        <MessageTyper />
      </div>
    </div>
  );
};

export default MessagePanel;
