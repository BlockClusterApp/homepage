import React from 'react';
import styled, { css } from 'styled-components';
import { clearFix } from 'polished';
import heroBackground from '../assets/hero-bg.png';
import { colors, spacing, media, uppercase } from '../../../styles';
import { wrapper, cover } from '../../../styles/mixins';

const Root = styled.section`
  position: relative;
  height: 356px;
  background: ${colors.secondary};
  color: #fff;
`;

const Cover = styled.div`
  ${cover};
  background-image: url(${heroBackground});
  background-size: cover;
  background-position: center;
`;

const Wrapper = styled.div`
  ${wrapper};
  position: relative;
  padding: ${spacing(5.5)};
  text-align: center;
`;

const Title = styled.h1`
  position: relative;
  font-size: 30px;
  line-height: 1.2;
  font-weight: 700;
  margin-bottom: ${spacing(0.5)};
`;

const Subtitle = styled.h2`
  position: relative;
  font-size: 17px;
  font-weight: 400;
  opacity: 0.9;
  margin-bottom: ${spacing(2)};
`;

const InputWrapper = styled.div`
  ${clearFix()};
  position: relative;
  width: 446px;
  margin: 0 auto;
  padding: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  color: rgba(255, 255, 255, 0.9);
`;

const InputLabel = styled.label`
  ${uppercase};
  font-size: 12px;
  float: left;
  padding: 0 8px;
  opacity: 0.9;
  transition: all 0.2s;
`;

const InputField = styled.input`
  ${cover};
  background: none;
  border: 0;
  padding: 20px 16px 0;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.14);
  font-weight: 600;
  transition: all 0.2s;

  &:hover,
  &:focus {
    border-color: #fff;
    background: rgba(0, 0, 0, 0);
  }

  &:focus ~ ${InputLabel} {
    opacity: 1;
  }
`;

const InputSubmit = styled.button`
  ${uppercase};
  position: relative;
  z-index: 2;
  font-size: 12px;
  float: right;
  width: 210px;
  height: 44px;
  line-height: 44px;
  background: rgba(255, 255, 255, 0.9);
  border: 0;
  border-radius: 3px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  color: #007fd0;
  transition: all 0.2s;

  &:hover {
    background: #fff;
  }
`;

const Hero = () => (
  <Root>
    <Cover />
    <Wrapper>
      <Title>Request an invite, get early access</Title>
      <Subtitle>
        Build and deploy your own blockchain network within a few clicks
      </Subtitle>
      <InputWrapper>
        <InputField />
        <InputLabel>Email address</InputLabel>
        <InputSubmit>Request invite</InputSubmit>
      </InputWrapper>
    </Wrapper>
  </Root>
);

export default Hero;
