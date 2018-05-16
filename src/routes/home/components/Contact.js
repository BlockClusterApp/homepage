import React from 'react';
import styled, { css } from 'styled-components';
import { clearFix, mix, shade } from 'polished';
import heroBackground from '../assets/hero-bg.png';
import { colors, spacing, media, uppercase } from '../../../styles';
import { wrapper, cover } from '../../../styles/mixins';

const Root = styled.section`
  position: relative;
  height: 356px;
  background: #f6fbff;
`;

const Wrapper = styled.div`
  ${wrapper};
  position: relative;
  padding: 142px ${spacing()};
`;

const Title = styled.h3`
  font-size: 34px;
  font-weight: 600;
  color: ${colors.primary};
  margin-bottom: ${spacing(0.25)};
`;

const TitleEm = styled.span`
  font-weight: 700;
  color: ${colors.secondary};
`;

const Subtitle = styled.h3`
  font-size: 21px;
  font-weight: 600;
  margin-bottom: ${spacing(6)};
  opacity: 0.8;
`;

const TextWrapper = styled.div`
  float: left;
`;

const ButtonsWrapper = styled.div`
  padding-top: 14px;
  float: right;
  ${clearFix()};
`;

const Button = styled.a`
  ${uppercase};
  display: inline-block;
  text-align: center;
  position: relative;
  z-index: 2;
  font-size: 14px;
  float: left;
  margin-right: ${spacing()};
  width: 210px;
  height: 44px;
  line-height: 44px;
  border-radius: 3px;
  box-shadow: 0 4px 9px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: all 0.2s;

  &:last-child {
    margin-right: 0;
  }

  ${props =>
    props.primary &&
    css`
      background: #fff;
      color: ${colors.secondary};

      &:hover {
        background: ${shade(0.98, mix(0.3, '#fff', '#f6fbff'))};
      }
    `};

  ${props =>
    props.secondary &&
    css`
      background: ${colors.primary};
      color: #fff;

      &:hover {
        background: ${mix(0.6, colors.primary, colors.backgroundSecondaryText)};
      }
    `};
`;

const Contact = () => (
  <Root>
    <Wrapper>
      <TextWrapper>
        <Title>
          Ready to use <TitleEm>BlockCluster?</TitleEm>
        </Title>
        <Subtitle>Get started with a free demo for your business.</Subtitle>
      </TextWrapper>
      <ButtonsWrapper>
        <Button primary href="mailto:team@blockcluster.io">
          Get in touch
        </Button>
        <Button secondary href="mailto:team@blockcluster.io">
          Request demo
        </Button>
      </ButtonsWrapper>
    </Wrapper>
  </Root>
);

export default Contact;
