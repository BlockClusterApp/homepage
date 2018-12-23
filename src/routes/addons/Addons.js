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
import ipfs_img from './assets/ipfs-logo.png';
import ethereum_img from './assets/ethereum.webp';
import hyperledger_img from './assets/hyperledger.png';

const checkSvg =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></svg>';

const waitSvg = '<img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkNhcGFfMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxwYXRoIGQ9Ik0zODYsMTBjMTYuNTcsMCwzMCwxMy40MywzMCwzMGMwLDguMjgtMy4zNiwxNS43OC04Ljc5LDIxLjIxQzQwMS43OCw2Ni42NCwzOTQuMjgsNzAsMzg2LDcwaC0xMCAgIEgxMzZoLTEwYy0xNi41NywwLTMwLTEzLjQzLTMwLTMwYzAtOC4yOCwzLjM2LTE1Ljc4LDguNzktMjEuMjFTMTE3LjcyLDEwLDEyNiwxMEgzODZ6IiBzdHlsZT0iZmlsbDojNTc1NTVDOyIvPjxwYXRoIGQ9Ik0zODYsNDQyYzE2LjU3LDAsMzAsMTMuNDMsMzAsMzBjMCw4LjI4LTMuMzYsMTUuNzgtOC43OSwyMS4yMWMtNS40Myw1LjQzLTEyLjkzLDguNzktMjEuMjEsOC43OSAgIEgxMjZjLTE2LjU3LDAtMzAtMTMuNDMtMzAtMzBjMC04LjI4LDMuMzYtMTUuNzgsOC43OS0yMS4yMVMxMTcuNzIsNDQyLDEyNiw0NDJoMTBoMjQwSDM4NnoiIHN0eWxlPSJmaWxsOiM1NzU1NUM7Ii8+PC9nPjxnPjxwYXRoIGQ9Ik0zNzYsNzBsLTguOTYsODkuNjFjLTAuMDQsMC4zOC0wLjA5LDAuNzYtMC4xNCwxLjEzSDE0NS4xYy0wLjA1LTAuMzctMC4xLTAuNzUtMC4xNC0xLjEzTDEzNiw3MCAgIEgzNzZ6IiBzdHlsZT0iZmlsbDojQzBFM0YwOyIvPjxwYXRoIGQ9Ik0zNjcuMDQsMzU4LjM5Yy0zLjE0LTI4LjI5LTE2LjY3LTUzLjE0LTM2LjUzLTcwLjkxQzMxMC42NiwyNjkuNywyODQuNDYsMjU5LDI1NiwyNTkgICBjLTU2LjkzLDAtMTA0Ljc2LDQyLjgxLTExMS4wNCw5OS4zOUwxMzYsNDQyaDI0MEwzNjcuMDQsMzU4LjM5eiIgc3R5bGU9ImZpbGw6I0MwRTNGMDsiLz48L2c+PGc+PHBhdGggZD0iTTM3Niw0NDJIMTM2bDExNS4wNS02MS42OWMzLjI1LTAuODYsNi42Ni0wLjg5LDkuOTItMC4wOEwzNzYsNDQyeiIgc3R5bGU9ImZpbGw6I0ZFQjc1NjsiLz48cGF0aCBkPSJNMTQ1LjEsMTYwLjc0aDIyMS44QzM2MC4xMiwyMTYuNzYsMzEyLjU1LDI1OSwyNTYsMjU5UzE1MS44OCwyMTYuNzYsMTQ1LjEsMTYwLjc0eiIgc3R5bGU9ImZpbGw6I0ZFQjc1NjsiLz48L2c+PHBhdGggZD0iTTI1NiwzNDljNS41MiwwLDEwLTQuNDgsMTAtMTBzLTQuNDgtMTAtMTAtMTBjLTUuNTIsMC0xMCw0LjQ4LTEwLDEwUzI1MC40OCwzNDksMjU2LDM0OXoiLz48cGF0aCBkPSJNMzg2LDQzMmgtMS4wMTVsLTguMDA2LTc0LjcxNGMtMy4zMS0yOS44MTctMTcuNDQ1LTU3LjI1NS0zOS43OTctNzcuMjU0Yy05Ljg0NS04LjgxOS0yMC45NTItMTUuODg5LTMyLjg2NC0yMS4wNDIgIGMzOC41OS0xNi43MzcsNjcuMTQyLTUyLjk0NSw3Mi41LTk2Ljk3NmMwLjAwNi0wLjA0NSwwLjAxMi0wLjA5MiwwLjAxOC0wLjEzOGMwLjAwNi0wLjA0OSwwLjAxNC0wLjA5NywwLjAxOS0wLjE0NyAgYzAuMDQ3LTAuMzU4LDAuMDkzLTAuNzI1LDAuMTM1LTEuMTI1TDM4NS4wNSw4MEgzODZjMTAuNjgsMCwyMC43MjMtNC4xNjIsMjguMjgxLTExLjcxOUM0MjEuODM4LDYwLjcyNSw0MjYsNTAuNjgxLDQyNiw0MCAgYzAtMjIuMDU2LTE3Ljk0NC00MC00MC00MEgxMjZjLTEwLjY4LDAtMjAuNzIzLDQuMTYyLTI4LjI4MSwxMS43MTlDOTAuMTYyLDE5LjI3NSw4NiwyOS4zMTksODYsNDBjMCwyMi4wNTYsMTcuOTQ0LDQwLDQwLDQwaDAuOTUgIGw4LjA2NSw4MC42NThjMC4wMzcsMC4zNTEsMC4wODMsMC42OTksMC4xMjgsMS4wNDVjMC4wMDYsMC4wNjgsMC4wMTcsMC4xMzUsMC4wMjUsMC4yMDJjMC4wMDUsMC4wMzYsMC4wMDksMC4wNzMsMC4wMTMsMC4xMDkgIGM1LjM1Niw0NC4wMTcsMzMuODkxLDgwLjIxNiw3Mi40NjMsOTYuOTZjLTM5LjAxNSwxNi44NzEtNjcuNjYyLDUzLjYxNy03Mi42MjcsOTguMzVMMTI3LjAxNSw0MzJIMTI2ICBjLTEwLjY4LDAtMjAuNzIzLDQuMTYyLTI4LjI4MSwxMS43MTlDOTAuMTYyLDQ1MS4yNzUsODYsNDYxLjMxOSw4Niw0NzJjMCwyMi4wNTYsMTcuOTQ0LDQwLDQwLDQwaDI2MCAgYzEwLjY4LDAsMjAuNzIzLTQuMTYyLDI4LjI4MS0xMS43MTlDNDIxLjgzOCw0OTIuNzI1LDQyNiw0ODIuNjgxLDQyNiw0NzJDNDI2LDQ0OS45NDQsNDA4LjA1Niw0MzIsMzg2LDQzMnogTTE1NC4xMjMsMTUwLjc0ICBMMTQ3LjA1LDgwaDIxNy45bC03LjA3Myw3MC43NEwxNTQuMTIzLDE1MC43NEwxNTQuMTIzLDE1MC43NHogTTEwNiw0MGMwLTUuMzM4LDIuMDgyLTEwLjM1OSw1Ljg2MS0xNC4xMzkgIEMxMTUuNjQxLDIyLjA4MiwxMjAuNjYyLDIwLDEyNiwyMGgyNjBjMTEuMDI4LDAsMjAsOC45NzIsMjAsMjBjMCw1LjMzOC0yLjA4MiwxMC4zNTktNS44NjEsMTQuMTM5ICBDMzk2LjM1OSw1Ny45MTgsMzkxLjMzOCw2MCwzODYsNjBoLTEwSDEzNmgtMTBDMTE0Ljk3Miw2MCwxMDYsNTEuMDI4LDEwNiw0MHogTTE1Ny4wNDcsMTcwLjc0aDE5Ny45MDYgIEMzNDQuMjQ0LDIxNi4wNjMsMzAzLjU1MSwyNDksMjU2LDI0OVMxNjcuNzU2LDIxNi4wNjMsMTU3LjA0NywxNzAuNzR6IE0yNDYsMjY5LjQ4OVYyOTljMCw1LjUyMiw0LjQ3NywxMCwxMCwxMCAgYzUuNTIzLDAsMTAtNC40NzgsMTAtMTB2LTI5LjQ5N2MyMS40MjYsMi4xMDgsNDEuNjY5LDEwLjk0Myw1Ny44NDIsMjUuNDI5YzE4LjY4MiwxNi43MTUsMzAuNDk0LDM5LjY0NCwzMy4yNTUsNjQuNTIybDYuOTQxLDY0Ljc3MSAgbC05OC4zMzctNTIuODA2Yy0wLjczMi0wLjM5My0xLjUxMS0wLjY5My0yLjMxOC0wLjg5NGMtNC44NzMtMS4yMTItMTAuMDIxLTEuMTcxLTE0Ljg4OSwwLjExNSAgYy0wLjc1NCwwLjE5OS0xLjQ4MiwwLjQ4Ni0yLjE2OSwwLjg1NEwxNDcuOTYsNDI0LjI0bDYuOTM4LTY0Ljc0N0MxNjAuMjUzLDMxMS4yNTQsMTk4LjYwMywyNzQuMTExLDI0NiwyNjkuNDg5eiBNMzM2LjI0LDQzMiAgSDE3NS44MTJsNzguNzQ4LTQyLjIyNmMwLjk4Ny0wLjE2LDEuOTk0LTAuMTcxLDIuOTc5LTAuMDM2TDMzNi4yNCw0MzJ6IE00MDAuMTM5LDQ4Ni4xMzlDMzk2LjM1OSw0ODkuOTE4LDM5MS4zMzgsNDkyLDM4Niw0OTJIMTI2ICBjLTExLjAyOCwwLTIwLTguOTcyLTIwLTIwYzAtNS4zMzgsMi4wODItMTAuMzU5LDUuODYxLTE0LjEzOWMzLjc4LTMuNzc5LDguODAxLTUuODYxLDE0LjEzOS01Ljg2MWg5LjkyNmMwLjAyMSwwLDAuMDQyLDAsMC4wNjQsMCAgSDEzNmgyMzkuOTU5YzAuMDExLDAsMC4wMjIsMC4wMDIsMC4wMzIsMC4wMDJTMzc2LjAxLDQ1MiwzNzYuMDIsNDUySDM4NmMxMS4wMjgsMCwyMCw4Ljk3MiwyMCwyMCAgQzQwNiw0NzcuMzM4LDQwMy45MTgsNDgyLjM1OSw0MDAuMTM5LDQ4Ni4xMzl6Ii8+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PC9zdmc+" />'
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

const CoverContent = styled.div`
  ${cover};
  z-index: -1;
  height: 120%;
  background: linear-gradient(#f6fbff, #eef7fe);
  transform: matrix(-1, 0, 0, 1, 0, -124);

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

const ColumnDull = styled.div`
  text-align: center;
  opacity: 0.6;

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
//486px
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
    height: 622px
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

const CardHighlightCross = styled.div`
  float: left;
  position: relative;
  top: 4px;
  width: 18px;
  height: 18px;
  background: ${colors.secondary};
  border-radius: 50%;
  text-align: center;

  svg {
    color: #fff;
    position: relative;
    top: -3px;
    width: 12px;
    height: 11px;
  }

  img {
    width: 12px;
    height: 12px;
    position: relative;
    top: -3px;
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
  width: 50%;
`;

const NodeSpecsDisclaimer = styled.div`
  font-size: 13px;
  opacity: 0.7;
  margin-top: 4px;
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

const CardImgBox = styled.div`
  text-align: center;
  margin-top: 26px;
`

const CardImg = styled.img`
  width: 152px;
`

class Addons extends React.Component {
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
              <Title>Platform Add-ons</Title>
              <Subtitle>
                Tools and services for developing and extending your DApp. Our add-ons 
                helps your DApp achieve next-level of decentralization, customization and 
                automation.
              </Subtitle>
            </InnerWrapper>
          </Wrapper>
        </Hero>
        <Body>
          <CoverContent />
          <Content>
            <ContentTitle>
              Plug and play <span>services</span>
            </ContentTitle>
            <ContentText>
              In various use-cases, a dynamo based private network is not enough to make your dapp 
              completely decentralized. BlockClutser's cloud services marketplace aims to provide 
              you everything you need for your dapp. 
            </ContentText>
            <ContentText>
              Now you can provision, configure and deploy various protocols, apps, services 
              and tools with a click. We automate the build and scalability of your preferred features.
            </ContentText>
          </Content>
          <Row>
            <Column>
              <Card>
                <CardTitle>
                  Hyperion - <span>Store Files</span>
                </CardTitle>
                <CardDescription>
                  Hyperion is IPFS Cluster-as-a-Service. It scales on-demand according to your storage requirements. You 
                  can choose to upload files to a specific geo-graphic location to adhere to regulatory compliances.
                </CardDescription>
                <CardImgBox>
                  <CardImg src={ipfs_img} style={{width: '120px'}} />
                </CardImgBox>
                <CardFooter>
                  <CardHighlight>
                    <CardHighlightCheck
                      dangerouslySetInnerHTML={{ __html: checkSvg }}
                    />
                    <CardHighlightText>
                      It enables you to store and share files with others using just file's unique fingerprint.
                    </CardHighlightText>
                  </CardHighlight>
                  <NodePrice>
                    <NodePriceTitle>Price</NodePriceTitle>
                    <NodePricePerHour>$399/month</NodePricePerHour>
                    <NodePricePerMonth>$0.0273/GB</NodePricePerMonth>
                  </NodePrice>
                  <NodeSpecsDisclaimer>
                    * Bill amount will be either total storage fees or subscription fees depending on whichever is greater
                  </NodeSpecsDisclaimer>
                </CardFooter>
              </Card>
            </Column>
            <Column>
              <Card>
                <CardTitle>
                  Paymeter - <span>Create Wallets</span>
                </CardTitle>
                <CardDescription>
                  It provides APIs for integrating ETH and ERC20 tokens in your dapp. It's uniqueness is that it let's you integrate
                  any ERC20 token wallet and also it provides gas tank to pay for the gas of all ERC20 transfer.
                </CardDescription>
                <CardImgBox>
                  <CardImg src={ethereum_img} />
                </CardImgBox>
                <CardFooter>
                  <CardHighlight>
                    <CardHighlightCheck
                      dangerouslySetInnerHTML={{ __html: checkSvg }}
                    />
                    <CardHighlightText>
                      We only charge for deposits from external wallets. 
                    </CardHighlightText>
                  </CardHighlight>
                  <NodePrice>
                    <NodePriceTitle>Price</NodePriceTitle>
                    <NodePricePerHour>$299/month</NodePricePerHour>
                    <NodePricePerMonth>0.20%/txn</NodePricePerMonth>
                  </NodePrice>
                  <NodeSpecsDisclaimer>
                    * Bill amount will be either total transaction fees or subscription fees depending on whichever is greater
                  </NodeSpecsDisclaimer>
                </CardFooter>
              </Card>
            </Column>
          </Row>
          <Row>
            <ColumnDull>
              <Card>
                <CardTitle>
                  PrivateHive - <span>HL's Fabric</span>
                </CardTitle>
                <CardDescription>
                  PrivateHive allows you to use Hyperledger's Fabric as your choice of blockchain protocol
                  instead of default dynamo protocol. It let's you easily provision channels, kafka based 
                  orderers, peers, membership service and so on.
                </CardDescription>
                <CardImgBox>
                  <CardImg src={hyperledger_img} style={{width: '124px'}} />
                </CardImgBox>
                <CardFooter>
                  <CardHighlight>
                    <CardHighlightCross
                      dangerouslySetInnerHTML={{ __html: waitSvg }}
                    />
                    <CardHighlightText>
                      We support Hyperledger's Fabric version 1.4.0. This plugin is yet to release.
                    </CardHighlightText>
                  </CardHighlight>
                  <NodePrice>
                    <NodePriceTitle>Price</NodePriceTitle>
                    <NodePricePerHour>$299/node</NodePricePerHour>
                    <NodePricePerMonth>$599/orderer</NodePricePerMonth>
                  </NodePrice>
                  <NodeSpecsDisclaimer>
                    * The above amount is charged on per month basics. A node includes 
                    1 peer, 1 anchor peer and 1 membership server. 
                  </NodeSpecsDisclaimer>
                </CardFooter>
              </Card>
            </ColumnDull>
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
                All the addons are supported in the enterprise license also. The
                pricing for each addon varies in enterprise license. 
              </EnterpriseSubtitle>
              <EnterpriseSubtitle>
                You can choose to opt in or out of certain addons according to your needs.
              </EnterpriseSubtitle>
            </EnterpriseContent>
            <CardOnPremises>
              <CardTitle>
                List your <span>tool</span>
              </CardTitle>
              <CardDescription>
                We are looking to partner with various blockchain protocol providers, oracle services and 
                dapps to provide their tools and applications as a service integrated in BlockCluster.
              </CardDescription>
              <CardDescription>
                If you are protocol or tool provider and you wish to see your dapp provided as a service
                in blockcluster then kindly contact us. 
              </CardDescription>
              <CardHighlight>
                <Button component="a" href="/contact" secondary>
                  Contact Us
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

export default Addons;
