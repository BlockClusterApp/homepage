import React from 'react';
import Markdown from '../../../components/Markdown';
import contact from './contact.md';

export default function Contact() {
  return <Markdown dangerouslySetInnerHTML={{ __html: contact.html }} />;
}
