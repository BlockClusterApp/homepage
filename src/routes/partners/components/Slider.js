import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAirFreshener } from '@fortawesome/free-solid-svg-icons';
import { colors, uppercase, media } from '../../../styles';
import { clearFix } from 'polished';
import apple from '../assets/apple.png';
import appleLightBrown from '../assets/appleLightBrown.png';
import appleLightBlue from '../assets/appleLightBlue.png';

const Root = styled.section`
  height: 100%;
`;
const SliderHeading = styled.h1`
  font-size: 34px;
  font-weight: 700;
  color: #039ee0;
  margin-top: 250px;
  text-align: center;
  ${media.max768} {
    font-size: 27px;
    margin-top: 60px;
  }
`;
const Bg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90%;
  z-index: -2;
  background: #f6fbff;
  transform: matrix(1, 0.06, 0, 1, 0, -1);

  ${media.max768} {
    margin-top: 200px;
    margin-bottom: 100px;
  }
`;

const Wrap = styled.section`
  width: 820px;
  background: #fff;
  height: 350px;
  margin: 0 auto;
  border-radius: 10px;
  margin-top: 64px;
  margin-bottom: 28px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(51, 72, 97, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  ${clearFix()};
  ${media.max980} {
    width: 640px;
    height: 270px;
  }
  ${media.max768} {
    height: auto;
  }
  ${media.max700} {
    width: 420px;
  }
  ${media.max460} {
    width: 320px;
  }
  ${media.max375} {
    width: 280px;
  }
`;

const WrapLogos = styled.section`
  width: 820px;
  background: transparent;
  margin: 0 auto;
  border-radius: 10px;
  margin-bottom: 100px;
  overflow: hidden;
  ${clearFix()};
  ${media.max980} {
    width: 640px;
    height: 270px;
  }
  ${media.max768} {
    height: auto;
  }
  ${media.max700} {
    width: 420px;
  }
  ${media.max460} {
    width: 320px;
  }
  ${media.max375} {
    width: 280px;
  }
`;

const FontAwesomeIconStyle = styled.p`
  font-size: 32px;
  text-align: left;
  color: #e5e5e5;
  ${media.max700} {
    margin-right: 30px;
  }
`;

const LogoWrapper = styled.div`
  width: 40%;
  display: inline-block;
  height: 100%;
  float: left;
  position: relative;
  z-index: 3;

  ${media.max768} {
    display: block;
    width: 100%;
    float: none;
    background: ${colors.secondary};
    padding: 30px;
  }
`;

const LogoCover = styled.div`
  position: absolute;
  background: ${colors.secondary};
  transform: matrix(1.1, 0, -0.4, 1, -50, 0);
  height: 100%;
  width: 100%;
  z-index: -1;

  ${media.max768} {
    display: none;
  }
`;

const LogoCoverHeader = styled.div`
  padding: 25px;
  background: ${colors.primary};
  ${media.max768} {
    display: none;
  }
`;

const TextWrapper = styled.div`
  width: 60%;
  display: inline-block;
  padding: 80px;
  height: 100%;
  text-align: left;
  float: left;
  ${media.max768} {
    display: block;
    width: 100%;
    float: none;
    padding: 30px;
  }
`;

const ContentLogo = styled.img`
  width: 35%;
  position: absolute;
  left: 26%;
  top: 30%;

  ${media.max768} {
    position: static;
    margin-left: auto;
    margin-right: auto;
    display: inherit;
    width: 80px;
  }
`;

const Quote = styled.q`
  font-style: italic;
`;

const PersonName = styled.div`
  ${uppercase} margin-top: 20px;
  font-weiight: bold;
`;

const PersonDesignation = styled.p``;

const LogoList = styled.div`
  display: block;
  text-align: center;
`;

const Logo = styled.img`
  width: 8%;
  margin-left: 20px;
  margin-right: 20px;

  ${media.max700} {
    width: 12%;
    margin-left: 8px;
    margin-right: 8px;
  }
`;

// <LeftArrow></LeftArrow>
// <RightArrow></RightArrow>
class Slider extends React.Component {
  render() {
    return (
      <Root>
        <Bg />
        <SliderHeading>
          Partner Sucess<span style={{ color: '#025faa' }}> Stories</span>
        </SliderHeading>
        <Wrap>
          <LogoWrapper>
            <LogoCover>
              <LogoCoverHeader />
            </LogoCover>
            <ContentLogo src={apple} />
          </LogoWrapper>
          <TextWrapper>
            <Quote>
              &nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Morbi ac odio eu est suscipit hendrerit quis porta nisi. Proin
              nisl dui, blandit blandit tortor ac, imperdiet bibendum massa.
              Nulla ut nisi sed purus ultricies porttitor sollicitudin eget
              nisi.&nbsp;
            </Quote>
            <PersonName>Narayan Prusty</PersonName>
            <PersonDesignation>Founder, CTO</PersonDesignation>
          </TextWrapper>
          ̵{' '}
        </Wrap>
        <WrapLogos>
          <LogoList>
            <Logo src={appleLightBlue} />
            <Logo src={appleLightBrown} />
            <Logo src={appleLightBrown} />
            <Logo src={appleLightBrown} />
            <Logo src={appleLightBrown} />
          </LogoList>
        </WrapLogos>
      </Root>
    );
  }
}

export default Slider;
