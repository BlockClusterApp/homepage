import React from 'react';
// import Layout from '../../../components/Layout';
import LegalLayout from '../components/Layout';
import Privacy from './Privacy';

async function action() {
  return {
    title: 'Privacy policy',
    chunks: ['privacy'],
    component: (
      <LegalLayout>
        <Privacy />
      </LegalLayout>
    ),
  };
}

export default action;
