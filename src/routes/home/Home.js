import React from 'react';
import styled from 'styled-components';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Assets from './components/Assets';
import Infra from './components/Infra';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from '../../components/Footer';
// import { media } from '../../styles';

const Root = styled.div`
  position: relative;
`;

const Home = () => (
  <Root>
    <Hero />
    <Problem />
    <Solution />
    <Features />
    <Assets />
    <Infra />
    <Contact />
    <Footer />
  </Root>
);

export default Home;
