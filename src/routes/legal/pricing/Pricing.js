import React from 'react';
import Markdown from '../../../components/Markdown';
import pricing from './pricing.md';

export default function Pricing() {
  return <Markdown dangerouslySetInnerHTML={{ __html: pricing.html }} />;
}
