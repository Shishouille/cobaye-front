import React from 'react'
import { Icon, InlineIcon } from '@iconify/react';
import bxsMessageAltDots from '@iconify/icons-bx/bxs-message-alt-dots';

const MessageCard = () => {
  return (
    <div className="message-list-card">
      <div className="message-main">
      <p>Peter</p>
      <p className="title">Chercheur</p>
      <p className="excerpt">Mon texte teehee</p>
      </div>
      <div className="message-infos">
        <p className="date">Date</p>
        <Icon icon={bxsMessageAltDots} color="red" />
      </div>
    </div>
  )
}

export default MessageCard;
