import React from 'react';
import LegalLayout from '../components/Layout';
import Pricing from './Pricing';

async function action() {
  return {
    title: 'Pricing',
    chunks: ['pricing'],
    component: (
      <LegalLayout>
        <Pricing />
      </LegalLayout>
    ),
  };
}

export default action;
