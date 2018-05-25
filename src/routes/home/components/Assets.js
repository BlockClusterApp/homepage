import React, { Fragment } from 'react';
import styled from 'styled-components';
import { tint } from 'polished';
import AnimateText from '../../../components/AnimateText';
import create from '../assets/create-assets.png';
import { colors, spacing } from '../../../styles';
import { wrapper, uppercase } from '../../../styles/mixins';

const checkSvg =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></svg>';

const Root = styled.section`
  background: linear-gradient(
    ${tint(0.9, colors.secondary)},
    ${tint(0.95, colors.secondary)}
  );
`;

const Wrapper = styled.div`
  ${wrapper};
  padding: ${spacing(4)} ${spacing()};
`;

const Column = styled.div`
  float: left;
  width: 50%;
  text-align: left;
`;

const Title = styled.div`
  font-size: 30px;
  color: #fff;
  margin-bottom: ${spacing(2)};
`;

const UI = styled.div`
  margin: 0 auto;
  width: 612px;
  height: 401px;
  border-radius: 12px;
  transform: matrix3d(
    0.7,
    0,
    0,
    0.0001,
    0,
    0.7,
    0,
    0,
    0,
    0,
    1,
    0,
    -90,
    0,
    0,
    1
  );
  box-shadow: -27.1px 62.5px 125px -25px rgba(51, 72, 97, 0.4),
    -16.2px 37.5px 75px -37.5px rgba(0, 0, 0, 0.2);
  background: #fff url(${create}) left top no-repeat;
  background-size: 744px 401px;
`;

const PointTitle = styled.div`
  ${uppercase};
  position: relative;
  font-size: 14px;
  color: ${colors.backgroundSecondaryText};
  margin-bottom: ${spacing(0.25)};
`;

const PointCheck = styled.div`
  position: absolute;
  left: -32px;
  top: 3px;
  width: 14px;
  height: 14px;
  background: ${colors.success};
  border-radius: 50%;
  text-align: center;

  svg {
    color: #fff;
    position: relative;
    top: -3px;
    width: 10px;
    height: 9px;
  }
`;

const PointDescription = styled.div`
  font-size: 16px;
  margin-bottom: ${spacing(2)};
  color: #fff;
  max-width: 364px;
`;

const Features = () => (
  <Root>
    <Wrapper>
      <Column>
        <UI />
      </Column>
      <Column>
        <Title>
          <AnimateText
            textNodes={['Asset', 'management']}
            animationStyle="slide"
          />
        </Title>
        <PointTitle>
          {/* <PointCheck dangerouslySetInnerHTML={{ __html: checkSvg }} />, */}
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
          {/* <PointCheck dangerouslySetInnerHTML={{ __html: checkSvg }} />, */}
          <AnimateText
            textNodes={['Cross', 'chain', 'assets']}
            animationStyle="slide"
          />
        </PointTitle>
        <PointDescription>
          <AnimateText
            textNodes={[
              `Interoperable assets means you are able to
              distribute your assets across different networks`,
            ]}
            animationStyle="fadeSlide"
          />
        </PointDescription>
        <PointTitle>
          {/* <PointCheck dangerouslySetInnerHTML={{ __html: checkSvg }} /> */}
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

export default Features;
