import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { clearFix, mix, hiDPI } from 'polished';
import heroBackground from '../assets/hero-bg-3.jpg';
import createNetwork from '../assets/create-network.png';
import blockNetwork from '../assets/block-network.png';
import blockNetwork2x from '../assets/block-network@2x.png';
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

const Logo = styled.div`
  float: left;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 18px;
  line-height: 40px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.03em;
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
  text-align: center;
  ${'' /* text-align: left; */};
`;

const Title = styled.h1`
  position: relative;
  font-size: 36px;
  line-height: 1.2;
  font-weight: 700;
  margin-bottom: ${spacing(1.5)};
`;

const TitleSecondary = styled.span`
  font-weight: 600;
  color: ${colors.backgroundSecondaryText};
`;

const UI = styled.div`
  margin: 0 auto;
  width: 756px;
  height: 395px;
  border-radius: 12px;
  transform: matrix3d(
    0.96,
    0,
    0,
    0,
    0,
    0.96,
    0,
    -0.0001,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1
  );
  box-shadow: -27.1px 62.5px 125px -25px rgba(51, 72, 97, 0.4),
    -16.2px 37.5px 75px -37.5px rgba(0, 0, 0, 0.2);
  background: #fff url(${createNetwork}) top no-repeat;
`;

const Code = styled.span`
  position: relative;
  z-index: 1;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier,
    monospace;
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

const Card = styled.div`
  position: relative;
  width: 518px;
  padding: 28px 36px;
  border-radius: 6px;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.24);
  text-align: left;
`;

const CardCover = styled.div`
  ${cover};
  border-radius: 6px;
  background: linear-gradient(#45aefc, #1b75d9);
  opacity: 0.7;
`;

const CardTitle = styled.h3`
  position: relative;
  z-index: 1;
  font-size: 26px;
  font-weight: 700;
`;

const CardSubtitle = styled.h4`
  position: relative;
  z-index: 1;
  margin-bottom: ${spacing(2)};
`;

const InputWrapper = styled.div`
  ${clearFix()};
  position: relative;
  padding: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  color: rgba(255, 255, 255, 0.9);
`;

const InputLabel = styled.label`
  ${uppercase};
  font-size: 12px;
  float: left;
  padding: 0 8px;
  opacity: 0.9;
  transition: all 0.2s;
`;

const InputField = styled.input`
  ${cover};
  background: none;
  border: 0;
  padding: 20px 16px 0;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.14);
  font-weight: 600;
  transition: all 0.2s;

  &:hover,
  &:focus {
    border-color: #fff;
  }

  &:focus {
    background: rgba(0, 0, 0, 0);

    ~ ${InputLabel} {
      opacity: 1;
    }
  }
`;

const InputSubmit = styled.button`
  ${uppercase};
  position: relative;
  z-index: 2;
  font-size: 12px;
  float: right;
  width: 210px;
  height: 44px;
  line-height: 44px;
  background: rgba(255, 255, 255, 0.9);
  border: 0;
  border-radius: 3px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  color: #007fd0;
  transition: all 0.2s;

  &:hover {
    background: #fff;
  }
`;

const BlockNetwork = styled.div`
  position: absolute;
  top: 84px;
  right: -16px;
  width: 463px;
  height: 354px;
  background-image: url(${blockNetwork});
  background-size: 463px 354px;

  ${hiDPI(2)} {
    background-image: url(${blockNetwork2x});
  }
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
            <Logo>
              <LogoCaps>B</LogoCaps>
              lock
              <LogoCaps>C</LogoCaps>
              luster
            </Logo>
            <Nav>
              <NavLeft>
                <NavItem>Features</NavItem>
                <NavItem>Use cases</NavItem>
                <NavItem>Pricing</NavItem>
              </NavLeft>
              <NavRight>
                <NavItem>Support</NavItem>
                <NavButton>Login</NavButton>
              </NavRight>
            </Nav>
          </Header>
          <InnerWrapper>
            <Title>
              Build and deploy your blockchain network<br />
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
            <UI />
            {/* <BlockNetwork /> */}
            {/* <Card>
              <CardCover />
              <CardTitle>Request an invite</CardTitle>
              <CardSubtitle>
                Build and deploy your own blockchain network within a few clicks
              </CardSubtitle>
              <InputWrapper>
                <InputField />
                <InputLabel>Email address</InputLabel>
                <InputSubmit>Request invite</InputSubmit>
              </InputWrapper>
            </Card> */}
          </InnerWrapper>
        </Wrapper>
      </Root>
    );
  }
}

export default Hero;
