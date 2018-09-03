import React from 'react';
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';
import styled, { css } from 'styled-components';
import { clearFix, darken, lighten } from 'polished';
// import SVG from 'react-svg-inline';
import { colors, spacing, media } from '../../../styles';
import { wrapper, cover, uppercase } from '../../../styles/mixins';
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

  ${media.min460} {
    float: left;
    width: 44%;
    margin-left: 3%;

    &:first-child {
      margin-left: 3%;
    }

    &:first-child {
      margin-right: 3%;
    }
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

const PointsWrapper = styled.div``;

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
  titleRef = React.createRef();

  pointsRef = React.createRef();

  render() {
    return (
      <Root>
        <Cover />
        <Wrapper>
          <Title ref={this.titleRef}>
            Benefits of being a <TitleEm> Partner </TitleEm>
          </Title>
          <Subtitle>
            Being an official Blockclsuter partner comes with great growth
            benefits. By teaming up with you, we commit to provide you with
            tech, consulting and business enablement support you need to acquire
            new blockchain customers and advance existing ones.
          </Subtitle>
          <PointsWrapper innerRef={this.pointsRef}>
            <PointsRow>
              <PointColumn>
                <PointDev>
                  <PointIllustration>this is an svg</PointIllustration>
                  <PointTitle>Platform Expertise</PointTitle>
                  <PointDescription>
                    Access to BlockCluster technical training opportunities to
                    strengthen your blockchain expertise
                  </PointDescription>
                </PointDev>
              </PointColumn>
              <PointColumn>
                <PointErr>
                  <PointIllustration>this is an svg</PointIllustration>
                  <PointTitle>Business Enablement</PointTitle>
                  <PointDescription>
                    Meet regulatory requirements better, improve customer facing
                    initiatives, expand faster globally and empower employees.
                  </PointDescription>
                </PointErr>
              </PointColumn>
            </PointsRow>
            <PointsRow last>
              <PointColumn>
                <PointExe>
                  <PointIllustration>this is an svg</PointIllustration>
                  <PointTitle>Blockchain Consultancy</PointTitle>
                  <PointDescription>
                    Consulting expertise provided by <Break /> Blockcluster
                    Ninjas in for your <Break /> client pitches
                  </PointDescription>
                </PointExe>
              </PointColumn>
              <PointColumn>
                <PointInt>
                  <PointIllustration>this is an svg</PointIllustration>
                  <PointTitle>Ecosystem Exposure</PointTitle>
                  <PointDescription>
                    Get access to our developer and partner ecosystem, and
                    promote your service and company in the ecosystem.
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
