import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { clearFix, mix, hiDPI, darken, lighten } from 'polished';
import logo2x from '../assets/logo@2x.png';
import heroBackground from '../assets/hero-bg-3.jpg';
import network from '../assets/network.png';
import network2x from '../assets/network@2x.png';
import ModalRequestDemo from './ModalRequestDemo';
import { colors, spacing, media, uppercase } from '../../../styles';
import { wrapper, cover } from '../../../styles/mixins';

const Root = styled.section`
  position: relative;
  z-index: 3;
  height: 720px;
  padding-top: ${spacing()};
  color: #fff;

  ${media.max768} {
    height: 584px;
    text-align: center;
  }
`;

const Cover = styled.div`
  ${cover};
  height: 114%;
  background: linear-gradient(-135deg, #00a6ff, #004286);

  ${'' /* background-color: ${colors.secondary}; */} ${'' /* background-image: url(${heroBackground});
  background-size: cover; */}
  transform: matrix(1, -0.08, 0, 1, 0, -116);
`;

const Cover2 = styled.div`
  ${cover};
  height: 114%;
  background: radial-gradient(circle at 70% 4%, #00dcff, #00deff00 40%);
  opacity: 0.5;
  ${'' /* background-color: ${colors.secondary}; */} ${'' /* background-image: url(${heroBackground});
  background-size: cover; */}
  transform: matrix(1, -0.08, 0, 1, 0, -116);
`;

const Wrapper = styled.div`
  ${wrapper};
  position: relative;
  padding: 0 ${spacing()};
`;

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

const LogoCaps = styled.span`
  font-size: 22px;
  font-weight: 400;
`;

const Nav = styled.nav`
  ${clearFix()};
`;

const NavLeft = styled.div`
  float: left;
  margin-left: ${spacing(2)};
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
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.2s;

  &:hover {
    color: #fff;
  }
`;

const NavItem = styled.a`
  ${navItemCss};
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: ${spacing(5)} 0;
`;

const Title = styled.h1`
  position: relative;
  font-size: 42px;
  line-height: 1.2;
  font-weight: 700;
  margin-bottom: ${spacing(1.5)};

  ${media.max768} {
    font-size: 31px;
  }

  ${media.max375} {
    font-size: 28px;
  }
`;

const TitleSecondary = styled.span`
  font-size: 36px;
  font-weight: 600;
  color: ${colors.backgroundSecondaryText};
  position: relative;
  top: -5px;

  ${media.max768} {
    font-size: 25px;
  }

  ${media.max375} {
    font-size: 22px;
  }
`;

const BreakDesktop = styled.br`
  ${media.max768} {
    display: none;
  }
`;

const Network = styled.div`
  position: absolute;
  top: 60px;
  right: 12px;
  width: 442px;
  height: 364px;
  background-image: url(${network});
  background-size: 442px 364px;

  ${hiDPI(2)} {
    background-image: url(${network2x});
  }

  ${media.max980} {
    display: none;
  }
`;

const Code = styled.span`
  position: relative;
  z-index: 1;
  font-family: monospace;

  ${media.min768} {
    font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;
  }
`;

const CodeClosingBracket = styled.span`
  position: relative;
  color: ${colors.backgroundSecondaryText};
  transition: color 0.1s;

  ${props =>
    props.blink &&
    css`
      color: ${colors.secondary};
    `};
`;

const Subtitle = styled.h2`
  position: relative;
  font-size: 20px;
  font-weight: 600;
  opacity: 0.9;
  margin-bottom: ${spacing(4)};
  color: #fff;

  ${media.max768} {
    font-size: 19px;
    max-width: 400px;
    margin: 0 auto ${spacing(4)};
  }

  ${media.max375} {
    font-size: 18px;
  }
`;

const ButtonsWrapper = styled.div`
  display: inline-block;
  ${clearFix()};
  margin-bottom: ${spacing(4)};
`;

const Button = styled.a`
  ${uppercase};
  display: block;
  text-align: center;
  position: relative;
  z-index: 2;
  font-size: 14px;
  float: left;
  margin-right: ${spacing()};
  width: 210px;
  height: 44px;
  line-height: 44px;
  border-radius: 5px;
  box-shadow: inset 0 1px 0px rgba(255, 255, 255, 0.16),
    0 1px 8px rgba(0, 0, 0, 0.2), 0 4px 24px rgba(0, 0, 0, 0);
  transition: all 0.2s;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    transform: matrix(1, 0, 0, 1, 0, -1);
    box-shadow: inset 0 1px 0px rgba(255, 255, 255, 0.16),
      0 10px 16px -10px rgba(0, 0, 0, 0.4), 0 5px 24px rgba(0, 0, 0, 0.1);
  }

  &:active:not([disabled]) {
    transform: matrix(1, 0, 0, 1, 0, 1);
    box-shadow: inset 0 -1px 0px rgba(0, 0, 0, 0.16),
      0 -1px 8px rgba(0, 0, 0, 0.2), 0 3px 24px rgba(0, 0, 0, 0);

    &,
    &:before,
    &:after {
      transition-duration: 0.05s;
    }

    &:after {
      opacity: 1;
    }
  }

  ${media.max374} {
    float: none;
    margin: 0 auto ${spacing()};
  }

  ${media.max768} {
    width: 160px;
    height: 42px;
    line-height: 42px;
  }

  ${props =>
    props.primary &&
    css`
      background: rgba(255, 255, 255, 0.9);
      color: ${colors.secondary};
      color: #026fbb;

      &:hover {
        background: #fff;
      }

      &:active {
        background: rgba(255, 255, 255, 0.8);
      }
    `};

  ${props =>
    props.secondary &&
    css`
      background: ${colors.primary};
      background: #03b0e9;
      color: #fff;

      &:hover {
        background: ${lighten(0.05, '#03b0e9')};
      }

      &:active {
        background: ${darken(0.05, '#03b0e9')};
      }
    `};
`;

const BlinkingCursor = styled.span`
  display: inline-block;
  width: 14px;
  height: 32px;
  left: -16px;
  top: 5px;
  position: relative;
  background: #fff;
  opacity: 0;
  border-radius: 1px;
  transition: opacity 0.1s;

  ${props =>
    props.blink &&
    css`
      opacity: 0.9;
    `};

  ${media.max768} {
    position: absolute;
    width: 11px;
    left: auto;
    right: 2px;
    top: 1px;
    height: 25px;
  }
`;

const NavButton = Button.extend`
  width: auto;
  padding: 0 20px;
  height: 42px;
  line-height: 42px;
  background: linear-gradient(20deg, #0392da, #03a1e4);
  box-shadow: none;
  color: #fff;

  &:before {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    content: '';
    opacity: 0.1;
    transition: all 0.2s;
    background: #000;
  }

  &:before {
    z-index: 1;
  }

  &:hover,
  &:active {
    transform: none !important;
    box-shadow: none !important;
  }

  &:hover {
    background: linear-gradient(20deg, #0392da, #03a1e4);
    color: #fff;

    &:before {
      opacity: 0.2;
    }
  }

  &:active {
    &:before {
      opacity: 0.3;
    }
  }
`;

const NavButtonText = styled.span`
  display: inline-block;
  position: relative;
  z-index: 3;
  transition: all 0.2s;
`;

class Hero extends React.Component {
  state = {
    blink: false,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ blink: !this.state.blink });
    }, 1000);
  }

  render() {
    return (
      <Root>
        <Cover />
        <Cover2 />
        <Wrapper>
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
                <NavButton primary href="http://blockcluster.io:3000/login">
                  <NavButtonText>Login</NavButtonText>
                </NavButton>
              </NavRight>
            </Nav>
          </Header>
          <InnerWrapper>
            <Title>
              Build and deploy powerful <br />
              blockchain applications<br />
              <TitleSecondary>
                without writing any{' '}
                <Code>
                  {'<code/'}
                  <CodeClosingBracket blink={this.state.blink}>
                    {'>'}
                  </CodeClosingBracket>
                </Code>
                <BlinkingCursor blink={this.state.blink} />
              </TitleSecondary>
            </Title>
            <Subtitle>
              Easily setup your own enterprise grade blockchain <BreakDesktop />
              ecosystem through a simple user interface.
            </Subtitle>
            <ButtonsWrapper>
              <Button primary href="mailto:info@blockcluster.io">
                Get in touch
              </Button>
              <Button secondary href="/contact">
                Request demo
              </Button>
            </ButtonsWrapper>
            <Network />
          </InnerWrapper>
        </Wrapper>
      </Root>
    );
  }
}

export default Hero;
