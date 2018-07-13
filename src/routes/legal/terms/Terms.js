import React from 'react';
import Markdown from '../../../components/Markdown';
import terms from './terms.md';

export default function Terms() {
  return <Markdown dangerouslySetInnerHTML={{ __html: terms.html }} />;
}
