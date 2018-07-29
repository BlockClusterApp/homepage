import React from 'react';
import Pricing from './Pricing';

async function action() {
  return {
    chunks: ['pricing'],
    component: <Pricing />,
  };
}

export default action;
