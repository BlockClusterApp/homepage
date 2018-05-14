import React from 'react';
import Home from './Home';

async function action() {
  return {
    chunks: ['home'],
    component: <Home />,
  };
}

export default action;
