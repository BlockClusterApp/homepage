import React, { Fragment } from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Assets from './components/Assets';
import Infra from './components/Infra';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Home = () => (
  <Fragment>
    <Hero />
    <Problem />
    <Solution />
    <Features />
    <Assets />
    <Infra />
    <Contact />
    <Footer />
  </Fragment>
);

export default Home;
