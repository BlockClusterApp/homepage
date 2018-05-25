import React from 'react';
import styled from 'styled-components';
import { shade } from 'polished';
import AnimateText from '../../../components/AnimateText';
import create from '../assets/assets-api.png';
import { colors, spacing, media } from '../../../styles';
import { wrapper, uppercase } from '../../../styles/mixins';

const checkSvg =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></svg>';

const Root = styled.section`
  background: linear-gradient(
    ${shade(0.9, colors.secondary)},
    ${shade(0.95, colors.secondary)}
  );
  text-align: center;
`;

const Wrapper = styled.div`
  ${wrapper};
  padding: ${spacing(4)} ${spacing()};

  ${media.max768} {
    padding: ${spacing(2.5)} ${spacing(1.5)};
  }
`;

const Column = styled.div`
  ${media.min768} {
    text-align: left;
    float: left;
    width: 50%;
  }
`;

const Title = styled.div`
  font-size: 30px;
  line-height: 1.2;
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
    -0.0001,
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

  ${media.max768} {
    display: none;
  }
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
  max-width: 364px;
  font-size: 16px;
  margin-bottom: ${spacing(2)};
  color: #fff;
`;

const Features = () => (
  <Root>
    <Wrapper>
      <Column>
        <Title>
          <AnimateText
            textNodes={'Building blocks for blockchain'.split(' ')}
            animationStyle="slide"
          />
        </Title>
        <PointTitle>
          {/* <PointCheck dangerouslySetInnerHTML={{ __html: checkSvg }} /> */}
          <AnimateText
            textNodes={'Run anywhere'.split(' ')}
            animationStyle="slide"
          />
        </PointTitle>
        <PointDescription>
          <AnimateText
            textNodes={[
              `Take the advantage to run your infrastructure
              anywhere, on-premises, hybrid, or the cloud.`,
            ]}
            animationStyle="fadeSlide"
          />
        </PointDescription>
        <PointTitle>
          {/* <PointCheck dangerouslySetInnerHTML={{ __html: checkSvg }} /> */}
          <AnimateText
            textNodes={'Auto generated API’s'.split(' ')}
            animationStyle="slide"
          />
        </PointTitle>
        <PointDescription>
          <AnimateText
            textNodes={[
              `Use familiar REST API’s to interact with the
              blockchain. Blockchain made easy.`,
            ]}
            animationStyle="fadeSlide"
          />
        </PointDescription>
        <PointTitle>
          <AnimateText
            textNodes={'Advanced querying'.split(' ')}
            animationStyle="slide"
          />
          {/* <PointCheck dangerouslySetInnerHTML={{ __html: checkSvg }} /> */}
        </PointTitle>
        <PointDescription>
          <AnimateText
            textNodes={[
              `Query smart contracts and assets using
              the MongoDB query language style`,
            ]}
            animationStyle="fadeSlide"
          />
        </PointDescription>
      </Column>
      <Column>
        <UI />
      </Column>
    </Wrapper>
  </Root>
);

export default Features;
