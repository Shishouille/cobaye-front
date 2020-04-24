import React from 'react';
import MessageCard from './MessageCard';

const MessageList = () => {
  return (
    <div>
      <div>
      <input type="text" placeholder="Chercher un message" />
      </div>
      <div>
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
      </div>
    </div>
  )
}

export default MessageList;
