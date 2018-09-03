import React from 'react';
import styled, { css } from 'styled-components';
import { clearFix } from 'polished';
import { colors, spacing, media } from '../../styles';
import { wrapper, cover } from '../../styles/mixins';
import PartnersButton from './PartnersButton';
import Header from '../home/components/Header';
import Footer from '../../components/Footer';
import Benefits from './components/Benefits';
import Slider from './components/Slider';
// import Sliders from './components/Sliders';
// import Problem from '../home/components/Problem';

import reseller_img from './assets/reseller.png';
import strategic_img from './assets/strategic.png';
import consulting_img from './assets/consulting.png';
import system_img from './assets/system.png';

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

const Bg = styled.div`
  background: linear-gradient(#f6fbff, #eef7fe);
  height: 468px;
  margin-top: -114px;
`;

const Root = styled.section`
  position: relative;
  min-height: 100%;
`;

const Main = styled.div`
  position: relative;
  z-index: 3;
  height: 440px;
  padding-top: ${spacing()};
  color: #fff;
  text-align: center;

  ${media.max768} {
    height: 392px;
  }
`;

const Cover = styled.div`
  ${cover};
  height: 114%;
  background: linear-gradient(-135deg, #00a6ff, #004286);

  ${'' /* background-color: ${colors.secondary}; */} ${'' /* background-image: url(${heroBackground});
  background-size: cover; */}
  transform: matrix(1, 0.08, 0, 1, 0, -116);

  ${props =>
    props.formSuccess &&
    css`
      height: 86%;
    `};
`;

const Cover2 = styled.div`
  ${cover};
  height: 114%;
  background: radial-gradient(circle at 70% 4%, #00dcff, #00deff00 40%);
  opacity: 0.5;
  ${'' /* background-color: ${colors.secondary}; */} ${'' /* background-image: url(${heroBackground});
  background-size: cover; */}
  transform: matrix(1, 0.08, 0, 1, 0, -116);
`;

const CoverContent = styled.div`
  ${cover};
  z-index: -1;
  background: linear-gradient(#f6fbff, #eef7fe);
  transform: matrix(1, 0, 0, 1, 0, -124);
  height: 110%;

  ${media.max768} {
    transform: matrix(1, 0, 0, 1, 0, -156);
  }
`;

const Wrapper = styled.div`
  ${wrapper};
  position: relative;
  padding: 0 ${spacing()};
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: ${spacing(1.5)} 0;

  @media (max-width: 460px) {
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
  margin-bottom: ${spacing(1)};

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

const SubtitleLink = styled.a`
  color: #fff;
  text-decoration: underline;
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
    height: 340px;
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

const CardHighlight = styled.div`
  ${clearFix()};
  margin: 0 -${spacing(1.5)} ${spacing()};
  padding: ${spacing(1.5)};
  background: linear-gradient(#f6fbff, #eef7fe);
`;

const Content = styled.section`
  max-width: 752px;
  margin: 0 auto ${spacing(4)};
  padding: 0 ${spacing()};
`;

const ContentTitle = styled.h2`
  font-size: 34px;
  font-weight: 600;
  color: ${colors.primary};
  margin-bottom: 24px;

  span {
    font-weight: 700;
    color: ${colors.secondary};
  }
`;

const ContentText = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
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

const SquareBox = styled.img`
  height: 80px;
  border-radius: 10%;
  margin: 0 auto;
  display: block;
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

class Partners extends React.Component {
  render() {
    return (
      <Root>
        <Main>
          <Cover />
          <Cover2 />
          <Wrapper>
            <Header />
            <InnerWrapper>
              <Title>Partners</Title>
              <Subtitle>
                Are you beginning to build your business on Blockchain, or
                expanding your practice? Look to the Blockcluster partnership
                programme to help you grow and succeed. {''}
                <SubtitleLink href="/rsvp">Become our Partner!</SubtitleLink>
              </Subtitle>
            </InnerWrapper>
          </Wrapper>
        </Main>
        <Body>
          <CoverContent />
          <Content>
            <ContentTitle>
              Partner<span> Types</span>
            </ContentTitle>
            <ContentText>
              We offer various programs, platforms and resources to support you
              in your journey. Whether you have a Consulting Practice or offer a
              Technology Solution on BlockCluster, there are plenty of
              opportunities to advance your business.
            </ContentText>
            {/* Keep adding context tag for more context */}
          </Content>
          <Row>
            <Column>
              <Card>
                <SquareBox src={reseller_img} />
                <CardTitle>
                  Product <span>Resellers</span>
                </CardTitle>
                <CardDescription>
                  As a product reseller, you will be getting exclusive access to
                  early releases and ongoing partner discounts on the products.
                  Any costs going towards PSO, App dev or support is also
                  subsidised.
                </CardDescription>
              </Card>
            </Column>
            <Column>
              <Card>
                <SquareBox src={consulting_img} />
                <CardTitle>
                  <span>Consulting</span> Partners
                </CardTitle>
                <CardDescription>
                  As a Consulting Partners, you will help customers design and
                  manage their workloads and applications on Blockcluster.
                  Consulting Partners can be Strategic Consultancies, Agencies
                  or Service Providers.
                </CardDescription>
              </Card>
            </Column>
          </Row>
          <Row>
            <Column>
              <Card>
                <SquareBox src={system_img} />
                <CardTitle>
                  System <span>Integrator</span>
                </CardTitle>
                <CardDescription>
                  Our System integrators(SIs) work to provide us with services
                  for our customers application projects. Any client project can
                  be classified as : Blockcluster Platform + SI
                  services(Servers/UI/UX etc)
                </CardDescription>
              </Card>
            </Column>
            <Column>
              <Card>
                <SquareBox src={strategic_img} />
                <CardTitle>
                  <span>Strategic</span> Partners
                </CardTitle>
                <CardDescription>
                  As a strategic partner, we both will share expertise,
                  technology, resources, or competencies with each other for
                  mutual benefit. Strategic partnership is to create a synergy
                  that increases boths profit potential.
                </CardDescription>
              </Card>
            </Column>
          </Row>
        </Body>
        <Benefits />
        <Slider />
        <Enterprise>
          <EnterpriseCover />
          <EnterpriseWrapper>
            <EnterpriseTitle>
              Be our <EnterpriseTitleEm>Partner</EnterpriseTitleEm>
            </EnterpriseTitle>
            <EnterpriseSubtitle>
              We partner with a wide range of companies, from consulting
              agencies to ISVs to technical solution providers. Our partner
              program helps you grow your business through a closer relationship
              with BlockCluster and our developer community.
            </EnterpriseSubtitle>
            <ButtonsWrapper>
              <PartnersButton component="a" href="/contact" primary>
                Become a Partner
              </PartnersButton>
              <PartnersButton component="a" href="/contact" secondary>
                Get in touch
              </PartnersButton>
            </ButtonsWrapper>
          </EnterpriseWrapper>
        </Enterprise>
        <Footer />
      </Root>
    );
  }
}

export default Partners;
