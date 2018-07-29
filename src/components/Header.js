import React from 'react';
import styled, { css } from 'styled-components';
import { clearFix, mix } from 'polished';
import logo from '../assets/images/logo-text.png';
import logo2x from '../assets/images/logo-text@2x.png';
import Button from './Button';
import Sidebar from './Sidebar';
import { spacing, colors, media, uppercase } from '../styles';

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

  ${media.max768} {
    display: none;
  }
`;

const Hamburger = styled.button`
  float: right;
  position: relative;
  top: -6px;
  width: 48px;
  height: 54px;
  text-align: center;
  background: rgba(0, 0, 0, 0);
  transition: background-color 0.05s;
  cursor: pointer;

  &:active {
    background: rgba(0, 0, 0, 0.2);
  }

  svg {
    position: relative;
    top: 2px;
  }

  ${media.min768} {
    display: none;
  }
`;

const HamburgerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="10"
    viewBox="0 0 16 10"
  >
    <path
      fill="none"
      stroke={colors.secondary}
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M1.5.75H15m-13.5 4H15m-13.5 4H15"
    />
  </svg>
);

const NavTitle = styled.div`
  ${uppercase};
  display: block;
  font-size: 14px;
  font-weight: 700;
  color: ${colors.primary};
  padding: ${spacing(0.5)} ${spacing(1.5)};
`;

const NavTop = styled.nav`
  margin-bottom: ${spacing()};
`;

const NavBottom = styled.nav`
  margin-bottom: ${spacing()};
`;

const SidebarNavItem = styled.a`
  ${uppercase};
  display: block;
  font-size: 12px;
  font-weight: 700;
  color: ${colors.secondary};
  padding: ${spacing(0.25)} ${spacing(1.5)};
`;

export default class Header extends React.Component {
  state = {
    showSidebar: false,
  };

  render() {
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
        <Hamburger onClick={() => this.setState({ showSidebar: true })}>
          <HamburgerIcon />
        </Hamburger>
        <Sidebar
          show={this.state.showSidebar}
          onClose={() => this.setState({ showSidebar: false })}
        >
          <NavTop>
            <NavTitle>Site</NavTitle>
            <SidebarNavItem href="/media">Media</SidebarNavItem>
            <SidebarNavItem href="/pricing">Pricing</SidebarNavItem>
            <SidebarNavItem href="/about">About us</SidebarNavItem>
            <SidebarNavItem href="/contact">Contact us</SidebarNavItem>
          </NavTop>
          <NavTop>
            <NavTitle>Legal</NavTitle>
            <SidebarNavItem href="/privacy">Privacy policy</SidebarNavItem>
            <SidebarNavItem href="/terms">Terms and condition</SidebarNavItem>
          </NavTop>
          <NavTop>
            <NavTitle>Misc</NavTitle>
            <SidebarNavItem href="/privacy">RSVP</SidebarNavItem>
          </NavTop>
          <NavBottom>
            <SidebarNavItem href="//app.blockcluster.io/login">
              Login
            </SidebarNavItem>
            <SidebarNavItem href="//app.blockcluster.io/register">
              Register
            </SidebarNavItem>
          </NavBottom>
        </Sidebar>
      </Root>
    );
  }
}
