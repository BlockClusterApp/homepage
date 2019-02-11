import React from 'react';
import { clearFix } from 'polished';
import styled, { css } from 'styled-components';
import { colors, spacing, media } from '../../styles';
import { wrapper, cover } from '../../styles/mixins';
import Button from '../../components/Button';
import Header from '../home/components/Header';
import Footer from '../../components/Footer';

import gettingStarted from './assets/images/getting_started.svg';
import ama from './assets/images/ama.svg';

const Root = styled.section`
  position: relative;
  min-height: 100%;
`;

const Hero = styled.div`
  position: relative;
  z-index: 3;
  height: 420px;
  padding-top: ${spacing()};
  color: #fff;
  text-align: center;

  ${media.max768} {
    height: 344px;
  }
`;

const Cover = styled.div`
  ${cover};
  height: 114%;
  background: linear-gradient(-135deg, #00a6ff, #004286);

  ${'' /* background-color: ${colors.secondary}; */} ${'' /* background-image: url(${heroBackground});
  background-size: cover; */}
  transform: matrix(-1, 0.04, 0, 1, 0, -116);

  ${props =>
    props.formSuccess &&
    css`
      height: 86%;
    `};
`;

const Cover2 = styled.div`
  ${cover};
  height: 114%;
  opacity: 0.5;
  ${'' /* background-color: ${colors.secondary}; */} ${'' /* background-image: url(${heroBackground});
  background-size: cover; */}
  transform: matrix(-1, -0.08, 0, 1, 0, -116);
`;

const Wrapper = styled.div`
  ${wrapper};
  position: relative;
  padding: 0 ${spacing()};
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: ${spacing(1.5)} 0;

  @media (max-width: 768px) {
    padding-top: ${spacing(4)};
  }

  ${props =>
    props.formSuccess &&
    css`
      padding-top: 124px;
    `};
`;

const Title = styled.h1`
  position: relative;
  font-size: 42px;
  line-height: 1.2;
  font-weight: 700;
  margin-bottom: ${spacing(1.5)};

  ${media.max768} {
    font-size: 31px;
  }

  ${media.max375} {
    font-size: 28px;
  }
`;

const Subtitle = styled.h2`
  position: relative;
  font-size: 20px;
  font-weight: 600;
  opacity: 0.9;
  max-width: 482px;
  margin: 0 auto 64px;
  color: #fff;

  ${media.max768} {
    font-size: 19px;
    max-width: 400px;
    margin: 0 auto ${spacing(3)};
  }

  ${media.max375} {
    font-size: 18px;
  }
`;

const Body = styled.div`
  position: relative;
  padding: ${spacing(2)} ${spacing()};
`;

const Column = styled.div`
  text-align: center;

  ${media.max768} {
    &:first-child {
      margin-bottom: ${spacing()};
    }
  }

  ${media.min768} {
    float: left;
    width: 50%;
    padding: 0 ${spacing()};
  }
`;

const Row = styled.div`
  margin: 0 auto ${spacing(4)};
  max-width: 840px;
  ${clearFix()};

  ${media.max768} {
    margin-bottom: ${spacing(2)};
  }
`;

const Card = styled.div`
  position: relative;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(51, 72, 97, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  border-radius: 12px;
  max-width: 382px;
  margin: 0 auto;
  text-align: left;
  padding: ${spacing(2.5)};

  @media (min-width: 850px) {
    display: inline-block;
    width: 100%;
    height: 350px;
  }
`;

const CardTitle = styled.h4`
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  padding-top: 20px;
  color: ${colors.primary};
  margin-bottom: ${spacing()};

  span {
    color: ${colors.secondary};
    font-weight: 700;
  }
`;

const CardDescription = styled.p`
  margin-bottom: ${spacing()};
  line-height: 1.4;
`;

const SquareBox = styled.img`
  height: 80px;
  border-radius: 10%;
  margin: 0 auto;
  display: block;
`;

const CardHighlight = styled.div`
  ${clearFix()};
  margin: 0 -${spacing(1.5)} ${spacing()};
  padding: ${spacing(1.5)};
  background: linear-gradient(#f6fbff, #eef7fe);
`;

const ButtonsWrapper = styled.div`
  ${clearFix()};

  ${media.max980} {
    display: inline-block;
    float: right;
    margin-top: -90px;
  }
  ${media.max820} {
    display: inline-block;
    float: none;
    margin: 0px auto;
  }

  ${media.min980} {
    margin-top: -90px;
    float: right;
  }
`;

const Enterprise = styled.section`
  position: relative;
  z-index: 3;
  padding: ${spacing(4)} 0;

  ${media.max768} {
    padding: ${spacing(2)} ${spacing()};
  }

  ${CardHighlight} {
    margin-bottom: -24px;
  }
`;

const EnterpriseCover = styled.div`
  ${cover};
  z-index: -1;
  height: 120%;
  background: ${colors.secondary};
  transform: matrix(1, -0.02, 0, 1, 0, -22);

  ${media.max768} {
    transform: matrix(1, -0.02, 0, 1, 0, -12);
  }
`;

const EnterpriseTitle = styled.h3`
  margin-top: ${spacing(2)};
  font-size: 34px;
  font-weight: 600;
  color: #fff;
  margin-bottom: ${spacing(1.5)};

  ${media.max768} {
    font-size: 30px;
    margin-bottom: ${spacing()};
  }

  ${media.max375} {
    font-size: 27px;
    margin-bottom: ${spacing()};
  }
`;

const EnterpriseTitleEm = styled.span`
  font-weight: 600;
  color: ${colors.backgroundSecondaryText};
`;

const EnterpriseSubtitle = styled.p`
  font-size: 18px;
  line-height: 1.4;
  font-weight: 600;
  max-width: 378px;
  color: #fff;
  opacity: 0.9;
  ${media.max820} {
    max-width: 100%;
  }
  ${media.max768} {
    font-size: 17px;
    max-width: 100%;
  }
`;

const EnterpriseWrapper = styled.div`
  ${clearFix()};
  ${wrapper};
  max-width: 960px;
  padding: 0 ${spacing()};
  ${media.max768} {
    padding: 0;
  }
`;

class Addons extends React.Component {
  state = {};

  render() {
    return (
      <Root>
        <Hero>
          <Cover />
          <Cover2 />
          <Wrapper>
            <Header />
            <InnerWrapper>
              <Title>Faq&apos;s</Title>
              <Subtitle>frequently asked questations</Subtitle>
            </InnerWrapper>
          </Wrapper>
        </Hero>
        <Body>
          <Row>
            <Column>
              <Card>
                <a href="/faqs/list#gettingStarted">
                  <SquareBox src={gettingStarted} />
                  <CardTitle>
                    Getting <span>Started</span>
                  </CardTitle>
                </a>
                <CardDescription>
                  As a platform reseller, you will be getting exclusive access
                  to early releases and ongoing partner discounts on the
                  platform. Any costs going towards PSO, App dev or support is
                  also subsidised.
                </CardDescription>
              </Card>
            </Column>
            <Column>
              <Card>
                <a href="/faqs/list#ama">
                  <SquareBox src={ama} />
                  <CardTitle>
                    <span>AMA</span>
                  </CardTitle>
                </a>
                <CardDescription>
                  As a Consulting Partners, you will help customers design and
                  manage their workloads and applications on Blockcluster.
                  Consulting Partners can be Strategic Consultancies, Agencies
                  or Service Providers.
                </CardDescription>
              </Card>
            </Column>
          </Row>
        </Body>
        <Enterprise>
          <EnterpriseCover />
          <EnterpriseWrapper>
            <EnterpriseTitle>
              Anything <EnterpriseTitleEm>else?</EnterpriseTitleEm>
            </EnterpriseTitle>
            <EnterpriseSubtitle>
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industrys standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </EnterpriseSubtitle>
            <ButtonsWrapper>
              <Button component="a" href="/request-demo" primary>
                Get in touch
              </Button>
            </ButtonsWrapper>
          </EnterpriseWrapper>
        </Enterprise>
        <Footer />
      </Root>
    );
  }
}

export default Addons;
