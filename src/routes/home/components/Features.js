import React from 'react';
import styled, { css } from 'styled-components';
import { clearFix, lighten, tint, shade, desaturate } from 'polished';
import { colors, spacing, media } from '../../../styles';
import { wrapper, cover, uppercase } from '../../../styles/mixins';

const Root = styled.section`
  background: ${colors.secondary};
  padding-top: ${spacing(7)};
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
  font-weight: 700;
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
  text-align: left;
`;

const PointColumn = styled.div`
  position: relative;
  float: left;
  width: 50%;
  height: 296px;
  text-align: center;
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

const Features = () => (
  <Root>
    <Wrapper>
      <Title>
        Our comprehensive <TitleEm>set of features</TitleEm>
      </Title>
      <Subtitle>
        BlockCluster automatically sets up your nodes, writes your smart
        contracts and<br />
        auto generates API endpoints providing you full control over your
        private chain.
      </Subtitle>
      <PointsRow>
        <PointColumn>
          <PointCoverLight />
          <Point>
            <PointTitle>Run anywhere</PointTitle>
            <PointDescription>
              Take the advantage to run your infrastructure<br />
              anywhere, on-premises, hybrid, or the cloud.
            </PointDescription>
          </Point>
        </PointColumn>
        <PointColumn>
          <PointCoverDesaturated />
          <Point>
            <PointTitle>Cross chain assets</PointTitle>
            <PointDescription>
              Interoperable assets means you are able to<br />
              distribute your assets across different networks
            </PointDescription>
          </Point>
        </PointColumn>
      </PointsRow>
      <PointsRow>
        <PointColumn>
          <PointCoverDesaturated />
          <Point>
            <PointTitle>Auto generated API’s</PointTitle>
            <PointDescription>
              Use familiar REST API’s to interact with the<br />
              blockchain. Blockchain made easy.
            </PointDescription>
          </Point>
        </PointColumn>
        <PointColumn>
          <PointCoverDark />
          <Point>
            <PointTitle>Digitalization of assets</PointTitle>
            <PointDescription>
              This process eliminates much of the friction involved<br />
              of holding, storing, and transferring a asset.
            </PointDescription>
          </Point>
        </PointColumn>
      </PointsRow>
      <PointsRow>
        <PointColumn>
          <PointCoverLight />
          <Point>
            <PointTitle>Advanced querying</PointTitle>
            <PointDescription>
              Query smart contracts and assets using<br />
              the MongoDB query language style
            </PointDescription>
          </Point>
        </PointColumn>
        <PointColumn>
          <PointCoverDesaturated />
          <Point>
            <PointTitle>Audited smart contracts</PointTitle>
            <PointDescription>
              Verified smart contracts which went through<br />
              rigorous independent reviews.
            </PointDescription>
          </Point>
        </PointColumn>
      </PointsRow>
    </Wrapper>
  </Root>
);

export default Features;
