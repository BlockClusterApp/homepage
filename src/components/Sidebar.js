import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import logo2x from '../assets/images/logo-text@2x.png';
import Backdrop from './Backdrop';
import { colors, spacing, media, uppercase } from '../styles';

const StyledSidebar = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  width: 232px;
  height: 100%;
  background: #fff;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.1);

  ${media.min768} {
    display: none;
  }

  ${media.max768} {
    z-index: 99;
    right: -232px;
    transform: translate3d(0, 0, 0);
    will-change: transform, box-shadow;
    transition: transform 0.3s;
    box-shadow: 0 0 24px rgba(0, 0, 0, 0);
  }

  &.isActive {
    box-shadow: 0 0 24px rgba(0, 0, 0, 0.1);
    transform: translate3d(-232px, 0, 0);
  }
`;

const Wrapper = styled.div`
  min-height: 432px;
  height: 100%;
  margin-bottom: -48px;
  padding: ${spacing()} 0;
  text-align: left;
`;

const NavTop = styled.nav`
  margin-bottom: ${spacing()};
`;

const NavBottom = styled.nav`
  margin-bottom: ${spacing()};
`;

const NavItem = styled.a`
  ${uppercase};
  display: block;
  font-size: 14px;
  font-weight: 700;
  color: ${colors.secondary};
  padding: ${spacing(0.5)} ${spacing(1.5)};
`;

const Logo = styled.a`
  display: block;
  float: left;
  background: url(${logo2x}) no-repeat center;
  background-size: 178px 36px;
  width: 178px;
  height: 42px;
  transition: opacity 0.2s;
  margin: 0 ${spacing()} ${spacing(1.5)};

  &:hover {
    opacity: 0.8;
  }
`;

const transitionDuration = {
  FADE_IN: 450,
  FADE_OUT: 700,
};

export default class Sidebar extends React.Component {
  static propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  state = {
    showBackdrop: false,
  };

  componentDidUpdate() {
    if (this.props.show) {
      this.show();
    } else {
      this.hide();
    }
  }

  show = () => {
    if (this.isAnimating || this.isActive) {
      return;
    }

    this.isAnimating = true;
    this.setState({ showBackdrop: true });
    this.sidebar.classList.add('isActive');

    this.sidebar.onTransitionEnd(() => {
      this.isActive = true;
      this.isAnimating = false;
    }, transitionDuration.FADE_IN);
  };

  hide = () => {
    if (this.isAnimating || !this.isActive) {
      return;
    }

    this.isAnimating = true;
    this.setState({ showBackdrop: false });
    this.sidebar.classList.remove('isActive');

    this.sidebar.onTransitionEnd(() => {
      this.isActive = false;
      this.isAnimating = false;
    }, transitionDuration.FADE_OUT);
  };

  render() {
    // eslint-disable-next-line no-shadow
    const { showBackdrop } = this.state;

    return (
      <div>
        <Backdrop show={showBackdrop} onClick={this.props.onClose} />
        <StyledSidebar
          innerRef={sidebar => {
            this.sidebar = sidebar;
          }}
        >
          <Wrapper>
            <Logo href="/" />
            <NavTop>
              <NavItem href="/media">Media</NavItem>
              <NavItem href="/pricing">Pricing</NavItem>
              <NavItem href="/about">About</NavItem>
              <NavItem href="/contact">Contact</NavItem>
            </NavTop>
            <NavBottom>
              <NavItem href="//app.blockcluster.io/login">Login</NavItem>
            </NavBottom>
          </Wrapper>
        </StyledSidebar>
      </div>
    );
  }
}
