import React from 'react';
import Markdown from '../../../components/Markdown';
import about from './about.md';

export default function About() {
  return <Markdown dangerouslySetInnerHTML={{ __html: about.html }} />;
}
