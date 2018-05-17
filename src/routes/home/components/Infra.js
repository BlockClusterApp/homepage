import React from 'react';
import styled, { css } from 'styled-components';
import { clearFix, lighten, tint, shade, desaturate } from 'polished';
import createAssets from '../assets/create-assets.png';
import { colors, spacing, media } from '../../../styles';
import { wrapper, cover, uppercase } from '../../../styles/mixins';

const checkSvg =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></svg>';

const Root = styled.section`
  background: ${colors.secondary};
  text-align: center;
`;

const Wrapper = styled.div`
  ${'' /* ${wrapper}; */};
`;

const Title = styled.h3`
  font-size: 34px;
  font-weight: 600;
  color: #fff;
  margin-bottom: ${spacing(1.5)};
`;

const TitleEm = styled.span`
  font-weight: 600;
  color: ${colors.backgroundSecondaryText};
`;

const Subtitle = styled.h3`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: ${spacing(6)};
  color: #fff;
  opacity: 0.9;
`;

const PointsRow = styled.div`
  margin: 0 auto;
  ${clearFix()};
`;

const Point = styled.div`
  width: 312px;
  display: inline-block;
  background: #fff;
`;

const PointColumn = styled.div`
  position: relative;
  float: left;
  width: 50%;
  height: 296px;
  text-align: left;
  padding: ${spacing(7)} ${spacing(4)} 0;

  &:first-child ${Point} {
    float: right;
  }

  &:last-child ${Point} {
    float: left;
  }
`;

const PointIllustration = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
  margin-bottom: ${spacing(1)};
`;

const PointIllustrationError = styled.div`
  position: absolute;
  right: -8px;
  bottom: -1px;
  width: 18px;
  height: 18px;
  background: #ff3d3d;
  border-radius: 50%;
  border: 2px solid #fff;
  text-align: center;

  svg {
    color: #fff;
    position: relative;
    top: -6px;
    width: 4px;
    height: 9px;
  }
`;

const PointTitle = styled.div`
  ${uppercase};
  position: relative;
  z-index: 1;
  font-size: 14px;
  font-weight: 700;
  color: ${colors.backgroundSecondaryText};
  margin-bottom: ${spacing(0.5)};
`;

const PointDescription = styled.div`
  position: relative;
  z-index: 1;
  color: #fff;
  line-height: 1.3;
`;

const PointImgSlowDevelopment = styled.img`
  width: 48px;
  height: 48px;
`;

const PointImgErrorProne = styled.img`
  width: 46px;
  height: 51px;
`;

const PointImgHardToExecute = styled.img`
  width: 52px;
  height: 42px;
`;

const PointImgCumbersomeIntegration = styled.img`
  width: 51px;
  height: 51px;
`;

const pointCoverCss = css`
  ${cover};
`;

const PointCoverLight = styled.div`
  ${pointCoverCss};
  background: ${tint(0.9, colors.secondary)};
`;

const PointCoverDark = styled.div`
  ${pointCoverCss};
  background: ${shade(0.9, colors.secondary)};
`;

const PointCoverDesaturated = styled.div`
  ${pointCoverCss};
  background: ${desaturate(0.2, colors.secondary)};
`;

const AssetsSection = styled.div`
  background: linear-gradient(
    ${shade(0.9, colors.secondary)},
    ${shade(0.95, colors.secondary)}
  );
`;

const AssetsWrapper = styled.div`
  ${wrapper};
  padding: ${spacing(4)} ${spacing()};
`;

const AssetsColumn = styled.div`
  float: left;
  width: 50%;
  text-align: left;
`;

const AssetsTitle = styled.div`
  font-size: 30px;
  color: #fff;
  margin-bottom: ${spacing(2)};
`;

const AssetsUI = styled.div`
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
  background: #fff url(${createAssets}) left top no-repeat;
  background-size: 744px 401px;
`;

const AssetsPointTitle = styled.div`
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

const AssetsPointDescription = styled.div`
  font-size: 16px;
  margin-bottom: ${spacing(2)};
  color: #fff;
`;

const Features = () => (
  <Root>
    <Wrapper>
      <AssetsSection>
        <AssetsWrapper>
          <AssetsColumn>
            <AssetsTitle>Building blocks for blockchain</AssetsTitle>
            <AssetsPointTitle>
              <PointCheck dangerouslySetInnerHTML={{ __html: checkSvg }} />
              Run anywhere
            </AssetsPointTitle>
            <AssetsPointDescription>
              Take the advantage to run your infrastructure<br />
              anywhere, on-premises, hybrid, or the cloud.
            </AssetsPointDescription>
            <AssetsPointTitle>
              <PointCheck dangerouslySetInnerHTML={{ __html: checkSvg }} />
              Auto generated API’s
            </AssetsPointTitle>
            <AssetsPointDescription>
              Use familiar REST API’s to interact with the<br />
              blockchain. Blockchain made easy.
            </AssetsPointDescription>
            <AssetsPointTitle>
              <PointCheck dangerouslySetInnerHTML={{ __html: checkSvg }} />
              Advanced querying
            </AssetsPointTitle>
            <AssetsPointDescription>
              Query smart contracts and assets using<br />
              the MongoDB query language style
            </AssetsPointDescription>
          </AssetsColumn>
          <AssetsColumn>
            <AssetsUI />
          </AssetsColumn>
        </AssetsWrapper>
      </AssetsSection>
    </Wrapper>
  </Root>
);

export default Features;
