import React from 'react';
import styled, { css } from 'styled-components';
import { clearFix, hiDPI, darken, lighten } from 'polished';
import Header from './Header';
import network from '../assets/network.png';
import network2x from '../assets/network@2x.png';
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
  font-size: 22px;
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
          <Header />
          <InnerWrapper>
            <Title>
              Build and deploy powerful <br />
              blockchain applications<br />
              <TitleSecondary>
                Multi Protocol | On Demand | Hybrid Deployment &nbsp;&nbsp;&nbsp;
                <BlinkingCursor blink={this.state.blink} />
              </TitleSecondary>
            </Title>
            <Subtitle>
              Easily manage your enterprise blockchain <BreakDesktop />
              ecosystem through a simple user interface.
            </Subtitle>
            <ButtonsWrapper>
              <Button primary href="https://docs.blockcluster.io/" target="_blank">
                Documentation
              </Button>
              <Button secondary href="/request-demo">
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
