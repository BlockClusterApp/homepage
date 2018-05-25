import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { clearFix, mix, hiDPI } from 'polished';
import logo2x from '../assets/logo@2x.png';
import heroBackground from '../assets/hero-bg-3.jpg';
import network from '../assets/network.png';
import network2x from '../assets/network@2x.png';
import { colors, spacing, media, uppercase } from '../../../styles';
import { wrapper, cover } from '../../../styles/mixins';

const Root = styled.section`
  position: relative;
  height: 720px;
  background: ${colors.secondary};
  padding-top: ${spacing()};
  color: #fff;
`;

const Cover = styled.div`
  ${cover};
  background-image: url(${heroBackground});
  background-size: cover;
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
`;

const Logo = styled.a`
  display: block;
  float: left;
  background: url(${logo2x}) no-repeat;
  background-size: 178px;
  width: 178px;
  height: 36px;
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

const NavButton = styled.a`
  ${navItemCss};
  padding: 0 ${spacing(1.5)};
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.1);
  color: rgba(255, 255, 255, 0.9);
  margin-left: ${spacing()};

  &:hover {
    border-color: #fff;
    background: rgba(0, 0, 0, 0);
  }
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: ${spacing(5)} ${spacing()};
`;

const Title = styled.h1`
  position: relative;
  font-size: 42px;
  line-height: 1.2;
  font-weight: 700;
  margin-bottom: ${spacing(1.5)};
`;

const TitleSecondary = styled.span`
  font-size: 36px;
  font-weight: 600;
  color: ${colors.backgroundSecondaryText};
  position: relative;
  top: -5px;
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
`;

const Code = styled.span`
  position: relative;
  z-index: 1;
  font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;
`;

const CodeClosingBracket = styled.span`
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
  box-shadow: 0 7px 14px rgba(51, 72, 97, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  transition: all 0.2s;

  ${props =>
    props.primary &&
    css`
      background: rgba(255, 255, 255, 0.9);
      color: ${colors.secondary};

      &:hover {
        background: #fff;
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
                <NavButton href="http://blockcluster.io:3000/login">
                  Login
                </NavButton>
              </NavRight>
            </Nav>
          </Header>
          <InnerWrapper>
            <Title>
              Build and deploy your<br />
              blockchain network<br />
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
              Easily setup your own enterprise grade private<br />
              blockchain through a simple user interface.
            </Subtitle>
            <ButtonsWrapper>
              <Button primary href="mailto:team@blockcluster.io">
                Get in touch
              </Button>
              <Button secondary href="mailto:team@blockcluster.io">
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
