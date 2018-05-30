import React from 'react';
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';
import styled, { css } from 'styled-components';
import { clearFix, darken, lighten, hiDPI } from 'polished';
// import SVG from 'react-svg-inline';
import { colors, spacing, media } from '../../../styles';
import { wrapper, cover, uppercase } from '../../../styles/mixins';
import AnimateText from '../../../components/AnimateText';
import mq from '../../../helpers/mediaQueries';
// import error from '../../../assets/images/error.svg';
import slowDevelopment from '../assets/slow-dev.png';
import slowDevelopment2x from '../assets/slow-dev@2x.png';
import errorProne from '../assets/error-prone.png';
import errorProne2x from '../assets/error-prone@2x.png';
import hardToExecute from '../assets/hard-exec.png';
import hardToExecute2x from '../assets/hard-exec@2x.png';
import cumbersomeIntegration from '../assets/cumbersome-int.png';
import cumbersomeIntegration2x from '../assets/cumbersome-int@2x.png';
import play from '../assets/play.png';
import play2x from '../assets/play@2x.png';

const errorSvg =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z"/></svg>';

const Root = styled.section`
  position: relative;
  z-index: 2;
  padding: ${spacing(2.5)} ${spacing(1.5)};
  text-align: center;

  ${media.min768} {
    padding: ${spacing(7)} ${spacing()};
  }

  ${media.max375} {
    padding: ${spacing(2.5)} ${spacing()};
  }
`;

const Cover = styled.div`
  ${cover};
  z-index: -1;
  height: 114%;
  background: linear-gradient(#f6fbff, #eef7fe);
  transform: matrix(1, 0.06, 0, 1, 0, -124);

  ${media.max768} {
    transform: matrix(1, 0.06, 0, 1, 0, -156);
  }
`;

const Wrapper = styled.div`
  ${wrapper};
`;

const Title = styled.h3`
  font-size: 34px;
  font-weight: 600;
  color: ${colors.primary};
  margin-bottom: ${spacing(1.5)};

  ${media.max768} {
    font-size: 31px;
    margin-bottom: ${spacing()};
  }

  ${media.max375} {
    font-size: 25px;
  }
`;

const TitleEm = styled.span`
  font-weight: 700;
  color: ${colors.secondary};
`;

const Subtitle = styled.h3`
  font-size: 18px;
  font-weight: 400;
  margin: 0 auto ${spacing(6)};
  line-height: 1.4;
  max-width: 462px;

  ${media.max768} {
    margin-bottom: ${spacing(2)};
    font-size: 17px;
  }
`;

const PointColumn = styled.div`
  text-align: center;

  ${media.max768} {
    &:first-child {
      margin-bottom: ${spacing()};
    }
  }

  ${media.min768} {
    float: left;
    width: 50%;
  }
`;

const PointsRow = styled.div`
  margin: 0 auto ${spacing(2)};
  max-width: 840px;
  ${clearFix()};

  ${media.max768} {
    margin-bottom: ${spacing()};
  }
`;

const pointCss = css`
  padding: ${spacing(2)};
  background: #fff;
  box-shadow: 0 15px 35px rgba(51, 72, 97, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  border-radius: 12px;
  max-width: 382px;
  margin: 0 auto;

  ${media.min768} {
    display: inline-block;
    width: 100%;
  }
`;

const PointDev = styled.div`
  ${pointCss};
`;

const PointErr = styled.div`
  ${pointCss};
`;

const PointExe = styled.div`
  ${pointCss};
`;

const PointInt = styled.div`
  ${pointCss};
`;

const PointsWrapper = styled.div`
  ${props =>
    props.mounted &&
    css`
      ${PointDev},
      ${PointErr},
      ${PointExe},
      ${PointInt} {
        opacity: 0;
        will-change: opacity, transform;
        transition: none;
        transform: matrix(0.8, 0, 0, 0.8, 0, 32);
      }
    `};

  ${props =>
    props.visible &&
    css`
      ${PointDev},
      ${PointErr},
      ${PointExe},
      ${PointInt} {
        opacity: 1;
        transform: matrix(1, 0, 0, 1, 0, 0);
        transition: opacity 0.5s, transform 0.5s;
      }

      ${PointErr} {
        transition-delay: 100ms;
      }

      ${PointExe} {
        transition-delay: 200ms;
      }

      ${PointInt} {
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

const PointIllustrationError = styled.div`
  position: absolute;
  right: -8px;
  bottom: -1px;
  width: 18px;
  height: 18px;
  background: ${colors.error};
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
  color: ${darken(0.1, colors.text)};
  color: ${colors.secondary};
  margin-bottom: ${spacing(0.5)};
`;

const PointDescription = styled.div`
  color: ${lighten(0.1, colors.text)};
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
  width: 50px;
  height: 50px;
`;

const PointImgCumbersomeIntegration = styled.img`
  width: 51px;
  height: 51px;
`;

const Break = styled.br`
  ${media.max375} {
    display: none;
  }
`;

class Problem extends React.Component {
  state = {
    visible: false,
    mounted: false,
  };

  componentDidMount() {
    if (canUseDOM && mq.min768()) {
      // eslint-disable-next-line
      this.setState({ mounted: true });
      window.addEventListener('scroll', this.onScrollFade);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScrollFade);
  }

  onScrollFade = () => {
    if (
      !this.state.visible &&
      window.innerHeight * 0.8 >
        this.pointsRef.current.getBoundingClientRect().top
    ) {
      this.setState({ visible: true });
    }

    if (
      this.state.visible &&
      window.innerHeight < this.pointsRef.current.getBoundingClientRect().top
    ) {
      this.setState({ visible: false });
    }
  };

  titleRef = React.createRef();

  pointsRef = React.createRef();

  render() {
    const { mounted, visible } = this.state;

    return (
      <Root>
        <Cover />
        <Wrapper>
          <Title ref={this.titleRef}>
            <AnimateText
              textNodes={[
                'Building',
                'your',
                'own',
                'blockchain',
                'ecosystem',
                <TitleEm>is</TitleEm>,
                <TitleEm>difficult</TitleEm>,
              ]}
              animationStyle="slide"
            />
          </Title>
          <Subtitle>
            <AnimateText
              textNodes={[
                `Blockchain and its promising technology could provide immense value
                to your business. What you’ll probably realise sooner than later is
                that it’s not that easy to implement.`,
              ]}
              animationStyle="fadeSlide"
            />
          </Subtitle>
          <PointsWrapper
            innerRef={this.pointsRef}
            visible={visible}
            mounted={mounted}
          >
            <PointsRow>
              <PointColumn>
                <PointDev>
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
                    Writing dedicated blockchain applications<Break />
                    is expected to take months to develop
                  </PointDescription>
                </PointDev>
              </PointColumn>
              <PointColumn>
                <PointErr>
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
                    Smart contract are prone to human error<Break />
                    which will risk your business integrity
                  </PointDescription>
                </PointErr>
              </PointColumn>
            </PointsRow>
            <PointsRow last>
              <PointColumn>
                <PointExe>
                  <PointIllustration>
                    <PointImgHardToExecute
                      src={play}
                      srcSet={`${play2x} 2x`}
                      alt="Hard to execute"
                    />
                    <PointIllustrationError
                      dangerouslySetInnerHTML={{ __html: errorSvg }}
                    />
                  </PointIllustration>
                  <PointTitle>Hard to execute</PointTitle>
                  <PointDescription>
                    Blockchain is relatively new and finding<Break />
                    experienced developers is hard
                  </PointDescription>
                </PointExe>
              </PointColumn>
              <PointColumn>
                <PointInt>
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
                    Existing systems introduce more hassles, <Break />
                    especially with an on-premises setup
                  </PointDescription>
                </PointInt>
              </PointColumn>
            </PointsRow>
          </PointsWrapper>
        </Wrapper>
      </Root>
    );
  }
}

export default Problem;
