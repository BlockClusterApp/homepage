import React from 'react';
import RequestDemo from './RequestDemo';

async function action() {
  return {
    chunks: ['request-demo'],
    component: <RequestDemo />,
  };
}

export default action;
