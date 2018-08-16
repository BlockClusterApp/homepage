import React, { Fragment } from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import * as yup from 'yup';
import styled, { css } from 'styled-components';
import { clearFix, mix, lighten, darken, ellipsis } from 'polished';
import { colors, spacing, media } from '../../styles';
import { wrapper, cover, card, uppercase } from '../../styles/mixins';
import uppercaseFirstChar from '../../helpers/uppercaseFirstChar';
import Dropdown from '../../components/Dropdown';
import Input, { InputError, Textarea } from '../../components/Input';
import Button from '../../components/Button';
import Header from '../home/components/Header';
import Footer from '../../components/Footer';
import ibc from './assets/ibc.jpg';

const checkSvg =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></svg>';

const Bg = styled.div`
  background: linear-gradient(#f6fbff, #eef7fe);
  height: 568px;
  margin-top: -114px;
`;

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
  transform: matrix(1, 0.04, 0, 1, 0, -116);

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
  transform: matrix(1, -0.08, 0, 1, 0, -116);
`;

const CoverContent = styled.div`
  ${cover};
  z-index: -1;
  height: 120%;
  background: linear-gradient(#f6fbff, #eef7fe);
  transform: matrix(1, 0, 0, 1, 0, -124);

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
  padding: ${spacing(1.5)};

  @media (min-width: 850px) {
    display: inline-block;
    width: 100%;
    height: 486px;
  }
`;

const CardOnPremises = Card.extend`
  float: right;

  @media (min-width: 850px) {
    height: auto;
  }

  ${media.max768} {
    float: none;
    margin: 0 auto;
  }
`;

const CardTitle = styled.h4`
  font-size: 28px;
  font-weight: 600;
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

const CardHighlightCheck = styled.div`
  float: left;
  position: relative;
  top: 4px;
  width: 18px;
  height: 18px;
  background: ${colors.success};
  border-radius: 50%;
  text-align: center;

  svg {
    color: #fff;
    position: relative;
    top: -3px;
    width: 12px;
    height: 11px;
  }
`;

const CardHighlightText = styled.div`
  font-weight: 600;
  margin-left: 28px;
`;

const CardFooter = styled.div`
  padding: ${spacing(1.5)};
  margin: -${spacing(1.5)};

  @media (min-width: 850px) {
    position: absolute;
    left: 0;
    width: 100%;
    bottom: 0;
    margin: 0;
  }
`;

const NodeSpecs = styled.div`
  ${clearFix()};
  margin-bottom: ${spacing()};
`;

const NodePrice = styled.div`
  ${clearFix()};
`;

const cardSectionTitle = css`
  ${uppercase};
  font-size: 14px;
  font-weight: 700;
  color: ${darken(0.1, colors.text)};
  color: ${colors.secondary};
  margin-bottom: 0;
`;

const NodeSpecsTitle = styled.div`
  ${cardSectionTitle};
`;

const NodePriceTitle = styled.div`
  ${cardSectionTitle};
`;

const NodeSpecsRow = styled.div`
  ${clearFix};
`;

const NodeSpecsColumn = styled.div`
  float: left;
  width: 33%;
`;

const NodeSpecsDisclaimer = styled.div`
  font-size: 13px;
  opacity: 0.7;
`;

const NodePricePerHour = styled.div`
  float: left;
  font-size: 27px;
  line-height: 1;
  font-weight: 600;
  margin-right: ${spacing(0.5)};
`;

const NodePricePerMonth = styled.div`
  float: left;
  font-size: 27px;
  line-height: 1;
  opacity: 0.6;
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
  margin: 0 auto ${spacing()};
  color: #fff;
  opacity: 0.9;

  ${media.max768} {
    font-size: 17px;
    max-width: none;
  }
`;

const EnterpriseWrapper = styled.div`
  ${clearFix()};
  ${wrapper};
  max-width: 884px;
  padding: 0 ${spacing()};

  ${media.max768} {
    padding: 0;
  }
`;

const EnterpriseContent = styled.div`
  float: left;

  ${media.max768} {
    float: none;
    margin: 0 auto ${spacing(4)};
    padding: 0 ${spacing()};
  }
`;

class Pricing extends React.Component {
  state = {
    blink: false,
    form: {
      success: false,
    },
  };

  render() {
    return (
      <Root>
        <Hero>
          <Cover />
          <Cover2 />
          <Wrapper>
            <Header />
            <InnerWrapper>
              <Title>On-Demand Nodes</Title>
              <Subtitle>
                BlockClusters gives two offerings,<br /> on the cloud and
                on-premises
              </Subtitle>
            </InnerWrapper>
          </Wrapper>
        </Hero>
        <Body>
          <CoverContent />
          <Content>
            <ContentTitle>
              On the <span>cloud</span>
            </ContentTitle>
            <ContentText>
              BlockCluster’s On-Demand Blockchain Nodes let you pay for compute
              capacity by the hour with no long-term commitments. This frees you
              from the costs and complexities of setting up blockchain nodes
              securely.
            </ContentText>
            <ContentText>
              The pricing below includes the cost to run Light and Power
              Blockchain nodes i.e., development and production grade nodes.
            </ContentText>
          </Content>
          <Row>
            <Column>
              <Card>
                <CardTitle>
                  Light <span>nodes</span>
                </CardTitle>
                <CardDescription>
                  These nodes are used for developing and testing your
                  decentralized application or for experimenting BlockCluster’s
                  capabilities. They are good to go with transactions and events
                  which don’t need an instant response and networks with low
                  transactions volume.
                </CardDescription>
                <CardFooter>
                  <CardHighlight>
                    <CardHighlightCheck
                      dangerouslySetInnerHTML={{ __html: checkSvg }}
                    />
                    <CardHighlightText>
                      Currently we’re offering 2 nodes free for the first 2
                      months of use.
                    </CardHighlightText>
                  </CardHighlight>
                  <NodeSpecs>
                    <NodeSpecsTitle>Specifications</NodeSpecsTitle>
                    <NodeSpecsRow>
                      <NodeSpecsColumn>0.5 vCPU</NodeSpecsColumn>
                      <NodeSpecsColumn>*1GB RAM</NodeSpecsColumn>
                      <NodeSpecsColumn>5GB storage</NodeSpecsColumn>
                    </NodeSpecsRow>
                    <NodeSpecsDisclaimer>
                      * Ram can exceed upto 1.2GB incase of required boost
                    </NodeSpecsDisclaimer>
                  </NodeSpecs>
                  <NodePrice>
                    <NodePriceTitle>Price</NodePriceTitle>
                    <NodePricePerHour>$0.05/hour</NodePricePerHour>
                    <NodePricePerMonth>$35/month</NodePricePerMonth>
                  </NodePrice>
                </CardFooter>
              </Card>
            </Column>
            <Column>
              <Card>
                <CardTitle>
                  Power <span>nodes</span>
                </CardTitle>
                <CardDescription>
                  These nodes are optimal for production or to simulate a
                  production scenario. They provide on-demand performance and
                  customisable disk space. These nodes sync blockchain in
                  real-time and posses the ability to achieve 1k TPS.
                </CardDescription>
                <CardFooter>
                  <CardHighlight>
                    <CardHighlightCheck
                      dangerouslySetInnerHTML={{ __html: checkSvg }}
                    />
                    <CardHighlightText>
                      Power nodes can scale on-demand. Whatever your scale be,
                      we got you covered.
                    </CardHighlightText>
                  </CardHighlight>
                  <NodeSpecs>
                    <NodeSpecsTitle>Specifications</NodeSpecsTitle>
                    <NodeSpecsRow>
                      <NodeSpecsColumn>2 vCPU</NodeSpecsColumn>
                      <NodeSpecsColumn>7.5GB RAM</NodeSpecsColumn>
                      <NodeSpecsColumn>200GB storage</NodeSpecsColumn>
                    </NodeSpecsRow>
                    <NodeSpecsDisclaimer>-</NodeSpecsDisclaimer>
                  </NodeSpecs>
                  <NodePrice>
                    <NodePriceTitle>Price</NodePriceTitle>
                    <NodePricePerHour>$0.276/hour</NodePricePerHour>
                    <NodePricePerMonth>$199/month</NodePricePerMonth>
                  </NodePrice>
                </CardFooter>
              </Card>
            </Column>
          </Row>
        </Body>
        <Enterprise>
          <EnterpriseCover />
          <EnterpriseWrapper>
            <EnterpriseContent>
              <EnterpriseTitle>
                Enterprise <EnterpriseTitleEm>license</EnterpriseTitleEm>
              </EnterpriseTitle>
              <EnterpriseSubtitle>
                You can install BlockCluster on-premise on your local servers,
                hybrid IT, public clouds and private cloud by purchasing our
                enterprise license. Our automation tools and PSO experts help
                you setup blockcluster across any infrastructure without any
                hassle.
              </EnterpriseSubtitle>
              <EnterpriseSubtitle>
                It works independently of any infrastructure and seamlessly
                across multiple geo servers.
              </EnterpriseSubtitle>
            </EnterpriseContent>
            <CardOnPremises>
              <CardTitle>
                Maximum <span>control</span>
              </CardTitle>
              <CardDescription>
                BlockCluster Enterprise lets you achieve your goals by securing
                data as per your regulatory compliances.
              </CardDescription>
              <CardDescription>
                This gives you the ability to further decentralise your
                application and control its data and accounts.
              </CardDescription>
              <CardHighlight>
                <Button component="a" href="/request-demo" secondary>
                  Get in touch
                </Button>
              </CardHighlight>
            </CardOnPremises>
          </EnterpriseWrapper>
        </Enterprise>
        <Footer />
      </Root>
    );
  }
}

export default Pricing;
