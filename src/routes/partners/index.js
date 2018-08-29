import React from 'react';
import Partners from './Partners';

async function action() {
  return {
    chunks: ['partners'],
    component: <Partners />,
  };
}

export default action;
