import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import SVG from 'react-svg-inline';
import { lighten, clearFix } from 'polished';
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
  position: absolute;
  width: 100%;
  bottom: 0;
  background: #fbfbfb;

  ${media.max768} {
    padding: 0 0 ${spacing()};
  }
`;

const Wrapper = styled.div`
  ${wrapper};
  position: relative;

  ${media.min768} {
    padding: 0 184px 0 144px;
  }
`;

const Logo = styled(SVG)`
  color: ${lighten(0.4, colors.text)};

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

  svg {
    margin-top: 8px;
    width: 100px;
    height: 22px;
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

const StyledLink = styled(({ noBorder, ...props }) => <a {...props} />)`
  display: block;
  float: left;
  font-size: 13px;
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
  font-size: 12px;
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
      props.provider === FACEBOOK &&
      css`
        background: ${colors.facebook};
        border-color: ${colors.facebook};
      `}
      
    ${props =>
      props.provider === TWITTER &&
      css`
        background: ${colors.twitter};
        border-color: ${colors.twitter};
      `}
      
    ${props =>
      props.provider === MEDIUM &&
      css`
        background: #000;
        border-color: #000;
      `}
  }

  &:after {
    display: inline-block;
    font-family: 'FontAwesome';
    font-size: 17px;

    ${props =>
      props.provider === FACEBOOK &&
      css`
        content: '\f09a';
      `}
      
    ${props =>
      props.provider === TWITTER &&
      css`
        content: '\f099';
      `}
      
    ${props =>
      props.provider === MEDIUM &&
      css`
        content: '\f23a';
      `}
  }
`;

const propTypes = {};

const defaultProps = {};

export default function Footer() {
  return (
    <Root>
      <Wrapper>
        <Nav>
          <StyledAnchor href="mailto:team@blockcluster.io">About</StyledAnchor>
          <StyledAnchor href="mailto:team@blockcluster.io">
            Contact
          </StyledAnchor>
          <StyledLink href="https://angel.co/blockcluster/jobs">
            Careers
          </StyledLink>
          <StyledLink to="/terms">Terms & conditions</StyledLink>
          <StyledLink to="/privacy" noBorder>
            Privacy policy
          </StyledLink>
        </Nav>
        {/* <Logo svg={logo} /> */}
        {/* <SocialMediaWrapper>
          <SocialMedia href={FACEBOOK_LINK} provider={FACEBOOK} />
          <SocialMedia href={TWITTER_LINK} provider={TWITTER} />
          <SocialMedia href={MEDIUM_LINK} provider={MEDIUM} />
        </SocialMediaWrapper> */}
        <Copyright>
          &copy; BlockCluster {new Date().getFullYear()}. All rights reserved.
        </Copyright>
      </Wrapper>
    </Root>
  );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;
