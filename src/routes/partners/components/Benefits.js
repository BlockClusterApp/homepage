import React from 'react';
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';
import styled, { css } from 'styled-components';
import { clearFix, darken, lighten } from 'polished';
// import SVG from 'react-svg-inline';
import { colors, spacing, media } from '../../../styles';
import { wrapper, cover, uppercase } from '../../../styles/mixins';
import AnimateText from '../../../components/AnimateText';
import mq from '../../../helpers/mediaQueries';
// import SquareBox from '../Partners';
// import error from '../../../assets/images/error.svg';

const Root = styled.section`
  position: relative;
  z-index: 2;
  padding: ${spacing(2.5)} ${spacing(1.5)};
  text-align: center;

  ${media.min768} {
    padding: 112px 16px 0 16px;
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
  transform: matrix(1, 0.06, 0, 1, 0, -1);

  ${media.max768} {
    height: 100%;
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
    font-size: 27px;
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

const Break = styled.br`
  ${media.max375} {
    display: none;
  }
`;

class Benefits extends React.Component {
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
              textNodes={['Benefits of being a', <TitleEm> Partner </TitleEm>]}
              animationStyle="slide"
            />
          </Title>
          <Subtitle>
            <AnimateText
              textNodes={[
                `Lorem ipsum dolor sit amet, consectetur adipiscing elit Nam Pellentesque porta euismod dolor,urabitur justo odio, elementum at mi in, molestie vulputate eros.`,
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
                  <PointIllustration>this is an svg</PointIllustration>
                  <PointTitle>Lorem ipsum</PointTitle>
                  <PointDescription>
                    Lorem ipsum dolor sit amet, consectetur <Break />
                    Lorem ipsum dolor sit amet, consectetur
                  </PointDescription>
                </PointDev>
              </PointColumn>
              <PointColumn>
                <PointErr>
                  <PointIllustration>this is an svg</PointIllustration>
                  <PointTitle>Lorem ipsum</PointTitle>
                  <PointDescription>
                    Lorem ipsum dolor sit amet, consectetur <Break />
                    Lorem ipsum dolor sit amet, consectetur
                  </PointDescription>
                </PointErr>
              </PointColumn>
            </PointsRow>
            <PointsRow last>
              <PointColumn>
                <PointExe>
                  <PointIllustration>this is an svg</PointIllustration>
                  <PointTitle>Lorem ipsum</PointTitle>
                  <PointDescription>
                    Lorem ipsum dolor sit amet, consectetur <Break />
                    Lorem ipsum dolor sit amet, consectetur
                  </PointDescription>
                </PointExe>
              </PointColumn>
              <PointColumn>
                <PointInt>
                  <PointIllustration>this is an svg</PointIllustration>
                  <PointTitle>Lorem ipsumn</PointTitle>
                  <PointDescription>
                    Lorem ipsum dolor sit amet, consectetur <Break />
                    Lorem ipsum dolor sit amet, consectetur
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

export default Benefits;
