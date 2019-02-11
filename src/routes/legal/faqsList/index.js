import React from 'react';
import LegalLayout from '../components/Layout';
import FaqsList from './FaqsList';

async function action() {
  return {
    title: 'Faqs',
    chunks: ['terms'],
    component: (
      <LegalLayout>
        <FaqsList />
      </LegalLayout>
    ),
  };
}

export default action;
