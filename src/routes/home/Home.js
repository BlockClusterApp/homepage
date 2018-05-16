import React, { Fragment } from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Home = () => (
  <Fragment>
    <Hero />
    <Problem />
    <Solution />
    <Features />
    <Contact />
    <Footer />
  </Fragment>
);

export default Home;
