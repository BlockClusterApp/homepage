import React from 'react';
import Contact from './Contact';

async function action() {
  return {
    chunks: ['contact'],
    component: <Contact />,
  };
}

export default action;
