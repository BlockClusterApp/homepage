import React from 'react';
import styled, { css } from 'styled-components';
import { clearFix, mix } from 'polished';
import logo from '../assets/images/logo-text.png';
import logo2x from '../assets/images/logo-text@2x.png';
import Button from './Button';
import { spacing, colors, media } from '../styles';

const Root = styled(({ transparent, ...props }) => <header {...props} />)`
  ${clearFix()};
  height: 34px;
  padding: 0;

  ${media.min768} {
    padding: ${spacing()} 0;
    height: 98px;
  }

  ${props =>
    !props.transparent &&
    css`
      padding: ${spacing()} 0;
      height: 68px;
    `};
`;

// eslint-disable-next-line
const LogoLink = styled(({ white, ...props }) => <a {...props} />)`
  float: left;
  color: ${props => (props.white ? '#fff' : colors.primary)};
  height: 35px;
`;

const LogoImg = styled.img.attrs({
  src: logo,
  srcSet: `${logo2x} 2x`,
  alt: 'BlockCluster',
})`
  width: 191px;
  height: 42px;
`;

const loginButtonCss = css`
  float: right;
  width: auto;
  padding: 0 20px;
  height: 42px;
  line-height: 42px;
  font-size: 13px;

  background: ${colors.primary};
  color: #fff;

  &:hover {
    background: ${mix(0.6, colors.primary, colors.backgroundSecondaryText)};
  }
`;

export default function Header() {
  return (
    <Root>
      <LogoLink href="/">
        <LogoImg />
      </LogoLink>
      <Button
        buttonCss={loginButtonCss}
        component="a"
        href="//app.blockcluster.io/login"
      >
        Login
      </Button>
    </Root>
  );
}
