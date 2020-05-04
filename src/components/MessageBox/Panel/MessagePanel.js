import React from 'react';
import Message from './Message';
import MessageTyper from './MessageTyper';

const MessagePanel = () => {
  return (
    <div className="chat">
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
