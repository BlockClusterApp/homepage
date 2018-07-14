import React from 'react';
import LegalLayout from '../components/Layout';
import Contact from './Contact';

async function action() {
  return {
    title: 'Contact',
    chunks: ['contact'],
    component: (
      <LegalLayout>
        <Contact />
      </LegalLayout>
    ),
  };
}

export default action;
