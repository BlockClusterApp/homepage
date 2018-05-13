import React from 'react';
import Layout from '../../components/Layout';

const title = 'Page Not Found';

function action() {
  return {
    chunks: ['not-found'],
    title,
    component: <span>Not found</span>,
    status: 404,
  };
}

export default action;
