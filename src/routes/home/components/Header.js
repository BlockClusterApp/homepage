import React from 'react';
import styled, { css } from 'styled-components';
import { clearFix, shade } from 'polished';
import logo2x from '../assets/logo@2x.png';
import { spacing, media } from '../../../styles';
import Button from '../../../components/Button';

const Header = styled.header`
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
`;

// const NavLeft = styled.div`
//   float: left;
//   margin-left: ${spacing(2)};
// `;

const NavRight = styled.div`
  float: right;
`;

// const navItemCss = css`
//   ${uppercase};
//   float: left;
//   display: block;
//   line-height: 42px;
//   padding: 0 ${spacing()};
//   color: rgba(255, 255, 255, 0.8);
//   transition: all 0.2s;

//   &:hover {
//     color: #fff;
//   }
// `;

// const NavItem = styled.a`
//   ${navItemCss};
// `;

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

export default () => (
  <Header>
    <Logo href="/" />
    <Nav>
      {/* <NavLeft>
        <NavItem>Features</NavItem>
        <NavItem>Use cases</NavItem>
        <NavItem>Pricing</NavItem>
      </NavLeft> */}
      <NavRight>
        {/* <NavItem>Support</NavItem> */}
        <NavButton href="//app.blockcluster.io/login">Login</NavButton>
      </NavRight>
    </Nav>
  </Header>
);
