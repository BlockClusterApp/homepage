import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAirFreshener } from '@fortawesome/free-solid-svg-icons';
import { media } from '../../../styles';

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
  margin-top:64px;
  margin-bottom: 100px;
  overflow: hidden;
   box-shadow: 0 15px 35px rgba(51, 72, 97, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);

  ${media.max980} {
    width: 640px;
    height: 270px;
  }
  ${media.max768} {
    height: 260px;
  ${media.max700}{
    width: 420px;
    height: 200px
  }
  ${media.max460}{
    width: 320px;
    height: 200px
  }
  ${media.max375}{
    width: 280px;
    height: 200px
  }
`;
const LogoWrapper = styled.div`
  margin: 0 auto;
  width: 600px;
  padding-top: 23px;
  ${media.max980} {
    padding-top: 0;
  }
  ${media.max768} {
    padding-top: 10px;
  }
  ${media.max700} {
    padding-top: 0px;
  }
`;
const Logo = styled.div`
  background: #fff;
  height: 305px;
  width: 500px;
  display: inline-block;
  margin-right: 30px;
  padding: 30px;

  ${media.max980} {
    height: 120px;
    padding: 10px;
  }
  ${media.max700} {
    height: 120px;
    padding: 20px;
    display: flex;
    width: 400px;
  }
  ${media.max460} {
    height: 120px;
    padding: 20px;
    display: flex;
    width: 400px;
  }
`;

const slide = keyframes`
  from{
      transform: translateX(40%);
  }
  to {
      transform: translateX(-380%);
  }
`;

const Move = styled.div`
  display: flex;
  margin: 0 auto;
  animation: ${slide} 10s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
  &:focus {
    animation-play-state: paused;
`;

const FontAwesomeIconStyle = styled.p`
  font-size: 32px;
  text-align: left;
  color: #e5e5e5;
  ${media.max700} {
    margin-right: 30px;
  }
`;
const PartnerTitle = styled.h3`
'Source Sans Pro','Helvetica Neue',Helvetica,Arial,sans-serif;
 font-size: 34px;
 font-weight: 600;
 width: 250px;
 ${media.max980}{
   font-size: 18px;
 }
 ${media.max700}{
   display:none;
 }
`;
const ParterTestimonial = styled.p`
  width: 460px;
  color: #585f64;
`;

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
            <Move>
              <Logo>
                <PartnerTitle>Company 1</PartnerTitle>
                <FontAwesomeIconStyle>
                  <FontAwesomeIcon icon={faAirFreshener} />
                </FontAwesomeIconStyle>
                <ParterTestimonial>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  sem velit, placerat ac ex auctor, tincidunt pretium metus.
                  Nulla auctor diam eget consequat vulputate.
                  <br />
                  KIM LEE<br />
                  COO
                </ParterTestimonial>
              </Logo>
              <Logo>
                <PartnerTitle>Company 2</PartnerTitle>
                <FontAwesomeIconStyle>
                  <FontAwesomeIcon icon={faAirFreshener} />
                </FontAwesomeIconStyle>
                <ParterTestimonial>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  sem velit, placerat ac ex auctor, tincidunt pretium metus.
                  Nulla auctor diam eget consequat vulputate.
                  <br />
                  KIM LEE<br />
                  COO
                </ParterTestimonial>
              </Logo>
              <Logo>
                <PartnerTitle>Company 3</PartnerTitle>
                <FontAwesomeIconStyle>
                  <FontAwesomeIcon icon={faAirFreshener} />
                </FontAwesomeIconStyle>
                <ParterTestimonial>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  sem velit, placerat ac ex auctor, tincidunt pretium metus.
                  Nulla auctor diam eget consequat vulputate.
                  <br />
                  KIM LEE<br />
                  COO
                </ParterTestimonial>
              </Logo>
              <Logo>
                <PartnerTitle>Company 4</PartnerTitle>
                <FontAwesomeIconStyle>
                  <FontAwesomeIcon icon={faAirFreshener} />
                </FontAwesomeIconStyle>
                <ParterTestimonial>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  sem velit, placerat ac ex auctor, tincidunt pretium metus.
                  Nulla auctor diam eget consequat vulputate.
                  <br />
                  <br />
                  <span style={{ color: '#025faa', fontWeight: 700 }}>
                    KIM LEE CEO
                  </span>
                  <br />
                  The Solar Company
                </ParterTestimonial>
              </Logo>
              <Logo>
                <PartnerTitle>Company 5</PartnerTitle>
                <FontAwesomeIconStyle>
                  <FontAwesomeIcon icon={faAirFreshener} />
                </FontAwesomeIconStyle>
                <ParterTestimonial>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  sem velit, placerat ac ex auctor, tincidunt pretium metus.
                  Nulla auctor diam eget consequat vulputate.
                  <br />
                  <br />
                  <span style={{ color: '#025faa', fontWeight: 700 }}>
                    KIM LEE CEO
                  </span>
                  <br />
                  The Solar Company
                </ParterTestimonial>
              </Logo>
            </Move>
          </LogoWrapper>
        </Wrap>
      </Root>
    );
  }
}

export default Slider;
