import React from 'react';
import styled from 'styled-components';
import { clearFix, darken, lighten, hiDPI } from 'polished';
// import SVG from 'react-svg-inline';
import { colors, spacing, media } from '../../../styles';
import { wrapper, cover, uppercase } from '../../../styles/mixins';
// import error from '../../../assets/images/error.svg';
import slowDevelopment from '../assets/slow-dev.png';
import slowDevelopment2x from '../assets/slow-dev@2x.png';
import errorProne from '../assets/error-prone.png';
import errorProne2x from '../assets/error-prone@2x.png';
import hardToExecute from '../assets/hard-exec.png';
import hardToExecute2x from '../assets/hard-exec@2x.png';
import cumbersomeIntegration from '../assets/cumbersome-int.png';
import cumbersomeIntegration2x from '../assets/cumbersome-int@2x.png';

const errorSvg =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z"/></svg>';

const Root = styled.section`
  position: relative;
  background: #f6fbff;
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
        Building your own private blockchain <TitleEm>is difficult</TitleEm>
      </Title>
      <Subtitle>
        Blockchain and its promising technology could provide immense value to
        your business.<br />What you’ll probably realise sooner than later is
        that it’s not that easy to implement.
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
              <PointIllustrationError
                dangerouslySetInnerHTML={{ __html: errorSvg }}
              />
            </PointIllustration>
            <PointTitle>Slow development</PointTitle>
            <PointDescription>
              Writing dedicated blockchain applications<br />
              is expected to take months to develop
            </PointDescription>
          </Point>
        </PointColumn>
        <PointColumn>
          <Point>
            <PointIllustration>
              <PointImgErrorProne
                src={errorProne}
                srcSet={`${errorProne2x} 2x`}
                alt="Error prone"
              />
              <PointIllustrationError
                dangerouslySetInnerHTML={{ __html: errorSvg }}
              />
            </PointIllustration>
            <PointTitle>Error prone</PointTitle>
            <PointDescription>
              Smart contract are prone to human error<br />
              which will risk your business integrity
            </PointDescription>
          </Point>
        </PointColumn>
      </PointsRow>
      <PointsRow>
        <PointColumn>
          <Point>
            <PointIllustration>
              <PointImgHardToExecute
                src={hardToExecute}
                srcSet={`${hardToExecute2x} 2x`}
                alt="Hard to execute"
              />
              <PointIllustrationError
                dangerouslySetInnerHTML={{ __html: errorSvg }}
              />
            </PointIllustration>
            <PointTitle>Hard to execute</PointTitle>
            <PointDescription>
              Blockchain is relatively new and finding<br />
              experienced developers is hard
            </PointDescription>
          </Point>
        </PointColumn>
        <PointColumn>
          <Point>
            <PointIllustration>
              <PointImgCumbersomeIntegration
                src={cumbersomeIntegration}
                srcSet={`${cumbersomeIntegration2x} 2x`}
                alt="Cumbersome integration"
              />
              <PointIllustrationError
                dangerouslySetInnerHTML={{ __html: errorSvg }}
              />
            </PointIllustration>
            <PointTitle>Cumbersome integration</PointTitle>
            <PointDescription>
              Existing systems introduce more hassles,<br />
              especially with an on-premises setup
            </PointDescription>
          </Point>
        </PointColumn>
      </PointsRow>
    </Wrapper>
  </Root>
);

export default Problem;
