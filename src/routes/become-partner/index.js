import React from 'react';
import BecomePartner from './BecomePartner';

async function action() {
  return {
    chunks: ['become-partner'],
    component: <BecomePartner />,
  };
}

export default action;
