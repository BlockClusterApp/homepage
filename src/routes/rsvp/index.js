import React from 'react';
import RSVP from './RSVP';

async function action() {
  return {
    chunks: ['rsvp'],
    component: <RSVP />,
  };
}

export default action;
