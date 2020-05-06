import React from 'react';

import { InlineIcon } from '@iconify/react';
import sendPlaneFill from '@iconify/icons-ri/send-plane-fill';


const MessageTyper = () => (
  <>
    <p>Template de Message par exemple</p>
    <div className="typer">
      <input type="text" placeholder="Ecrivez ici..." name="" id="" />
      <button type="submit"><InlineIcon icon={sendPlaneFill} color="white" /></button>
    </div>
  </>
);

export default MessageTyper;
