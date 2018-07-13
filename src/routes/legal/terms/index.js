import React from 'react';
import LegalLayout from '../components/Layout';
import Terms from './Terms';

async function action() {
  return {
    title: 'Terms and conditions',
    chunks: ['terms'],
    component: (
      <LegalLayout>
        <Terms />
      </LegalLayout>
    ),
  };
}

export default action;
