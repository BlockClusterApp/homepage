import React from 'react';
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';
import styled, { css } from 'styled-components';
import { shade, lighten, darken } from 'polished';
import AnimateText from '../../../components/AnimateText';
import { colors, spacing, media } from '../../../styles';
import { cover, wrapper, uppercase } from '../../../styles/mixins';
import mq from '../../../helpers/mediaQueries';

const building = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path
      fill="currentColor"
      d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"
    />
  </svg>
);

const search = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path
      fill="currentColor"
      d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
    />
  </svg>
);

const code = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
    <path
      fill="currentColor"
      d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"
    />
  </svg>
);

const Root = styled.section`
  position: relative;
  z-index: 1;
  text-align: center;
`;

const Cover = styled.div`
  ${cover};
  z-index: -1;
  height: 116%;
  background: linear-gradient(
    ${shade(0.9, colors.secondary)},
    ${shade(0.95, colors.secondary)}
  );
  transform: matrix(1, 0.04, 0, 1, 0, -106);
`;

const Wrapper = styled.div`
  ${wrapper};
  padding: ${spacing(5.75)} ${spacing()};

  ${media.max768} {
    padding: ${spacing(2.5)} ${spacing(1.5)};
  }

  ${media.max375} {
    padding: ${spacing(2.5)} ${spacing()};
  }
`;

const Column = styled.div`
  text-align: left;

  ${media.min768} {
    float: right;
    width: 50%;

    &:last-child {
      padding-left: ${spacing(3)};
    }
  }
`;

const Title = styled.div`
  font-size: 30px;
  line-height: 1.2;
  color: #fff;
  margin-bottom: ${spacing(2)};

  ${media.max768} {
    text-align: center;
  }

  ${media.max375} {
    font-size: 25px;
  }
`;

const Blocks = styled.div`
  position: relative;
  width: 224px;
  height: 244px;
  margin: ${spacing(9.5)} auto;

  ${media.max768} {
    margin: ${spacing(1.5)} auto -${spacing(2.5)};
    transform: scale(0.6) translateX(16px);
  }
`;

const Block = styled.div`
  position: absolute;
  margin: 0 auto;
  width: 224px;
  height: 244px;
  box-shadow: -27.1px 62.5px 125px -25px rgba(51, 72, 97, 0.4),
    -16.2px 37.5px 75px -37.5px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  border-top: 2px solid ${lighten(0.2, colors.tertiary)};
  border-right: 2px solid ${lighten(0.2, colors.tertiary)};
  border-bottom: 4px solid ${darken(0.2, colors.tertiary)};
  border-left: 4px solid ${darken(0.2, colors.tertiary)};
  letter-spacing: 0;
  font-family: monospace;
  font-size: 16px;
  padding: ${spacing(1.5)};
  transition: transform 1s cubic-bezier(0.25, 0.85, 0.25, 1);

  &:nth-child(1) {
    background: linear-gradient(
      -135deg,
      ${lighten(0.02, colors.tertiary)},
      ${darken(0.1, colors.tertiary)}
    );
    transform: matrix3d(
      0.745482,
      -0.351716,
      -0.566174,
      0,
      0.664735,
      0.330091,
      0.6702,
      0,
      -0.0488308,
      -0.875977,
      0.479874,
      0,
      0,
      0,
      0,
      1
    );
  }

  &:nth-child(2) {
    background: linear-gradient(
      -135deg,
      ${lighten(0.02, colors.tertiary)},
      ${darken(0.1, colors.tertiary)}
    );
    opacity: 0.67;
    transform: matrix3d(
      0.745482,
      -0.351716,
      -0.566174,
      0,
      0.664735,
      0.330091,
      0.6702,
      0,
      -0.0488308,
      -0.875977,
      0.479874,
      0,
      0,
      -50,
      0,
      1
    );
  }

  &:nth-child(3) {
    background: linear-gradient(
      -135deg,
      ${lighten(0.02, colors.tertiary)},
      ${darken(0.1, colors.tertiary)}
    );
    opacity: 0.33;
    transform: matrix3d(
      0.745482,
      -0.351716,
      -0.566174,
      0,
      0.664735,
      0.330091,
      0.6702,
      0,
      -0.0488308,
      -0.875977,
      0.479874,
      0,
      0,
      -100,
      0,
      1
    );
  }
`;

const PointTitle = styled.div`
  ${uppercase};
  position: relative;
  font-size: 14px;
  color: ${colors.backgroundSecondaryText};
  margin: 0 auto ${spacing(0.25)};

  ${media.max768} {
    max-width: 274px;
    position: relative;
    left: 21px;
  }

  ${media.max375} {
    max-width: 234px;
  }
`;

const PointCheck = styled.div`
  position: absolute;
  left: -42px;
  top: -2px;
  width: 24px;
  height: 24px;
  background: ${colors.tertiary};
  border-radius: 50%;
  text-align: center;
  color: ${colors.secondary};
  padding: 4px 6px;

  ${props =>
    props.type === 'code' &&
    css`
      padding: 3px 5px;
    `};
`;

const PointDescription = styled.div`
  font-size: 16px;
  margin-bottom: ${spacing(2)};
  color: #fff;
  max-width: 364px;

  ${media.max768} {
    position: relative;
    left: 21px;
    margin: 0 auto ${spacing(2)};
    max-width: 274px;
  }

  ${media.max375} {
    max-width: 234px;
  }
`;

class Infrastructure extends React.Component {
  /* eslint-disable no-param-reassign */
  static translateYInMatrix3d(transformStyle, translateYAmount) {
    const matrixValues = transformStyle
      .split('(')[1]
      .split(')')[0]
      .split(', ');
    matrixValues[13] = translateYAmount;

    return `transform: matrix3d(${matrixValues.join(',')})`;
  }

  componentDidMount() {
    if (canUseDOM && mq.min768()) {
      // eslint-disable-next-line
      this.setState({ mounted: true });
      this.setBlocksStyleToClass();
      window.addEventListener('scroll', this.onScrollParallax);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScrollParallax);
  }

  onScrollParallax = () => {
    Object.values(this.blocks).forEach(({ ref, transformStyle }, i) => {
      if (
        ref.current.getBoundingClientRect().top < window.innerHeight &&
        ref.current.getBoundingClientRect().bottom > 0
      ) {
        const multiplier = 1 + i * 1;
        const addition = i * 50;
        const translateYAmount =
          window.innerHeight -
          ref.current.getBoundingClientRect().top * multiplier;

        ref.current.style = Infrastructure.translateYInMatrix3d(
          transformStyle,
          -addition + translateYAmount / 36,
        );
      }
    });
  };

  setBlocksStyleToClass() {
    Object.values(this.blocks).forEach(block => {
      block.transformStyle = window.getComputedStyle(
        block.ref.current,
      ).transform;
    });
  }

  blocks = {
    bottom: { ref: React.createRef() },
    mid: { ref: React.createRef() },
    top: { ref: React.createRef() },
  };

  render() {
    return (
      <Root>
        <Cover />
        <Wrapper>
          <Column>
            <Blocks>
              <Block innerRef={this.blocks.bottom.ref} />
              <Block innerRef={this.blocks.mid.ref} />
              <Block innerRef={this.blocks.top.ref} />
            </Blocks>
          </Column>
          <Column>
            <Title>
              <AnimateText
                textNodes={'Building blocks for blockchain'.split(' ')}
                animationStyle="slide"
              />
            </Title>
            <PointTitle>
              <PointCheck>{building}</PointCheck>
              <AnimateText
                textNodes={'Run anywhere'.split(' ')}
                animationStyle="slide"
              />
            </PointTitle>
            <PointDescription>
              <AnimateText
                textNodes={[
                  `Take the advantage to run your infrastructure
                  anywhere - on-premises, hybrid or cloud.`,
                ]}
                animationStyle="fadeSlide"
              />
            </PointDescription>
            <PointTitle>
              <PointCheck type="code">{code}</PointCheck>
              <AnimateText
                textNodes={'Auto generated API’s'.split(' ')}
                animationStyle="slide"
              />
            </PointTitle>
            <PointDescription>
              <AnimateText
                textNodes={[
                  `Use secure REST API’s to interact with your
                  blockchain. Blockchain made easy.`,
                ]}
                animationStyle="fadeSlide"
              />
            </PointDescription>
            <PointTitle>
              <PointCheck>{search}</PointCheck>
              <AnimateText
                textNodes={'Advanced querying'.split(' ')}
                animationStyle="slide"
              />
            </PointTitle>
            <PointDescription>
              <AnimateText
                textNodes={[
                  `Query smart contracts and assets using
                  familiar  NoSQL  query language style`,
                ]}
                animationStyle="fadeSlide"
              />
            </PointDescription>
          </Column>
        </Wrapper>
      </Root>
    );
  }
}

export default Infrastructure;
