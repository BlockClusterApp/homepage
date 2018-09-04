import React from 'react';
import Events from './Events';

async function action() {
  return {
    chunks: ['events'],
    component: <Events />,
  };
}

export default action;
