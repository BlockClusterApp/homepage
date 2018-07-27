import React from 'react';
import Media from './Media';

async function action() {
  return {
    chunks: ['media'],
    component: <Media />,
  };
}

export default action;
