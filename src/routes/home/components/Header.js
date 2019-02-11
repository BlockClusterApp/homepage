import React from 'react';
import styled, { css } from 'styled-components';
import { clearFix, shade } from 'polished';
import logo2x from '../assets/logo@2x.png';
import { spacing, media, uppercase, colors } from '../../../styles';
import Button from '../../../components/Button';
import Sidebar from '../../../components/Sidebar';

const Root = styled.header`
  ${clearFix()};
  height: 34px;
  padding: 0;

  ${media.min768} {
    padding: ${spacing()} 0;
    height: 98px;
  }

  ${media.max768} {
    padding: ${spacing(0.5)};
  }

  ${media.max375} {
    padding: 0;
  }
`;

const Logo = styled.a`
  display: block;
  float: left;
  background: url(${logo2x}) no-repeat center;
  background-size: 178px 36px;
  width: 178px;
  height: 42px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

const Nav = styled.nav`
  ${clearFix()};

  ${media.max768} {
    display: none;
  }
`;

const NavLeft = styled.div`
  float: left;
  margin-left: ${spacing(4)};

  @media (max-width: 820px) {
    margin-left: ${spacing()};
  }

  ${media.max460} {
    position: absolute;
    left: 0;
    top: 45px;
    margin-left: 8px;
  }
`;

const NavRight = styled.div`
  float: right;
`;

const navItemCss = css`
  ${uppercase};
  float: left;
  display: block;
  line-height: 42px;
  padding: 0 ${spacing()};
  color: rgba(255, 255, 255, 1);
  transition: all 0.2s;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }
`;

const NavItem = styled.a`
  ${navItemCss};
`;

const NavButton = Button.withComponent('a').extend`
  width: auto;
  padding: 0 20px;
  height: 42px;
  line-height: 42px;
  background: ${shade(0.9, '#0392da')};
  box-shadow: none;
  color: #fff;

  &:before {
    z-index: 1;
  }

  &:hover,
  &:active {
    transform: none !important;
    box-shadow: none !important;
  }

  &:hover {
    background: ${shade(0.8, '#0392da')};
    color: #fff;
  }

  &:active {
    background: ${shade(0.7, '#0392da')};
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
      stroke="#FFF"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M1.5.75H15m-13.5 4H15m-13.5 4H15"
    />
  </svg>
);

const NavTop = styled.nav`
  margin-bottom: ${spacing()};
`;

const NavBottom = styled.nav`
  margin-bottom: ${spacing()};
`;

const SidebarNavItem = styled.a`
  ${uppercase};
  display: block;
  font-size: 14px;
  font-weight: 700;
  color: ${colors.secondary};
  padding: ${spacing(0.5)} ${spacing(1.5)};
`;

export default class Header extends React.Component {
  state = {
    showSidebar: false,
  };

  render() {
    return (
      <Root>
        <Logo href="/" />
        <Nav>
          <NavLeft>
            <NavItem href="/pricing">Pricing</NavItem>
            <NavItem href="/addons">Add-ons</NavItem>
            <NavItem href="/partners">Partners</NavItem>
            <NavItem href="/faqs">Faq&apos;s</NavItem>
          </NavLeft>
          <NavRight>
            {/* <NavItem href="/media">Media</NavItem> */}
            <NavButton href="//app.blockcluster.io/login">Login</NavButton>
          </NavRight>
        </Nav>
        <Hamburger onClick={() => this.setState({ showSidebar: true })}>
          <HamburgerIcon />
        </Hamburger>
        <Sidebar
          show={this.state.showSidebar}
          onClose={() => this.setState({ showSidebar: false })}
        >
          <NavTop>
            <SidebarNavItem href="/pricing">Pricing</SidebarNavItem>
            <SidebarNavItem href="/addons">Add-ons</SidebarNavItem>
            <SidebarNavItem href="/partners">Partners</SidebarNavItem>
            <SidebarNavItem href="/about">About us</SidebarNavItem>
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
