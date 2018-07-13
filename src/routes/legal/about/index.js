import React from 'react';
import LegalLayout from '../components/Layout';
import About from './About';

async function action() {
  return {
    title: 'About us',
    chunks: ['about'],
    component: (
      <LegalLayout>
        <About />
      </LegalLayout>
    ),
  };
}

export default action;
