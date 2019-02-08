import React from 'react';
import Faqs from './Faqs';

async function action() {
  return {
    // chunks: ['faqs'],
    component: <Faqs />,
  };
}

export default action;
