import React from 'react';
import Addons from './Addons';

async function action() {
  return {
    chunks: ['addons'],
    component: <Addons />,
  };
}

export default action;
