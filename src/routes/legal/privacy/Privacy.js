import React from 'react';
import Markdown from '../../../components/Markdown';
import privacy from './privacy.md';

export default function Privacy() {
  return <Markdown dangerouslySetInnerHTML={{ __html: privacy.html }} />;
}
