import React, { Fragment } from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import * as yup from 'yup';
import styled, { css } from 'styled-components';
import { clearFix, mix, lighten, darken, ellipsis } from 'polished';
import { colors, spacing, media } from '../../styles';
import { wrapper, cover, card } from '../../styles/mixins';
import uppercaseFirstChar from '../../helpers/uppercaseFirstChar';
import Dropdown from '../../components/Dropdown';
import Input, { InputError, Textarea } from '../../components/Input';
import Button from '../../components/Button';
import Header from '../home/components/Header';
import Footer from '../../components/Footer';
import ibc from './assets/ibc.jpg';
import bh from './assets/bh.jpg';
import wbcMalta from './assets/wbc-malta.jpg';
import dubai from './assets/dubai.jpg';
import dubai2 from './assets/dubai2.jpg';
import zurich from './assets/zurich.jpg';
// const check = (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//     <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
//   </svg>
// );

const Bg = styled.div`
  background: linear-gradient(#f6fbff, #eef7fe);
  height: 568px;
  margin-top: -114px;
`;

const Root = styled.section`
  position: relative;
  min-height: 100%;
`;

const Main = styled.div`
  position: relative;
  z-index: 3;
  height: 470px;
  padding-top: ${spacing()};
  color: #fff;
  text-align: center;

  ${media.max768} {
    height: 442px;
  }
`;

const Cover = styled.div`
  ${cover};
  height: 114%;
  background: linear-gradient(-135deg, #00a6ff, #004286);

  ${'' /* background-color: ${colors.secondary}; */} ${'' /* background-image: url(${heroBackground});
  background-size: cover; */}
  transform: matrix(1, -0.08, 0, 1, 0, -116);

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

const SubtitleLink = styled.a`
  color: #fff;
  text-decoration: underline;
`;

const Content = styled.div`
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
  margin: 0 auto ${spacing(2)};
  max-width: 840px;
  ${clearFix()};

  ${media.max768} {
    margin-bottom: ${spacing()};
  }
`;

const Card = styled.div`
  background: #fff;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(51, 72, 97, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  border-radius: 12px;
  max-width: 382px;
  margin: 0 auto;

  ${media.min768} {
    display: inline-block;
    width: 100%;
  }
`;

const CardImgLink = styled.a`
  display: block;
  height: 214px;
  background: ${colors.secondary};
`;

const CardImg = styled.img`
  width: 100%;
  height: 100%;
`;

const CardBody = styled.div`
  height: 140px;
  text-align: left;
  padding: 14px ${spacing(1.5)} ${spacing(1.5)};
`;

const CardTitle = styled.a`
  font-size: 20px;
  font-weight: 600;
  color: ${darken(0.1, colors.text)};
  text-decoration: none;

  &:hover {
    color: ${colors.primary};
    text-decoration: underline;
  }
`;

const CardParagraph = styled.p`
  color: ${lighten(0.2, colors.text)};
`;

const CardLink = styled.a`
  color: ${colors.primary};
  text-decoration: underline;
`;

class RequestDemo extends React.Component {
  state = {
    blink: false,
    form: {
      success: false,
    },
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ blink: !this.state.blink });
    }, 1000);
  }

  render() {
    const { form } = this.state;

    return (
      <Root>
        <Main>
          <Cover />
          <Cover2 />
          <Wrapper>
            <Header />
            <InnerWrapper>
              <Title>Media & Events</Title>
              <Subtitle>
                Discover more about BlockCluster and it’s quest to build world’s
                first Blockchain Management System. We want to accelerate the
                adoption of blockchain technology by making it easy for
                enterprises to set it up.{' '}
                <SubtitleLink href="/rsvp">Come say hi!</SubtitleLink>
              </Subtitle>
            </InnerWrapper>
          </Wrapper>
        </Main>
        <Content>
          <CoverContent />
          <Row>
            <Column>
              <Card>
                <CardImgLink href="https://www.enbloc.media/" target="_blank">
                  <CardImg src={ibc} />
                </CardImgLink>
                <CardBody>
                  <CardTitle href="https://www.enbloc.media/" target="_blank">
                    Internation Blockchain Congress
                  </CardTitle>
                  <CardParagraph>
                    The BlockCluster team will be attending the IBC on the 3rd &
                    4th of August 2018 at the Novotel & HICC Complex in
                    Hyderabad.
                  </CardParagraph>
                </CardBody>
              </Card>
            </Column>
            <Column>
              <Card>
                <CardImgLink
                  href="https://www.block-hedge.com/"
                  target="_blank"
                >
                  <CardImg src={bh} />
                </CardImgLink>
                <CardBody>
                  <CardTitle
                    href="https://www.block-hedge.com/"
                    target="_blank"
                  >
                    Block Hedge
                  </CardTitle>
                  <CardParagraph>
                    The BlockCluster team will be attending Block Hedge on 31st
                    of August 2018 at the Grant Hyatt in Bangkok.
                  </CardParagraph>
                </CardBody>
              </Card>
            </Column>
          </Row>
          <Row>
            <Column>
              <Card>
                <CardImgLink
                  href="http://malta.wbcseries.com/index.html"
                  target="_blank"
                >
                  <CardImg src={wbcMalta} />
                </CardImgLink>
                <CardBody>
                  <CardTitle
                    href="http://malta.wbcseries.com/index.html"
                    target="_blank"
                  >
                    World Blockchain Congress
                  </CardTitle>
                  <CardParagraph>
                    The BlockCluster team will be attending the WBC on the 26th
                    & 27th of September 2018 at the Hotel Hilton in Malta.
                  </CardParagraph>
                </CardBody>
              </Card>
            </Column>
            <Column>
              <Card>
                <CardImgLink href="https://www.gitex.com/" target="_blank">
                  <CardImg src={dubai} />
                </CardImgLink>
                <CardBody>
                  <CardTitle href="https://www.gitex.com/" target="_blank">
                    Gitex Technology Week
                  </CardTitle>
                  <CardParagraph>
                    The BlockCluster team will be attending the Gitex Technology
                    Week from 14th to 18th of October 2018 at the World Trade
                    Centre in Dubai.
                  </CardParagraph>
                </CardBody>
              </Card>
            </Column>
          </Row>
          <Row>
            <Column>
              <Card>
                <CardImgLink
                  href="https://dubai.worldblockchainsummit.com/"
                  target="_blank"
                >
                  <CardImg src={dubai2} />
                </CardImgLink>
                <CardBody>
                  <CardTitle
                    href="https://dubai.worldblockchainsummit.com/"
                    target="_blank"
                  >
                    World Blockchain Summit
                  </CardTitle>
                  <CardParagraph>
                    The BlockCluster team will be attending the WBS on the 24th
                    & 25th of October 2018 at the Jumeirah Emirates Towers in
                    Dubai.
                  </CardParagraph>
                </CardBody>
              </Card>
            </Column>
            <Column>
              <Card>
                <CardImgLink
                  href="http://switzerland.wbcseries.com/index.html"
                  target="_blank"
                >
                  <CardImg src={zurich} />
                </CardImgLink>
                <CardBody>
                  <CardTitle
                    href="http://switzerland.wbcseries.com/index.html"
                    target="_blank"
                  >
                    World Blockchain Congress
                  </CardTitle>
                  <CardParagraph>
                    The BlockCluster team will be attending the WBC on the 8th &
                    9th of November 2018 at Zurich, Switzerland.
                  </CardParagraph>
                </CardBody>
              </Card>
            </Column>
          </Row>
          <Row>
            <Column>
              <Card>
                <CardImgLink href="/" />
                <CardBody>
                  <CardTitle href="/">More coming soon!</CardTitle>
                  <CardParagraph>
                    Want to feature us or see us featured?{' '}
                    <CardLink href="/contact">Contact us</CardLink>
                  </CardParagraph>
                </CardBody>
              </Card>
            </Column>
          </Row>
          {/* <Row>
            <Column>
              <Card>
                <a href="https://www.enbloc.media/" target="_blank">
                  <CardImg src={ibc} />
                </a>
                <CardBody>
                  <CardTitle href="https://www.enbloc.media/" target="_blank">
                    Internation Blockchain Congress
                  </CardTitle>
                  <CardParagraph>
                    We’re going to be attending the IBC on the 3rd & 4th of
                    August 2018 at the Novotel & HICC Complex in Hyderabad.{' '}
                    <CardLink href="/rsvp">Come say hi!</CardLink>
                  </CardParagraph>
                </CardBody>
              </Card>
            </Column>
            <Column>
              <Card>
                <a href="https://www.enbloc.media/" target="_blank">
                  <CardImg src={ibc} />
                </a>
                <CardBody>
                  <CardTitle href="https://www.enbloc.media/" target="_blank">
                    Internation Blockchain Congress
                  </CardTitle>
                  <CardParagraph>
                    We’re going to be attending the IBC on the 3rd & 4th of
                    August 2018 at the Novotel & HICC Complex in Hyderabad.{' '}
                    <CardLink href="/rsvp">Come say hi!</CardLink>
                  </CardParagraph>
                </CardBody>
              </Card>
            </Column>
          </Row> */}
        </Content>
        <Footer />
      </Root>
    );
  }
}

export default RequestDemo;
