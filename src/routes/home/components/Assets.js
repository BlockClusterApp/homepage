import React, { Fragment } from 'react';
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';
import styled, { css } from 'styled-components';
import { tint, wordWrap, mix, darken, lighten } from 'polished';
import AnimateText from '../../../components/AnimateText';
import { colors, spacing, media } from '../../../styles';
import { cover, wrapper, uppercase } from '../../../styles/mixins';
import mq from '../../../helpers/mediaQueries';

const refresh = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path
      fill="currentColor"
      d="M370.72 133.28C339.458 104.008 298.888 87.962 255.848 88c-77.458.068-144.328 53.178-162.791 126.85-1.344 5.363-6.122 9.15-11.651 9.15H24.103c-7.498 0-13.194-6.807-11.807-14.176C33.933 94.924 134.813 8 256 8c66.448 0 126.791 26.136 171.315 68.685L463.03 40.97C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.749zM32 296h134.059c21.382 0 32.09 25.851 16.971 40.971l-41.75 41.75c31.262 29.273 71.835 45.319 114.876 45.28 77.418-.07 144.315-53.144 162.787-126.849 1.344-5.363 6.122-9.15 11.651-9.15h57.304c7.498 0 13.194 6.807 11.807 14.176C478.067 417.076 377.187 504 256 504c-66.448 0-126.791-26.136-171.315-68.685L48.97 471.03C33.851 486.149 8 475.441 8 454.059V320c0-13.255 10.745-24 24-24z"
    />
  </svg>
);

const shield = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path
      fill="currentColor"
      d="M496 128c0 221.282-135.934 344.645-221.539 380.308a48 48 0 0 1-36.923 0C130.495 463.713 16 326.487 16 128a48 48 0 0 1 29.539-44.308l192-80a48 48 0 0 1 36.923 0l192 80A48 48 0 0 1 496 128zM235.313 381.941l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L224 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.248 6.25 16.379 6.25 22.627.001z"
      className=""
    />
  </svg>
);

const Root = styled.section`
  position: relative;
  z-index: 2;
  text-align: center;
`;

const Cover = styled.div`
  ${cover};
  z-index: -1;
  height: 116%;
  background: linear-gradient(
    ${tint(0.9, colors.secondary)},
    ${tint(0.95, colors.secondary)}
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
    float: left;
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

const Assets = styled.div`
  position: relative;
  width: 196px;
  height: 220px;
  margin: ${spacing(4)} auto;

  ${media.max768} {
    margin: 0 auto ${spacing()};
    transform: scale(0.6) translateX(16px);
  }
`;

const Asset = styled.div`
  ${wordWrap('break-word')};
  position: absolute;
  margin: 0 auto;
  width: 194px;
  height: 274px;
  box-shadow: -27.1px 62.5px 125px -25px rgba(51, 72, 97, 0.4),
    -16.2px 37.5px 75px -37.5px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  letter-spacing: 0;
  font-family: monospace;
  font-size: 15px;
  padding: ${spacing(1.5)};
  color: ${mix(0.5, colors.secondary, colors.primary)};
  transition: transform 1s cubic-bezier(0.25, 0.85, 0.25, 1);

  ${media.min768} {
    font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;
  }

  &:nth-child(1) {
    z-index: 3;
    background: linear-gradient(
      ${lighten(0.02, colors.tertiary)},
      ${darken(0.1, colors.tertiary)}
    );
    transform: matrix3d(
      0.9,
      0,
      0,
      0.0005,
      0,
      0.9,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    );
  }

  &:nth-child(2) {
    z-index: 2;
    background: linear-gradient(
      ${lighten(0.02, mix(0.67, colors.tertiary, colors.secondary))},
      ${darken(0.04, mix(0.67, colors.tertiary, colors.secondary))}
    );
    transform: matrix3d(
      0.88,
      0,
      0,
      0.0005,
      0,
      0.88,
      0,
      0,
      0,
      0,
      1,
      0,
      -24,
      -8,
      0,
      1
    );
  }

  &:nth-child(3) {
    z-index: 1;
    background: linear-gradient(
      ${lighten(0.02, mix(0.33, colors.tertiary, colors.secondary))},
      ${darken(0.02, mix(0.33, colors.tertiary, colors.secondary))}
    );
    transform: matrix3d(
      0.86,
      0,
      0,
      0.0005,
      0,
      0.86,
      0,
      0,
      0,
      0,
      1,
      0,
      -44,
      -18,
      0,
      1
    );
  }
`;

const AssetHash = styled.div`
  font-family: monospace;
  font-size: 13px;
  color: ${colors.text};
  margin-bottom: ${spacing()};
  ${wordWrap('break-word')};

  ${media.min768} {
    font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;
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

  ${props =>
    props.type === 'digital' &&
    css`
      padding: 5px;
      font-size: 8px;
      line-height: 8px;
      letter-spacing: 0;
      font-family: monospace;

      ${media.min768} {
        font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;
      }
    `};

  ${props =>
    props.type === 'cross' &&
    css`
      padding: 3px 6px;
    `};

  ${props =>
    props.type === 'verified' &&
    css`
      padding: 5px;
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

class AssetsComponent extends React.Component {
  /* eslint-disable no-param-reassign */
  static randomDigit = () => Math.round(Math.random());

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
      this.setAssetsStyleToClass();
      window.addEventListener('scroll', this.onScrollParallax);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScrollParallax);
  }

  onScrollParallax = () => {
    Object.values(this.assets).forEach(({ ref, transformStyle }, i) => {
      if (
        ref.current.getBoundingClientRect().top < window.innerHeight &&
        ref.current.getBoundingClientRect().bottom > 0
      ) {
        const multiplier = 1 + i * 2;
        const translateYAmount =
          window.innerHeight -
          ref.current.getBoundingClientRect().top * multiplier;

        ref.current.style = AssetsComponent.translateYInMatrix3d(
          transformStyle,
          translateYAmount / 36,
        );
      }
    });
  };

  setAssetsStyleToClass() {
    Object.values(this.assets).forEach(asset => {
      asset.transformStyle = window.getComputedStyle(
        asset.ref.current,
      ).transform;
    });
  }

  assets = {
    front: { ref: React.createRef() },
    mid: { ref: React.createRef() },
    back: { ref: React.createRef() },
  };

  render() {
    return (
      <Root>
        <Cover />
        <Wrapper>
          <Column>
            <Assets>
              <Asset innerRef={this.assets.front.ref}>
                <AssetHash>
                  Hash:
                  #47FB654FDCFFEDF78ECE5DDB7EE485AFCF37415E371A6DFE663C0776DA6D0F0C
                </AssetHash>
                {[...Array(98)].map(AssetsComponent.randomDigit)}
              </Asset>
              <Asset innerRef={this.assets.mid.ref} />
              <Asset innerRef={this.assets.back.ref} />
            </Assets>
          </Column>
          <Column>
            <Title>
              <AnimateText
                textNodes={['Asset', 'management']}
                animationStyle="slide"
              />
            </Title>
            <PointTitle>
              <PointCheck type="digital">
                10<br />01
              </PointCheck>
              <AnimateText
                textNodes={['Digitalization', 'of', 'assets']}
                animationStyle="slide"
              />
            </PointTitle>
            <PointDescription>
              <AnimateText
                textNodes={[
                  `This process eliminates much of the friction involved
                  of holding, storing, and transferring a asset.`,
                ]}
                animationStyle="fadeSlide"
              />
            </PointDescription>
            <PointTitle>
              <PointCheck type="cross">{refresh}</PointCheck>
              <AnimateText
                textNodes={['Cross', 'chain', 'asset', 'exchange']}
                animationStyle="slide"
              />
            </PointTitle>
            <PointDescription>
              <AnimateText
                textNodes={[
                  `Interoperable assets means you are able to
                  exchange  your assets across different networks atomically`,
                ]}
                animationStyle="fadeSlide"
              />
            </PointDescription>
            <PointTitle>
              <PointCheck type="verified">{shield}</PointCheck>
              <AnimateText
                textNodes={['Audited', 'smart', 'contracts']}
                animationStyle="slide"
              />
            </PointTitle>
            <PointDescription>
              <AnimateText
                textNodes={[
                  `Verified smart contracts which went through
                  rigorous independent reviews.`,
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

export default AssetsComponent;
