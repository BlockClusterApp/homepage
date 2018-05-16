import React from 'react';
import styled, { css } from 'styled-components';
import { clearFix, lighten } from 'polished';
import slowDevelopment from '../assets/slow-dev.png';
import slowDevelopment2x from '../assets/slow-dev@2x.png';
import { colors, spacing, media } from '../../../styles';
import { wrapper, cover, uppercase } from '../../../styles/mixins';

const checkSvg =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></svg>';

const Root = styled.section`
  position: relative;
  padding: ${spacing(7)} ${spacing()};
  text-align: center;
`;

const Wrapper = styled.div`
  ${wrapper};
`;

const Title = styled.h3`
  font-size: 34px;
  font-weight: 600;
  color: ${colors.primary};
  margin-bottom: ${spacing(1.5)};
`;

const TitleEm = styled.span`
  font-weight: 700;
  color: ${colors.secondary};
`;

const Subtitle = styled.h3`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: ${spacing(6)};
`;

const PointsRow = styled.div`
  margin: 0 auto ${spacing(3)};
  max-width: 720px;
  ${clearFix()};
`;

const PointColumn = styled.div`
  float: left;
  width: 50%;
  text-align: center;
`;

const Point = styled.div`
  width: 312px;
  display: inline-block;
  text-align: left;
`;

const PointIllustration = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
  margin-bottom: ${spacing(1)};
`;

const PointIllustrationCheck = styled.div`
  position: absolute;
  right: -8px;
  bottom: -1px;
  width: 18px;
  height: 18px;
  background: #1dde00;
  border-radius: 50%;
  border: 2px solid #fff;
  text-align: center;

  svg {
    color: #fff;
    position: relative;
    top: -6px;
    width: 10px;
    height: 9px;
  }
`;

const PointTitle = styled.div`
  ${uppercase};
  font-size: 14px;
  font-weight: 700;
  color: ${colors.text};
  margin-bottom: ${spacing(0.5)};
`;

const PointDescription = styled.div`
  color: ${lighten(0.2, colors.text)};
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

const Problem = () => (
  <Root>
    <Wrapper>
      <Title>
        Introducing <TitleEm>Blockchain as a service</TitleEm>
      </Title>
      <Subtitle>
        BlockCluster’s BaaS includes a rich catalog of cloud services which
        allows you to<br />
        customly build and deploy business blockchain applications rapidly — a
        few clicks aways.
      </Subtitle>
      <PointsRow>
        <PointColumn>
          <Point>
            <PointIllustration>
              <PointImgSlowDevelopment
                src={slowDevelopment}
                srcSet={`${slowDevelopment2x} 2x`}
                alt="Slow development"
              />
              <PointIllustrationCheck
                dangerouslySetInnerHTML={{ __html: checkSvg }}
              />
            </PointIllustration>
            <PointTitle>Build & deploy in no time</PointTitle>
            <PointDescription>
              Setup your blockchain network within a few<br />
              clicks or API calls without writing any code
            </PointDescription>
          </Point>
        </PointColumn>
        <PointColumn>
          <Point>
            <PointIllustration>
              <PointImgSlowDevelopment
                src={slowDevelopment}
                srcSet={`${slowDevelopment2x} 2x`}
                alt="Slow development"
              />
              <PointIllustrationCheck
                dangerouslySetInnerHTML={{ __html: checkSvg }}
              />
            </PointIllustration>
            <PointTitle>No knowledge required</PointTitle>
            <PointDescription>
              Configure your digital assets through our<br />
              user interface without writing smart contracts
            </PointDescription>
          </Point>
        </PointColumn>
      </PointsRow>
      <PointsRow>
        <PointColumn>
          <Point>
            <PointIllustration>
              <PointImgSlowDevelopment
                src={slowDevelopment}
                srcSet={`${slowDevelopment2x} 2x`}
                alt="Slow development"
              />
              <PointIllustrationCheck
                dangerouslySetInnerHTML={{ __html: checkSvg }}
              />
            </PointIllustration>
            <PointTitle>Secure and reliable</PointTitle>
            <PointDescription>
              Under the hood we’re leveraging the most<br />
              reputable and well tested smart contracts
            </PointDescription>
          </Point>
        </PointColumn>
        <PointColumn>
          <Point>
            <PointIllustration>
              <PointImgSlowDevelopment
                src={slowDevelopment}
                srcSet={`${slowDevelopment2x} 2x`}
                alt="Slow development"
              />
              <PointIllustrationCheck
                dangerouslySetInnerHTML={{ __html: checkSvg }}
              />
            </PointIllustration>
            <PointTitle>Easy integration & scalable</PointTitle>
            <PointDescription>
              Whether hosted on the cloud or on premises,<br />
              BlockCluster’s integration is simple
            </PointDescription>
          </Point>
        </PointColumn>
      </PointsRow>
    </Wrapper>
  </Root>
);

export default Problem;
