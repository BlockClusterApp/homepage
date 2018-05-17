import React from 'react';
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';
import styled, { css } from 'styled-components';
import { clearFix, lighten } from 'polished';
import noTime from '../assets/no-time.png';
import noTime2x from '../assets/no-time@2x.png';
import noKnowledge from '../assets/no-knowledge.png';
import noKnowledge2x from '../assets/no-knowledge@2x.png';
import secure from '../assets/secure.png';
import secure2x from '../assets/secure@2x.png';
import integration from '../assets/integration.png';
import integration2x from '../assets/integration@2x.png';
import { colors, spacing, media } from '../../../styles';
import { wrapper, cover, uppercase } from '../../../styles/mixins';

const checkSvg =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></svg>';

const Root = styled.section`
  padding: ${spacing(7)} ${spacing()};
  text-align: center;
  background: linear-gradient(#fff, #f6fbff);
`;

const Wrapper = styled.div`
  ${wrapper};
`;

const Title = styled.h3`
  margin-bottom: ${spacing(1.5)};
`;

const TitleIntro = styled.span`
  ${uppercase};
  font-size: 17px;
  color: ${colors.primary};
  margin-bottom: ${spacing(1.5)};
`;

const TitleEm = styled.span`
  display: block;
  font-size: 36px;
  font-weight: 700;
  color: ${colors.secondary};
`;

const Subtitle = styled.h3`
  font-size: 18px;
  font-weight: 400;
  margin: 0 auto ${spacing(6)};
  line-height: 1.4;
  max-width: 462px;
`;

const PointColumn = styled.div`
  float: left;
  width: 50%;
  text-align: center;
`;

const PointsRow = styled.div`
  margin: 0 auto ${spacing(2)};
  max-width: 840px;
  ${clearFix()};
`;

const faceCss = css`
  opacity: 0;
  will-change: opacity, transform;

  transition: none;
  transform: matrix(0.8, 0, 0, 0.8, 0, 32);
`;

const fadedCss = css`
  opacity: 1;
  transform: matrix(1, 0, 0, 1, 0, 0);
  transition: opacity 0.5s, transform 0.5s;
`;

const pointCss = css`
  ${faceCss};
  width: 382px;
  display: inline-block;
  padding: ${spacing(2)};
  background: #fff;
  box-shadow: 0 15px 35px rgba(51, 72, 97, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  border-radius: 12px;
`;

const Point1 = styled.div`
  ${pointCss};
`;

const Point2 = styled.div`
  ${pointCss};
`;

const Point3 = styled.div`
  ${pointCss};
`;

const Point4 = styled.div`
  ${pointCss};
`;

const PointsWrapper = styled.div`
  color: blue;

  ${props =>
    props.faded &&
    css`
      color: red;

      ${Point1} {
        ${fadedCss};
      }

      ${Point2} {
        ${fadedCss};
        transition-delay: 100ms;
      }

      ${Point3} {
        ${fadedCss};
        transition-delay: 200ms;
      }

      ${Point4} {
        ${fadedCss};
        transition-delay: 300ms;
      }
    `};
`;

const PointIllustration = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
  margin: 0 auto ${spacing(1)};
  transform: translateX(-9px);
`;

const PointIllustrationCheck = styled.div`
  position: absolute;
  right: -8px;
  bottom: -1px;
  width: 18px;
  height: 18px;
  background: ${colors.success};
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
  color: ${colors.secondary};
  margin-bottom: ${spacing(0.5)};
`;

const PointDescription = styled.div`
  color: ${lighten(0.1, colors.text)};
  line-height: 1.3;
`;

const PointImgNoTime = styled.img`
  width: 48px;
  height: 50px;
`;

const PointImgNoKnowledge = styled.img`
  width: 44px;
  height: 52px;
`;

const PointImgSecure = styled.img`
  width: 46px;
  height: 50px;
`;

const PointImgIntegration = styled.img`
  width: 50px;
  height: 50px;
`;

class Problem extends React.Component {
  state = {
    faded: false,
  };

  componentDidMount() {
    if (canUseDOM) {
      window.addEventListener('scroll', this.onScrollFade);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScrollFade);
  }

  onScrollFade = () => {
    if (
      !this.state.faded &&
      window.innerHeight * 0.8 >
        this.pointsRef.current.getBoundingClientRect().top
    ) {
      this.setState({ faded: true });
    }

    if (
      this.state.faded &&
      window.innerHeight < this.pointsRef.current.getBoundingClientRect().top
    ) {
      this.setState({ faded: false });
    }
  };

  pointsRef = React.createRef();

  render() {
    return (
      <Root>
        <Wrapper>
          <Title>
            <TitleIntro>Introducing BlockCluster’s</TitleIntro>
            <TitleEm>Blockchain as a service</TitleEm>
          </Title>
          <Subtitle>
            BlockCluster’s BaaS includes a rich catalog of cloud services which
            allows you to customly build and deploy business blockchain
            applications rapidly — a few clicks aways.
          </Subtitle>
          <PointsWrapper innerRef={this.pointsRef} faded={this.state.faded}>
            <PointsRow>
              <PointColumn>
                <Point1>
                  <PointIllustration>
                    <PointImgNoTime
                      src={noTime}
                      srcSet={`${noTime2x} 2x`}
                      alt="Build & deploy in no time"
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
                </Point1>
              </PointColumn>
              <PointColumn>
                <Point2>
                  <PointIllustration>
                    <PointImgNoKnowledge
                      src={noKnowledge}
                      srcSet={`${noKnowledge2x} 2x`}
                      alt="No knowledge required"
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
                </Point2>
              </PointColumn>
            </PointsRow>
            <PointsRow last>
              <PointColumn>
                <Point3>
                  <PointIllustration>
                    <PointImgSecure
                      src={secure}
                      srcSet={`${secure2x} 2x`}
                      alt="Secure and reliable"
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
                </Point3>
              </PointColumn>
              <PointColumn>
                <Point4>
                  <PointIllustration>
                    <PointImgIntegration
                      src={integration}
                      srcSet={`${integration2x} 2x`}
                      alt="Easy integration & scalable"
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
                </Point4>
              </PointColumn>
            </PointsRow>
          </PointsWrapper>
        </Wrapper>
      </Root>
    );
  }
}

export default Problem;
