import React from 'react';
// import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
// import SVG from 'react-svg-inline';
import { lighten, clearFix } from 'polished';
import logo from '../assets/images/logo-text.png';
import logo2x from '../assets/images/logo-text@2x.png';
// import Link from './Link';
// import logo from '../assets/images/logo.svg';
import { media, spacing, colors } from '../styles';
import { wrapper } from '../styles/mixins';
// import { FACEBOOK, TWITTER, MEDIUM } from '../constants/providers';
// import {
//   FACEBOOK_LINK,
//   TWITTER_LINK,
//   MEDIUM_LINK,
//   ANGEL_LINK,
//   GOOGLE_FEEDBACK_FORM_LINK,
// } from '../constants/links';

const Root = styled.footer`
  ${clearFix()};
  padding: ${spacing(3)} ${spacing()};
  position: relative;
  z-index: 3;
  width: 100%;
  bottom: 0;
  background: #f6fbff;
  margin-top: 0px;
`;

const Wrapper = styled.div`
  ${wrapper};
  position: relative;

  ${media.min768} {
    padding: 0 184px 0 182px;
  }
`;

const Logo = styled.img.attrs({
  src: logo,
  srcSet: `${logo2x} 2x`,
  alt: 'BlockCluster',
})`
  color: ${lighten(0.4, colors.text)};
  filter: grayscale(100%);
  width: 138px;
  height: auto;
  opacity: 0.6;
  margin-top: 4px;

  ${media.max768} {
    float: left;
    padding: ${spacing()};
  }

  ${media.min768} {
    position: absolute;
    left: ${spacing()};
    top: 0;
    margin-right: ${spacing(3)};
  }
`;

const Nav = styled.nav`
  ${clearFix()};
  margin-bottom: ${spacing(0.25)};

  ${media.max768} {
    border-top: 1px solid ${colors.border};
    border-bottom: 1px solid ${colors.border};
  }
`;

// eslint-disable-next-line
const StyledLink = styled(({ noBorder, ...props }) => <a {...props} />)`
  display: block;
  float: left;
  font-size: 14px;
  font-weight: 600;
  color: ${lighten(0.3, colors.text)};
  margin-right: ${spacing(0.75)};

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: ${colors.link};
  }

  ${media.max768} {
    width: 50%;
    padding: ${spacing(0.5)} ${spacing()};
    border-bottom: 1px solid ${colors.border};
    margin-right: 0;
  }

  ${props =>
    props.noBorder &&
    css`
      border: 0 !important;
    `};
`;

const StyledAnchor = StyledLink.withComponent('a');

const Copyright = styled.div`
  font-size: 13px;
  color: ${lighten(0.35, colors.text)};

  ${media.max768} {
    clear: both;
    padding: 0 ${spacing()} ${spacing(0.5)};
    text-align: center;
  }
`;

const SocialMediaWrapper = styled.div`
  ${clearFix()};

  ${media.max768} {
    float: right;
    padding: ${spacing()};
  }

  ${media.min768} {
    position: absolute;
    right: ${spacing()};
    top: 0;
  }
`;

const SocialMedia = styled.a.attrs({
  target: '_blank',
})`
  float: left;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid ${colors.border};
  margin-right: ${spacing()};
  line-height: 38px;
  text-align: center;
  color: ${colors.text};

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: #fff;

    ${props =>
      props.provider === 'FACEBOOK' &&
      css`
        background: ${colors.facebook};
        border-color: ${colors.facebook};
      `}

    ${props =>
      props.provider === 'TWITTER' &&
      css`
        background: ${colors.twitter};
        border-color: ${colors.twitter};
      `}

    ${props =>
      props.provider === 'MEDIUM' &&
      css`
        background: #000;
        border-color: #000;
      `}

    ${props =>
      props.provider === 'LINKED_IN' &&
      css`
        background: #0077b5;
        border-color: #0077b5;
      `}
  }

  .fa-linkedin-in {
    width: 14px;
    position: relative;
    top: 1px;
  }
`;

const LinkedIn = () => (
  <svg
    aria-hidden="true"
    data-prefix="fab"
    data-icon="linkedin-in"
    className="svg-inline--fa fa-linkedin-in fa-w-14"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
  >
    <path
      fill="currentColor"
      d="M100.3 480H7.4V180.9h92.9V480zM53.8 140.1C24.1 140.1 0 115.5 0 85.8 0 56.1 24.1 32 53.8 32c29.7 0 53.8 24.1 53.8 53.8 0 29.7-24.1 54.3-53.8 54.3zM448 480h-92.7V334.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V480h-92.8V180.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V480z"
    />
  </svg>
);

const propTypes = {};

const defaultProps = {};

export default function Footer() {
  return (
    <Root>
      <Wrapper>
        <Nav>
          <StyledAnchor href="/about">About us</StyledAnchor>
          <StyledAnchor href="/contact">Contact us</StyledAnchor>
          <StyledAnchor target="_blank" href="https://status.blockcluster.io">
            Status
          </StyledAnchor>
          <StyledAnchor target="_blank" href="https://docs.blockcluster.io">Documentation</StyledAnchor>
          <StyledLink href="https://angel.co/blockcluster/jobs">
            Careers
          </StyledLink>
          <StyledLink href="/terms">Terms & conditions</StyledLink>
          <StyledLink href="/privacy">Privacy policy</StyledLink>
        </Nav>
        <Logo />
        <SocialMediaWrapper>
          <SocialMedia
            href="https://www.linkedin.com/company/blockcluster"
            provider="LINKED_IN"
          >
            <LinkedIn />
          </SocialMedia>
        </SocialMediaWrapper>
        <Copyright>
          &copy; BlockCluster {new Date().getFullYear()}. All rights reserved.
        </Copyright>
      </Wrapper>
    </Root>
  );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;
